---
layout: default
title: "Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s"
date: 2026-10-04T12:51:53Z
slug: 2026-10-05-run-qwen-3-8-flash-next-125b-on-consumer-hardware-rtx-4090-at-100t-s
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLM, Quantization, Consumer Hardware, AI, Performance"
---

# Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s

**链接**: https://github.com/Niko1221/Strata

**作者**: snehesht

**发布时间**: 2026-10-04T12:51:53Z

**采集日期**: 2026-10-05


## AI 摘要

Running a large language model (125B) at 100T/s on consumer hardware using Flash Next.

## AI 评价

The content is highly relevant and technically significant, with insightful community comments discussing performance and quality. The engagement signals indicate substantial community interest.


## 原文内容


--- Top Comments ---

[a11r]: I&#x27;m a little skeptical of going below 4-bit quants due to the potential for significant degradation in quality. I&#x27;m running 4-bit quants on an RTX Pro 6000 rented for approximately $1&#x2F;hour and getting about 1.2 million tokens out and 40 million tokens in per hour with caching. The quality of 4-bit quant is good enough for difficult but well-scoped coding tasks. Here is the inference stack I am using:  https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;BlackwellPerformance&#x2F;s&#x2F...

[Jackson__]: I&#x27;ve just tested Strata on a simple 50 image vision benchmark. The task is to output the exact coordinates of a requested object. The result via Strata had a median error distance of 154.8 pixels, avg of 168.8. Running the exact same GGUF and vision adapter weights on llama.cpp gives me a median error of 46.5, avg 81.4. To put that into perspective, here are some more numbers from other models via llama.cpp: Median&#x2F;Average Qwen 3.5 9B BF16: 46.5 &#x2F; 193.3 Qwen 3.6 35B Q4 K XL: 38...

[ipvolt]: Tested. Works well!

[snehesht]: I tried it and it worked surprisingly well. On my machine (Nvidia 4090, 128GB DDR5, Ryzen 7950x3d) I&#x27;m getting 124 tokens per sec, thought to share it here.  https:&#x2F;&#x2F;huggingface.co&#x2F;Qwen&#x2F;Qwen3.8-Flash-Next

[cjdell]: This is game changing. My R9700 32GB is now smarter and about 2x faster than using Qwen-3.8-27B. About 60 t&#x2F;s when combined with my 96GB of DDR4. My motherboard limits me to PCIe Gen3 so that is likely a bottleneck. For the Nix inclined:
 https:&#x2F;&#x2F;github.com&#x2F;cjdell&#x2F;nixos-config&#x2F;blob&#x2F;main&#x2F;hosts&#x2F;zen3-...  Even got it running on the iGPU of a GMKTec M6 Ryzen 6600H at reasonable speed (10 t&#x2F;s). Fast enough to leave it with a prompt before I go to b...