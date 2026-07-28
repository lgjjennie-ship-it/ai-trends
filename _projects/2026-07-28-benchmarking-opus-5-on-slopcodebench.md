---
layout: default
title: "Benchmarking Opus 5 on SlopCodeBench"
date: 2026-07-27T22:37:52Z
slug: 2026-07-28-benchmarking-opus-5-on-slopcodebench
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Opus 5, SlopCodeBench, AI/ML, Coding Agents, Benchmarking"
---

# Benchmarking Opus 5 on SlopCodeBench

**链接**: https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-opus-5-on-slop-code-bench.md

**作者**: dhorthy

**发布时间**: 2026-07-27T22:37:52Z

**采集日期**: 2026-07-28


## AI 摘要

A detailed benchmarking of Opus 5 on SlopCodeBench, highlighting improvements and community feedback on its performance and maintainability.

## AI 评价

The content is highly relevant to software engineering and AI/ML, with insightful community comments discussing the non-functional and longitudinal requirements of coding agents. The engagement signals indicate community validation.


## 原文内容


--- Top Comments ---

[Vgoose]: Nice! I actually ran across this paper+benchmark recently, too. It&#x27;s the first I&#x27;ve found that start to aim at some of the non-functional and longitudinal requirements that I think have always been an important part of writing production code. It&#x27;s especially relevant now that models are good enough to solve ~most point-in-time problems. Some relevant but disconnected thoughts: - deterministic scores are so nice - what &quot;maintainable&quot; is is probably some high dimension...

[sothatsit]: This matches my experience of Opus 5 being a nice improvement over Opus 4.8, but not being revolutionary like Fable felt. I’ve now replaced my use of Opus 4.8 xhigh with Opus 5 medium, and I’m using less tokens and it’s quicker. I can understand people being annoyed by its writing style but for getting work done that really doesn’t bother me. I’ve been really enjoying using it.

[4by4by4]: I&#x27;d be curious to see the raw test results. I have a suspicion that most models will miss the `database_migration` Checkpoint 2 test that includes a `default_value` because it could be interpreted as either a JSON-literal or a SQL-expression. There might be other tests as well that are prone to failure for reasons other than the reasons cited in the paper. I think a cool experiment would be to adjust the order of the features implemented (e.g. checkpoint 3 then 2 then 5 then 4) where dep...

[piazz]: Great writeup. The excessive function thing has always driven me crazy; I guard against this explicitly in Claude.md. I have found that models are generally poor at managing refactors &#x2F; complexity while  also  implementing new features. But I’ve had some success with a semi-lights-off approach where you decompose it and prompt the model adversarially in a second pass to look for new rough edges and areas of complexity or refactors that might simplify the codebase. So I’d be very curious ...

[Johnny_Bonk]: I haven&#x27;t joined your chats in a while but glad to see you put this together, I truly feel as though opus 5 is not much of an improvement. The only time i ever felt a wow factor was opus 4, 4.6 and fable pre trump admin lobotimizing