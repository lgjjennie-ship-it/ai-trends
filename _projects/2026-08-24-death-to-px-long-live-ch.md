---
layout: default
title: "Death to px, long live ch"
date: 2026-08-23T13:56:27Z
slug: 2026-08-24-death-to-px-long-live-ch
source: hackernews
category: ai-community
ai_score: 8.0
tags: "CSS, web development, high-DPI, unit scaling, web design"
---

# Death to px, long live ch

**链接**: https://shkspr.mobi/blog/2026/08/death-to-px-long-live-ch/

**作者**: Brajeshwar

**发布时间**: 2026-08-23T13:56:27Z

**采集日期**: 2026-08-24


## AI 摘要

An article advocating for the use of 'ch' and 'ex' units over 'px' in CSS for better scaling on high-DPI displays.

## AI 评价

The content discusses a significant shift in CSS units, which is important for web development. The discussion quality is high with insightful comments from various community members.


## 原文内容


--- Top Comments ---

[andai]: The article links to  https:&#x2F;&#x2F;shkspr.mobi&#x2F;blog&#x2F;2018&#x2F;11&#x2F;the-myth-of-the-pixel-perfe...  which confuses me, because I definitely remember pixels being visible when I was growing up. I remember the first time I got a 1080p monitor. I felt a visceral terror at the fact that I could no longer see the pixels.

[microflash]: I’ve found that ch and ex units are heavily influenced by latin characters. They just give weird results with non-latin characters leading to magic numbers. But the concept is really solid: use them if you want the spacing relative to text.

[somat]: What I want to know is who decided to break px, the last thing we need is yet another screwball physical measurement, css was already full of them. But what &quot;tut tut, everybody is using px and these new hi-dpi displays are rendering things really tiny, we can&#x27;t have that&quot; and now px as a useful unit is ruined. Is there a way to use real pixels? My, admittedly quick, search says no. at least nothing jumps out at me from the spec.

[coolThingsFirst]: why would anyone care if 1cm is actually 1.024cms on some monitors?

[npn]: I also did some experiment with ch many years ago. I found that 60ch is ideal width for block text for easy reading. too bad it is pretty hard to make websites with only 60ch wide.