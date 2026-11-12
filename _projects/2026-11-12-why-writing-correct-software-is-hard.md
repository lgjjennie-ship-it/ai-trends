---
layout: default
title: "Why Writing Correct Software Is Hard"
date: 2026-11-12T10:28:26Z
slug: 2026-11-12-why-writing-correct-software-is-hard
source: hackernews
category: ai-community
ai_score: 8.0
tags: "software engineering, correctness, formal verification, complexity, real-world applications"
---

# Why Writing Correct Software Is Hard

**链接**: https://pron.github.io/posts/correctness-and-complexity

**作者**: AriFordsham

**发布时间**: 2026-11-12T10:28:26Z

**采集日期**: 2026-11-12


## AI 摘要

The article explores the challenges of ensuring software correctness, balancing theoretical correctness with practical real-world applications.

## AI 评价

The content delves into the complexities of writing correct software, a critical topic in software engineering. The community comments provide insightful discussions on the nuances of formal correctness versus real-world functionality, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[turbobutton]: I believe there&#x27;s a hard distinction between abstract, mathematical correctness in software and functioning in the real world. Any software that&#x27;s processing inputs and provides complex workflows to humans has to necessarily deal with the endless vagaries of reality. That&#x27;s not to say there isn&#x27;t value in formal correctness, but the important part is identifying when it&#x27;s useful and when its more trouble than its worth...

[kodoman]: I was always interested in formal verification but have only written toy proofs and derived programs. It&#x27;s nice to see this older discussion of the topic outside of &#x27;AI does lean&#x27; and the assumptions that formally verification is easy or will be easy for AI and you can just switch you brain off. Build programs that can be verified in the first place is difficult design problem that requires real thought and deep insight of the problem.

[samiv]: Maybe it&#x27;s just me but the terminology used in &quot;halting problem&quot; didn&#x27;t age well. A lot of modern programs never terminate and thus to me &quot;halting&quot; means no longer able to compute, i.e it&#x27;s hung&#x2F;deadlocked.