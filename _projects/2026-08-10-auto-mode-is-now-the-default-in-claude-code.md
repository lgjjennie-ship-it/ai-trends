---
layout: default
title: "Auto mode is now the default in Claude Code"
date: 2026-08-10T03:50:00Z
slug: 2026-08-10-auto-mode-is-now-the-default-in-claude-code
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Claude Code, AI, default settings, security, user control"
---

# Auto mode is now the default in Claude Code

**链接**: https://claude.com/blog/auto-mode-default-in-claude-code

**作者**: sbehere

**发布时间**: 2026-08-10T03:50:00Z

**采集日期**: 2026-08-10


## AI 摘要

Claude Code now defaults to auto mode, which has sparked discussions about its impact on security and user control.

## AI 评价

The content discusses a significant change in Claude Code's default settings, which could impact user behavior and security. The community comments provide diverse insights and discussions, adding value to the content.


## 原文内容


--- Top Comments ---

[frogulis]: Their findings about auto mode catching more dangerous commands, and most permission requests being accepted without scrutiny is interesting. I can totally see how that happens. On the other hand, soooo many of the tool uses it asks permission for are custom commands to replace functionality I should be able to trust once instead. e.g. instead of having a trustable Find tool, or using its already-trusted Read tool, it often will run `find` or `grep` or `cat` with a series of pipes and substit...

[kmeh]: Auto-approving commands is fast but stupid; manual approval is safe but inefficient. To solve this conundrum, I&#x27;ve been running my harnesses in a Docker container since January:  https:&#x2F;&#x2F;github.com&#x2F;aerovato&#x2F;container  If the agent does anything stupid, it will only affect the container and at worst the git tracked project. No need to waste tokens on &quot;auto mode&quot;.

[lukan]: &quot;We spent the last several months testing whether auto mode is as safe or safer than an average user clicking through prompts.&quot; Yeah, might make sense from their perspective, but no thank you. I also do click through at times without reading everything, but I like to stay in control, learn about the new code and change direction if it goes off track. This would just burn more tokens because I have to throw away much and I hope my manual approval settings will be respected also with ...

[steve_taylor]: I&#x27;ve been running Claude Code with --dangerously-skip-permissions in a Docker container for the last month or so, allowing me to get up and stretch my legs while it does its thing. I definitely wouldn&#x27;t want to run it unsandboxed.

[SwellJoe]: I made a tool to bubblewrap any agent (well, any agent I&#x27;ve used more than once), so I can run them in whatever YOLO mode they have with a pretty reasonable level of safety (it protects the rest of the system against prompt injections and supply chain attacks, it can and doesn&#x27;t try to protect the project being worked on from either).  https:&#x2F;&#x2F;github.com&#x2F;swelljoe&#x2F;flar

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMib0FVX3lxTE9WcDAySWVIZFZMejRzRlZhTUh5NVNYZVE0MjN1dkpSRlRRYUphVGpnN1ZqdUJFWjJ3LXJVNW90QTZTQjc0emlHTUh4aUQ2UFRvR2J1WTJqdXBmbjlYLTZyLUFlZ1J4Z09mSDVaZW0yMA?oc=5" target="_blank">Claude Code自动模式即将默认开启，人工干预需求大幅降低-AI应用</a>&nbsp;&nbsp;<font color="#6f6f6f">至顶网</font>