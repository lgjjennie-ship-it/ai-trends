---
layout: default
title: "Why your local LLM feels dumber than it is"
date: 2026-08-22T18:14:16Z
slug: 2026-08-23-why-your-local-llm-feels-dumber-than-it-is
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, AI, Machine Learning, Quantization, Performance Optimization"
---

# Why your local LLM feels dumber than it is

**链接**: https://forum.level1techs.com/t/why-your-local-llm-feels-dumber-than-it-is/253917

**作者**: felineflock

**发布时间**: 2026-08-22T18:14:16Z

**采集日期**: 2026-08-23


## AI 摘要

The article explores why local LLMs may seem underperforming and includes community insights on model comparisons and running optimizations.

## AI 评价

The content discusses the performance and limitations of local large language models (LLMs), with insightful community comments on model comparisons and running conditions, indicating high relevance and technical depth.


## 原文内容


--- Top Comments ---

[mrgaro]: Any DGX Spark users in this thread? What&#x27;s your favourite model to run on it?

[jonplackett]: I just got qwen 3.8 27b mlx running on my Macbook Pro and honestly I’m pretty blown away by how not-dumb it is.

[a11r]: Even a 4-bit quant of Qwen3.8 27b is indistinguishable from Gemini 3.7 flash in our internal tests. With an RTX5090 card and ninfer, you can get ~800 TPS token generation (c=8) and ~140 Tokens per second single stream.

[walrus01]: Much of this is why I stick to the rule of: a) Don&#x27;t quantize your KV cache b) Don&#x27;t run quantizations of the LLM that are worse than the best available Q8 (the largest possible file size unsloth GGUF for a given model like qwen 3.8 27B as an example). I would rather things go slowly but I have confidence that it&#x27;s doing things more accurately.

[InvertedRhodium]: I’m running Qwen3.8 aggressive uncensored Q4_K_P on a 4090 in a loop against the 2026 CrackMe CTF challenges. Using oh-my-pi in a prebuilt environment that I let Qwen build too. Codex wouldn’t even look at the files - literally, as soon as it read something with CTF it shut down. Didn’t even offer to fall back to a dumber model.