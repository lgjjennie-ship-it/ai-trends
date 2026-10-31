---
layout: default
title: "Show HN: A working Nintendo in ~1GB of Qwen weights"
date: 2026-10-30T16:40:22Z
slug: 2026-10-31-show-hn-a-working-nintendo-in-1gb-of-qwen-weights
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, LLMs, Qwen, Emulation, Technical Innovation"
---

# Show HN: A working Nintendo in ~1GB of Qwen weights

**链接**: https://github.com/dbreunig/nesformer

**作者**: dbreunig

**发布时间**: 2026-10-30T16:40:22Z

**采集日期**: 2026-10-31


## AI 摘要

A working Nintendo Entertainment System is compressed into ~1GB of Qwen model weights, demonstrating potential for compact AI systems.

## AI 评价

The content presents a novel technical achievement in compressing a working Nintendo Entertainment System into a small model, sparking insightful community discussions on potential VMs and efficiency. The high engagement and quality of comments further validate its importance.


## 原文内容


--- Top Comments ---

[dbreunig]: A couple thoughts on the process here… First off, Opus 5.5 built working weights and code with only two prompts: 1. Read this article and any relevant source code:  https:&#x2F;&#x2F;divagr.com&#x2F;blog&#x2F;qwenputer . Then explore if you could emulate the chip and ram in a Nintendo Entertainment System (as people do today with FPGAs in MISTRs) using this technique. If so, what size model would you have to build and if you could use smaller faster ones, could you get it to be at the standar...

[armcat]: This opens up so many interesting opportunities. In principle one could compile a small VM inside the LLM weights. The VM can host for example a Python interpreter, a shell and tools like sed, cat, grep etc. Instead of LLMs having to do slow autoregressive token emission with the current &quot;external&quot; tool calling, it could literally execute everything except web search, inside the LLM, with just matmul operations. You could probably optimise this so it runs in batches. You could have ...

[jacquesm]: I love these hacks, even though from an efficiency point of view it is horrifying to my assembly-code-golfing-brain. And it also gives some new appreciation for how much more efficient deterministic programs are compared to AI.

[pbohun]: &gt;Overall, nesformer runs 150–290× slower than the real console. I like these kinds of projects because it helps to show the massive compute requirement between LLMs and ordinary programs. A while back I saw some people saying we would just have LMMs hallucinate an entire operating system  every single frame . I guess technically it&#x27;s now proven to be technically possible, but it would be thousands of times slower while requiring thousands of times more compute (a multi-million x diffe...

[cafebeen]: I expected this to only simulate the CPU itself, but was surprised to find they actually simulate the RAM as well (contained in the model itself via the gated deltanet architecture).  So in my understanding, the CPU, ROM, and RAM are all handled internally by the model, and the only inputs after initialization are the controller events, wild.

--- From hackernews ---

--- Top Comments ---

[grey-area]: Translating from one language&#x2F;platform to another is something AI is very very good at, so this sounds like a good use of it, bonus points if they create a comprehensive test suite first. Yes it will lead to new bugs, but the older code probably contains a ton of bugs already and is probably difficult to update (original writers long gone, docs out of date etc), so this is probably the best way out of that situation,  as long as  proper support is given afterwards so they don&#x27;t end ...

[bendangelo]: I used claude to reverse engineer an old foxpro program. it setup a dos box and went through every screen. Looked at whatever files it could. Took a single week and it was 99% the same.

[balderdash]: We have an embedded system in one of product offerings that was largely developed using a bunch of “antiquated” technologies (over the past twenty years) and over the past year the two software devs that maintained it have retired. This normally would have big problem, but the entire codebase was re-written, documented, and modernized in a matter of about 3 months (for about $20k in tokens, and a mid level developer spending 50% of their time on it over that period). So it doesn’t surprise me...

[jck86]: AI rewrites of Cisco code? The infinite possibilities for endless backdoors is off the charts.

[Taikonerd]: There also seems to be some weird hero-worship from the CEO, directed at this 27-YO engineer?  Like, &quot;he is the one who can save us.&quot;