---
layout: default
title: "France's supermarket fridges were vulnerable online for months"
date: 2026-10-20T00:00:49Z
slug: 2026-10-20-france-s-supermarket-fridges-were-vulnerable-online-for-months
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cybersecurity, vulnerability, smart appliances, supermarkets, IoT"
---

# France's supermarket fridges were vulnerable online for months

**链接**: https://ipinfo.io/blog/france-fridges-hack

**作者**: emot

**发布时间**: 2026-10-20T00:00:49Z

**采集日期**: 2026-10-20


## AI 摘要

A cybersecurity vulnerability in France's supermarket fridges was exploited for months, allowing hackers to control fridge settings.

## AI 评价

The content discusses a significant cybersecurity vulnerability in supermarket fridges, which could lead to major disruptions and safety issues. The community comments provide insightful analysis on the technical aspects and potential implications, enhancing the content's value.


## 原文内容

Related: <i>Hackers activate automatic defrosting in supermarket fridges across Europe</i> - <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50055304">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50055304</a> - Oct 2026 (1007 comments)


--- Top Comments ---

[Confiks]: So the author charitably calls the 2025 vulnerability a &quot;login bypass&quot;, but it&#x27;s much worse than that. The firmware included a &quot;datetime-based password&quot; mechanism: a built-in backdoor password, like it&#x27;s the 90s again. The original researcher published about this in August of this year [1], a year after reporting it, titling the report &quot;Defrost the Food&quot;, which the attackers apparently took to be a good suggestion. As the firmware is open for anyone to ...

[MiroslavPokorny]: The real problem is devices like this should NOT be connected to the internet and at worst air gapped. Theres no reason including cost that a separate computer just for the fridges etc is not sitting in the office of the supermarket. Pretty sure the destoyed goods and close time cost far more than the extra cheapo computer.

[SOLAR_FIELDS]: Through my work I deal with grocery software and I can tell you that grocery software is ages behind the times. For most small retailers (small being a business owner with less than 10 stores in their retail chain, mostly local grocers) you are dealing with processes that would have been considered antique for the year 2000

[drillsteps5]: To be fair, their entire threat model was likely &quot;who TF would want to break in to change the settings on a thermostat on a fridge at a grocery store&quot;. A valid question which has yet to be answered (at least not publicly).

[gz5]: fridges are very reliable. but let&#x27;s IoT them anyways so they can theoretically notify us if there is a problem. so of course that creates&#x2F;enables the problem  and  doesn&#x27;t notify us. deliciously ironic and rottingly sad. this case was egregious - built-in backdoor pw - but that is downstream of the decisions to IoT them and to default them to listen on the network.