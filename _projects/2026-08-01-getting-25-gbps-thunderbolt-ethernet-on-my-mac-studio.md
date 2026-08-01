---
layout: default
title: "Getting 25 Gbps Thunderbolt Ethernet on My Mac Studio"
date: 2026-07-31T16:15:31Z
slug: 2026-08-01-getting-25-gbps-thunderbolt-ethernet-on-my-mac-studio
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Thunderbolt, Mac Studio, Ethernet, Networking, Performance"
---

# Getting 25 Gbps Thunderbolt Ethernet on My Mac Studio

**链接**: https://www.jeffgeerling.com/blog/2026/getting-25g-ethernet-mac-thunderbolt/

**作者**: speckx

**发布时间**: 2026-07-31T16:15:31Z

**采集日期**: 2026-08-01


## AI 摘要

A guide on how to achieve 25 Gbps Thunderbolt Ethernet on a Mac Studio with discussions on performance and alternative solutions.

## AI 评价

The content discusses achieving high-speed Thunderbolt Ethernet on a Mac Studio, which is a significant technical development. The community comments provide diverse insights and discussions, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[Neywiny]: I&#x27;m using the sonnet at work. Work paid for it. Yes it&#x27;s more expensive. I have gotten over 25 gbps bidirectional, but not by much. Maybe 27. A big downside is that it only supports 15W upstream power which I didn&#x27;t think to check, so since that laptop only has 2 usb-c ports for power input, it&#x27;s a bit limiting. The upside, though, was that I plugged it in, got my throughput, and never had to worry ever again. Remember that engineering time is mucho $$. So troubleshooting ...

[randusername]: Can&#x27;t you just put a real PCIe NIC in an eGPU enclosure with a fan? I bet you can solve this problem for like $150 and two craigslist transactions.

[pzmarzly]: One of the YouTube comments pointed out the issue is most likely the lack of support for SMB Direct (RDMA) in macOS. Would be nice to repeat the test on a Windows&#x2F;Linux laptop.

[alsetmusic]: Dang, here I was feeling slick with 10Gb between my MBP and Mac mini and NAS. That’s the thing, it could always be bigger &#x2F; faster &#x2F; more. It’s enough for my workflow, but it’s fun to see people push further.

[dcrazy]: Jeff, I’m curious whether you really would have needed the $1,000 version of the Sonnet TB5 PCIe chassis. Would this $400 one have sufficed?  https:&#x2F;&#x2F;www.bhphotovideo.com&#x2F;c&#x2F;product&#x2F;1932655-REG&#x2F;sonnet_ec...