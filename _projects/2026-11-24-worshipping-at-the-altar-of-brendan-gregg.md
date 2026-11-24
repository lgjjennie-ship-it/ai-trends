---
layout: default
title: "Worshipping at the Altar of Brendan Gregg"
date: 2026-11-24T10:50:14Z
slug: 2026-11-24-worshipping-at-the-altar-of-brendan-gregg
source: hackernews
category: ai-community
ai_score: 8.0
tags: "performance analysis, Brendan Gregg, flame graphs, deterministic VMs, software engineering"
---

# Worshipping at the Altar of Brendan Gregg

**链接**: https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg

**作者**: kqr

**发布时间**: 2026-11-24T10:50:14Z

**采集日期**: 2026-11-24


## AI 摘要

An article celebrates Brendan Gregg's work on performance analysis tools like deterministic VMs and flame graphs, with community comments discussing their merits and challenges.

## AI 评价

The content discusses Brendan Gregg's significant contributions to performance analysis, particularly deterministic VMs and flame graphs, which are highly relevant in software engineering. The community comments provide insightful discussions on the practical applications and limitations of these tools, enhancing the content's value.


## 原文内容


--- Top Comments ---

[aidanhs]: I really like the idea of a deterministic VM (I like Antithesis for a similar reason!), though I saw on another post that your VM is single threaded which I feel like must compromise a lot of performance analyses? E.g. when you have very high throughput multithreaded pipelines. Personally I&#x27;ve really cooled on flamegraphs for the purpose of doing multithreaded performance analysis - it&#x27;s so hard to infer cross-thread dependencies. I&#x27;d encourage people interested in performance ...

[yuan278501381]: Profiling desktop apps on Windows taught me the exact same lesson: your intuition about where memory goes is almost always wrong until you inspect loaded modules and private commit heaps. We once chased a mysterious 60 MB jump in a tiny C++ process, only to find out via VMMap&#x2F;ETW that calling the standard OS file picker caused a third-party cloud drive shell extension to load the entire .NET 4 CLR into our process permanently. Same story with GPU drivers pinning hundreds of MBs after a D...

[zinc_chest63]: Flame graphs alone justify the worship, found a hot regex in our billing service in ten minutes

[despacito]: Disappointed it doesn’t involve more screaming

--- From hackernews ---

--- Top Comments ---

[freakynit]: This actually worked amazingly well. I tested a lot of sites.. a few that were already opened in my firefox, and a few many others.. Every single one of them rendered correctly. This is truly amazing.. a new browser written from scratch that actually works! The only minor issue: page scrolling is a bit jerky.. not much.. just a little bit.. it&#x27;s noticeable. A huge lots of congratulations to the Ladybird team. What a wonderful accomplishment truly this is.

[drnick1]: I really do hope that, down the road, Ladybird will take the fingerprinting problem seriously. What a modern browser truly needs IMO is a non-compliant JS mode that returns spoofed or randomized values across the entire userbase to effectively make identifying unique users far harder. Permissions should also be far more granular, and a website should not be allowed to know if the window or tab is active, and things like disabling selection or paste should not be allowed by default. In short, ...

[kvuj]: Ladybird ditching a bunch of self developed libraries for production grade ones (like sqlite or skia) helped them immensely improve their browser. But I can&#x27;t help but feel nostalgic at the original hacker spirit of LB+SerenityOS.

[pooriamokhtari]: This is amazing! It has a built-in ad-blocker, and it correctly rendered all the websites I use daily. I&#x27;m curious about how secure it is to use it however, since the web is old and has a huge stack of remedies and patches required to nail precisely for a browser to be secure. Definitely following this one. it&#x27;s refreshing to see there is hope for an alternative that has the potential to weaken the browser monopoly so that people are not forced to use the &quot;standards&quot; that ...

[alentred]: I am seriously impressed, BRAVO for this! I have tried a few websites that I considered tricky (from overloaded news websites to some more esoteric like ProxMox) and all seems to be in order. I am seriously impressed by the latter, I honestly didn&#x27;t expect NoVNC [web view for remote virtual display] to be even snappier than it is in Firefox. I don&#x27;t know of course if this ever becomes my daily driver, but I am surely giving it a serious try starting now. I am super excited and suppo...