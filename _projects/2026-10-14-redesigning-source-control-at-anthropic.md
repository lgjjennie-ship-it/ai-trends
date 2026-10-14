---
layout: default
title: "Redesigning source control at Anthropic"
date: 2026-10-13T15:49:56Z
slug: 2026-10-14-redesigning-source-control-at-anthropic
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, source control, software engineering, Anthropic, code development"
---

# Redesigning source control at Anthropic

**链接**: https://www.anthropic.com/engineering/redesigning-source-control

**作者**: Philpax

**发布时间**: 2026-10-13T15:49:56Z

**采集日期**: 2026-10-14


## AI 摘要

Anthropic's redesign of its source control system using AI, showcasing improvements in efficiency and the evolving role of engineers in the development process.

## AI 评价

The content discusses a significant technical development in source control redesign by Anthropic, highlighting the impact of AI on software engineering. The discussion quality is high with insightful comments on the challenges and implications of using AI in code development.


## 原文内容


--- Top Comments ---

[duttish]: Every time I stop reviewing the code from Claude I later find janky crap. Not every review finds janky crap, but often enough that I can&#x27;t stop reviewing everything. This is my disconnect with this kind of speed, how are they avoiding the janky crap? Or are they just accepting it and hoping it won&#x27;t be too crappy or be found soon enough? I don&#x27;t have any insight into Anthropic but it seems like that&#x27;s the case which is just depressing.

[idk1]: This is the part that stands out for me. &gt; Earlier in the year, we had largely handwritten the first version of the git-to-Scion ingestion pipeline as a prototype. We thought it was good—until we got our hands on an early internal snapshot of Claude Mythos Preview. We asked it to rewrite the whole thing, and with no further instructions, it produced a version that consumed 20x less memory and was 4x faster, while preserving all of the implicit invariants around ingestion ordering and data ...

[kburman]: Not to downplay Anthropic&#x27;s engineering work here, but I suspect we&#x27;ll see a lot more reinvention of the wheel, even at smaller startups, as AI makes writing code significantly cheaper. The tradeoff between building something custom and adapting an existing solution is changing. Whether maintaining all that custom software turns out to be equally cheap is another question.

[alex_suzuki]: &gt; Very often, we found that the role of the engineers was to tell Claude “no.” That line stuck with me. I wonder how the engineers building Scion feel about that? If that really is the future, then I guess I have to find another profession. Retirement is still too far away.

[dangoodmanUT]: &gt; Plus, Anthropic is unique in that our ability to spend tokens for internal use far exceeds what any other business would realistically want to spend I appreciate that they&#x27;re extremely self-aware here.