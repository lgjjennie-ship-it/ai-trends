---
layout: default
title: "Reverse-engineering the Intel 8087's tangent algorithm: more than CORDIC"
date: 2026-09-26T17:26:54Z
slug: 2026-09-27-reverse-engineering-the-intel-8087-s-tangent-algorithm-more-than-cordic
source: hackernews
category: ai-community
ai_score: 8.0
tags: "reverse engineering, Intel 8087, low-level computing, CORDIC, historical computing"
---

# Reverse-engineering the Intel 8087's tangent algorithm: more than CORDIC

**链接**: https://www.righto.com/2026/09/8087-tangent-cordic.html

**作者**: pwg

**发布时间**: 2026-09-26T17:26:54Z

**采集日期**: 2026-09-27


## AI 摘要

The article explores the reverse engineering of the Intel 8087's tangent algorithm, revealing more than just a CORDIC implementation.

## AI 评价

The content provides a deep dive into the reverse engineering of the Intel 8087's tangent algorithm, which is highly relevant for understanding historical computing and low-level engineering. The community discussion is insightful and adds value with diverse viewpoints.


## 原文内容


--- Top Comments ---

[Const-me]: I remember I once wanted to compute tangent of fp64 vectors. Here’s what I did.  https:&#x2F;&#x2F;github.com&#x2F;Const-me&#x2F;AvxMath&#x2F;blob&#x2F;master&#x2F;AvxMath&#x2F;AvxM...

[jaygreco]: Love these deep dives. It’s fascinating to see how real, low-level engineering we all take for granted today unfolded. It’s incredible that the rough equivalent of an entire 160lb digital computer was built and baked into silicon. Also incredible reverse engineering. In a time when seemingly all appreciation for expertise is gone it’s so refreshing to see.

[cmovq]: Always thought it was strange that fptan also pushes 1 to the register stack. It now makes sense it’s so existing code for the 8087 which was expected to do y&#x2F;x to get the actual tangent could keep working by doing y&#x2F;1 on newer processors.

[kens]: Author here for your 8087 questions...

[heronbank]: Always fascinated by the low-level cleverness in early hardware. It&#x27;s a different world from today&#x27;s abundant resources.