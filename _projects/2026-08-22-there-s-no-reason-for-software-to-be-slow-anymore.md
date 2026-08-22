---
layout: default
title: "There's no reason for software to be slow anymore"
date: 2026-08-22T01:06:17Z
slug: 2026-08-22-there-s-no-reason-for-software-to-be-slow-anymore
source: hackernews
category: ai-community
ai_score: 8.0
tags: "performance optimization, software engineering, web requests, autoresearch, load time"
---

# There's no reason for software to be slow anymore

**链接**: https://danluu.com/perf-opt/

**作者**: Jach

**发布时间**: 2026-08-22T01:06:17Z

**采集日期**: 2026-08-22


## AI 摘要

The article argues that software should not be slow and provides strategies for performance optimization.

## AI 评价

The content discusses the importance of performance optimization in software, which is highly relevant in the field. The community comments provide additional insights and examples, enhancing the value of the discussion.


## 原文内容


--- Top Comments ---

[gr_norm]: This needs to be qualified with &quot;to the degree that you have a specification of what that software should do.&quot; That lets you give the LLM free rein to run optimization passes over your codebase. The better the spec, the more leeway you can give the optimizer.

[eaftan]: I&#x27;ve been working on a similar agentically engineered regex project called SafeRE:  https:&#x2F;&#x2F;github.com&#x2F;eaftan&#x2F;safere   https:&#x2F;&#x2F;eaftan.github.io&#x2F;safere-intro&#x2F;  Mine is for Java and is intended to be production grade.  The first goal is to guarantee linear-time behavior to prevent ReDoS attacks. My collaborator and I have recently been optimizing it to try to surpass native RE2 in performance. It turns out optimizations are incredibly well suited for...

[ehnto]: One of the biggest causes of slowness is just waiting for web requests. The fact that so much software is either online or built using the same stack even if it isn&#x27;t, puts all that software in this blocked&#x2F;waiting state constantly while using it. Anyone not in the US feels this even more since so much online is US hosted, 300ms for every little interaction adds up quick. If your software has the affordance of a waiting dialogue or loading wheel for many of its UI controls, you are ...

[jjcm]: This speaks to me. I&#x27;ve been running an autoresearch loop the past couple of days to improve the load time of my various projects&#x27; frontends. I&#x27;ve been really, really impressed with how effective this is. I went from a 4s load on simulated slow 4g to ~750ms:  https:&#x2F;&#x2F;image.non.io&#x2F;speedup-graphs.webp  Side by side vid of the results:  https:&#x2F;&#x2F;video.non.io&#x2F;speedups.mp4  This was for  https:&#x2F;&#x2F;non.io , which is something I had purposefully wr...

[Kuyawa]: Next time you ask your AI of choice to build an app, please tell them to use plain language without frameworks at all and keep modules to a minimum (ie. node express, ejs and pg, nothing else) and you will see a huuuuge difference