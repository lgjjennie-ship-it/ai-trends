---
layout: default
title: "From the creator of Redis; run LLM locally with ds4"
date: 2026-10-02T18:01:16Z
slug: 2026-10-03-from-the-creator-of-redis-run-llm-locally-with-ds4
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, local computing, ds4, Redis, community engagement"
---

# From the creator of Redis; run LLM locally with ds4

**链接**: https://dwarfstar.sh/

**作者**: fibo

**发布时间**: 2026-10-02T18:01:16Z

**采集日期**: 2026-10-03


## AI 摘要

The creator of Redis introduces ds4, a tool for running LLMs locally, with community discussions on performance and compatibility.

## AI 评价

The content discusses a significant development in running large language models (LLMs) locally using ds4, with insightful community comments on technical aspects and potential use cases. The engagement and discussion quality are high.


## 原文内容


--- Top Comments ---

[TheqO]: Metal, the primary target, on Macs with 96 GB or more. Smaller machines can use SSD streaming. SSD streaming is also needed in order to run very large models such as full GLM 5.x (not Flash) on 128GB systems
  
Anyone tested token speeds at less than 96gb RAM on apple?

[neomantra]: I maintain a fork of ds4 as shared libraries and thus can be used with other languages via FFI, along with public builds&#x2F;binaries [1].  I made ds4go [2] against  ds4 using techniques inspired by yzma. In addition to the library bindings, we have a small library of tools (workspace for view&#x2F;edit, scratchpad for persistence) and making your own is registering a Go function.   And in recent weeks, I added the Vision and Qwen support, as ds4 added them. Even if you don&#x27;t use the Go...

[twoodfin]: https:&#x2F;&#x2F;github.com&#x2F;antirez&#x2F;ds4  The project GitHub page is a much better introduction for the hn crowd.

[simoiacos]: Nothing comparable but inspired from DwarfStar I wrote a little inference engine for Intel Xe-LP (no XMX) 32GB laptops. The only model supported right now is a quantized Gemma-4, but I don&#x27;t exclude in the future to support other MoE of similar size. Too bad we have no Qwen 3.8 35B-A3B yet. I&#x27;m also looking into expanding the protocol and the engine to support various steering techniques.  https:&#x2F;&#x2F;github.com&#x2F;simoneiacomino&#x2F;xenolith

[ttoinou]: Ive been using this since it was initially released with deepseek v4 flash, and it is absolutely the best launcher ever on my m5 max 128gb Now Ive been running qwen 3.8 flash next for more than a week and it’s doing great, really fast and super long context windows. Sometimes the model is behaving stupidly by not remembering something I said earlier but it could be also a problem from the agentic AI harness. Im using oh my pi but Im wondering what people are using ds4 with here ?