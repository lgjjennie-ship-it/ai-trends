---
layout: default
title: "Ternary Bonsai 2.5 27B"
date: 2026-11-24T20:08:03Z
slug: 2026-11-25-ternary-bonsai-2-5-27b
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Ternary Bonsai, AI Model, Agentic Coding, Performance Improvement, Machine Learning"
---

# Ternary Bonsai 2.5 27B

**链接**: https://prismml.com/news/bonsai-2-5-27b

**作者**: b0m

**发布时间**: 2026-11-24T20:08:03Z

**采集日期**: 2026-11-25


## AI 摘要

Ternary Bonsai 2.5 27B is released with improved performance and potential for agentic coding, as discussed in community comments.

## AI 评价

The content discusses a new version of a Ternary Bonsai model with significant performance improvements and potential use cases in agentic coding. The community comments provide valuable insights and benchmarks, enhancing the content's value.


## 原文内容


--- Top Comments ---

[ariwilson]: With this new Ternary Bonsai model (Q2 GGUF), I&#x27;m seeing about 22-25 tokens&#x2F;s on a Mac Mini M5 Pro 24G RAM&#x2F;512G SSD, sample Python generation prompt:     Prompt eval 2.05s
  Prompt speed 222.9 tok&#x2F;s
  Generation 83.49s
  Speed 22.3 tok&#x2F;s
  Tokens 1,860
  First token 2.12s
  
I can get up to 128k context in memory easily which makes it potentially useable for agentic coding. Pretty impressive for a small model. Will have to try a simple agentic task. Might be useful fo...

[nik_s]: Unless I&#x27;m totally mistaken, this scores equivalent to opus 4.6 (released feb 2026) on SWE-bench verified. I&#x27;d be curious to which extent this is Ternary Bonsai bechmaxxing, the underlying benchmark moving, or just us seeing frontier-like behavior on benchmarks in tiny models with a ~6 month lag: probably a bit of all three? I&#x27;ll be the first to say that SWE-bench verified is clearly not the most representative of benchmarks sadly, but progress in small models is really excitin...

[thepoet]: Some numbers for a self-created benchmark I have for running long horizon tasks with local models on my Mac (Opus 5.5 gets a 8 of 8 Passed). The tps remains the same, but the overall task completion time has improved.                    Passed   Steps            Time
  Bonsai2        5 of 8   358              107 min
  Bonsai2.5      5 of 8   296 (17% fewer)   76 min (29% less)

[tompagenet2]: Asking genuinely as I know I&#x27;m surely being daft here: the scores for this model in the table shown seem worse than Qwen. Am I reading it right and is the upside something else (memory use, speed etc)?

[syntaxing]: Just tried it through Unsloth studio. Similar speeds to inkling 2 mini Q4 on a MacBook (300 prefill, 30 generation). Actually “useful” compared to the older version 2. The agentic calls have been solid. This has been better than Q4 inkling 2 mini which was surprising.