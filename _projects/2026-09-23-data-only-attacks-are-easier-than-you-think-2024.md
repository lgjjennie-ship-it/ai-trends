---
layout: default
title: "Data-only attacks are easier than you think (2024)"
date: 2026-09-23T03:49:28Z
slug: 2026-09-23-data-only-attacks-are-easier-than-you-think-2024
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, data-attacks, cybersecurity"
---

# Data-only attacks are easier than you think (2024)

**链接**: https://www.usenix.org/publications/loginonline/data-only-attacks-are-easier-you-think

**作者**: segfaultbuserr

**发布时间**: 2026-09-23T03:49:28Z

**采集日期**: 2026-09-23


## AI 摘要

Data-only attacks are easier than previously thought, posing a significant security threat.

## AI 评价

The content discusses a significant security threat with insightful community comments that add depth to the topic, enhancing its importance.


## 原文内容


--- Top Comments ---

[probably_wrong]: I&#x27;m missing a critical part of the explanation. If &quot;the server has a memory safety bug that allows a malicious client to overflow some buffer and overwrite, for instance, the contents of the cgi_bin_path variable&quot;, then why is this a data-only attack? Instill need to overflow a buffer the &quot;traditional&quot; way.

[mgaldys4]: Data-only attacks are somewhat low-hanging fruit. Classical static analysis could already find them before AI got this strong, and LLMs make identification even easier. But the real threat is risk buried in business logic, especially abuse of normal business logic. Take e-commerce refund abuse. Bug hunters would not even call it a risk, yet fraud rings have arbitraged millions off this kind of logic. And because the logic is legitimate business logic, it is very hard to detect.

[gumby]: &gt; Data-only attacks ... have long been considered too sophisticated and niche to pose a practical threat. I thought the whole point of fuzzing was an example of finding data-only attacks.

[Terr_]: &gt; The attack effectively modifies only the arguments of the execve syscall I feel this checklist of shell-tools [0] is relevant, although the focus is more on how setuid is dangerous because you might not know the fancier arguments someone could supply. &gt; GTFOBins is a curated list of Unix-like executables that can be used to bypass local security restrictions in misconfigured systems. [0]  https:&#x2F;&#x2F;gtfobins.org&#x2F;

[joa-]: This showed me that taint analysis is kind of slept on. Maybe we should invest in better tooling that allows us to reverse engineer with taint analysis easier. Do we think it is a UI problem? Of course over tainting is a thing, but maybe we can make it work with better UI.