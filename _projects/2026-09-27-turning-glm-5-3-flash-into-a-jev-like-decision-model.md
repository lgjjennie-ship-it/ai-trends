---
layout: default
title: "Turning GLM-5.3-Flash into a Jev-like decision model"
date: 2026-09-26T15:49:04Z
slug: 2026-09-27-turning-glm-5-3-flash-into-a-jev-like-decision-model
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, decision models, AI research, prompt engineering, GLM-5.3-Flash"
---

# Turning GLM-5.3-Flash into a Jev-like decision model

**链接**: https://www.privatemode.ai/blog/system-one-from-glm-flash

**作者**: flxflx

**发布时间**: 2026-09-26T15:49:04Z

**采集日期**: 2026-09-27


## AI 摘要

A method to transform GLM-5.3-Flash into a Jev-like decision model using input prompt crafting is detailed, showing competitive performance with Jev in accuracy and speed.

## AI 评价

The content presents a novel approach to converting LLMs into decision models with Jev-like properties, which is highly relevant and technically interesting. The community discussion is insightful and diverse, validating the importance of the topic.


## 原文内容

We found an approach to get Jev-like properties from standard LLMs like GLM-5.3-Flash.<p>The core idea is to craft the input prompt so that the first output token answers the question. This makes it possible to get a decision with a single forward pass.<p>In the blog post, we describe the approach in detail for GLM-5.3-Flash and vLLM. We benchmark this setup against Jev and Laya. We find that our setup is on-par with Jev in terms of accuracy and speed and that it substantially outperforms Laya.<p>Still, in terms of costs per decision, Jev is several x better than our setup. In turn, our setup supports vision inputs.


--- Top Comments ---

[ricardobeat]: Everyone is doing this to emulate Jev, but... I took a random book excerpt with 23,000 words (±30k input tokens) and used it as context. Jev still responds in 800ms, sometimes 500ms. That&#x27;s in the neighbourhood of 20-50,000 tok&#x2F;s prefill, which is obviously not possible with normal LLMs, not even Cerebras is this fast.

[ArtRichards]: I personally love Privatemode&#x27;s approach.  Having Jev-like speed for confidential ai use cases is a huge enabler.

[walrus01]: You can turn any sufficiently smart LLM into yes&#x2F;no decision model or equivalent. I already have an existing workflow with a two paragraph detailed prompt, that sends pages of stuff to an LLM and asks it to return only 7 JSON objects. Several of those objects are binary &quot;yes or no&quot; choices of like, whether the content contains certain things. You can even do it with small not particularly hard to host local LLMs like a variant of Qwen 3.6 35B A3B or 3.8 27B.

[prjkt]: how is Jev cheaper if I can run locally. 0.5% prefill, 0.1% decode, 99.4% cached, latency is &lt;20ms

[m4y0u]: My question is why not use Jev instead? It&#x27;s faster and cheaper.