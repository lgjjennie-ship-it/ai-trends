---
layout: default
title: "Agents don't need memory, they need documentation"
date: 2026-10-03T17:03:37Z
slug: 2026-10-04-agents-don-t-need-memory-they-need-documentation
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Software Engineering, Documentation, Agents, Feedback"
---

# Agents don't need memory, they need documentation

**链接**: https://liao.gg/blog/agents-dont-need-memory

**作者**: kmeh

**发布时间**: 2026-10-03T17:03:37Z

**采集日期**: 2026-10-04


## AI 摘要

The blog post argues that AI agents need documentation over memory, with community comments highlighting deterministic feedback, enforcement mechanisms, and integration with existing documentation practices.

## AI 评价

The content discusses a significant topic in AI and software engineering with insightful community comments that add value, enhancing the importance of the discussion.


## 原文内容


--- Top Comments ---

[Garlef]: I think they even more so need deterministic feedback: I tried an approach based on the following idea recently and it&#x27;s amazing - Lint rules where the error messages contain an explanation on how to deal with the issue.  https:&#x2F;&#x2F;habit-hooks.com&#x2F;  I&#x27;m using it to foster IOSP (integration operation segregation principle) for example.

[spike021]: I think whichever one is used, there needs to be a way to enforce what&#x27;s written. If I say &quot;use jq instead of writing a python script to parse json&quot; it should never write adhoc python scripts to parse json. Yet that constantly happens to me anyway.

[gregwebs]: Agreed, and this seems better. My thought though has always been that I don&#x27;t want there to be agent-only designated documentation. I use mattpocock&#x2F;skills and that generates ADRs (Architectural Decision Records). That only uses skills, including a setup skill that will write a few pointers in AGENTS.md. I always have a CONTRIBUTING.md to document development flow and a CODING_STANDARDS.md. Between those and the README.md and architecture documentation and commit messages the agents...

[atworkc]: I&#x27;ve settled on just a simple folder called `workbench` for some reason the new models know exactly what&#x27;s up with it. Git ignored The only &quot;prompt&quot; is in AGENTS.md saying that this thing exists and there&#x27;s a map.md &lt;- which is a one liner reference to whatever the agent stores in there. And usually, I tackle a new feature, and at some point tell it to store to jot down notes in workbench if I&#x27;m comfortable with it (and if it needs to be stored in memory) This...

[b-karl]: We use Claude Code in our company and I also agree memories go stale and pollute the context over time, especially when the state changes externally. E.g. someone does a refactor or introduces a pattern and I was not involved in developing it so my local memories did not get aligned. My most recent example were some deprecated and archived repos that kept getting added to plans for patching issues. We use a private Claude plugin marketplace for internal plugins and skills and I try to regular...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiSEFVX3lxTE10cmNhM2gwVU90RWxvUDZsM1RBRXhqYzdkd3U3bmN2MHpuUWxEQ2dIa0tNVGZ6X0RfcjVLUnVlX3dQeno2bTExbw?oc=5" target="_blank">都在接DeepSeek、WorkBuddy，券商AI最终靠什么拉开差距？</a>&nbsp;&nbsp;<font color="#6f6f6f">财联社</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMifkFVX3lxTE0yV1hjY3V1STVoSUtSb2hMdTJ3TF9RcTFIdXBzTGxoT1JWVGZGamw4OVUwZlREaVhKbGdETlhzcjVBblBDaEJlTXZ6MGVOOXIyZTUwcnF4LWRUaURPVXVMc2l4UGVtcENsUWpHUWRTajdoYmNPQldFckJjNDBvQQ?oc=5" target="_blank">System76 更新 COSMIC 项目 PR 模板，禁止贡献者提交利用 AI 辅助完成的代码</a>&nbsp;&nbsp;<font color="#6f6f6f">手机新浪网</font>