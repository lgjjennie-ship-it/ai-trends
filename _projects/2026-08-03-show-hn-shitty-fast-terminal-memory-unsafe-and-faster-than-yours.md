---
layout: default
title: "Show HN: Shitty – fast terminal. Memory-unsafe and faster than yours"
date: 2026-08-02T23:05:41Z
slug: 2026-08-03-show-hn-shitty-fast-terminal-memory-unsafe-and-faster-than-yours
source: hackernews
category: ai-community
ai_score: 8.0
tags: "terminal-emulator, performance, software-engineering"
---

# Show HN: Shitty – fast terminal. Memory-unsafe and faster than yours

**链接**: https://github.com/pg83/shitty

**作者**: pshirshov

**发布时间**: 2026-08-02T23:05:41Z

**采集日期**: 2026-08-03


## AI 摘要

A new, memory-unsafe terminal emulator called 'shitty' is announced, which claims to be faster than existing alternatives.

## AI 评价

The content is highly relevant to software engineering with a novel approach to terminal performance, and the discussion includes insightful comments from experienced developers, indicating community validation.


## 原文内容


--- Top Comments ---

[mitchellh]: Creator of Ghostty here. Always a fan of new terminals. I noticed your benchmarks are against Ghostty 1.3.1, which is fair, since its the latest released, but our IO throughputs in particularly the areas you tested have improved by more than double on some machines, so if you get a chance, I would ask you rebenchmark on `main`. I don&#x27;t know if it&#x27;d be faster than your terminal or not, but it&#x27;d be significantly faster than 1.3.1. On my M4 MacBook Pro, ASCII processing improved b...

[3eb7988a1663]: Gutenberg&#x27;s copy of Moby Dick is 1.2MB[0]. Which is to say the slowest benchmarked terminal could display a paltry ~53 Moby Dicks per second, while shitty gives you ~98 Moby Dicks. I am not sure how many Moby Dicks I require per second, but it is good to have options. [0]  https:&#x2F;&#x2F;www.gutenberg.org&#x2F;ebooks&#x2F;2701

[yjftsjthsd-h]: &gt; The executable is named st; the desktop application and icon are named shitty That conflicts with the already existing suckless st. Also I  am  suitably impressed with the perf numbers, but I also somewhat take away that I could stick with (at least) alacritty or ghostty and not be  much  slower.

[jcelerier]: &gt; Shitty is moving from the imported GPL baseline to an MIT-only codebase. It does not intend to retain the GPL as the final project license. that&#x27;s really something that cannot be done if you don&#x27;t have the original right of the code. It&#x27;s 100% derived work and thus has to preserve GPL license, even if you rewrite every single line.

[p1necone]: This is cool, but I gotta say - I care  much  more about keypress-to-screen  latency  on my terminals than throughput - would love to see some numbers on that.