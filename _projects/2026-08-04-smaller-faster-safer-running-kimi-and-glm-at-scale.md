---
layout: default
title: "Smaller, faster, safer: running Kimi and GLM at scale"
date: 2026-08-03T17:08:46Z
slug: 2026-08-04-smaller-faster-safer-running-kimi-and-glm-at-scale
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, Cloudflare, Quantization, AI Efficiency, Model Serving"
---

# Smaller, faster, safer: running Kimi and GLM at scale

**链接**: https://blog.cloudflare.com/smaller-faster-safer-models/

**作者**: ascorbic

**发布时间**: 2026-08-03T17:08:46Z

**采集日期**: 2026-08-04


## AI 摘要

Cloudflare introduces improvements in running Kimi and GLM models more efficiently, focusing on size, speed, and safety.

## AI 评价

The content discusses significant advancements in running large language models (LLMs) more efficiently, which is highly relevant to the field. The community discussion is insightful, with comments on technical aspects like quantization and potential privacy concerns, indicating high value.


## 原文内容


--- Top Comments ---

[scrlk]: Nice to see a provider being transparent about KV cache quantisation. I&#x27;ve been suspecting that some providers do this silently whilst heavily promoting their unquantised weights, even though KV quantisation can degrade quality more than weight quantisation. However, I wish their testing were more detailed. Firstly, some model families are more sensitive to KV quantisation than others (only Kimi K2.6 was tested). Secondly, the evaluation suite they use to claim that  FP8 KV quantisation ...

[HDBaseT]: I think Cloudflare not providing ZDR on their inference is the biggest public indicator that Cloudlare glows. We let all traffic get MITM&#x27;d, now we&#x27;re letting our AI conversation get tracked. Cloudflare reeks like a US Honeypot.

[syntaxing]: &gt; View pricing in the Cloudflare dashboard ↗ Why… I wanted to see if it’s worth it to use cloudflare’s endpoint but I can’t even see the pricing

[vietvu]: Thanks for the transpiration but this is too shallow when talking about LLM serving.

[om8]: Why int4? There are a lot of superior 4 bit formats like nf4 from bitsandbytes.