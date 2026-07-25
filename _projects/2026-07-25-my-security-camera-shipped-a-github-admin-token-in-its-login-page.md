---
layout: default
title: "My security camera shipped a GitHub admin token in its login page"
date: 2026-07-24T11:54:41Z
slug: 2026-07-25-my-security-camera-shipped-a-github-admin-token-in-its-login-page
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, IoT, vulnerability, GitHub, smart-home"
---

# My security camera shipped a GitHub admin token in its login page

**链接**: https://hhh.hn/hanwha-github-token/

**作者**: hhh

**发布时间**: 2026-07-24T11:54:41Z

**采集日期**: 2026-07-25


## AI 摘要

A security camera was found to expose a GitHub admin token on its login page, sparking a discussion on security vulnerabilities in IoT devices and best practices for mitigation.

## AI 评价

The content highlights a significant security vulnerability in a widely-used product, with insightful community comments discussing broader security practices and potential solutions. The high engagement and quality of discussion further validate the importance of the content.


## 原文内容


--- Top Comments ---

[badatnames]: Worthy thread to ask: is there such a thing as a white label IP camera (or similar) with a supported open firmware? Not asking for open source, but something close to plug and play that nonetheless has a way of stripping the rootfs as desired for bespoke use in a manufacturer-supported way. I have looked around before but I only found genuinely dev-oriented kits that weren&#x27;t even in a shell, and crazy priced. edit: seems there are some options now (or I missed them before), e.g.  https:&...

[grommz]: The US Department of War IP adresses baked into the firmware is the bigger story here. Note to self: never buy a Korean security product.

[dev_l1x_be]: Not surprised, many of these vendors are doing crazy things, insane defaults, broken security, hardcoded values. Security is not a priority, I get that, but at the very least some baseline check would be nice (no hardcoded credentials for starting)

[tehlike]: A rule of thumb, put your cameras on a separate VLAN and never give that vlan internet access. Least you can do.

[RyJones]: When I cared, I found out that a lot of OBD-II dongles shipped with the same MAC, which gave you access to everything on a bunch of websites. You can curse the storm, but the wind will come.