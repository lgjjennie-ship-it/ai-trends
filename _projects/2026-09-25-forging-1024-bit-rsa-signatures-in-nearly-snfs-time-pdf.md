---
layout: default
title: "Forging 1024-bit RSA signatures in nearly SNFS time [pdf]"
date: 2026-09-24T14:26:32Z
slug: 2026-09-25-forging-1024-bit-rsa-signatures-in-nearly-snfs-time-pdf
source: hackernews
category: ai-community
ai_score: 9.0
tags: "cryptography, RSA, security, cryptanalysis, NSNFSSSFSFN"
---

# Forging 1024-bit RSA signatures in nearly SNFS time [pdf]

**链接**: https://eprint.iacr.org/2026/2131.pdf

**作者**: int0x29

**发布时间**: 2026-09-24T14:26:32Z

**采集日期**: 2026-09-25


## AI 摘要

A new method for forging 1024-bit RSA signatures nearly as fast as SNFS is introduced, posing a major threat to current cryptographic practices.

## AI 评价

The content discusses a groundbreaking method for forging 1024-bit RSA signatures nearly as fast as the Special Number Field Sieve (SNFS), which is highly significant for cryptography. The community comments are insightful and diverse, further validating the importance of the topic.


## 原文内容

<a href="https:&#x2F;&#x2F;arstechnica.com&#x2F;security&#x2F;2026&#x2F;09&#x2F;theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before&#x2F;" rel="nofollow">https:&#x2F;&#x2F;arstechnica.com&#x2F;security&#x2F;2026&#x2F;09&#x2F;theres-a-new-way-to...</a>


--- Top Comments ---

[tptacek]: The most important thing to know about this work, which is awesome, is that it relies on access to a raw RSA oracle, where you have a public key and an API that allows you to directly do RSA operations with the corresponding key. The idea is that you then lose access to the oracle, and thus to the private key, but you&#x27;ve gained enough information from your session with the oracle to make forgeries in the future. So it&#x27;s not a straightforward general-purpose RSA-1024 signature break;...

[yababa_y]: in the PDF metadata we find the proper and appropriate title of this work:       Nearly SNFS-Speed Signature Forgery Sans Factoring N (NSNFSSSFSFN)

[RossBencina]: I was expecting to see mention of Microsoft&#x2F;Apple executable code-signing in the examples. I know key lengths are well beyond 1024 now, but on the Microsoft side it was (is?) possible for USB tokens to be distributed in the mail. What I don&#x27;t know is whether the tokens could be used as oracles in this attack.

[nk_kolja]: I was unaware of snfs algorithms for generic moduli and&#x2F;or signatures. Very nice. 
The theoretical result is purely due to the 2007 Joux et al. paper. 
What’s new is the implementation and the 1024-bit rsa signature forgery. Also no ai, so we can expect some speedups soon. I really didn’t expect rsa to be targeted so much this year. Hope that these results will motivate people to pursue algorithmic improvements!

[benmmurphy]: nice poem at the end of the paper