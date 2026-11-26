---
layout: default
title: "The polynomial Hirsch conjecture is false [pdf]"
date: 2026-11-25T17:34:34Z
slug: 2026-11-26-the-polynomial-hirsch-conjecture-is-false-pdf
source: hackernews
category: ai-community
ai_score: 9.0
tags: "mathematics, complexity-theory, algorithms, linear-programming, graph-theory"
---

# The polynomial Hirsch conjecture is false [pdf]

**链接**: https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf

**作者**: acossta

**发布时间**: 2026-11-25T17:34:34Z

**采集日期**: 2026-11-26


## AI 摘要

A major mathematical conjecture, the polynomial Hirsch conjecture, is disproven, impacting complexity theory and algorithms.

## AI 评价

The content discusses a major mathematical conjecture being disproven, which has significant implications for complexity theory and algorithms. The community comments provide insightful discussions on the implications and context, further increasing the content's importance.


## 原文内容


--- Top Comments ---

[Luke2642]: I always like to try to translate it to a really simple English version: You can represent many problems like logistics with a list of linear requirements so valid combinations form a multi-dimensional geometric shape where every corner of that shape and inside that shape represents a &#x27;valid&#x27; but probably not optimal solution, e.g. every package gets delivered by a driver, but not the lowest fuel or time, and &#x27;valid&#x27; so no rules are broken, like no driver is scheduled more...

[GIFtheory]: For context, this means that there is no polynomial-time simplex algorithm (which is an algorithm for linear programming (optimization)). The original version of the conjecture was an attempt to explain why the simplex method seemed to work surprisingly well in practice, but it was disproved in 2010 (after 50+ years!). This seems like more of a mopping up result.

[jwpapi]: I think we can assume now that most major math and complexity problems will soon be solved It seems like some things will be impossible for us ever to perfectly calculate, however I assume the post math problems era to be a good time for algorithms improvements. That at one point will be done too, and we then come to production limits which will have more focus then as the problem space will me smaller. We might have some experiment intermezzo and then we’ll try to gain a lot of energy and do...

[tensegrist]: think of a cube as a graph: how many edges do you need to get from one vertex to another, in the worst case? we can ask this question more generally for &quot;polytopes&quot; — graphs that generalize the notions of polygons and polyhedra the original hirsch conjecture said for an n-faced polytope of dimension d you do not require any more than n-d steps to get from any vertex to any other, which is false the polynomial hirsch conjecture relaxes this to the existence of some constant k for whi...

[ex-aws-dude]: Math breakthroughs now just come as github patch notes * Polynomial hirsch conjecture now false * Updated matmul ω to 9&#x2F;4 * Added warning about weird bug in navier–stokes for some use cases