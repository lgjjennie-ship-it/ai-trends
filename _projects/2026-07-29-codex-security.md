---
layout: default
title: "Codex Security"
date: 2026-07-28T20:52:55Z
slug: 2026-07-29-codex-security
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cybersecurity, open-source, CLI, AI, tool"
---

# Codex Security

**链接**: https://github.com/openai/codex-security

**作者**: bakigul

**发布时间**: 2026-07-28T20:52:55Z

**采集日期**: 2026-07-29


## AI 摘要

OpenAI has open-sourced Codex Security, a new CLI tool for cybersecurity, receiving positive community feedback and discussion.

## AI 评价

The content is significant for its novel approach to cybersecurity, as indicated by the open-sourcing of a new tool and the active community discussion. The comments provide valuable insights into the tool's performance and potential improvements.


## 原文内容


--- Top Comments ---

[dangelosaurus]: Hey HN, Michael here, co-founder of Promptfoo and one of the people working on the Codex Security CLI at OpenAI. Thanks for checking this out and for flagging the auth issues. We just open-sourced it, and there&#x27;s still plenty for us to improve. Expect the product to evolve quickly. If you try it, I&#x27;d really appreciate hearing what works well and what you think we should improve. Happy to answer questions here. CLI docs:  https:&#x2F;&#x2F;learn.chatgpt.com&#x2F;docs&#x2F;security&#x...

[gregwebs]: Just ran it on a small repo. It ran for almost an hour and then got interrupted. It drained half my weekly usage on a Pro plan.     npx codex-security scan .
  [00:00] Preparing scan
  [00:00] Authentication: stored Codex credentials.
  [00:03] Preparing scan
  [01:20] Running scan
  [01:20] Preflight: worker delegation supported (up to 8 worker slots).
  [52:47] Running scan
  codex-security: Could not save the Codex Security scan: Repository HEAD changed while the scan was running. Start a ...

[ryanto]: Hey looks cool. I tried to run this on a small oss library and here&#x27;s what happened:     $ codex-security scan .
  [00:00] Preparing scan
  [00:00] Authentication: stored Codex credentials.
  [00:01] Preparing scan
  [00:42] Running scan
  [00:42] Preflight: worker delegation supported (up to 8 worker slots).
  [41:03] Running scan
  codex-security: This content was flagged for possible cybersecurity risk. If this seems wrong, try rephrasing your request. To get authorized for security w...

[schrodinger]: Quick tangent if you’re willing to humor me… I&#x27;ve been noticing that many new projects that would have been written in Python or Node a year ago are starting to be written in Go, Rust, etc. Theory: people realized there’s little benefit to Python for agents. As Zep wrote, an “agent is a long-running, concurrent, I&#x2F;O-bound process that spends most of its time waiting on a model, a tool, or a human[1]” — not a particular strength of Python. I&#x27;m wondering if you&#x27;d considered ...

[punnerud]: Not often I see companies referring to HN, thanks “ We quietly released the open-source Codex Security CLI, but Hacker News found it before we had a chance to share it here…”  https:&#x2F;&#x2F;x.com&#x2F;openai&#x2F;status&#x2F;2082263717916586117?s=46&amp;t=mnfnj...