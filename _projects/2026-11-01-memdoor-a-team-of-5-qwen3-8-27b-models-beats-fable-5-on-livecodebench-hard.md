---
layout: default
title: "Memdoor: A team of 5 Qwen3.8-27B models beats Fable 5 on LiveCodeBench Hard"
date: 2026-10-31T22:46:12Z
slug: 2026-11-01-memdoor-a-team-of-5-qwen3-8-27b-models-beats-fable-5-on-livecodebench-hard
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Local Models, Performance Benchmarking, Qwen3.8-27B, Fable 5"
---

# Memdoor: A team of 5 Qwen3.8-27B models beats Fable 5 on LiveCodeBench Hard

**链接**: https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve

**作者**: guregodevo

**发布时间**: 2026-10-31T22:46:12Z

**采集日期**: 2026-11-01


## AI 摘要

A team of five Qwen3.8-27B models achieves high performance on Fable 5 using the LiveCodeBench Hard benchmark, sparking community discussion on local model competitiveness.

## AI 评价

The content discusses a significant achievement in local model performance, which is highly relevant to the field of AI and could impact the competition between local and cloud-based models. The community discussion is insightful and diverse, adding to the content's value.


## 原文内容


--- Top Comments ---

[fedpost]: We desperately need to keep local models competitive with the hyper scalers. I won&#x27;t want to be beholden to them and their whims forever. With anthropic now restricting game reverse engineering I think we&#x27;re about to cross a Rubicon of censorship.

[jacmilts]: Why such an old benchmark?

[roenxi]: That&#x27;s pretty interesting, because with the Bonsai 2 quantisations it is quite achievable to get Qwen 27B running at 50 t&#x2F;s on reasonably priced gaming machine [0]. Which in turn suggests that Fable 5 coding performance can be achieved locally with a bit of clever harnessing. Although the same harnessing should also improve Fable&#x27;s performance. The important thing here is the cap for local performance looks like it could be quite high. [0]  https:&#x2F;&#x2F;store.steampowered....

[xlayn]: Remember those gpus into chips  https:&#x2F;&#x2F;inference-docs.cerebras.ai&#x2F;models&#x2F;qwen-3.8-27b  , where you have this chip that implements a model that run at those extremely high speeds... the ones that people ask &quot;why do we need that&quot;... if this is true... one of those chips with the correct harness is all that&#x27;s needed to get fable like intelligence in every single computer in this planet... Happy hallowen Tax Ramltman and Amowhateverwayyournameiswritten...

[mkl]: GVS5H, which this is based on, was discussed here a week ago:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50228167

--- From hackernews ---

--- Top Comments ---

[boricj]: I work with another team at work that uses lots of message passing, C++ virtual methods in deeply nested class hierarchies, large DOMs and off-the-shelf C++ STL containers... on a STM32MP1, which has an in-order Cortex-A7 and a pittance of cache. On the other hand, in my team I wrote my custom C++ STL containers that allocate inline, SAX-style processing libraries and an object pool with links that use index+generations like 2000s video games... on a STM32H5 with less than a megabyte of RAM. ...

[swiftcoder]: I remember have a very long argument with a team I worked on, who were mostly convinced our service couldn&#x27;t handle requests any faster because the CPUs were already at 100%. In the end we tripled the requests-per-second by cleaning up the service&#x27;s memory access patterns...

[bugake]: Modern CPUs have hundreds of megabytes of cache. That&#x27;s more than the entire hard disk space required by Windows in the 1990s. You could install an entire Windows system, emulated in cache of a modern CPU, including the hard disk, and modern computers are still slow, partly because the CPU does nothing while waiting for RAM to fetch data, and partly because decades of people prioritizing abstractions over efficient coding have made software totally inefficient.

[brcmthrowaway]: https:&#x2F;&#x2F;people.freebsd.org&#x2F;~lstewart&#x2F;articles&#x2F;cpumemory.pdf  Has anyone rewritten this for 2026?

[drivebyhooting]: I feel like the solution presented is just a clustered hashmap or “locality sensitive” if you’d like it. Still not orders of magnitude better.