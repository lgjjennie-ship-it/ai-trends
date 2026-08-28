---
layout: default
title: "OpenAI: Migrating to HTTPX2"
date: 2026-08-28T11:51:20Z
slug: 2026-08-28-openai-migrating-to-httpx2
source: hackernews
category: ai-community
ai_score: 8.0
tags: "OpenAI, HTTPX2, Python, API Development, Software Engineering"
---

# OpenAI: Migrating to HTTPX2

**链接**: https://github.com/openai/openai-python/blob/main/httpx2.md

**作者**: tosh

**发布时间**: 2026-08-28T11:51:20Z

**采集日期**: 2026-08-28


## AI 摘要

OpenAI is migrating to HTTPX2 due to stability concerns with the upcoming 1.0 release of HTTPX.

## AI 评价

The content discusses a significant migration by OpenAI to HTTPX2, which is important for software engineering and AI/ML communities. The discussion quality is high with diverse viewpoints and insightful comments, further validating the importance of the topic.


## 原文内容


--- Top Comments ---

[simonw]: Anthropic made the same change a few weeks after OpenAI did:  https:&#x2F;&#x2F;github.com&#x2F;anthropics&#x2F;anthropic-sdk-python&#x2F;releases&#x2F;...  The problem with httpx as a dependency is that it&#x27;s currently working towards a 1.0 release which will be full of breaking changes. The httpx2 project is essentially a fork that promises  not  to break the existing API, which makes it a more stable dependency to build against. I wrote a pretty long comment about my concerns for the b...

[delduca]: Why this is in the frontpage?

[jklehm]: Wonder if they evaluated httpx2 vs niquests:  https:&#x2F;&#x2F;github.com&#x2F;jawah&#x2F;niquests

[ZeroCool2u]: The requests packages fundamental API is good enough and is now maintained by the PSF. I don&#x27;t understand why OpenAI and Anthropic don&#x27;t just throw some $$$ to the PSF for focused improvements and expansion of it.

[londons_explore]: There seems to be a bunch of downsides mentioned... But what are the upsides of this change?