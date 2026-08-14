---
layout: default
title: "Spaghettifying DRAM"
date: 2026-08-13T14:17:13Z
slug: 2026-08-14-spaghettifying-dram
source: hackernews
category: ai-community
ai_score: 8.0
tags: "DRAM, security, computing"
---

# Spaghettifying DRAM

**链接**: https://github.com/xoreaxeaxeax/skitter-creek-bath-salts

**作者**: matt_d

**发布时间**: 2026-08-13T14:17:13Z

**采集日期**: 2026-08-14


## AI 摘要

A new method for 'spaghettifying' DRAM is introduced, allowing for deeper system access and raising security concerns.

## AI 评价

The content discusses a significant technical development in DRAM access, with high community engagement and insightful comments that add value to the discussion.


## 原文内容


--- Top Comments ---

[MattSteelblade]: I cannot wait for the accompanying Black Hat talk. Christopher Domas is one of my absolute favorite all-time hackers. He does such a fantastic job of explaining his work. Some of my favorite talks of his: - Psychological Warfare in Reverse Engineering   https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=HlUe0TUHOIc  - The MoVfuscator  https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=R7EEoWg6Ekk  - Hardware Backdoors in redacted x86  https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=jmTwlEh8L7g

[weinzierl]: When I started with computers, DRAM was understandable by a teenager: RAS, CAS, read, done. Ok, the necessary refresh was always a little pain, but still something manageable. Nowadays, I feel you need three PhD&#x27;s to even bring up a micro with  DRAM and don&#x27;t get me started on the proprietary binary blobs necessary just for DRAM access. No wonder PSRAM is a thing. The corollary is that it shouldn&#x27;t be too surprising that this gigantic attack surface provides many opportunities....

[WhiteDawn]: This is all great to get full unfettered access to your own system, as life should be. I’m sure Xbox and PlayStation security groups are a little nervous right now though. Getting ring-0 on those machines is near impossible, but once you do then everything else becomes wide open

[gmueckl]: OK, so this works on AMD Jaguar according to the README. That&#x27;s a architecture from 2013. There&#x27;s notes about Zen 3 having a different base address for the memory controller registers, but that&#x27;s it. What newer CPUs does attack actually work on?

[dzdt]: So on an affected system, ring 0 root has access to pretty much everything that was hidden in negative ring territory. The page is pretty quiet about what other processor families might be similar beyond this specific AMD16h (an older AMD low-power family)?