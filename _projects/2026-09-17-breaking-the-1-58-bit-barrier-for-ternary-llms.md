---
layout: default
title: "Breaking the 1.58-bit Barrier for Ternary LLMs"
date: 2026-09-16T20:59:24Z
slug: 2026-09-17-breaking-the-1-58-bit-barrier-for-ternary-llms
source: hackernews
category: ai-community
ai_score: 8.0
tags: "ternary-LLMs, quantization, AI-efficiency, hardware-optimization"
---

# Breaking the 1.58-bit Barrier for Ternary LLMs

**链接**: https://arxiv.org/abs/2609.16338

**作者**: matt_d

**发布时间**: 2026-09-16T20:59:24Z

**采集日期**: 2026-09-17


## AI 摘要

A new method, BITCOS, reduces the bit barrier for ternary LLMs, improving efficiency and potential for hardware integration.

## AI 评价

The content discusses a significant breakthrough in ternary LLMs, reducing the bit barrier from 1.58 to 1.48 bits per weight, with insightful community comments on potential impacts and applications. The discussion quality is high with diverse viewpoints.


## 原文内容


--- Top Comments ---

[c7b]: &gt; We measure the actual symbol distribution of 29 ternary LLM models and find that zeros account for up to 51.5% of all weights. Motivated by this finding, we introduce BITCOS, a simple distribution-adaptive layout I honestly assumed that&#x27;s how they already work. I have to admit that I even explained it like that to a friend. Why on earth wouldn&#x27;t you design it like that from the start (talking about the adaptive, not the measure part; just sacrifice a few bits to clarify your en...

[infogulch]: So they get down from 1.58 to 1.48 bits per weight by exploiting the fact that actual weights in practice are 0 51% of the time. Neat. If ternary llms work out and are baked into hardware as custom silicon I bet they&#x27;ll be shockingly efficient.

[CodesInChaos]: I&#x27;m surprised that a variable length encoding like this is usable directly as in memory format and not just as storage&#x2F;transfer format.

[om8]: Ternary quantization does not make any sense. Vector quantization and trellis based methods are better in this region for PTQ.

[yalok]: sounds like a perfect fit for ASIC-optimized models (where matrix ops could be supported directly in BITCOS format, potentially) &amp; achieving record power efficiency for on-device inference. And it looks like per [0], a model needs only ~30% more weights to be at comparable quality, if quantization-aware training is done... 0.  https:&#x2F;&#x2F;arxiv.org&#x2F;pdf&#x2F;2402.17764  - The Era of 1-bit LLMs:
All Large Language Models are in 1.58 Bits