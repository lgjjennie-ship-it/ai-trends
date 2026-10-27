---
layout: default
title: "The Exponential Time Hypothesis Is False [pdf]"
date: 2026-10-26T21:59:15Z
slug: 2026-10-27-the-exponential-time-hypothesis-is-false-pdf
source: hackernews
category: ai-community
ai_score: 9.0
tags: "computational complexity, theoretical computer science, mathematics, algorithm analysis, NP-completeness"
---

# The Exponential Time Hypothesis Is False [pdf]

**链接**: https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf

**作者**: vok

**发布时间**: 2026-10-26T21:59:15Z

**采集日期**: 2026-10-27


## AI 摘要

A new paper by OpenAI claims to have disproven the Exponential Time Hypothesis, a significant result in computational complexity theory.

## AI 评价

The content discusses a groundbreaking result in theoretical computer science and mathematics, challenging the Exponential Time Hypothesis. The community comments are insightful and diverse, indicating high engagement and relevance.


## 原文内容

See also: <i>Announcing three new discoveries in mathematics, computer science, and physics</i> - <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251344">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251344</a>


--- Top Comments ---

[svat]: While this has no immediate bearing on P-vs-NP, it is interesting to note: - Early CS researchers like Donald Knuth entered CS in the days when regularly someone would come up with a surprising faster algorithm for some problem, and their intuitions were that most problems had faster algorithms than you&#x27;d expect. - Later generations of CS researchers, as all the easy algorithms were discovered, and post Karp&#x27;s definition of NP-completeness (and the Garey &amp; Johnson book, say), be...

[cochne]: This is an amazing and unexpected result.  To be clear though, it does not imply that NP is subexponential: &quot;Note that runtime bounds of the form 2^o(n) do not transfer under general polynomial-time reductions (2^n^o(1) would be needed for this), so our result does not imply that general NP problems
admit subexponential time algorithms.&quot; Edit: To explain more, it is guaranteed that you can  reduce  any NP problem to 3SAT in polynomial time with a polynomial factor in input size.  Yo...

[zodiac]: It appears that Anthropic has released a proof as well (same bounds), but with a different approach?  https:&#x2F;&#x2F;drive.google.com&#x2F;drive&#x2F;u&#x2F;0&#x2F;folders&#x2F;1uaWnPqWkXy1sjfsD...

[criemen]: Wow. Complexity class separations are really really rare. Can an expert in sat solving comment if there&#x27;s any immediate applications of the method from the paper? Or is SAT solving in general pretty far away from worst-case times, and this is a theoretical algorithm which would be hard to apply in practice.

[strommec]: It&#x27;s surprising that Exponential Time Hypothesis would be false. Quoting a paper from 2022[1]: &gt; We prove that the time complexity of self-attention is necessarily quadratic in the input length, unless the Strong Exponential Time Hypothesis (SETH) is false[...] If OpenAI&#x27;s proof is correct, does that mean self-attention can be implemented in sub-quadratic time? I.e. we could eventually have all the most advanced LLMs running on cheap hardware? To put it more playfully, is ETH bei...