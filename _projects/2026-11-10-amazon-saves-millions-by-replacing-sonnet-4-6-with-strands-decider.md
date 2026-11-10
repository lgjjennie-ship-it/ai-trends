---
layout: default
title: "Amazon saves millions by replacing Sonnet 4.6 with Strands Decider"
date: 2026-11-10T06:01:08Z
slug: 2026-11-10-amazon-saves-millions-by-replacing-sonnet-4-6-with-strands-decider
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Cost Efficiency, Operational Improvement"
---

# Amazon saves millions by replacing Sonnet 4.6 with Strands Decider

**链接**: https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/

**作者**: aloukissas

**发布时间**: 2026-11-10T06:01:08Z

**采集日期**: 2026-11-10


## AI 摘要

Amazon replaces a costly Sonnet 4.6 model with Strands Decider, saving millions annually by improving efficiency.

## AI 评价

The content discusses a significant operational cost saving by Amazon by replacing a complex model with a more efficient one, indicating a high value in terms of technical and economic impact. The community discussion is insightful, with comments exploring the implications of the switch and the broader use of AI/ML in systems.


## 原文内容


--- Top Comments ---

[armcat]: About six years ago we built a ticket classification&#x2F;routing model and pipeline [1]. The initial version was trained using SVMs, it took a couple of minutes to train, and the ticket classification was just a few milliseconds. It&#x27;s so fascinating to watch how the field moved over to LLMs, and then back to faster&#x2F;cheaper classifiers again. [1] &quot;Linnaeus: A highly reusable and adaptable ML based log classification pipeline&quot;,  https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;210...

[Kaedon]: At ~$21,700 saved per million tickets, saving millions annually would suggest at least 92 million tickets a year to reach $2 million saved. Is that about right? I initially thought of tickets as just customer support, or internal JIRAs, but the article mentions alarms, security findings, and capacity increase requests, so that makes the scale feel more plausible. Still surprising so many tickets go through the system.

[bilekas]: I&#x27;m not very up to date on the Ai lingo, but is a Strands Decoder just a decision tree in the same vein as Jev ?

[nlpnerd]: Founder of Seldon AI (www.seldon-ai.com) here. We are working on dev tools to help developers with this kind of refactoring and continual production work. Basically there is a whole host of tarpit usage of LLMs in application backends today. This is simply another case of LLMs enabling people to build what they cannot productionize or maintain. Today developers without any AI&#x2F;ML skillset can prototype a fancy new feature with LLMs, what used to require collecting and curating data to tra...

[Gasp0de]: This article is so confusing. For example, they say they tried the Strands Decider model and dismissed it for Gemma, then they continue to call the model they used Strands Decider? Did I miss something?