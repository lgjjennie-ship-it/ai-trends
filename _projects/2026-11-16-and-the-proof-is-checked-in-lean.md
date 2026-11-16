---
layout: default
title: "“…and the proof is checked in Lean”"
date: 2026-11-16T07:38:19Z
slug: 2026-11-16-and-the-proof-is-checked-in-lean
source: hackernews
category: ai-community
ai_score: 8.0
tags: "formal methods, proof verification, Lean, mathematics, software verification"
---

# “…and the proof is checked in Lean”

**链接**: https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/

**作者**: matt_d

**发布时间**: 2026-11-16T07:38:19Z

**采集日期**: 2026-11-16


## AI 摘要

The article explores the verification of proofs in Lean, a formal logic tool, with community comments discussing the reliability and challenges of using Lean for proof verification.

## AI 评价

The content discusses the verification of proofs in Lean, a significant topic in formal methods and mathematics, with insightful community comments that add depth to the discussion.


## 原文内容


--- Top Comments ---

[wodenokoto]: Isn’t “proof is checked in Lean” kinda similar to assuming your code works just because it compiles. Sure, the code works, but does it work at doing what you want? Sure, the proof is valid, but does it prove what you set out to prove?

[red_trumpet]: &gt; Put another way — given a Challenge.lean file with only trusted code imported and the statement of a theorem, and a Solution.lean file with millions of lines of untrusted code imported and the proof of a theorem which looks identical, how do we know for sure that somewhere in the millions of lines of code there is no hack which changes the meaning of the statement, changes the rules from just the axioms of mathematics. As someone with a PhD in mathematics, but no experience with Lean, I ...

[philipwhiuk]: Thanks, this is really interesting and helpful context to us non-mathematicians. &gt; It is probably worth stressing again: do not run random Lean code on your local machine unless you sandbox it first. Lean’s mathematics library is safe to run and build upon because this is human-curated and checked by human experts. I was surprised by this - does Lean need the ability to run arbitrary code? It feels like limiting Lean to not being Turing complete would be an advantage.

[troupo]: (Judging from my very limited experience with Lean, and with Lean written by LLMs) It also doesn&#x27;t help that LLMs tend to generate a lot of unnecessary Lean code to prove even the simplest statements.

[barrenko]: ...&quot;left as an exercise to the reader&quot;.

--- From hackernews ---

--- Top Comments ---

[assumed_throwaw]: I discovered Clice a few months ago, but it wasn&#x27;t stable enough for my needs at the time. It looked very promising, though. I&#x27;m glad to hear it&#x27;s moving to v1.0. I didn&#x27;t expect this technical article to end on such a melancholy note. I&#x27;m sad that the author feels this way about his work of last years. But it was an interesting read, and I think many of us share these concerns and doubts. Hopefully, even in a world of AI agents, there will still be people that write ...

[tancop]: &gt; in an era like this it means the effort I poured into clice over the past two and a half years is unlikely to have the lasting meaning I first imagined Reading C++ without a good language server is hard. And if you don&#x27;t read your agents code that makes you a stupid vibe coder. Everyone else will benefit from your project. And it&#x27;s good training data (also for humans) to learn modern C++ from a real codebase.

[quailfarmer]: Re the melancholy conclusion:
I spent the last year of my school working on a big personal project, but when I started a full time job, this personal project was eclipsed, it no longer made sense in the context of the industry. But I recently returned for my 5yr reunion, and I found a bunch of current students who were still using my system! Upon reflection, it’s still one of the most fun projects I’ve ever done.

[rixed]: Going on a tangent, but I&#x27;m always owndering if &quot;modern C++&quot; sounds rather appealing or off-putting to most people?

[Neywiny]: Interesting they show clangd crashing in vscode. That&#x27;s been my biggest gripe with it. But they also show clice crashing in the same spot? Seems odd to not just fix it