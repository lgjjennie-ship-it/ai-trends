---
layout: default
title: "Linux support is coming to Snapdragon X2 Series"
date: 2026-09-23T22:38:16Z
slug: 2026-09-24-linux-support-is-coming-to-snapdragon-x2-series
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Linux, Snapdragon, ARM, Device Tree, OpenBSD"
---

# Linux support is coming to Snapdragon X2 Series

**链接**: https://www.qualcomm.com/news/onq/2026/09/snapdragon-summit-agentic-ai-pcs-linux

**作者**: aaronday

**发布时间**: 2026-09-23T22:38:16Z

**采集日期**: 2026-09-24


## AI 摘要

Qualcomm announces Linux support for Snapdragon X2 Series, sparking community discussion on device tree support, performance comparisons, and open-source contributions.

## AI 评价

The content is highly relevant to the tech community, with insightful comments discussing the implications of Linux support on Snapdragon X2 Series and the potential for broader adoption. The discussion includes technical details and community interest, validating the importance.


## 原文内容


--- Top Comments ---

[hurricanepootis]: I hope Qualcomm upstreams all the device tree kernel level stuff to Linux for every laptop model. One of the things I don&#x27;t like about Arm Laptops is—for example—how even if a SoC is supported upstream, if the manufacturer does not upload a device tree for their device, then you&#x27;re cooked. I read that while these Snapdragon laptops do technically have UEFI + ACPI, the information they provide is not useful for Linux and is more coupled with Qualcomm&#x27;s proprietary drivers on Win...

[modeless]: I think a lot of people don&#x27;t realize the level of performance Qualcomm has reached with these. This is the closest competition to Apple&#x27;s M series that we have, for the laptop form factor at least. They are better than Intel and AMD&#x27;s best. I&#x27;d love to buy an X2 laptop with Linux preinstalled and supported.

[brynet]: OpenBSD developer Tobias Heider (tobhe@) has already committed the first pieces of OpenBSD&#x2F;arm64 support for these Qualcomm Snapdragon X2 Elite laptops. &quot;This gets USB, keyboard and touchpad working in ACPI mode on the HP Elitebook X G2q.&quot;  https:&#x2F;&#x2F;marc.info&#x2F;?l=openbsd-cvs&amp;m=178891082169317&amp;w=2  Tobias (who also works for Canonical) recently demoed Ubuntu on mastodon and confirmed ARM EL2 works, meaning KVM support unlike previous generations. bsd.network...

[Hasz]: Give me something that is 80% as efficient, 80% as good hw as the apple m-series but runs Debian (or Ubuntu) and I am happy to pay apple+ prices for pure linux experience. I say this as someone who just bought a new m5 machine. I have seen framework&#x2F;sys76 but never pulled trigger. I don&#x27;t  really  care about raw performance, just want long battery life, decent screen, and a *nix environment to work in. 99% of workload is going to be on a remote machine anyways.

[extraduder_ire]: In case anyone else is wondering what they mean by linux support; &gt; We&#x27;re upstreaming core drivers for Snapdragon X2 Series — including the Hexagon NPU and Adreno GPU — to open the door to developers and partners. Glad this isn&#x27;t going to be some semi-proprietary thing like support for chromebooks. Hopefully it continues.