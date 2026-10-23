---
layout: default
title: "LLMs are making formal software verification feasible at a much larger scale"
date: 2026-10-22T22:54:43Z
slug: 2026-10-23-llms-are-making-formal-software-verification-feasible-at-a-much-larger-scale
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLMs, formal verification, software engineering, AI, cybersecurity"
---

# LLMs are making formal software verification feasible at a much larger scale

**链接**: https://www.anthropic.com/research/formal-verification

**作者**: johnbender

**发布时间**: 2026-10-22T22:54:43Z

**采集日期**: 2026-10-23


## AI 摘要

LLMs are enabling formal software verification at a much larger scale, with practical applications and community validation.

## AI 评价

The content discusses a significant development in formal software verification using LLMs, which has high potential impact on the field. The community comments provide insightful discussions and practical examples, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[mentalgear]: A good moment to remind everyone: Verification: Code does what it says. Validation: Code does what Specifications say. Specifications: Were hopefully correctly modeled to the Problem. In IEEE terms: &gt; Verification: &quot;Are we building the product right?&quot;
&gt; Validation: &quot;Are we building the right product?&quot;) You can write mathematically flawless code that highly efficiently solves the wrong problem. --- While I think formal verification is the future (essential for cyberse...

[malisper]: For those skeptical, I&#x27;ve had decent success using formal verification for my Rust rewrite of Postgres. I wrote a compiler that can translate both Rust and C code into Lean. Once those two functions are in Lean, I have an LLM write a Lean proof that they behave identically. So far, I&#x27;ve proven that about 12% of the code behaves the same when executed single-threaded. That works out to roughly 70k lines of C code. This has found very minor differences in behavior, such as how floatin...

[n_u]: My first question was “How do they know the proof correctly corresponds to the software they are checking?” They say “ While this is an enormous volume of proof code, virtually none of it needs to be manually reviewed. The Rocq proof checker ensures that the spec is correctly satisfied by the proof. As a result, the only artifacts that a developer needs to trust are:
The formal models of RISC-V and of Linux processes; The exact theorem statements that were proved; The Rocq proof checker itsel...

[fedupnow]: Im 35, Im screwed if they get their way. I&#x27;m not going to go to the trades, I quit construction when I was 27 because of how much I loved programming. I wanted to kill myself basically everyday working in the construction industry. I drank my twenties away because of how much it sucked. Ive been sober for years now entirely because of programming and actually loving what I do. But this company is stealing that from me, in many different ways. I invested a ton of my life and my entire lif...

[pjmlp]: This is exactly the kind of stuff I am slowly realising with the increased adoption of agentic runtimes in enterprise SaaS products. We will move into formal verification alongside AI tools, thus generation of executables via translation to 3 GLs is going to be a transition step, just like Assembly coders wary of optimising compilers always wanted to manually check the generated Assembly code. And yes, many of us will have to search another source of income as an outcome of &quot;progress&quot;.