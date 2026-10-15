---
layout: default
title: "LFM2.5-24B-A2B: Built for fast on-device agents"
date: 2026-10-14T23:59:37Z
slug: 2026-10-15-lfm2-5-24b-a2b-built-for-fast-on-device-agents
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, on-device, performance, machine-learning, model-optimization"
---

# LFM2.5-24B-A2B: Built for fast on-device agents

**链接**: https://www.liquid.ai/blog/lfm2-5-24b-a2b

**作者**: gmays

**发布时间**: 2026-10-14T23:59:37Z

**采集日期**: 2026-10-15


## AI 摘要

A new AI model, LFM2.5-24B-A2B, is introduced for fast on-device operations with notable performance improvements over comparable models.

## AI 评价

The content discusses a significant technical development in on-device AI models, showing impressive performance improvements. The community comments provide insightful discussions on the model's efficiency, benchmarks, and practical implications, enhancing the content's value.


## 原文内容


--- Top Comments ---

[sebmellen]: &gt;  it runs up to 1.7× faster than comparable MoEs on-device, with 184 tokens&#x2F;s on an Apple M5 Max and up to 21K output tokens&#x2F;s on a single NVIDIA B300 GPU  Wow, those are seriously impressive numbers for how intelligent this model seems to be! One thing that this article doesn&#x27;t clarify, and that I guess I really should look into, is what exactly AutomationBench tests for as compared to other benchmarks. The standout performance on AutomationBench is interesting to see, but...

[ghotli]: Maybe someone knows what order of cost a release like this requires in real terms of hardware and energy spend? The cost over the diff from the moment of beginning training to the end. It&#x27;s iterative from a prior model so it starts there and becomes this release after spending occurs I presume. For example, is liquid spending millions in energy in this case and the cost is amortized over successive training runs over the initial datacenter spend? What if it&#x27;s just eating cloud costs...

[MatthiasPortzel]: Very cool. I’ve been on Gemma 4 12B because of my limited RAM. There’s already an Unsloth quantization of this model so I’m downloading that and will check its performance in the morning. Someone else in this thread recommended Ternary-Bonsai-27B, which I’ll also try. Just also wanted to note that this model has a questionably-enforceable non-commercial use clause in its license. I really wish they had consulted with an IP lawyer, it’s very confusing.

[2001zhaozhao]: This seems like a big deal, no? If Qwen had released a Qwen3.8 MoE of similar size, with a naive extrapolation its capabilities would roughly be similar to this model. So basically someone has caught up to Qwen (albeit Qwen from 1-2 months ago) in parameter efficiency.

[blinkingled]: I asked it to implement the simplest todo in ghostty codebase and it failed badly - kept going in circles fixing one compile error and introducing another. Qwen 3.8 was slower (40 tok&#x2F;s compared to 75) but did get it done.