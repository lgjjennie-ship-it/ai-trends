---
layout: default
title: "Show HN: Flide: Make Jev-like decision models up to 9.5x faster"
date: 2026-11-09T04:43:12Z
slug: 2026-11-09-show-hn-flide-make-jev-like-decision-models-up-to-9-5x-faster
source: hackernews
category: ai-community
ai_score: 8.0
tags: "decision models, inference engine, performance optimization, AI/ML"
---

# Show HN: Flide: Make Jev-like decision models up to 9.5x faster

**链接**: https://github.com/OmniJev/Flide

**作者**: unikcc

**发布时间**: 2026-11-09T04:43:12Z

**采集日期**: 2026-11-09


## AI 摘要

Flide is a new inference engine that significantly speeds up Jev-like decision models compared to existing solutions.

## AI 评价

The content announces a significant improvement in performance for Jev-like decision models with a 9.5x speedup, which is highly relevant for the field. The community discussion is insightful, with comments on the technical details and potential use cases, indicating high value.


## 原文内容

Decision models need their own inference engine.<p>So we developed Flide, a high-performance and exact inference engine for Jev-like decision models.<p>Flide achieves up to a 9.5x speedup over vLLM and SGLang.<p>It now supports 30+ popular local Jev-like decision models.<p>Start to make your decision immediately:<p>pip install flide


--- Top Comments ---

[unikcc]: Flide is extremely fast when one input carries many questions, as the shared input is computed only once. Even with a single question, it can still be up to 3x faster, depending on the model size and input length.

[Tostino]: You really don&#x27;t need an entire new inference engine for this. I modified vllm to work just fine for my decision model experiments. It properly uses the single shared context and only recomputes the questions, or if the questions are longer, I let the questions go first and then the context that changes often can go after, and then the answer menu tokens... I got roughly the same speed increase with the right workloads that you&#x27;re saying though.

[jarym]: I wanted to try this - essentially for my dataset I have a number of decision questions for the same input. I haven&#x27;t figured out yet which local model to try first with it!

[unikcc]: Hi HN! I&#x27;m one of the Flide team. We built Flide from scratch to make Jev-like decision model inference up to 9.5x faster than vLLM and SGLang, while keeping exactness. Here is the source code:  https:&#x2F;&#x2F;github.com&#x2F;OmniJev&#x2F;Flide  Look forward to hearing your feedback and ideas!

[yossuf2000]: do i need to host the model to do this ?
if yes what model can i host in 3050 card