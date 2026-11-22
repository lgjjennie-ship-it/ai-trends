---
layout: default
title: "Advice for the next 100 Rust GUIs"
date: 2026-11-21T21:17:53Z
slug: 2026-11-22-advice-for-the-next-100-rust-guis
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Rust, GUI, Software Engineering, Web Development, Community"
---

# Advice for the next 100 Rust GUIs

**链接**: https://linebender.org/blog/next-100-guis/

**作者**: raphlinus

**发布时间**: 2026-11-21T21:17:53Z

**采集日期**: 2026-11-22


## AI 摘要

The article offers advice for the next 100 Rust GUIs, highlighting the importance of performance, tooling, and community support.

## AI 评价

The content provides valuable insights and advice for developing Rust GUIs, and the discussion quality is high with insightful comments and diverse viewpoints.


## 原文内容


--- Top Comments ---

[dafelst]: I am constantly surprised how few mentions of Slint there are in these sorts of articles.  It&#x27;s written by a team of funded ex-Qt alumni, is incredibly fast, and their DSL approach, while having a bit of a learning curve, makes laying out apps and managing data binding incredibly easy. They also bypass a big part of the issues mentioned in the article by just straight up using skia as a renderer on desktop (you can use others if you want) which gives software and gpu accelerated paths. I...

[tauchunfall]: The &quot;2026 Survey of Rust GUI Libraries&quot; does not include Native Shell (nsh) [1] which is retained-mode and based on gpui-fast. Maybe because the code repository was started on October 11th, just 1.5 months ago. More than 2,000 commits later it already looks great. I think, they do the (AI) software engineering part very well [2]. After using GTK and JavaFX, and React for a decade, Native Shell makes me really excited. I never got warm with Flutter, the desktop applications were very...

[skhameneh]: I&#x27;m building a custom GUI in Rust and it is such a slow process to build out.  I find bits of the end result to be amazing, but it&#x27;s all in the details that look like nothing compared to using something more &quot;complete&quot; with a larger UI community. I have some nice markdown rendering and phenomenally fast smooth scrolling - but I look at everything ahead of me, I don&#x27;t even have text selection implemented yet, text wrapping and input cursor placement implementation wasn...

[singinwhale]: I wonder if there are any UI libraries inspired by how Unreal Engine does it (there it is called Slate). It does not lend itself to Rust 1:1 due to how its TAttribute type would clash with the borrow checker but it is a proven retained mode approach (with an IM adapter as of recently). It has IME, accessibility, cross platform, performance and GPU all figured out (or at least good enough). It has its issues, too, but I never see it mentioned in these discussions.

[dv_dt]: I found Qts signal&#x2F;slot system very nice to work with to help with bridging the application logic to UI events and flows.  Maybe rust&#x27;s generic async is all you need, but I suspect that a GUI should probably have some opinion of how it interacts with async.