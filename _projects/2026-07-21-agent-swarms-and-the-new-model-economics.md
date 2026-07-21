---
layout: default
title: "Agent swarms and the new model economics"
date: 2026-07-20T18:06:13Z
slug: 2026-07-21-agent-swarms-and-the-new-model-economics
source: hackernews
category: ai-community
ai_score: 8.0
tags: "agent swarms, AI economics, version control, innovation, future tech"
---

# Agent swarms and the new model economics

**链接**: https://cursor.com/blog/agent-swarm-model-economics

**作者**: jlaneve

**发布时间**: 2026-07-20T18:06:13Z

**采集日期**: 2026-07-21


## AI 摘要

The article explores the development of agent swarms and their economic models, highlighting advancements in version control systems and coordination mechanisms.

## AI 评价

The content discusses innovative agent swarms and their economic models, with high community engagement and insightful comments. The discussion includes technical depth and potential future implications.


## 原文内容


--- Top Comments ---

[anthonypasq]: Love to see these crazy kinds of experiments going on. Even if this doesn&#x27;t 100% work or is prohibitively expensive for now, these are glimpses into the future in the same way people were talking about coding agents in 2023 when we just had tab complete.

[htrp]: &gt;The browser swarm from earlier this year peaked at roughly 1,000 commits per hour on Git. The new system peaks at around 1,000 commits per second. &gt;To facilitate this rate of activity, we built a new version control system (VCS) from scratch. Throughput was not the only reason to own this layer. Every change in the system passes through the VCS, so it is where collisions first become visible, and several of the coordination mechanisms in the next section are implemented directly inside...

[handfuloflight]: &gt; To test that progress, we returned to a task the old swarm had struggled with: building SQLite from scratch, in Rust, from nothing but its documentation. Isn&#x27;t SQLite&#x27;s source code in its training data?

[shay_ker]: How do we know if these models weren’t trained on Turso’s rewrite of SQLite in Rust? It seems both likely that they were and impossible to remove that code from pretraining. Doesn’t that make this just about LLM memorization of the training set? What am I missing?

[whinvik]: I would have loved to see more of the harness engineering shared as code. Instead we are left with only the outcome. I guess that makes sense since the harness is the product in the case of Cursor.