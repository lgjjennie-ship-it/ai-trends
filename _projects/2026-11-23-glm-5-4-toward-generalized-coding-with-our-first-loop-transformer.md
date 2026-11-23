---
layout: default
title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer"
date: 2026-11-23T10:06:43Z
slug: 2026-11-23-glm-5-4-toward-generalized-coding-with-our-first-loop-transformer
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, loop transformers, AI research, inference optimization, GLM-5.4"
---

# GLM-5.4: Toward Generalized Coding with Our First Loop Transformer

**链接**: https://z.ai/blog/glm-5.4

**作者**: foohis

**发布时间**: 2026-11-23T10:06:43Z

**采集日期**: 2026-11-23


## AI 摘要

GLM-5.4 introduces loop transformers to optimize LLM inference by reducing memory bandwidth bottlenecks.

## AI 评价

The content discusses a significant development in LLMs with loop transformers, which addresses a major bottleneck in inference. The community comments provide insightful discussions on the technical implications and comparisons with other models, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[HarHarVeryFunny]: I love the transparency, or at least given technical details, that Ziphu provide - a refreshing change from the locked-down approach of the western companies, and an interesting glimpse into the direction of SOTA LLMs. Looped Transformers are an obvious direction even if there are still problems to be worked out. The original Transformer is a bit like an unrolled for loop, and rather unnaturally pairs different sets of weights, both for attention and feed forward (knowledge) with different &q...

[aurareturn]: For those wondering what loop transformers are: LLMs have layers of data, called weights. During inference, each layer gets computed once. Moving weights from HBM memory to the chip is a major bottleneck because to generate a token, you need to move an entire layer into the chip, compute once, move it out, move the next layer in. Hence, memory bandwidth has been the #1 bottleneck for inference. A loop transformer optimizes this bottleneck. Instead of one layer being computed once, it will com...

[lnenad]: It&#x27;s becoming reaally hard using chinese models with their &quot;marathon thinking&quot; sessions. It&#x27;s not a problem when dealing with more complex stuff but constantly second guessing themselves even when working with the simplest of things (conceptually) is very annoying and time to completion is dramatically higher compared to frontier unless you&#x27;re dealing with ridiculus tps performance. I assume it&#x27;s how they get close in benchmarks but the difference is staggering w...

[ksec]: I am wondering why the lack of benchmarks and launch blog post etc. But to me the biggest announcement isn&#x27;t GLM 5.4 but what they said in the end. &gt;  GLM-5.4 validates computational depth, and our next, significantly larger model will carry forward everything we learned here. It will be ready soon.  GLM 5.4 feels more like a preview of GLM5.5 coming soon. I would assume with much higher parameters.

[lewdwig]: “Generalized coding” working effectively beyond domains that would not be traditionally attacked by code to me feels like models working around the limitations of harnesses and the context window. 
If they externalise their reasoning as code, it will survive compaction and context decay by becoming a durable artifact. It’s cool that models can do this, but I think it also shows harnesses still have significant weaknesses around long term memory and context, necessitating models use what is es...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTE1UMVVkZGhCWHNLVzhPNjBka2dhVzBWcGdIT3F2Q0lkdmR2bEhzeU9OT3ZWOEJBQUh4dDNLVjJVRDhMTllTczJoWFVDSWhWdFp3cmJjTC1pSDQ3bEZrbmVrMlVUZk1RZw?oc=5" target="_blank">智谱发布GLM-5.4，瞄准泛AI编程领域</a>&nbsp;&nbsp;<font color="#6f6f6f">东方财富网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYkFVX3lxTE0zN3ktYUp5a3ZGaGhiQ1I2WlZ6RVh2WTdyZEhpR2VuNHpldVdpbC1Ia0dPUnhLQ0xyTUdPWjcxTk5yYkwtV2U4Uk5wRjhOVDh4aWxPZERscWxGQ21QT3B4RXJR?oc=5" target="_blank">智谱AI发布GLM-5.4 首用Loop架构并向全量用户开放</a>&nbsp;&nbsp;<font color="#6f6f6f">观点网</font>