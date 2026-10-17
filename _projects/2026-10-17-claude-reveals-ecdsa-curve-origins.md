---
layout: default
title: "Claude reveals ECDSA curve origins"
date: 2026-10-16T18:55:59Z
slug: 2026-10-17-claude-reveals-ecdsa-curve-origins
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cryptography, ECDSA, NIST, random-number-generator, security"
---

# Claude reveals ECDSA curve origins

**链接**: https://www.anthropic.com/research/ecdsa-curve-origins

**作者**: ahlCVA

**发布时间**: 2026-10-16T18:55:59Z

**采集日期**: 2026-10-17


## AI 摘要

Claude reveals the origins of NIST P- curves, showing they were generated using a random-number generator, not hash algorithms.

## AI 评价

The content reveals significant information about the origins of ECDSA curves, which is highly relevant to cryptography and security. The community discussion is insightful and engaging, with diverse viewpoints.


## 原文内容

<a href="https:&#x2F;&#x2F;words.filippo.io&#x2F;seeds-solved&#x2F;" rel="nofollow">https:&#x2F;&#x2F;words.filippo.io&#x2F;seeds-solved&#x2F;</a>


--- Top Comments ---

[fidotron]: While this confirms the method of production it doesn&#x27;t say anything about their selection, especially since they were, apparently, generated over a period of months. Specifically you cannot see those candidates that were generated and discarded. &quot;It is still conceivable that these curves were selected to have a specific property in principle by searching over timestamps to the random number generator.&quot; Yes. &quot;However, you would only need to do that if you were going to dis...

[JumpCrisscross]: “In under half an hour, Claude discovered the origins of the NIST P-192, P-224, P-256, P-384 and P-521 seeds. None of them were the results of any hash algorithm at all, but rather the output of the C library’s lrand48 random-number generator, seeded with a Unix timestamp!” Gorgeous. I wonder if the NSA employee who did this suffered a head injury or has been quietly giggling to themselves for the last quarter century.

[tptacek]: This is devastating news... for an entire generation of NIST cryptography conspiracy theories.

[sweis]: 13 years of tinfoil hats for srand48(time(NULL)

[teddyh]: &gt;  The fifth binary seed, B-163, fits nothing Claude has tried and remains unexplained.  The simplest explanation would be that it  was  generated the same way as the others, but somebody mistyped a digit somewhere along the way to publishing, and therefore a solution could not be found with the assumption that the number is correct.