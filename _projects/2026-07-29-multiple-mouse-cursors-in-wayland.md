---
layout: default
title: "Multiple Mouse Cursors in Wayland"
date: 2026-07-29T00:59:37Z
slug: 2026-07-29-multiple-mouse-cursors-in-wayland
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Wayland, multi-seat, desktop UX, compositor, input devices"
---

# Multiple Mouse Cursors in Wayland

**链接**: https://blinry.org/multi-seat-wayland/

**作者**: marvinborner

**发布时间**: 2026-07-29T00:59:37Z

**采集日期**: 2026-07-29


## AI 摘要

The article explores the concept of using multiple mouse cursors in Wayland, discussing potential benefits and challenges.

## AI 评价

The content discusses a novel and potentially impactful feature for Wayland, with insightful community comments that explore various use cases and technical implications. The discussion quality is high, indicating significant community interest and engagement.


## 原文内容


--- Top Comments ---

[ofalkaed]: I have never liked split keyboards but I might if each keyboard was also a mouse with its own cursor, it seems fun to develop the skill to work that way. Would also be useful at times if the the Thinkpad trackpoint and trackpad could each have their own cursor and I could leave one somewhere. Or maybe a cursor stack like pushd&#x2F;popd, registers would probably work better; instead of virtual desktops just give me one massive desktop with cursor locations I can jump between, switch to cursor...

[gorgoiler]: I wish libinput gave the option for pointer inertia, where the pointer glides to a gradual rather than a hard halt after you stop moving it.  I’m limited to a trackpad these days and it’s a really nice feature on my Steamdeck that I’d love to have on my Thinkpad. Come to think of it, Steamdeck  is  Wayland?  How do they implement it?

[ben-schaaf]: To add to the long list of caveats: This also breaks assumptions GUI toolkit and applications make about only one of their windows being focused at a time: `gtk_application_get_active_window`, `QApplication::activeWindow`, etc.

[eighty8days]: This feels like a step in the right direction from this talk on desktop UX. Finally some cool innovation here!  https:&#x2F;&#x2F;youtube.com&#x2F;watch?v=1fZTOjd_bOQ

[kelnos]: I&#x27;m building a compositor now, and I&#x27;ve been thinking about multi-seat from the beginning, but I know there are lots of places that assume a single seat, and so this sort of thing won&#x27;t work for me.  It&#x27;s actually a lot more work than you&#x27;d think to support this...