---
layout: default
title: "Show HN: Whiteboard (YC W26) – An open-source IDE for thoughtful software design"
date: 2026-09-24T17:21:36Z
slug: 2026-09-25-show-hn-whiteboard-yc-w26-an-open-source-ide-for-thoughtful-software-design
source: hackernews
category: ai-community
ai_score: 8.0
tags: "open-source, software-design, collaboration, AI, IDE"
---

# Show HN: Whiteboard (YC W26) – An open-source IDE for thoughtful software design

**链接**: https://github.com/devdotfast/whiteboard

**作者**: sidharthkmenon

**发布时间**: 2026-09-24T17:21:36Z

**采集日期**: 2026-09-25


## AI 摘要

Whiteboard is an open-source desktop app that allows humans and AI agents to collaboratively design software together.

## AI 评价

The content introduces a novel open-source IDE for collaborative software design, which is highly relevant to software engineering and AI/ML. The community comments are insightful and show active engagement, further increasing the content's value.


## 原文内容

Hello! We’re Sid, Alex, Ketan, and Milan. We’re building Whiteboard (<a href="https:&#x2F;&#x2F;whiteboard.dev.fast&#x2F;">https:&#x2F;&#x2F;whiteboard.dev.fast&#x2F;</a>), an open-source desktop app where humans and agents can architect software together in a common workspace. Here’s our repo: <a href="https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard</a>.<p>We were missing the feeling of a “whiteboard session” with another dev where you leave with a deep understanding of a system, so we built this app for ourselves. Whiteboard plugs into the tools you already use - e.g. Claude Code, Codex, etc. – and gives your agent an SDK to draw on an in-app canvas to describe its work. We began with an MVP based on HTML artifacts and started rethinking the app as we ran into limitations:<p>1. Built on top of CodeOSS: We found that in pure HTML tools it was hard to connect a spec or diagram to code. In Whiteboard, when you click on visualizations like a sequence diagram, an entity relationship diagram, or a quote from the agent’s trace, you can jump to the underlying code directly. When navigating code, you get keybindings and LSP support from VSCode out of the box. We’ve found this is especially valuable because tradeoffs are often only discovered after a first pass at implementation (re: slop)<p>2. Semantic diff viewer: we wrote a semantic, AST-aware diff viewer in Rust so you can only view the code changes which are relevant to you [1]. We’ve set up some sane defaults: large added functions are summarized as pseudocode, and things like unit tests and large documentation changes are collapsed &#x2F; hidden. This is all customizable with a WASM-based plugin system.<p>3. Decision Log: We found it difficult to reason about what set of decisions our agents made autonomously. So we built tools for agents to query and link their own traces to the Whiteboard, so you can understand how the requirements that you set were implemented, and understand what decisions your agent made autonomously.<p>Here’s a quick demo video explaining more: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ChPn3ftULWE" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ChPn3ftULWE</a><p>Folks at companies like Salesforce and Modal are using Whiteboard today as a review tool for architecture or spec-level changes – really any change where they want to be involved:<p>1. Reviewing your own coding agent’s work: because Whiteboard makes it easier to review large amounts of code, folks will typically have their AI agents create a prototype and a corresponding Whiteboard session so they can iterate on the design.<p>2. Reviewing other people’s changes: We’ve found that Whiteboard is particularly helpful when composed with tools like Greptile. For example, you can run an automated code reviewer on small changes and escalate to a Whiteboard session for the changes that require human judgement.<p>Why we built this: we’re four buddies from college who quit our jobs as tech leads right before agentic coding became industry standard. As we iterated towards an MVP for a previous idea, we struggled to maintain a comprehensible codebase while reaping all the velocity benefits of agentic coding. As more PRs were merged without our understanding, we felt a ‘cognitive debt’ begin to seep in, until it became difficult for us to even contribute to the system [2].<p>We’re releasing our desktop app under an MIT license. Please poke through and feel free to contribute! Eventually we’ll charge companies for a hosted web version that manages whiteboard session creation alongside features like trajectory storage and multiplayer reviews. Everything will always remain self-hostable.<p>Thanks for reading, and we hope you try it out! We would love to hear any feedback and to learn from your expertise.<p>Here’s are the project links again: <a href="https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard</a>, and you can install (for MacOS + Linux) at <a href="https:&#x2F;&#x2F;install.dev.fast">https:&#x2F;&#x2F;install.dev.fast</a><p>[1] diffs library: <a href="https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;diffr" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;diffr</a>
[2] Credit for the term ‘cognitive debt’ goes to  <a href="https:&#x2F;&#x2F;www.geoffreylitt.com&#x2F;2026&#x2F;07&#x2F;02&#x2F;understanding-is-the-new-bottleneck" rel="nofollow">https:&#x2F;&#x2F;www.geoffreylitt.com&#x2F;2026&#x2F;07&#x2F;02&#x2F;understanding-is-the...</a>


--- Top Comments ---

[mtford]: This is really cool! I&#x27;m pumped for anything that makes it easier to review generated code.  I, like many people these days, am searching for ways to stay close to the code whilst not being overwhelmed... and as a visual personal i like your idea to semantically link code to diagrams I&#x27;ve been working on a (semi-)similar thing, a TUI for narrative code reviews -  https:&#x2F;&#x2F;github.com&#x2F;mtford90&#x2F;revue  - the idea being to generate &quot;guided tours&quot; of a change ...

[solatic]: How do you compare to  https:&#x2F;&#x2F;likec4.dev&#x2F;  and  https:&#x2F;&#x2F;erode.dev&#x2F;  , which are currently fully open-source and community driven? C4 gives the text-based representation needed for LLMs to generate and maintain large architecture diagrams - why not build off that heritage?

[bbor]: Oh WOW, cool to see a technique that&#x27;ll be everywhere in 12 months (the fake pen drawing animations + streaming diagrams as they&#x27;re produced) first be announced. Do we still do &quot;First!&quot; comments, y&#x27;all? ~~ [EDIT: you need to put &quot;only for macOS&quot; in way more prominent places, all over -- that offends my soul greatly and may Linus frown upon you all] ~~  [EDIT2: I was mistaken!]  This all looks really solid. That said, two remarks: 1. The integration with OS L...

[_davide_]: The UX seems nice, but the scope is way too narrow.
I would be actually lazier for me to to just rebuild it inside my own harness (exactly as i want it) than start looking at yours.

[icar]: You cannot currently edit files in Whiteboard. If this is something that you find yourself wanting to do, please file an issue!
  
Do you still consider this an IDE? Curious