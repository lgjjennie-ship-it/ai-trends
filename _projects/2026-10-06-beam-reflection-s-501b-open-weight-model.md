---
layout: default
title: "Beam: Reflection's 501B open-weight model"
date: 2026-10-05T19:16:35Z
slug: 2026-10-06-beam-reflection-s-501b-open-weight-model
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Open-Weight Models, Large Language Models, Research"
---

# Beam: Reflection's 501B open-weight model

**链接**: https://reflection.ai/blog/introducing-beam

**作者**: Philpax

**发布时间**: 2026-10-05T19:16:35Z

**采集日期**: 2026-10-06


## AI 摘要

Reflection.ai introduces Beam, a large-scale open-weight model designed for coding and reasoning, with a detailed look at its architecture and training.

## AI 评价

The content introduces a significant open-weight model, Beam, with substantial parameters and advanced training techniques, and the discussion on Hacker News is insightful, focusing on the importance of the organization behind the model and its generalization capabilities.


## 原文内容


--- Top Comments ---

[berkes]: What kind of company or organization is Reflection? I think it is ever more important to realize  who  is releasing models rather than what the models do and how they compare. Because models iterate at breakneck speed, looking at today&#x27;s benchmarks is only useful for someone  using  the models today. Whereas if one builds a product on top of it, or commits to one for a project or team, the company or organization behind it, is far more important. Will they exist in a few months? Do they ...

[Ariarule]: Always glad to see more open-weight models, but this caption on the 2nd demo image had me do a double-take: &quot;Land or Water Generalization Experiment: We recreated the viral X puzzle by asking Beam to create a fixed 180×90 grid for longitudes -179° to 179° and latitudes -89° to 89°, with 16,200 points. This puzzle is a few days old, so could not appear in the training data, thus testing the model’s generalization. Beam gets 95.5% coverage right, putting us between Opus 5 (92.5%) and Fable...

[htrp]: &gt; Beam is a sparse Mixture-of-Experts model with 501 billion total parameters, 23 billion active, built for coding, reasoning, and agentic workloads. &gt; Beam’s capabilities come from major investments in both pretraining and reinforcement learning (RL). We pretrained the model on 23.8 trillion diverse, curated, high-quality tokens from the web and proprietary licensed datasets, matching or outperforming available similar-sized open base models. In parallel, we developed the algorithms, t...

[springtimesun]: I feel like this is a marketing miss. If they had held their announcement until the model was released, I would have grabbed it and started running it through my benchmarks. It probably doesn’t get a place in the rotation based on their own description of its performance, but now the weights live on the server, I’m probably following them on HF and I will remember to check in every time I ls the models folder. With the announcement only, none of that happens and I’m likely to forget about thi...

[wren6991]: I thought it would be interesting to look at some key figures vs another contemporary model in the same weight class (DeepSeek V4.1 Flash)                                   DS V4.1F            Beam
    LM total params             552B                501B
    LM active params (prefill)  8B                  23B
    LM active params (decode)   16B                 23B
    N-gram&#x2F;PLE params           196B                0
    Pretrain tokens             45T                 28T
    Disk KV byt...