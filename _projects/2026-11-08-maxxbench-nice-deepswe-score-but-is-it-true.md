---
layout: default
title: "MaxxBench – \"Nice DeepSWE score. But is it true?\""
date: 2026-11-07T17:19:00Z
slug: 2026-11-08-maxxbench-nice-deepswe-score-but-is-it-true
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, benchmarking, LLM, deepSWE, research"
---

# MaxxBench – "Nice DeepSWE score. But is it true?"

**链接**: https://maxxbench.unlap.ai/research/why-maxxbench/

**作者**: antiuniverse

**发布时间**: 2026-11-07T17:19:00Z

**采集日期**: 2026-11-08


## AI 摘要

The article critiques the MaxxBench deep-seated weaknesses and the general reliability of AI benchmarks.

## AI 评价

The content discusses the importance of benchmarking in AI and the potential issues with current benchmarks, with insightful comments that add value to the discussion.


## 原文内容


--- Top Comments ---

[kqr]: This is a great example of how to test how well a benchmark score generalises. The first order approximation is not complicated: just vary a parameter and see how much the score changes. Which parameter to vary depends on the result of the test, but the MaxxBench route of varying the task spec seems like a good default, though not always the most informative. In one of my private benchmarks I realised many of the less capable models didn&#x27;t fail because they submitted the wrong answer, bu...

[Systemerror7A69]: Academically a - very - interesting article, which confirms my ongoing suspicion of LLM Benchmarks in general ( probably why I like it so much). Another thing that caught my eye is DeepSWE having a bunch of bugs in them. The more I learn about these benchmarks the more sceptical I become. I would expect such a prolific benchmark to have these bugs ironed out by now. The practical takeaway, however, seems to be an interesting &quot;don&#x27;t use max mode&quot;. The passage about deepseeks wei...

[peri-cl]: The big trend in that graph is that  smaller models  collapse the most. Everything with &quot;-flash&quot; in the name, plus OpenAI Luna. Look at GPT 5.6-Sol vs. GPT 5.6-Luna in particular. (The GLM pair shouldn&#x27;t be expected follow this pattern, because they&#x27;re misnamed: GLM-5.3 and GLM-5.3-flash are distinct lineages. The -flash is an early release of a new pretrain on a new architecture). If this *is* the main factor, I&#x27;d expect Kimi K3.1 and Gemini Carbon would also do well...

[rao-v]: My understanding is this is less about labs training directly on the benchmark as about the labs being sloppy about creating RL environments that reflect the benchmark task They should be doing what this test did, and generalizing and significantly varying the training environments (and ensuring some of them are unexpectedly complex and unexpectedly simple). Further I suspect the smaller models are especially overfitting to these sorts of simpler RL envs (benchmarks tend to be much simpler th...

[samayashar]: Particularly interesting cases here are of GLM 5.3 and Claude Opus that seem to rely on assumptions despite clearly stated requirements. &gt; Let me just do float64; the risk of a test with &gt;2^53 numbers is minimal.
&gt; such cases are unlikely … Truncation toward zero is fine. Apart from this, we also a scenario where the models tried to pass benchmark specific tests by believing a parameter that the model printed. &gt; Seven models reward-hacked a test that believed a metric from the pro...