---
layout: default
title: "Kimi K3 Architecture Overview and Notes"
date: 2026-07-28T15:48:34Z
slug: 2026-07-29-kimi-k3-architecture-overview-and-notes
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Kimi K3, Architecture, Deep Learning, Positional Embeddings"
---

# Kimi K3 Architecture Overview and Notes

**链接**: https://sebastianraschka.com/blog/2026/kimi-k3-architecture-notes.html

**作者**: ModelForge

**发布时间**: 2026-07-28T15:48:34Z

**采集日期**: 2026-07-29


## AI 摘要

The article discusses the architecture of Kimi K3, a new model in AI/ML, with community comments focusing on its technical details and implications.

## AI 评价

The content provides a detailed overview of the Kimi K3 architecture, which is a significant development in the field of AI/ML. The discussion quality is high, with insightful comments from the community that delve into the reproducibility, usability, and technical aspects of the architecture.


## 原文内容


--- Top Comments ---

[mickael-kerjean]: Genuine question: how reproducible &#x2F; usable &#x2F; verifiable are these architectures from the published documentation? Are they similar to PDF&#x2F;DWG&#x2F;PSD specifications, where the format look like an open spec at first sight until you attempt to implement it and realize the crucial implementation details are undocumented?

[thatsgcasey]: Sabastian Raschka is one of the great LLM researchers&#x2F;authors.  I highly recommend his substack

[augment_me]: I feel like the Kimi team is amongst the best in the industry to pick and choose what is meaningful from the other models. For example, avoiding the expensive and empirically uncertain mHC in favor of simpler residuals. Latent MoE. My only doubts are around Linear Attention instead of DSA as this is inherently lossy. You are kind of banking on that your query is inherently in the embedding space of the model already and can be lossy.

[Ilaurens]: &quot;Interestingly, Kimi K3 got rid of all RoPE layers and uses NoPE (No Positional Embeddings) everywhere instead.&quot; It just baffles me that this even works at all. Doesn&#x27;t it just become a token soup? Is attention that precise that a second token can tell its the second token just because it learns to accumulate something in the embedding space without any sort of inductive bias?

[gboss]: Anybody getting the result that Kimi 3 is more expensive than Opus 5 or Sol on Cursor? Pretty sure Kimi 3 sucked up a good chunk of my ultimate plan in a few prompts. Anyone have any tools or ways to understand per model usage towards cursor subscriptions? I know there are alternatives to cursor just haven’t made the move yet. (Edit spelling)