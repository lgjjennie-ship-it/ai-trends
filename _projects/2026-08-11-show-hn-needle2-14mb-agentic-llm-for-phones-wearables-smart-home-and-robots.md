---
layout: default
title: "Show HN: Needle2: 14MB agentic LLM for phones, wearables, smart home and robots"
date: 2026-08-10T17:22:07Z
slug: 2026-08-11-show-hn-needle2-14mb-agentic-llm-for-phones-wearables-smart-home-and-robots
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLM, AI, Edge Computing"
---

# Show HN: Needle2: 14MB agentic LLM for phones, wearables, smart home and robots

**链接**: https://cactuscompute.com/needle

**作者**: HenryNdubuaku

**发布时间**: 2026-08-10T17:22:07Z

**采集日期**: 2026-08-11


## AI 摘要

A new version of the Cactus Needle LLM, a 14MB agentic model designed for phones, wearables, and smart home devices, is announced with improved performance and community feedback integration.

## AI 评价

The content is highly relevant to the field of AI/ML and software engineering, particularly for the development of compact, efficient models for edge devices. The community discussion is insightful and adds value with diverse viewpoints on the potential and limitations of micro-LLMs.


## 原文内容

Hey HN,<p>Henry from Cactus here!<p>We previously released Cactus Needle, a 14MB agentic LLM for tool call, device use, and structured extraction for phones, wearables, smart homes, small robots and microcontrollers. We got really great feedback here, and have now incorporated the suggestions to release Needle 2.<p>The whole model is a single 14MB binary that runs a full session in 28MB of RAM; 45m parameters at 2bit compression. Needle hits 500 tokens&#x2F;sec decode speed on a Raspberry Pi 5, sits between 400-1,500 tokens&#x2F;sec on VR devices like Meta Quest 3S and Apple Vision Pro, and ranges 300-700 on sub-$200 phones such as the Samsung A-Series.<p>On the tool call and mobile device use benchmarks, Needle 2 trades wins with closest small models like LFM2.5 230M and Apple Foundation Model, at 5x to 70x smaller, both at f16 vs Needle 2 at 2bit. Needle is based on Simple Attention Networks from our paper (<a href="https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2607.18363" rel="nofollow">https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2607.18363</a>).<p>Edge AI has lately meant Macs and PCs, but that is just 1.5 billion of over 21 billion connected IoT devices in the world today, and in emerging markets most phones ship under $200, no NPU, cheap GPUs. These include budget phones, Raspberry Pis, microcontrollers, wearables, small robots like Reachy Mini, and connected home devices.<p>A conventional transformer of Needle&#x27;s width and depth spends 164 MFLOPs per token, and even one squeezed down to Needle&#x27;s parameter count spends 87, Needle spends 70. Even on a high-end phone, an always-on assistant lives inside a power budget; every MFLOP is milliwatt-hours, and Needle spends 7x to 85x fewer of them per token than the smallest performant LLMs. More about the architecture in the link.<p>When we structure intelligence for consumer devices as functions with typed parameters, the only hard part is mapping a messy sentence onto them; which function, with which values. Our research found that when framed that way, the problem needs no world knowledge and no open-ended prose, which is why 45M parameters suffice.<p>Needle 2 expands to structured extraction where the schema can be passed in-place of tools and the model returns structured output. You can use Needle as a text-classification model with an enum field, as a summarization model by providing a schema that extracts key fields, everything but free-range decode.<p>Every product has its own tool vocabulary and fine-tuning needle helps it achieve frontier-level performance on custom tasks, so using the python package (<a href="https:&#x2F;&#x2F;github.com&#x2F;cactus-compute&#x2F;needle" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;cactus-compute&#x2F;needle</a>), Needle can be fine-tuned Needle on a Mac&#x2F;PC in minutes to a few hours, with automated data-generation pipeline, just pass a couple samples.<p>Nonetheless, every response carries a learned confidence score based our Cactus Hybrid technique. If above your threshold, act, below it, escalate to the cloud or bigger model. Combining Needle 2 with a private DeepSeek-v4-Flash deployment works particularly well for enterprise-level tasks at barely any cost, we can help with this setup.<p>We have put a lot of thoughts into Needle 2 but might still be missing quite a lot, please use the playground in the provided link to test Needle and share your thoughts, always appreciated!


--- Top Comments ---

[nater5000]: This is cool. I definitely think the &quot;micro&quot; sized LLM space is underappreciated, so it&#x27;s always good to see work like this. I foresee a paradigm in some contexts where you have a hierarchy of LLMs, with more competent models actively training smaller models to solve specific tasks very efficiently, and something like this could be the smallest layer in that stack. With that being said, the web demo is not particularly impressive. It really doesn&#x27;t like anything I throw at...

[Tiberium]: Funny result from the web demo. I&#x27;m well aware that it&#x27;s an extremely small and, well, stupid, model, but even so: Query: HN Result: {
  &quot;function_calls&quot;: [
    {
      &quot;name&quot;: &quot;lock_door&quot;,
      &quot;arguments&quot;: {
        &quot;door&quot;: &quot;front door&quot;
      }
    }
  ],
  &quot;reasoning&quot;: &quot;User wants to lock the door. No specific door mentioned, so use &#x27;front door&#x27; as default.&quot;,
  &quot;confidence&quot;: 0
} I...

[kooi]: Its pretty significant you&#x27;ve got this working locally in wasm. Very cool. Re: robotics: I&#x27;m unsure how this could be helpful. It fails a pretty simple navigation prompt. X0: (0.0, 0.0). Object bounding box: [1.0, 1.0, 2.0, 2.0]. navigate to (3.0,3.0) I changed it to &quot;call path planner to navigate: a_star(x0, xf, obs)&quot; Another fail. My intuition tells me micro llms will&#x2F;are important for robotics. I just can&#x27;t grok it. Can someone without control theory experienc...

[dbeardsl]: My first query: &gt; Make it a little warmer in here. The reply: &gt;      &quot;name&quot;: &quot;set_thermostat&quot;,
&gt;      &quot;arguments&quot;: {
&gt;        &quot;temperature&quot;: 65,
&gt;        &quot;mode&quot;: &quot;cool&quot;,
&gt; ...
&gt;   &quot;reasoning&quot;: &quot;&#x27;warmer&#x27; implies need for cooling; set_thermostat with temperature 65 (typical warmth) and mode &#x27;cool&#x27;.&quot;, Maybe I&#x27;m doing it wrong?

[arthuqa]: That&#x27;s really cool - I was already thinking of compressing `functiongemma-270m-it` down to 1-2 bits so it would work flawlessly in the browser.
Your `Fine-tuning` feature is even much more convenient.