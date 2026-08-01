---
layout: default
title: "Everyone is building LLM routers, we deprecated ours"
date: 2026-07-31T18:06:39Z
slug: 2026-08-01-everyone-is-building-llm-routers-we-deprecated-ours
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLM routing, AI, large language models, technology trends, community insights"
---

# Everyone is building LLM routers, we deprecated ours

**链接**: https://manifest.build/blog/why-we-deprecated-our-llm-router/

**作者**: brunaxLorax

**发布时间**: 2026-07-31T18:06:39Z

**采集日期**: 2026-08-01


## AI 摘要

A company deprecates its LLM router due to the rapidly evolving landscape of large language models and the challenges in routing queries effectively.

## AI 评价

The content discusses a significant development in the field of LLM routing, and the community comments provide insightful discussions on the challenges and trade-offs involved, indicating high relevance and value.


## 原文内容


--- Top Comments ---

[overgard]: &gt; Just as a painter knows exactly what brush they need to use, and the craftsman carefully chooses their tools, engineers should understand trade-offs and subtleties of the different models. I&#x27;m really skeptical of this idea. Pragmatically: who has time to understand the nuances of these models when there&#x27;s like a new one every week? Also without any view into the training, figuring out what each model is potentially good at is more or less just throwing spaghetti against the wal...

[dweez]: I spent a lot of time researching LLM routing last year and also came to the conclusion that it&#x27;s generally not worth the effort. It&#x27;s too hard to understand the difficulty of a query a priori. One specific challenge I was seeing is that difficulty depends a lot on what information is retrievable by the agent. Consider the question &quot;what is the 5-state busy beaver number?&quot; ( https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Busy_beaver ). In 2023 this would be a Mythos-tie...

[kaycey2022]: It seems apparent to me that task complexity can’t be determined by prompt alone. How? A prompt is just a simple rambling. An agent will go through many many tool calls and steering just to arrive at the right approach. A serious router therefore needs to build up a dataset of how different models responded, end to end, to different tasks on different contexts. I won’t comment on whether the current frontier models can reliably judge these outputs, but I am sceptical about that. And moreover ...

[velcrovan]: Ironically, my confidence that a human had at least an active part in writing&#x2F;editing this article went up because of this train wreck of a sentence: &gt; &quot;A cache-aware model router will take that into account by adding stickiness to the initially chosen model and keeps querying it.&quot;

[jeremyjh]: I agree with one distinction - coding agent workflows can use defined subagent roles that are pinned to specific models and I have found this very effective. The orchestrator is building all the context to make these assignments - it’s not a dumb router. Using Minimax M3 for exploration and librarian tasks for example is fast and cheap - my $10 plan lasts all month and saves a lot of tokens for my main coding plan.