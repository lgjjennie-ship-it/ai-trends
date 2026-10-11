---
layout: default
title: "500B Tokens Later: Letting AI Agents Decompile a First-Person Shooter"
date: 2026-10-11T02:02:38Z
slug: 2026-10-11-500b-tokens-later-letting-ai-agents-decompile-a-first-person-shooter
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Reverse Engineering, Game Development, Machine Learning"
---

# 500B Tokens Later: Letting AI Agents Decompile a First-Person Shooter

**链接**: https://momo5502.com/posts/2026-10-09-game-decompilation/

**作者**: davikr

**发布时间**: 2026-10-11T02:02:38Z

**采集日期**: 2026-10-11


## AI 摘要

AI agents are used to decompile a first-person shooter game, demonstrating the potential of AI in reverse engineering.

## AI 评价

The content discusses a significant application of AI in reverse engineering, with insightful community comments suggesting alternative approaches and optimizations, indicating high relevance and discussion quality.


## 原文内容


--- Top Comments ---

[brandonpelfrey]: Unless you explicitly need byte-matching decompilation, there are significantly faster ways to produce a decompilation&#x2F;C which is functionally equivalent. I need to post about this. What&#x27;s been working for me is that for every function, Agent A is tasked with writing some code which is semantically equivalent to the original assembly, but not necessarily exactly the same. Agent A also writes tests. Agent A submits the implementation of the function and tests to the harness for it to...

[aetherspawn]: The reason this cost so much is because the AI has the ridiculous goal of getting identical assembly output. The agents would have had to mess around with compiler versions, optimisation options, and the phase of the moon as well. If you just went for functional equivalence, it would probably cost 10x or 100x less tokens. Another false economy was using Sonnet instead of a more intelligent model like Sol 6.1 (1), which would have cost more per token, but is 100x or so better at reverse engine...

[nvme0n1p1]: &gt; The avid reader of my blog might have noticed that I had previously written two posts that have since been removed. Everyone else might now be wondering which game I am talking about. To both of you I can only say that corporate America was here to ruin our fun. Call of Duty: Modern Warfare 2 (2009)  https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260925153118&#x2F;https:&#x2F;&#x2F;momo5502....   https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260925153131&#x2F;https:&#x2F;&#x2F;mom...

[edg5000]: I sense the approach overcomplicates things. I wonder how long this would have taken in a single session. Maybe this is actually a textbook example of something where subagents make sense, but when I first started LLMs I was often overcomplicating the workflow with all kinds of orchestration. Now I just use one agent, it better allows controlling the output even if the agent works slightly longer. Most time is spent by me writing prompts and reviewing work anyway (for me at least).

[WheelsAtLarge]: Interesting, if all software can be decompiled and copied what is the future of software. Will all software be SaaS? A time where the majority of PCs will be terminals? Game consoles are almost there. It&#x27;s only a small jump for all software to go that way. Edit:
Here&#x27;s a possibility. The future of software is agent only software. We ask for a result, agent asks questions from us, agent uses the specialized software, user gets result. We subscribe to an AI assistant and specialized a...