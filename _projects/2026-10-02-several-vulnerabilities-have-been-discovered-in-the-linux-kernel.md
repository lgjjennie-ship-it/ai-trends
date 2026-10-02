---
layout: default
title: "Several vulnerabilities have been discovered in the Linux kernel"
date: 2026-10-01T23:10:44Z
slug: 2026-10-02-several-vulnerabilities-have-been-discovered-in-the-linux-kernel
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Linux kernel, security vulnerabilities, CVEs, AI in security, system infrastructure"
---

# Several vulnerabilities have been discovered in the Linux kernel

**链接**: https://lwn.net/Articles/1097401/

**作者**: luispa

**发布时间**: 2026-10-01T23:10:44Z

**采集日期**: 2026-10-02


## AI 摘要

Several vulnerabilities have been discovered in the Linux kernel, prompting discussions on CVEs, AI's impact on security, and the future of vulnerability discovery.

## AI 评价

The content discusses significant vulnerabilities in the Linux kernel, which is highly important for system security. The community comments provide insightful perspectives on CVEs, AI's role in exposing infrastructure fragility, and AI-assisted security research, enhancing the content's value.


## 原文内容


--- Top Comments ---

[john_strinlai]: note that _any_ bugfix is assigned a cve, which makes for big numbers. &gt; “Due to the layer at which the Linux kernel is in a system, almost any bug might be exploitable to compromise the security of the kernel… Because of this, the CVE assignment team is overly cautious and assign CVE numbers to any bugfix that they identify.”   https:&#x2F;&#x2F;docs.kernel.org&#x2F;process&#x2F;cve.html  &quot;number of cves&quot; is a useless metric, especially when it comes to the kernel.

[intrepidsoldier]: Just the beginning. AI is going to expose how fragile the entire computing infrastructure in our world is.

[kalessin]: I thought the &quot;Security in the LLM age&quot; talk by Greg Kroah-Hartman published this week from Kernel Recipes was pretty interesting:  https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=NnV_cWeoo5Q

[rvz]: So as I was saying... [0]  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49918249

[romaniitedomum]: An interesting observation that I encountered somewhere, I forget where, is that AIs when writing code introduce vulnerabilities at a rate similar to humans writing the same code. So we&#x27;re looking at a massively accelerated volume of security vulnerabilities for the foreseeable future thanks to AI-assisted security research, and we can expect no reduction in new vulnerabilities from the AIs writing the code.

--- From hackernews ---

--- Top Comments ---

[manlymuppet]: Am I hearing this right, that they made a decision model based on Typesafe&#x27;s new paradigm, and actually made a model  better  than Jev based on Typesafe&#x27;s own ranking? And it&#x27;s only been a few weeks.

[buildbuildbuild]: Open weights, not open source. The weights have permissive licensing, but the data and training pipeline are not published to reproduce them from their proprietary Qwen starting points. Weights are not &quot;source.&quot;

[vulture916]: Jev = $0.042&#x2F;m input, output free
Clef = $0.24&#x2F;m input, no output price listed At 300 tokens per call, you&#x27;d get: One million decisions on Jev cost about $12.60.
One million decisions on Clef cost about $72. Would probably make sense to self-host Clef, if you have the capability&#x2F;resources. If not...

[agrippanux]: I&#x27;m a big fan of Cloudflare products. I recently stuck Jev in front of a Cloudflare-hosted Ollama model for chat&#x2F;username moderation, so I was excited to test out Clef.  The setup is user send a message -&gt; Jev does first pass to see if it&#x27;s toxic&#x2F;hate speech&#x2F;profane, if Jev is unsure then Ollama on Workers AI takes a deeper look. Clef was 2-3x slower and worse (it caught less hate speech) than Jev.  Overall disappointing.

[ricardobeat]: In my experiments decider-4B performs better than Kev with significantly lower latency. It&#x27;s remarkably good for it&#x27;s size, shame it wasn&#x27;t included in the benchmarks. Laya on the other hand shouldn&#x27;t even be featured - despite being &#x27;the original&#x27; decision model, it can only do simple text classification and is nowhere near usable performance for anything else.