---
layout: default
title: "Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon with no GPU"
date: 2026-07-15T15:34:05Z
slug: 2026-07-16-running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Large Language Models, Efficiency, Hardware, Cloud Computing"
---

# Running Gemma 4 26B at 5 tokens/sec on a 13-year-old Xeon with no GPU

**链接**: https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/

**作者**: neomindryan

**发布时间**: 2026-07-15T15:34:05Z

**采集日期**: 2026-07-16


## AI 摘要

A report on running a 26B model at 5 tokens/sec on a 13-year-old Xeon without a GPU, sparking community discussion on local vs. cloud model running costs.

## AI 评价

The content discusses running a large language model efficiently on old hardware, which is a significant technical achievement. The community comments provide insightful discussions on the cost and feasibility of running such models locally versus using cloud services, adding value to the post.


## 原文内容


--- Top Comments ---

[dwa3592]: I have a prediction. By the mid of 2027, we will have &gt;200B MoE models running on basic consumer hardware. I am running Qwen3.6-35B-A3B locally on my 16GB mac with 7-9 tokens&#x2F;second. Link -  https:&#x2F;&#x2F;github.com&#x2F;deepanwadhwa&#x2F;samosa-chat  This is a GPT4 level model running locally with a decent speed on a 16gb ram macbook air.

[hagen8]: Some ppl don&#x27;t like to hear it. But I would assume that token costs when using an inference provider are cheaper than electricity of using locally. If we just take into account output token generation for simplicity. With 5tps u get 18k tokens an hour. That would costs around 0.005USD from an inference provider. I estimate that the server consumes probably around 500W during inference. In Germany where 1kwh cost around 0.3USD, 18k tokens inferred locally would therefore cost 0.15USD whic...

[Aurornis]: A dual Xeon of this era is probably pulling 300W or more when loaded. At national average electricity prices, that’s $1.35 per day. More during the summer if you have to cool the space. If you run it 24&#x2F;7 and ignore prompt processing time (not a good assumption at all) it would get around 400,000 tokens in a day. That’s about $0.30 per million output tokens. Coincidentally, that’s the same price for this model on OpenRouter right now, but OpenRouter token gen will be 8X faster. There are...

[hparadiz]: Here&#x27;s my report running several different models on a dual Xeon with 256 GB of DDR4 and no GPU.  https:&#x2F;&#x2F;gist.github.com&#x2F;hparadiz&#x2F;f3596d00a62d8ebb2dadcc46ee5...

[throwaway2027]: That&#x27;s quite slow I&#x27;m getting 8-12 t&#x2F;s on a 13 year old CPU. (Speed varies by context size and other settings who knows)  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48354801