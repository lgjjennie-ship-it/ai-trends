---
layout: default
title: "How close can pure functional programming get to C?"
date: 2026-10-24T03:43:54Z
slug: 2026-10-24-how-close-can-pure-functional-programming-get-to-c
source: hackernews
category: ai-community
ai_score: 8.0
tags: "functional-programming, C, performance, optimization, programming-languages"
---

# How close can pure functional programming get to C?

**链接**: https://rtfeldman.com/fp-vs-c

**作者**: stmonty

**发布时间**: 2026-10-24T03:43:54Z

**采集日期**: 2026-10-24


## AI 摘要

The article discusses the potential performance and capabilities of pure functional programming compared to C, highlighting differences in memory management and optimization.

## AI 评价

The content explores a significant comparison between functional programming and C, with high-quality, insightful comments that enhance the discussion's value. The engagement score and diverse comments indicate community interest and validation.


## 原文内容


--- Top Comments ---

[jandrewrogers]: Much of the difference in optimizability is that C&#x2F;C++ allows you to do fairly extreme copy elision. This is important because memory bandwidth tends to be a major performance bottleneck. C&#x2F;C++ code can trivially reach into some remote bit of state and mutate it directly. The compiler rarely objects, no matter how ugly the access method or pattern. It is up to the programmer to make sure the invariants hold and the compiler can’t always see through it. These elided copies add up, th...

[pmkary]: This is kind of hacker news post and comments I like; extreme languages on extreme performance with extreme features, not types being added to a language ten gizzilion times slower than a tortoise and the post making anti-type flat-earthers getting freaked out if they have to vaccinate next.

[jeffbee]: This seems to raise the question: is libdeflate fast? My overall impression of libdeflate is that it produces a similar output size to zstd but takes 40 times longer to do it. I realize these are different algorithms of course, but they aren&#x27;t  that  different, both being in the Huffman line of the LZ family. So why is libdeflate considered a performance benchmark?

[eigenblake]: I&#x27;m very simple. I see Richard Feldman post. I like it. I&#x27;ll leave it to the experts as to whether this is a case of  opportunistic mutation .

[jdw64]: What are some well known programs made with Roc? And I&#x27;m curious about the difficulty level of its syntax