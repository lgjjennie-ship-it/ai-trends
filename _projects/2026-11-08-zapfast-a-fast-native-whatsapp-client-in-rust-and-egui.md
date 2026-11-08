---
layout: default
title: "ZapFast: A fast, native WhatsApp client in Rust and egui"
date: 2026-11-08T02:02:27Z
slug: 2026-11-08-zapfast-a-fast-native-whatsapp-client-in-rust-and-egui
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Rust, WhatsApp client, egui, performance, native application"
---

# ZapFast: A fast, native WhatsApp client in Rust and egui

**链接**: https://github.com/crmne/zapfast

**作者**: handfuloflight

**发布时间**: 2026-11-08T02:02:27Z

**采集日期**: 2026-11-08


## AI 摘要

ZapFast is a new native WhatsApp client in Rust and egui offering high performance but facing discussions on feature completeness and trust.

## AI 评价

The content discusses a new native WhatsApp client in Rust, which is a significant development for performance and native experience. The community comments provide diverse insights on performance, feature completeness, and trust concerns, indicating high engagement and relevance.


## 原文内容


--- Top Comments ---

[d3Xt3r]: &gt; In our Linux test it opens in under a second and uses about 200 MB of idle RAM Is it just me or does anyone else feel that 200 MB is a lot for a native chat app written in Rust, that&#x27;s essentially a remote interface for the WhatsApp on your phone? I remember back in the day, apps like Miranda IM (and early versions of Trillian) used only digits of RAM, even when you had multiple plugins talking several protocols at the same time, whilst having a ton of advanced features not found in...

[codedokode]: Also, I looked at how dates are written in a screenshot and thought that &quot;2 days ago&quot; would be so much better than &quot;Tuesday&quot;. Because you do not have to compute in your head how many days ago Tuesday was.

[loremdifr]: dont get me wrong, I like the extra performance, but every single alternative whatsapp client has the same issue where it&#x27;s missing enough core features that you end up needing to go to the browser version often enough to be a nuisance and I end up just using the browser instead (which I hate, I really really would prefer a performant client instead!)

[aeontech]: Looks great, but... how can one trust it with credentials&#x2F;communication? (nothing against the developer, more the principle of the thing)

[codedokode]: Egui is pretty bad idea. It uses &quot;immediate mode&quot; rendering which means whole window is redrawn on every mouse move. I ran PhotoCraft (built in Rust + egui) in a VM wihout a GPU and the UI felt like it was running on 3 fps. If you use egui, try running it without a GPU before releasing. Egui is definitely not what you want to use on a 4K screen. It is only good for tiny screens of embedded devices. Why there is no reactive UI that tracks all dependencies and redraws only what needs ...