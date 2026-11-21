---
layout: default
title: "Inkling 2 Mini"
date: 2026-11-20T20:12:19Z
slug: 2026-11-21-inkling-2-mini
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Machine Learning, Open Source, Transformer Models, Performance"
---

# Inkling 2 Mini

**链接**: https://thinkingmachines.ai/news/inkling-2-mini/

**作者**: jasondavies

**发布时间**: 2026-11-20T20:12:19Z

**采集日期**: 2026-11-21


## AI 摘要

Inkling 2 Mini is a new AI model with a looped transformer architecture that shows promising performance and is open-source, sparking interest and discussion in the community.

## AI 评价

The content discusses a significant development in AI models with a looped transformer architecture, which is highly relevant to the field. The community comments provide insightful discussions on the model's potential impact, real-world performance, and implications for local usage, indicating high engagement and relevance.


## 原文内容


--- Top Comments ---

[montroser]: This is bonkers good if these benchmarks hold up in real-world scenarios.  To be at the level of Qwen3.8-27B with a looped transformer model is quite the flex.  They just left this note on reddit:  Hope that folks find this model more amenable to local usage - the sizing was largely informed by what folks on this subreddit ask for the most haha!   There are two particularly interesting aspects of this model for local users:   We do our training end-to-end in nvfp4, and although we haven&#x27;...

[hedgehog]: Seems pretty promising in a few quick coding tests. 27 tokens&#x2F;s decode on Ryzen 395 and llama.cpp Vulkan. Besides the obvious unmerged PRs (32694, 32657, 32429, 32704) you&#x27;ll want below tiny patch for about 30% speed boost. Also, if anyone from the team is reading, if you have access for researchers I&#x27;d be interested in doing some higher volume tests &amp; harness tuning than I have hardware for personally.       --- a&#x2F;src&#x2F;llama-graph.cpp
    +++ b&#x2F;src&#x2F;llama...

[lilytweed]: Whoa, not just a model that acknowledges and embraces using a looped architecture (GPT Astra 6+ and Sol 6.1+ are only [heavily] rumored to be looped), but it&#x27;s open weights, too? I&#x27;m willing to wager that most open models will go looped in the wake of this. Wonder what it means for safety and interpretability at this level of availability.

[dgacmu]: M1 Pro Macbook, 32GB: About 10t&#x2F;s using q4 xl while running browsers&#x2F;etc. and interacting using the local browser. test 1: write a python program to sort a csv by lastname and print out fields.
Result: Nailed it. Nice python program. Nice explanation of output, if a little chatty (it gave an example output, which I didn&#x27;t ask for). test 2: my standard &quot;identify the type and year of this coin&quot; test. Failed miserably, I gave up after 12,000 tokens of it babbling incessa...

[trilogic]: This looks great and is getting a lot of fun. Interesting cyberbench:  https:&#x2F;&#x2F;x.com&#x2F;ValsAI&#x2F;status&#x2F;2123874523938497007  Thinking machines just got up in Evaluation.