---
layout: default
title: "Claude Code's \"Don't Ask Again\" exposes passwords in 1,122 public GitHub files"
date: 2026-11-07T20:45:32Z
slug: 2026-11-08-claude-code-s-don-t-ask-again-exposes-passwords-in-1-122-public-github-files
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, GitHub, AI"
---

# Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files

**链接**: https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again

**作者**: shmulc

**发布时间**: 2026-11-07T20:45:32Z

**采集日期**: 2026-11-08


## AI 摘要

Claude Code's 'Don't Ask Again' feature can expose passwords in public GitHub repositories if local settings are improperly managed.

## AI 评价

The content highlights a significant security issue in Claude Code that could expose passwords, with insightful community comments providing additional context and solutions. The discussion quality is high, indicating the importance of the issue.


## 原文内容


--- Top Comments ---

[bcherny]: Boris from the Claude Code team here. Historically Claude Code has not done secret scrubbing (there are many good tools for that), but we are looking into what we can do to prevent this. That said, a few thoughts: 1. .claude&#x2F;settings.local.json is meant to stay local. This is not a file you should check into source control. We automatically gitignore it when Claude creates the file, so in this case the files were manually created and checked in (docs:  https:&#x2F;&#x2F;code.claude.com&#...

[Aurornis]: Confusing headline. They scanned for repos where people had committed their .claude&#x2F; folder and local settings and then scanned those files for commands which contained keys or passwords. So pressing “Don’t Ask Again” by itself doesn’t expose passwords by itself. If you commit your local Claude settings and in those settings you have manually approved commands containing secrets directly in the command and then you publish the repo, that’s exposed.

[tsergiu]: I&#x27;m super paranoid about the level of access AI agents have. At the same time, I want them to take away the tedium of a bunch of tasks I&#x27;m required to do, and it sucks to have to micromanage them. The best solution I&#x27;ve been able to come up is using an ephemeral vm (on an isolated network) per task, using --dangerously-skip-permissions so it doesn&#x27;t bother me. I couple that with an API proxy that lets me restrict the permissions it has to external services. So e.g. where a...

[lacoolj]: This page is like 80% repeating itself If you post output from AI, please remember to edit before publishing

[tim-projects]: Here is how to solve this: Use a private dev repo and do all your dev inside it. Releases go to a seperate public repo In the private dev repo use a script which Cherry picks release files from a whitelist that you maintain in the public repo. Essentially, you define the files and folder structure of a release and that ensures every release looks great with no cruft and it&#x27;s never going to have .secret.json in or whatever Hardcoded secrets is seperate and you can have another script to g...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYkFVX3lxTFA4Zjd5b2ZXNXBQNzg5RGdiMWNaa2RVT1VDaEV6S1pmSVIwQ0J5eTl3cV94cUxqYUdqZUl0SmNvN1RkOE45SjRPMXVPaWlCX1pldkJ6TlJmcmFUUElicWZDdVRn?oc=5" target="_blank">英伟达约7610万元AI芯片货物失窃 奥克兰警方调查中</a>&nbsp;&nbsp;<font color="#6f6f6f">观点网</font>