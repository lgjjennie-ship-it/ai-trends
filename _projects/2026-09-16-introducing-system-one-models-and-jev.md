---
layout: default
title: "Introducing System One Models and Jev"
date: 2026-09-15T19:25:03Z
slug: 2026-09-16-introducing-system-one-models-and-jev
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Software Engineering, Structured Outputs, Innovation, Community Engagement"
---

# Introducing System One Models and Jev

**链接**: https://typesafe.ai/blog/introducing-system-one-models-and-jev

**作者**: albelfio

**发布时间**: 2026-09-15T19:25:03Z

**采集日期**: 2026-09-16


## AI 摘要

System One Models and Jev are introduced as new tools for generating structured outputs, with potential applications in various fields.

## AI 评价

The content introduces new models with significant potential impact on software engineering, and the community discussion is insightful and diverse, indicating high relevance.


## 原文内容


--- Top Comments ---

[vintermann]: &gt; Structured outputs slot into ordinary software as fuzzy decision rules: classify, route, score, extract, or branch where hand-written logic is too brittle. Oh, I have one of those use cases, matching people in genealogy trees. You can ask all sorts of questions: do the names match? Do they match within some edit distance? Do they match according to soundex&#x2F; metaphone rules (which are themselves a ginormous set of rules for letters and letter combinations which may or may not result ...

[jacobgold]: First, congrats to the team on launching something genuinely interesting and new. Seems like a more accurate title would be &quot;Jev: Trading general purpose generation for fast typed inference&quot; or something like that. This is interesting, but the speed comparison seems misleading? A generative model that can output code in a Turing-complete language can do anything a computer can do. Jev can only generate structured output, right? This is probably super useful for classification&#x2F;r...

[lkm0]: One application that sounds pretty interesting would be the creation of wikidata pages for anything. Plug a topic&#x2F;word&#x2F;concept&#x2F;historical event in, take a bunch of wikidata properties, rephrase them as questions with the choices being the existing property values. Then feed it to LLMs or something. Does that make them more reliable? Probably not.

[cfowles]: Wasn&#x27;t really till seeing this home assistant demo they have ( https:&#x2F;&#x2F;www.loom.com&#x2F;share&#x2F;18c4dbcf8db546dfb2d7f2ef018e78e4 ) that the value really clicked for me. Seems really cool.

[futurisold]: This, combined with contracts, could make a lot of things so much fun now! For those who don&#x27;t know (which is probably everyone but me), I ported the design-by-contract pattern in Python and combined it with LLMs. This was early 2025. I originally wrote about it here:  https:&#x2F;&#x2F;leoveanu.com&#x2F;2025-03-01-dbc&#x2F; 
. Contracts are a core feature of SymbolicAI ever since. The community seems to have loved it too ( https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44399234 ). ...