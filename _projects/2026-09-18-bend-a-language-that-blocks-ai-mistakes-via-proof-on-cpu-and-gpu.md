---
layout: default
title: "Bend – A language that blocks AI mistakes via proof, on CPU and GPU"
date: 2026-09-17T20:36:13Z
slug: 2026-09-18-bend-a-language-that-blocks-ai-mistakes-via-proof-on-cpu-and-gpu
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Programming Languages, Proof Technology, GPU Computing, Software Engineering"
---

# Bend – A language that blocks AI mistakes via proof, on CPU and GPU

**链接**: https://bend-lang.com/

**作者**: nicolas-siplis

**发布时间**: 2026-09-17T20:36:13Z

**采集日期**: 2026-09-18


## AI 摘要

Bend is a new programming language that aims to prevent AI mistakes using proof and runs on both CPU and GPU.

## AI 评价

The content introduces a novel language designed to prevent AI mistakes through proof, which is highly relevant to software engineering and AI/ML. The community discussion is insightful and shows significant engagement, though it also has some promotional aspects.


## 原文内容


--- Top Comments ---

[LightMachine]: Hi, I&#x27;m the author. HN staff: someone posted before me. Could we change the title to 
&quot;Bend - a language that blocks AI mistakes via proof and runs on GPUs&quot;? Everyone: feel free to ask any question, but I&#x27;d be highly appreciative if you could be a bit civilized and respectful this time. I&#x27;ve worked on this for 1 year, nearly 16h&#x2F;day, 7 days a week, and I&#x27;m giving it for free. You need not to use it. So, I&#x27;d be thankful if you could point occasional fail...

[mccoyb]: My read on this, after ingesting a good amount of content on the history, is: - this Bend is not really related to the old Bend (only in name) - this Bend doesn&#x27;t really have anything to do with interaction combinators - this Bend is a QTT, with a change to affinity which enforces a good performance property for GPUs - the &quot;higher order at comptime&quot; is neat, reminds me of Andras Kovacs&#x27; work on 2ltt and staging in dependently typed languages. - this Bend is likely to be go...

[plastic041]: This project&#x27;s repo has 20K stars with only 500 forks, with less than 300 issues(including closed). Something&#x27;s not right. Compared to other programming languages: - Gleam: 22K stars, 1K forks, 3K issues - V: 38K stars, 2.3K forks, 11K issues - Ruby: 23K stars, 5.6 forks, 19K issues - Zig: 43K stars, 3K forks, 14K issues It got 16K stars just in 4 months too.  https:&#x2F;&#x2F;www.star-history.com&#x2F;?repos=bendlang%2Fbend  Also how would anyone trust this? I&#x27;ve never seen a...

[meghanto]: Gotta say, having followed Taelin on this project since mid 2023, this was not the response I expected when this language first dropped. It&#x27;s interesting how cosmetics drive discussion, and how HN comments are weirdly divided in a very dismissive or skeptical camp and those acting incredulous and offended at the reaction of the former. What I expected instead was a lot more discussion about use cases, benchmarking, possibilities, limitations (that aren&#x27;t about git history) and the s...

[svachalek]: Cool idea. I tried using it to port a little meeting fixer cron job I vibe coded, it seemed a natural fit as its essentially trying to satisfy invariants in my calendar. It basically succeeded but Claude (Opus 5) did have some complaints: &#x27;Base ships one arithmetic law, U32.add_comm. There is no order theory. About 60 of PROOF.bend&#x27;s 163 lines are cmp_refl, and_false, and_comm, le_max_l, le_max_r, add_succ — facts you&#x27;d assume exist. You&#x27;d write them once per project and n...