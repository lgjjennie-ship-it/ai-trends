---
layout: default
title: "Show HN: DeepSeek V3 in ~200 lines of pure Jax"
date: 2026-11-14T15:04:15Z
slug: 2026-11-15-show-hn-deepseek-v3-in-200-lines-of-pure-jax
source: hackernews
category: ai-community
ai_score: 8.0
tags: "JAX, DeepLearning, ROCm, MachineLearning, Python"
---

# Show HN: DeepSeek V3 in ~200 lines of pure Jax

**链接**: https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax

**作者**: VaibhaavTiwari

**发布时间**: 2026-11-14T15:04:15Z

**采集日期**: 2026-11-15


## AI 摘要

A project that implements DeepSeek V3 in about 200 lines of pure JAX, enabling local training on ROCm-compatible hardware without CUDA.

## AI 评价

The content is highly valuable due to its technical depth and potential impact on the field. The community discussion is insightful and diverse, with comments from users sharing their experiences and asking for further insights.


## 原文内容


--- Top Comments ---

[joebarbere]: Thanks for this! I&#x27;ve been trying to get local training working on Fedora with ROCm for a while now, and this is the first project that ran end-to-end on my RX 7600 XT 16GB. The whole reason for me buying the card was to play around with deep learning and models, so it&#x27;s awesome to have a stepping off point now! No CUDA meant ROCm surprisingly just worked with JAX. Gotchas for anyone with a 7600 XT: it needed two env vars, HSA_OVERRIDE_GFX_VERSION=11.0.0 because JAX&#x27;s plugin re...

[madduci]: Does this work on CPU only hardware (Intel Core Ultra 7)?

[armcat]: I love this, there is nothing like recreating a model from first principles, plus makes me want to revisit Jax again (I&#x27;ll do it after I spend enough time with Zig). Thanks for this!

[mattfrommars]: Post like these always drives a motivation to understand how inference or what OP did. For folks who are more familiar in this space, is there a good road map how to build and understand the intuition behind this? I’m comfortable in Java and Python and do vanilla SWE work.

[d_tr]: I am just starting Raschka&#x27;s book to write an llm from scratch in C++ with zero dependencies with avx-512 on a 9950x, and then I&#x27;d like to go through the literature for more advanced stuff. I don&#x27;t know what Jax is exactly but while I am aware that the algorithm implementation is not something terribly complicated, 200 lines still sounds impressive. If anyone wants to share any tips, they&#x27;re welcome.