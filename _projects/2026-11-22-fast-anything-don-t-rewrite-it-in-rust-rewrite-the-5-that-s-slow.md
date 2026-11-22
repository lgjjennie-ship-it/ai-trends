---
layout: default
title: "Fast-Anything: Don't rewrite it in Rust. Rewrite the 5% that's slow"
date: 2026-11-22T04:10:09Z
slug: 2026-11-22-fast-anything-don-t-rewrite-it-in-rust-rewrite-the-5-that-s-slow
source: hackernews
category: ai-community
ai_score: 8.0
tags: "performance optimization, Rust, software engineering, Amdahl's law, programming languages"
---

# Fast-Anything: Don't rewrite it in Rust. Rewrite the 5% that's slow

**链接**: https://github.com/EL4CTEO/fast-anything

**作者**: BaselAshraf81

**发布时间**: 2026-11-22T04:10:09Z

**采集日期**: 2026-11-22


## AI 摘要

A discussion on the Fast-Anything project, which advocates for rewriting only the 5% of a software that is slow in Rust to improve overall performance.

## AI 评价

The content discusses a novel approach to improving performance by focusing on rewriting only the slow parts of a software in Rust, which is valuable for software engineering. The community discussion is insightful, touching on Amdahl's law, the nature of performance bottlenecks, and the broader implications of using high-performance languages.


## 原文内容


--- Top Comments ---

[ThouYS]: neat, but in my experience bottlenecks that you could solve this way are low hanging fruits and optimized away quickly. the true performance hog is like sand, spread across the system, a little bit in every place.

[hendler]: It&#x27;s also OK to rewrite in Rust because it&#x27;s not just about performance. The fast part in other Python, Ruby, etc may be written in C&#x2F;C++, or call an external library, and be the vulnerable part.

[diegocg]: Better yet, stop writing large codebases in lenguajes that will have performance troubles.

[tialaramex]: Note that this strategy only works  if  5% of your software is the problem - because of Amdahl&#x27;s law.

[afdbcreid]: Funny that this codebase is 62% Rust, 9% Python. And I&#x27;m a huge Rust proponent.