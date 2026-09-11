---
layout: default
title: "OpenAI Agents API"
date: 2026-09-10T19:43:22Z
slug: 2026-09-11-openai-agents-api
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, OpenAI, API, Agents, MachineLearning"
---

# OpenAI Agents API

**链接**: https://developers.openai.com/api/docs/guides/agents-api/overview

**作者**: aquir

**发布时间**: 2026-09-10T19:43:22Z

**采集日期**: 2026-09-11


## AI 摘要

OpenAI introduces the Agents API, enabling easier integration of agentic capabilities into products with options for self-hosting sandboxes.

## AI 评价

The content discusses the OpenAI Agents API, which is a significant development in AI and could have a high impact on how AI agents are integrated into products. The community comments provide diverse insights and discussions, indicating high engagement and relevance.


## 原文内容


--- Top Comments ---

[karakanb]: I launched Epho a few weeks ago as an API like this but for all harnesses:  https:&#x2F;&#x2F;epho.io  I built it primarily for ourselves: we are building an AI data engineer, and we need a way to run many of them in parallel securely. An API for this seemed like the most obvious path forward. It makes it trivial to bring agentic capabilities into any product surface without having to deal with sandboxes, reliability issues, compatibility problems, and more. I think it also makes sense from O...

[bluesnowmonkey]: I think we’re still figuring out the right abstraction for offering agents as a product. - LLMs are a great foundation but building your own harness is a huge undertaking, a deep rabbit hole. - There are harnesses available as open source libraries but that’s still coupled to an environment. Where does the state persist? Like maybe I’m a Cloudflare worker and don’t even have a file system. Agent as a service like this lets you plug in the tools it needs to be whatever kind of agent you want. ...

[andrewchambers]: I&#x27;ve recently had great success running codex in a regular qemu VM and using codex remote control to talk to it from my phone. Honestly works extremely well as a personal assistant. I can see why turning it into an API makes sense, just be aware you might not need to lock yourself in if you can setup your own VMs.

[6thbit]: Buried in there, note you can opt to self-host your sandbox  https:&#x2F;&#x2F;developers.openai.com&#x2F;api&#x2F;docs&#x2F;guides&#x2F;agents-api&#x2F;env...  That makes this much more enticing, and potentially eases transition between providers.

[monneyboi]: Instead of this push for more vendor lock-in, give us the reasoning tokens we pay for. Thanks.