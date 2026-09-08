---
layout: default
title: "I've factored the RSA keys of a Certificate Authority from the 90s"
date: 2026-09-08T01:16:59Z
slug: 2026-09-08-i-ve-factored-the-rsa-keys-of-a-certificate-authority-from-the-90s
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cybersecurity, Certificate Authority, RSA, SSL/TLS, Netscape Communicator"
---

# I've factored the RSA keys of a Certificate Authority from the 90s

**链接**: https://mcpherrin.ca/2026/09/07/rsa.html

**作者**: ahlCVA

**发布时间**: 2026-09-08T01:16:59Z

**采集日期**: 2026-09-08


## AI 摘要

A Certificate Authority's 90s RSA keys were factored, revealing potential security vulnerabilities.

## AI 评价

The content discusses a significant security breach involving an old Certificate Authority's RSA keys, which is highly relevant to cybersecurity and has sparked insightful community discussion.


## 原文内容


--- Top Comments ---

[63]: A bit unfortunate that so many of the interesting bits were left to ai. I would&#x27;ve enjoyed some commentary on why the custom TLS implementation was necessary. Oh well. Update: found this explanation in a comment at the top of the (surprisingly short) Go file in the linked repo: The target client is Netscape Communicator 4.51 (both the 40-bit export build and the 128-bit US build) with its clock set to the year 2000. Go&#x27;s crypto&#x2F;tls cannot help: it dropped SSLv3 in Go 1.14, neve...

[goalieca]: Basically 2 days on a consumer GPU to crack a 512 bit cert. The thing is much of the traffic back then did not use ephemeral keys. Most of it wasn&#x27;t even encrypted at all! But about a decade later, it became normal to encrypt everything. I do wonder which governments around the world are just waiting to crack anonymous political speech by recording and saving for later when decryption can happen.

[teiferer]: &gt; I don’t have any good reason to do that, but it seems like fun. What better reason is there to do something than it being fun?

[bpbp-mango]: amusing the site is available over ipv6. I suppose ipv6 was around back then, at least.

[pvillano]: That SSL report with four different automatic &#x27;F&#x27;s is an amazing punchline