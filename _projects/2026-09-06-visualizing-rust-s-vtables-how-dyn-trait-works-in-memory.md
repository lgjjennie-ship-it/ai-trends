---
layout: default
title: "Visualizing Rust's Vtables: How dyn Trait Works In Memory"
date: 2026-09-05T13:31:05Z
slug: 2026-09-06-visualizing-rust-s-vtables-how-dyn-trait-works-in-memory
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Rust, programming, memory-management"
---

# Visualizing Rust's Vtables: How dyn Trait Works In Memory

**链接**: https://sofiabelen.github.io/projects/visualizing-rusts-vtables-how-dyn-trait-works-in-memory/

**作者**: torutofu

**发布时间**: 2026-09-05T13:31:05Z

**采集日期**: 2026-09-06


## AI 摘要

This article explains the memory layout and workings of Rust's vtables and 'dyn Trait' with visualizations.

## AI 评价

The content provides a deep dive into Rust's vtables and how 'dyn Trait' works in memory, which is highly relevant for software engineering. The community comments are insightful and add value by discussing object safety, memory layout, and comparing Rust with C++.


## 原文内容


--- Top Comments ---

[tialaramex]: This has a section on Object Safety, I checked and the article was written this week, but &quot;Object Safety&quot; is a confusing name for this idea, and so for a little while now Rust calls this idea &quot;dyn compatibility&quot; because the most important thing you&#x27;re getting if a trait is &quot;dyn compatible&quot; is that you can use &quot;dyn Trait&quot; -  https:&#x2F;&#x2F;doc.rust-lang.org&#x2F;1.98.1&#x2F;reference&#x2F;items&#x2F;traits.html...  That link more comprehensively ...

[evmar]: In my own journey of discovery I found  https:&#x2F;&#x2F;cheats.rs&#x2F;  very helpful, and in particular its &quot;memory layout&quot; section has visualizations.  (No affiliation with the site, just a happy reader!)

[Panzerschrek]: &gt;  A trait must follow so-called object safety rules to be used as a trait object This seems for me to be a major design flaw of Rust. It tries to repurpose traits for dynamic polymorphism, even if this doesn&#x27;t fit perfectly. C++ is more honest, it has two separate mechanisms for static polymorphism (templates) and dynamic polymorphism (inheritance).

[Panzerschrek]: I once faced a tricky bug involving fat pointers (containing virtual tables) in Rust. Two such pointers may be distinct, even if they reference to the same object, because (for some reason) the compiler may create two (or even more) copies of the virtual functions table and use them in different places.

[returningfory2]: Very nice. As a follow up would be interesting to also reverse engineer the structure of the vtable itself. I guess it’s a list of pointers to the method implementations?