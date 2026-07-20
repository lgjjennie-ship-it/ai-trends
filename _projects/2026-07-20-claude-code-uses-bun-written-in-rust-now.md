---
layout: default
title: "Claude Code uses Bun written in Rust now"
date: 2026-07-19T10:03:23Z
slug: 2026-07-20-claude-code-uses-bun-written-in-rust-now
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Rust, Bun, Performance, Technical Development, Community Feedback"
---

# Claude Code uses Bun written in Rust now

**链接**: https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/

**作者**: tosh

**发布时间**: 2026-07-19T10:03:23Z

**采集日期**: 2026-07-20


## AI 摘要

Claude Code has been rewritten using Bun written in Rust, improving performance and safety.

## AI 评价

The content discusses a significant technical shift by using Rust in Bun, which is important for performance and safety. The community comments provide diverse insights and critiques, enhancing the value of the discussion.


## 原文内容


--- Top Comments ---

[mrothroc]: Drilling into the original article where Jarred explained the reasoning behind the change, It&#x27;s pretty clear that under zig the team was doing things by hand that are automatic in rust. Humans and agents share one thing: they are both non-deterministic. He talks about the issue of tracking memory lifecycles manually in zig so it can be explicitly freed. As expected, this leads to a long list of bugs where people missed things. Rust does this automatically. It removes an entire class of e...

[gabrieledarrigo]: Bah. Personally my take on the entire affair is quite negative, whatever Jarred or Simonw says about it. I think Bun owned by Anthropic and the entire rewrite with AI is not the real point (even if it&#x27;s quite interesting, though). My take is that Jarred, and Bun,didn&#x27;t demonstrate a serious, adult approach, from &quot;this is my branch, you are overreacting&quot; message to just proceeding with a 1mil+ PR merged in less than month. The communication is the issue, and it was handled ...

[embedding-shape]: &gt; For me this outputs Bun v1.4.0 (macOS arm64). The most recent release of Bun on GitHub is currently v1.3.14 from May 12th, so that v1.4.0 version number in Claude supports them shipping a preview of a not-yet-released Bun version. And so, the FOSS project &quot;Bun&quot; silently dies in darkness and is now something completely else. I&#x27;m glad I still had &quot;Investigate if Bun is worth it&quot; on my TODO list and hadn&#x27;t yet gotten to it. What is the governance structure for ...

[weakfish]: Maybe I’m taking crazy pills, but I’m still stuck on “why the hell does a TUI need to run in terminal React by way of JavaScript” The fact that Anthropic felt the need to buy a runtime so they could make their TUI better speaks more to the quality of engineering than anything else IMO. If rewrites are so easy, why not rewrite CC in a native language? Would’ve been a hell of a lot cheaper.

[GuB-42]: Why all the mess with Bun? Couldn&#x27;t they have rewritten Claude Code in Rust directly? No more need for a JS runtime, better performance, etc... If their agents can do Zig to Rust, why not JS to Rust?