---
layout: default
title: "Ollaya – Ollama for open-source, Jev-style decision models"
date: 2026-09-25T18:33:50Z
slug: 2026-09-26-ollaya-ollama-for-open-source-jev-style-decision-models
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Open Source, Decision Models, Software Engineering, Community Discussion"
---

# Ollaya – Ollama for open-source, Jev-style decision models

**链接**: https://ollaya.dev/

**作者**: Ardakilic

**发布时间**: 2026-09-25T18:33:50Z

**采集日期**: 2026-09-26


## AI 摘要

Ollaya is an open-source project that aims to enhance decision models similar to Ollama, with community discussions focusing on its implications and comparisons with other models.

## AI 评价

The content discusses a significant open-source project (Ollaya) that aims to improve decision models, which is relevant to AI/ML and software engineering. The community comments provide insightful discussions on the implications of open-source decision models, the differences between various models, and the potential impact on AI startups, indicating high engagement and relevance.


## 原文内容


--- Top Comments ---

[pradn]: I&#x27;m not sure what this means for AI startups if their innovations can be copied by OSS so quickly (what, like 2 weeks?). There&#x27;s &quot;consumer surplus&quot; for everyone, to borrow an economic concept. But we do ideally want some of the surplus to flow to the innovator, too. I know there were precursors, but that&#x27;s fine - it&#x27;s hard to have a totally novel idea in such a popular field. I don&#x27;t know what the end game is for TypeSafe - they&#x27;d need to demonstrate pe...

[fooker]: For everyone dismissing Jev&#x27;s innovation as being trivial, no it&#x27;s not. It is definitely not the MNIST classifier you had trained in 2019. The difference is that you only train it once and the modern LLM machinery sort of takes care of that with large contexts. It&#x27;s great that Jev proved this is a viable product. I&#x27;d expect a great many research innovations coming from making this work better&#x2F;faster&#x2F;cheaper, and around interfacing modern agents with it.

[george_max]: Has anyone actually seen better or the same results with Laya compared to Jev? From my experience, Laya performs significantly worse. It&#x27;s less confident and often makes wrong decisions with more complex queries.

[alex7o]: Guys I have a real q, what is the difference between an instruct based re-ranker and laya&#x2F;jev I just don&#x27;t see it. Edit: One is that jev&#x2F;laya are tuned to have better probabilities, but a reranker can be fine tuned to do that as well. And jev&#x2F;laya use RLCD?

[solaire_oa]: I installed it, I tried the examples, it works.... But forgive my lack of imagination... what is this useful for? Like, their example is of classification for a support interface.... `refund_requested`. Pretty convenient bool given the example is about a refund- what if 99% of submissions don&#x27;t ask about a refund? Also, is that user not a `churn_risk`? What could possibly qualify as a churn risk if not a user asking for a refund?  https:&#x2F;&#x2F;ollaya.dev&#x2F;library&#x2F;laya  The ...