---
layout: default
title: "H3-metal – Native MiniMax-H3 inference for Apple Silicon"
date: 2026-08-11T01:22:09Z
slug: 2026-08-11-h3-metal-native-minimax-h3-inference-for-apple-silicon
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Apple Silicon, MiniMax-H3, Inference, Machine Learning"
---

# H3-metal – Native MiniMax-H3 inference for Apple Silicon

**链接**: https://github.com/antirez/h3.c

**作者**: swyx

**发布时间**: 2026-08-11T01:22:09Z

**采集日期**: 2026-08-11


## AI 摘要

H3-metal enables native MiniMax-H3 inference on Apple Silicon, with community feedback on performance and alternatives.

## AI 评价

The content discusses a significant technical development for Apple Silicon, with active community engagement and insightful comments. The discussion provides practical insights and comparisons, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[Meleagris]: I&#x27;ve been using MiniMax H3 on my M5 Pro 64GB MacBook Pro through ComfyUI. It works extremely well. I had to modify the default ComfyUI workflows to use a GGUF quant (city96&#x27;s ComfyUI-GGUF custom node, UnetLoaderGGUF in place of the stock loader) [0]. I use the model labeled Q5_K_M. There is Q8_0 available as well, which is 34GB and fits fine in 64GB unified memory if you keep resolution modest. The main issue is speed, a ~9-second 480x864 clip at 20 steps takes me a bit over an hour...

[diddid]: This is where the DGX spark makes up a bit of the ground it loses on llm work, diffusion and cuda go together like peanut butter and jelly.

[tipiirai]: I&#x27;d love to know what the alternatives are and how this is better

[TechSquidTV]: This still requires 128Gb of memory, right? Me and my lowly 96Gb, like a commoner; missing out on the fun.

[abhinai]: How similar are Jeff Dean and Salvatore Sanfilippo?