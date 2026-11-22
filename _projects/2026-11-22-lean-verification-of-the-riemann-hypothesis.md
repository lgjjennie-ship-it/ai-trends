---
layout: default
title: "Lean verification of the Riemann Hypothesis"
date: 2026-11-21T14:36:45Z
slug: 2026-11-22-lean-verification-of-the-riemann-hypothesis
source: hackernews
category: ai-community
ai_score: 9.0
tags: "mathematics, formal verification, Riemann Hypothesis, Lean, proofs"
---

# Lean verification of the Riemann Hypothesis

**链接**: https://leanprover-community.github.io/blog/posts/riemann-hypothesis/

**作者**: g-b-r

**发布时间**: 2026-11-21T14:36:45Z

**采集日期**: 2026-11-22


## AI 摘要

A detailed exploration of Lean verification's role in proving the Riemann Hypothesis, with community comments discussing the proof's significance and potential challenges.

## AI 评价

The content discusses a significant development in mathematical formalization and verification, with high community engagement and insightful comments. The discussion highlights the importance of the proof and its implications for the Riemann Hypothesis and mathematical foundations.


## 原文内容


--- Top Comments ---

[rcr-anti]: While still possible, the proof exploiting a bug is vanishingly small now. Following a few bugs and bad proofs this year, there are a number of different implementations, in different languages, and with different levels of proofs of their consistency. con-leche and con-ron are the heavy hitters, with consistency proofs of themselves. So for RH to be false, there&#x27;d have to be a bug in all the kernels that affects both the consistency proofs and the RH proof itself.

[killerstorm]: If I understand correctly, for the purpose of the proof Claude formalized a huge chunk of all modern math. So it&#x27;s a big result not only for GRH, but math foundations and formalization.

[thejokeisonme]: A fake refutation of the Collatz conjecture already got through one of these independent checkers in the past. What&#x27;s harder, proving GRH or finding a way to get through every checker (which aren&#x27;t as independent as they are sometimes touted to be)? In this case there was a human expert in the loop so it&#x27;s much less likely the model hacked its way through the problem without the expert noticing. But the statement as written has 4 points, none of which rests on the human involve...

[trio8453]: We need to give Levent a lot of credit for this. As much as we talk about Claude proving it, Levent seems to have a rare talent for getting the most out of it.

[meisel]: Do huge results like this open up even larger questions? Is there some question even more important that mathematicians dared not approach without doing big problems like Riemann first?

--- From hackernews ---

--- Top Comments ---

[tito]: I made a tool for running the verification on your home CPU, with a global leaderboard:  https:&#x2F;&#x2F;riemann-at-home.github.io&#x2F;riemann-at-home&#x2F;

[ChrisArchitect]: Some more discussion:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50589618

[1283agf]: Kind of a monoculture we have here: - Claude commits to the Lean kernel. - Claude commits to the Con Leche kernel. - Claude writes the GRH proof. - Claude writes the  https:&#x2F;&#x2F;math.mit.edu&#x2F;~drew&#x2F;grh&#x2F;  website. - Claude is instructed on that website to verify its own proof. Which could have been obtained by inserting malware into said kernels.

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE91cWtWcGFGZEQ3b3hOY19DTkxPZFVuNlU4SExmOXBhcm9nVjgzYk9oM0szdVp1UHh3VXZyal9oV3N1QXRiM202bGxwVjhXYkhkWEh2ZA?oc=5" target="_blank">Lean与Mathlib社区正式确认Alpöge与Claude合作的黎曼猜想形式化证明正确</a>&nbsp;&nbsp;<font color="#6f6f6f">虎嗅</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE1DaGZEZlU5Rk5JT01NZFdaekFfT0R2RG1DN2NIY1Z2d2FtcGU5OVZsQXNveGh2cXZOZWJjNEdMMGJUVHVGYVA2SXpMSUpDNjVpNHRISVAyUk4tQjVhTUhQQjFMR1g?oc=5" target="_blank">困扰数学界167年的黎曼猜想被AI辅助证明？丘成桐回应</a>&nbsp;&nbsp;<font color="#6f6f6f">新京报</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE9kOGRoajF5WjhDN19QdUNWUEJ4ZFZvRmtyUGVDNzlrQXU1OXAycWZjdDJOSXcxR19Tekh5VVAzTWZSd0VkRHRoVUctLVdaZzVNTlpHZkU4aVNzTl9XVmtSVQ?oc=5" target="_blank">Lean官方认证、马斯克转发！Claude参与的黎曼猜想证明机器验证通过，但人类还没看懂</a>&nbsp;&nbsp;<font color="#6f6f6f">同花顺</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTFBJN3NnZXdvUUltRjF1SGNGX3ZYQi1NZmxnM1FzZk5RUHBMU0lpWmxHbV83MGg0OW42T2tlWEhZMHZfSTZNdDIwTVk2aThnWG8zdWxxblNXS1lvRFFEREFXVmFUclh1UQ?oc=5" target="_blank">90后数学家联手Claude证明了167年黎曼猜想？菲尔兹奖得主梅纳德回应每经：我相信证明正确，但成果被人理解，才可能得到认可</a>&nbsp;&nbsp;<font color="#6f6f6f">每日经济新闻</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMieEFVX3lxTE4zSXBfVmVCRFlfZmRHRjRMSUhfUU5EZi1XbnFrelBZaHRXOFVSMUdPdG9xMWdqWUwzV1gyRnQ3UXdpX3Q4UGZSVjRSR192OHo3Mi10ekFNQ3pfRGhUSG92ZnhHNUNXMFBxb3owTmoyWElUdHNoRmdYeg?oc=5" target="_blank">黎曼猜想一日双证引发学界震动</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪新闻_手机新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE5xOWNZZS1jajF3MXY3eGdXSkNzVzlwVXVyZGNzZlI4M1RKNWRVc2J4Y191WXVnamNNMEN5N0F1WEtFRm1PQTVES3lWLWhJZURPNUNEN1BpLUpLZGU1bGNwNA?oc=5" target="_blank">“AI攻克黎曼猜想”获Lean数学社区认证，但读懂它仍需时日</a>&nbsp;&nbsp;<font color="#6f6f6f">ThePaper.cn</font>