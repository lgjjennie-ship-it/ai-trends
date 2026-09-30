---
layout: default
title: "Show HN: Real-time Solar System with 526k asteroids and all tracked satellites"
date: 2026-09-29T19:08:01Z
slug: 2026-09-30-show-hn-real-time-solar-system-with-526k-asteroids-and-all-tracked-satellites
source: hackernews
category: ai-community
ai_score: 8.0
tags: "space, visualization, webgl, astronomy, solar-system"
---

# Show HN: Real-time Solar System with 526k asteroids and all tracked satellites

**链接**: https://space.bl2.net/

**作者**: wanick

**发布时间**: 2026-09-29T19:08:01Z

**采集日期**: 2026-09-30


## AI 摘要

A real-time, WebGL2-powered browser-based visualization of the Solar System with 526k asteroids and all tracked satellites.

## AI 评价

Highly significant for visualization and data representation in space science, with insightful community comments discussing performance and features.


## 原文内容


--- Top Comments ---

[wanick]: Author here. It&#x27;s a browser view of the Solar System at real scale, with its current state, plus the objects around Earth from the CelesTrak catalog. Data: CelesTrak TLEs (SGP4), asteroids and comets from JPL SBDB, spacecraft positions from JPL Horizons. Updated daily. Rendering is WebGL2, orbit propagation runs in web workers. The asteroid set (~30 MB) loads in the background. The time slider runs forwards and backwards; satellites appear and disappear by launch date.

[dunlin]: Always wanted to see the asteroid belt&#x27;s true density visualized; this really puts it into perspective. Impressive work keeping everything performant.

[GnosiWorks]: 526k objects and it still feels smooth. are you culling by distance or doing something smarter on the gpu side?

[climech]: Just spent a little time following Europa Clipper, it will fly by Earth very soon! If you zoom out from Earth, it&#x27;s already pretty close. This will be its second gravity assist after Mars. Very cool site!

[jurakovic]: No github repo? :(