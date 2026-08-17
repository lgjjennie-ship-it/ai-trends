---
layout: default
title: "Qwen 3.8 27B is excellent, but it defaults to overthinking things"
date: 2026-08-16T23:45:09Z
slug: 2026-08-17-qwen-3-8-27b-is-excellent-but-it-defaults-to-overthinking-things
source: hackernews
category: ai-community
ai_score: 8.0
tags: "local models, AI, reasoning, consumer hardware, model improvements"
---

# Qwen 3.8 27B is excellent, but it defaults to overthinking things

**链接**: https://simonwillison.net/2026/Aug/16/qwen-38-27b/

**作者**: bilsbie

**发布时间**: 2026-08-16T23:45:09Z

**采集日期**: 2026-08-17


## AI 摘要

Qwen 3.8 27B is a locally accessible model showing significant improvements in reasoning and capabilities, sparking insightful community discussion.

## AI 评价

The content discusses a significant local model improvement, Qwen 3.8 27B, which shows progress in consumer hardware capabilities. The community comments are insightful, discussing model behavior, reasoning, and potential improvements, indicating high relevance and engagement.


## 原文内容


--- Top Comments ---

[chvid]: “The fact that a 17GB file can do all of this stuff on my home machines is a miracle. Once again, I’m delighted and amazed at how much progress local models have made this year.” I think that should be the blinking headline - this shows what can be done with consumer hardware.

[jatora]: All current era models overthink as it&#x27;s a product of their RL incentives (or distillation of models with them...) From my reading of the Fable 5 and Opus 5 System cards, my reconstruction is something like: Finish the task → make externally observable evidence that it is finished → check your own work → fix problems → don&#x27;t stop prematurely → satisfy the evaluator comprehensively. That is fantastic for SWE benchmarks and autonomous agents. It also naturally creates pathologies: und...

[RachelF]: To me, the amazing thing is that we now have local models that rival the reasoning of high end models from about a year ago. I hope this trend continues.

[xlayn]: I have this branch of llama.cpp that among other things (like patching the template to not break the kv cache, and saving conversations to disk so you can resume quickly days after) also accept the reasoning effort flag here  https:&#x2F;&#x2F;github.com&#x2F;alainnothere&#x2F;llama.cpp&#x2F;tree&#x2F;disk-cache-ev...  I did testing and the reasoning effort can be set per message, I was not aware of the option of none mentioned by @xscott, I tested but didn&#x27;t see any change, I think ther...

[jedbrooke]: I feel like the current “reasoning” that LLMs are doing has got to be a dead end eventually. Every time I have to read another answer with “but wait” and “Actually,” as they “reason” their way to a (sometimes) better answer, I feel like there’s got to be a way to just shortcut to the actual correct answer instead of burning all these token going in circles mimicking actual thought