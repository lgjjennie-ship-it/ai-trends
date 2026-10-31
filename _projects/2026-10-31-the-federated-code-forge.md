---
layout: default
title: "The federated code forge"
date: 2026-10-30T15:44:29Z
slug: 2026-10-31-the-federated-code-forge
source: hackernews
category: ai-community
ai_score: 8.0
tags: "federated code forge, software development, community feedback, self-hosting, code management"
---

# The federated code forge

**链接**: https://tangled.org/blog/forge/

**作者**: zlliang

**发布时间**: 2026-10-30T15:44:29Z

**采集日期**: 2026-10-31


## AI 摘要

The article introduces Tangled, a new federated code forge with improved features and self-hosting capabilities, receiving positive community feedback.

## AI 评价

The content discusses a new project with potential impact on software development, and the community comments provide insightful feedback and engagement, indicating its value.


## 原文内容


--- Top Comments ---

[stryan]: Really looking forward to seeing Tangled develop! I&#x27;ve got a side project that&#x27;s main repo and CI is on my self-hosted Gitea but code and releases are mirrored to Github; I&#x27;m hoping to move it off Gitea and onto Tangled for code&#x2F;releases&#x2F;potentially CI and just keep Github for discoverability&#x2F;backups&#x2F;namespace &quot;squatting&quot;.
Just need git-bug to add a Tangled bridge so I can keep issues synced and (ideally) for there to be instructions for running th...

[icy]: Hi! Tangled co-founder here. We&#x27;re super stoked with this launch -- we&#x27;ve stabilized our AT Protocol lexicons, completely overhauled our architecture and UI, and made self-hosting the entire stack (or parts of it!) incredibly easy. We&#x27;ve also shipped support for organizations, and have private repos rolling out in the following couple weeks. Happy to answer any questions at all.

[bluerooibos]: I hope this takes off! Some feedback:- * I found the UI on the homepage&#x2F;timeline a bit busy - lots going on.  Notifications, Recents, Announcements don&#x27;t seem like they need to live on this page? * The Activity chart on a users profile page seems a bit wild to me.  I&#x27;d suggest simplifying it or just using what GitHub&#x2F;GitLab use with their square grid activity chart - it&#x27;s what users are most familiar with.   It&#x27;s kind of analagous to all the LLM&#x2F;Chat applica...

[ivanjermakov]: Finnish startup Tangled raises €3.8M to reinvent code collaboration  https:&#x2F;&#x2F;www.vestbee.com&#x2F;insights&#x2F;articles&#x2F;tangled-raises-3-8...

[eterm]: I tried to run:       git clone https:&#x2F;&#x2F;tangled.org&#x2F;tangled.org&#x2F;core 
  
And it failed?       Cloning into &#x27;core&#x27;...
    warning: redirecting to https:&#x2F;&#x2F;knot1.tangled.sh&#x2F;did:plc:j5hmlfdrwkvtxm7cjmu7j2is&#x2F;
    remote: Thanks for using knot1.tangled.sh!
    remote: Enumerating objects: 99191, done.
    remote: Total 99191, done.
    Receiving objects: 100% (99191&#x2F;99191), 122.19 MiB | 39.12 MiB&#x2F;s, done.
    Resolving deltas: 100% (49286&...

--- From hackernews ---

--- Top Comments ---

[Twey]: It was all going great until I read &gt; The design also avoids problems like function coloring and plays well with Rust&#x27;s ownership rules. Async is not I&#x2F;O. It can be  used  for I&#x2F;O, but it&#x27;s just a way of writing pure, deterministic state machines that keeps a logical flow together instead of scattered over a bunch of transitions. Even if you choose to manually compile your async flows into explicit state machines, you still have to deal with ‘function colouring’ (a.k.a....

[monocasa]: Sweet, this is basically how I design my protocol implementations in rust as well. Way more testable, the bulk can be shared between async and blocking IO, it&#x27;s a lot easier to completely ban unsafe in your dependencies (excepting std and core), etc.

[temp0826]: Mullvad spun their own implementation off of boringtun as well (called gotatun[0]) [0]  https:&#x2F;&#x2F;github.com&#x2F;mullvad&#x2F;gotatun

[mlhpdx]: One of the fundamentally great things about the Wireguard protocol is the simplicity. A small codebase can implement it, and that’s lead to some great libraries and innovation. Another great (and subtle) thing is the monotonically increasing sequence number. Note that it isn’t incrementing, like DTLS. This small thing makes it so much easier to implement with efficient concurrency, and event external state (i.e. distributed concurrency). That latter bit we’ve done in our own library. Edit: ty...

[dennysora-main]: I&#x27;ve recently been developing a VPN Manager implementation using Rust, and the underlying architecture also uses WireGuard. Currently, I&#x27;m using WireGuard gotatun developed by Mullvad. I wonder if you&#x27;ve tested any related data, such as performance curves, connection jitter, and so on, as well as things like security implementations.