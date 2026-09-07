---
layout: default
title: "Harnessing the Universal Geometry of Embeddings"
date: 2026-09-06T20:31:20Z
slug: 2026-09-07-harnessing-the-universal-geometry-of-embeddings
source: hackernews
category: ai-community
ai_score: 8.0
tags: "machine learning, AI, embeddings, geometry, isometry"
---

# Harnessing the Universal Geometry of Embeddings

**链接**: https://arxiv.org/abs/2505.12540

**作者**: ur-whale

**发布时间**: 2026-09-06T20:31:20Z

**采集日期**: 2026-09-07


## AI 摘要

The paper explores the universal geometry of embeddings and proposes methods to recover unknown isometries between finite metric spaces.

## AI 评价

The content discusses a significant research topic in machine learning and AI, with insightful community comments that add depth to the discussion. The engagement score and quality of comments indicate high relevance and importance.


## 原文内容


--- Top Comments ---

[srean]: One way to pose&#x2F;(think about) the problem is that there are two finite metric spaces linked by an unknown odometry (damn you autocorrect). The problem is to recover that unknown isometry. This, like graph isometry, can be very computationally intensive in the worst case. However, heuristics to aid matching one vertex on one graph to another vertex on another graph using local, semilocal structural signatures can be very effective on particular cases. One can of course argue that the spac...

[nickledave]: Dupe:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44054425  Note this is version 4 of the paper and the original post was version 1 (I think?) OpenReview (for NeurIPS) for the curious:  https:&#x2F;&#x2F;openreview.net&#x2F;forum?id=jiCLUPq5xv

[ironSkillet]: I am not familiar with the standards of publishing in machine learning, but as someone trained in a mathematics background, this paper seems relatively light on details and heavy on exposition. Is that typical? Is this a really novel idea? Not trying to be snarky, just trying to understand how meaningful this is.

[srean]: Let&#x27;s assume that monotonocity of pair-wise distances are preserved. Without knowing the details of how the paper solved the problem, my first attempt would be to find the diametrically distant pair of points in the two different embeddings and assume that the pair is the same pair. Then find the next distant pairs and so on. After sufficiently many such pairs have been found, or better still, the largest d-simplex is found, find that scaled rigid body transformation that makes the corre...

[stephantul]: I’ve never liked that this was called “the platonic representation hypothesis”. 
Lots of weird baggage attached and seems like a waste of a good name.