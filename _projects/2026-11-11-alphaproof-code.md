---
layout: default
title: "AlphaProof Code"
date: 2026-11-10T12:11:12Z
slug: 2026-11-11-alphaproof-code
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, formal verification, software correctness, DeepMind, code analysis"
---

# AlphaProof Code

**链接**: https://deepmind.google/blog/introducing-alphaproof-code/

**作者**: ilreb

**发布时间**: 2026-11-10T12:11:12Z

**采集日期**: 2026-11-11


## AI 摘要

AlphaProof Code, a new AI tool from DeepMind, uses formal verification to ensure the correctness of software code.

## AI 评价

The content introduces AlphaProof Code, a significant development in AI-driven formal verification of software, with insightful community comments discussing its potential impact and technical nuances.


## 原文内容


--- Top Comments ---

[hedora]: Something seems wrong here.  They took a non-trivial piece of human-written code that has had bugs in the past, formally verified the whole library, and found zero bugs? I can believe that it&#x27;s possible to get the LLM to write proofs, but I can&#x27;t believe there were zero bugs in the system they verified.  I wonder if they got the theorems wrong, or if they only proved narrow properties of the system. I&#x27;ve had Claude formally verify crypto and data storage formats.  It wrote theo...

[thibsrn]: Great, what a great use case for AI. I feel like Google has been the cleanest of the big players in terms of useful contributions and control of their AI systems. This new proof agent doesn&#x27;t seem to challenge the spec though, just the implementation, if I&#x27;ve understood correctly. I wonder how this agent is different than a classic coding agent, in the end it seems to work the same way, iterating over a codebase while writing Lean or Rocq code and running it.

[Mizza]: I&#x27;m expecting that very soon, perhaps in the next two or three years, it will seem mad that we ever ran _any_ unverified software on our systems, like how it now seems mad we used Telnet or plaintext HTTP.

[r0ze-at-hn]: I have been experimenting with utilizing how easy it is for AI to code lean (
 https:&#x2F;&#x2F;metamagic.substack.com&#x2F;p&#x2F;beyond-the-proof-dump-lean-... ) and a few lessons 1. AI Lean is not perfect and AI can easily cheat given it is writing the lean. For anyone playing around with AI Lean code at minimum you need another adversarial prompt to review the ai generated lean. 2. In the paper poking around I see they did re-introduce some bugs to verify it would catch them, but they di...

[andai]: Earlier this year I was doing some major refactors of an old project. At the time coding agents were really taking off where you could increasingly trust them for more autonomous work, so I was excited to give it a go. It did the refactor, running for several hours, and ended up volunteering an extensive test suite as well. All tests green! I was very impressed, until I squinted a little. It had implemented the whole thing backwards, in a way which was not only pointless (didn&#x27;t achieve ...