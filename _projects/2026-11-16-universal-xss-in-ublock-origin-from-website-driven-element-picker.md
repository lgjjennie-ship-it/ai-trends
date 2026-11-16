---
layout: default
title: "Universal XSS in uBlock Origin from website-driven element picker"
date: 2026-11-16T02:04:48Z
slug: 2026-11-16-universal-xss-in-ublock-origin-from-website-driven-element-picker
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, uBlock Origin, XSS, web development, browser extensions"
---

# Universal XSS in uBlock Origin from website-driven element picker

**链接**: https://iter.ca/post/ubo-uxss/

**作者**: zaik

**发布时间**: 2026-11-16T02:04:48Z

**采集日期**: 2026-11-16


## AI 摘要

A universal cross-site scripting (XSS) vulnerability is discovered in uBlock Origin, potentially allowing malicious actors to execute scripts in users' browsers.

## AI 评价

The content discusses a significant security vulnerability in uBlock Origin, which is important for software engineering and security. The community discussion is insightful, with diverse viewpoints and practical advice, increasing the content's value.


## 原文内容


--- Top Comments ---

[ByteOfWood]: I never really loved how extensions have to put their interfaces in the website&#x27;s DOM if they want to be able to work with the page&#x27;s elements, like this selector, or a password manager&#x27;s suggested logins. Especially in the password manager&#x27;s scenario, it could leak what accounts you have to a given website to that website itself, if the page is looking for new DOM elements. Not exactly a showstopper vulnerability, but it&#x27;s not a good thing.

[taylorfinley]: Really love the &quot;I wrote all the prose, gpt wrote the POC&quot; disclaimer, I would love to see more of those kinds of signals on human authored content.

[forgotmypw17]: For those checking (I still had the vulnerable version), you should be at these versions or higher: uBlock Origin: 1.75.4 uBO Lite: 2026.1110.1816

[akersten]: So this seems totally solvable by the create-rule element living in the browser chrome instead of the website DOM... why aren&#x27;t we doing that?

[user070223]: I&#x27;ve 3rd party frames blocked by default, which is good reminder to everyone that you can up one your blocking game with increasing the blocking mode level as described here  https:&#x2F;&#x2F;github.com&#x2F;gorhill&#x2F;uBlock&#x2F;wiki&#x2F;Blocking-mode . One can have keyboard shortcut which automatically reduces that blocking level(may cause refresh) if something not right, or enable on domain basis. I got used to enabling stuff when have issues and it&#x27;s not mentally taxing