---
layout: default
title: "I'm making LLMs work on small and old devices"
date: 2026-11-12T15:23:10Z
slug: 2026-11-13-i-m-making-llms-work-on-small-and-old-devices
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, model optimization, low-resource computing, AI on edge, open source"
---

# I'm making LLMs work on small and old devices

**链接**: https://github.com/hyperionaidev/smolmaxxing/

**作者**: mrashad74

**发布时间**: 2026-11-12T15:23:10Z

**采集日期**: 2026-11-13


## AI 摘要

An open-source project enabling the running of 16B LLM models on devices with less than 1GB of usable memory, showcasing advancements in model optimization.

## AI 评价

The project demonstrates significant technical achievement in running large language models on low-resource devices, with insightful community comments highlighting the progress and potential impact. The high engagement score further validates the importance of the content.


## 原文内容


--- Top Comments ---

[Farmadupe2]: For the last five months or so, opus and fable have both been able to do this task as a soneshot prompt. An inference engine is almost pure compute and to a first approximation the only operation your hardware needs to support to do llm inference is multiplication [the rest of an inference engine is &quot;some trig&quot;]. So to get any model working on $OLD_HARDWARE, the hardest part of the task is now sourcing the hardware itself and giving the agent ssh access -- a modern agent will be abl...

[mrashad74]: Recently I started this open source project at my AI company, where I&#x27;m trying to make LLMs working Now Reached 16B models running on iPad Air 1st gen and xiaomi tv box, both have less than 1GB of usable memory, and reached some decent speeds given the hardware. I&#x27;m open sourcing the effort done, kernels developed and results for everyone to re-produce and push more, also the modified models are on hugging face :  https:&#x2F;&#x2F;huggingface.co&#x2F;hyperionaidev  I want a more ch...

[nico]: This is very cool. Love the trend of optimizing small models I’ve been working on small local models and it’s amazing how fast the tech has progressed A year ago, I was creating conversational characters by finetuning a qwen 2.5 0.5b param model, and it worked pretty well. But no reasoning or math capabilities, and still required some decent specs to run; could maybe do well enough in a beefy raspberry pi But now, I have a locally trained 6.5M param model that does reasoning, solves multi-ste...

[yjftsjthsd-h]: It&#x27;s technically sweet regardless, so don&#x27;t take this as even a little bit of negative pushback, but I am curious what the utility of these small models is? Are they smart enough to be useful on practical tasks? What are people doing with them?

[bArray]: So this work appears to work on inference speed and getting large models to work on simpler RAM constrained hardware, whereas my (private) work has been on getting simpler RAM constrained hardware to give agentic behaviour with small models. I&#x27;ve already started the work of using some of the learnings described in this repository. Looking forward to seeing what can be achieved.