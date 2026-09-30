---
layout: default
title: "Needed 1+1, built a functional programming language"
date: 2026-09-29T16:18:26Z
slug: 2026-09-30-needed-1-1-built-a-functional-programming-language
source: hackernews
category: ai-community
ai_score: 8.0
tags: "functional programming, programming language, technical achievement, community engagement"
---

# Needed 1+1, built a functional programming language

**链接**: https://hereticpleb.vercel.app/blog/needed-one-plus-one/

**作者**: birdculture

**发布时间**: 2026-09-29T16:18:26Z

**采集日期**: 2026-09-30


## AI 摘要

The author built a functional programming language starting from a simple project goal.

## AI 评价

The content discusses the creation of a functional programming language, which is a significant technical achievement. The high engagement and insightful comments further enhance the importance of the post.


## 原文内容


--- Top Comments ---

[dalton74]: My weekend project started as &quot;parse a log file&quot; and now it&#x27;s a microservice mesh. Relatable.

[CodesInChaos]: Greenspun&#x27;s tenth rule of programming: &gt; Any sufficiently complicated C or Fortran program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp.

[tromp]: &gt; Overall, I built a Graph Reduction engine I did the same for my performant implementation of pure functional programming language BLC&#x2F;BLC2,
which in 400+ lines contains a graph reduction engine for combinatory logic, to which the lambda calculus programs are converted by Kiselyov&#x27;s bracket abstraction algorithm. [1]  https:&#x2F;&#x2F;github.com&#x2F;tromp&#x2F;AIT&#x2F;blob&#x2F;master&#x2F;uni.c

[gnarlouse]: This reminds me of decades ago when ...wait, I was still writing code like three years ago.

[Joker_vD]: &gt; The thing is, all of our nodes are pointing to each other inside this memory block. When we realloc it with an increased size, it might get moved to a new memory address. Completely breaking all of our pointers and causing a segfault! How do we tackle this problem? Store indices into the arena array? You could probably even use 4-byte indices and cut down the memory usage... &gt; Fib(40) literally took 12+ GIGABYTES before hitting an OOM and crashing. Why? Because it spawns approximately...