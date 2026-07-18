---
layout: default
title: "Kimi K3, and what we can still learn from the pelican benchmark"
date: 2026-07-17T14:21:51Z
slug: 2026-07-18-kimi-k3-and-what-we-can-still-learn-from-the-pelican-benchmark
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, MachineLearning, Benchmarking, KimiK3, PelicanBenchmark"
---

# Kimi K3, and what we can still learn from the pelican benchmark

**链接**: https://simonwillison.net/2026/Jul/16/kimi-k3/

**作者**: droidjj

**发布时间**: 2026-07-17T14:21:51Z

**采集日期**: 2026-07-18


## AI 摘要

The article explores Kimi K3 and insights from the pelican benchmark on AI model capabilities and limitations.

## AI 评价

The content discusses Kimi K3, a significant AI model, and the pelican benchmark, which is valuable for understanding AI capabilities and limitations. The discussion quality is high with insightful comments on token counting, model limitations, and potential improvements, indicating community engagement and validation.


## 原文内容


--- Top Comments ---

[OsrsNeedsf2P]: It&#x27;s incredible Simon still believes pelicans on bikes aren&#x27;t part of the training set, despite hundreds of them on blogs, forums, and Github. Stuff we put in our company blog shows up known by LLMs 6 months later, and we have 1000x less traffic than Simon&#x27;s own website

[devttyeu]: &gt; How does the prompt “Generate an SVG of a pelican riding a bicycle” add up to 95 input tokens? OpenAI’s tokenizer counts 10, Anthropic’s counts 10 for Opus 4.6, 30 for Opus 4.7 and 25 for Sonnet 5&#x2F;Fable 5. Prompting “hi” to Kimi K3 counted 86 tokens, suggesting there may be an 85 token hidden system prompt. It refused to leak it though. This is quite possibly reasoning-effort prompt which is injected before the opening &lt;think&gt; token whenever you set a custom reasoning effort, ...

[btown]: &gt; The biggest limitation of the pelican is that it doesn’t touch at all on the thing that matters most for today’s model: agentic tool calling and the ability to operate tools reliably as conversations grow in length. In all seriousness, I propose SWE-bench-adversarial-pelican-gen: it&#x27;s like SWE-bench, but the harness gets interrupted every 5 turns&#x2F;tool-calls and is asked to produce an SVG of an arbitrary animal before being told to continue, and every few tool call outputs add c...

[michaelbuckbee]: Like Simon concludes the article, the main use of this isn&#x27;t to say which model is &quot;better&quot;, but to try and poke at the model to sort out things like quality vs cost vs speed. So I put together a quick comparison of the last couple iterations of Opus, Fable and now Kimi. Kimi is cheapest by 5x but also slowest by 2x  https:&#x2F;&#x2F;9gpyw4uxr2.evvl.io&#x2F;

[yashchimata]: One thing i keep thinking: you only run the pelican once per model. Run the same model a few times and you get some different pelicans, so some of &quot;this one is better&quot; might just be which run you picked for it. Would love to see 8 runs per model side by side. I bet for two close models, the gap between runs is about as big as the gap between the models.