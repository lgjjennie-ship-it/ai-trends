---
layout: default
title: "AWS: Inaccurate Estimated Billing Data – $1.7 billion"
date: 2026-07-17T09:42:05Z
slug: 2026-07-18-aws-inaccurate-estimated-billing-data-1-7-billion
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AWS, billing, cloud computing"
---

# AWS: Inaccurate Estimated Billing Data – $1.7 billion

**链接**: https://news.ycombinator.com/item?id=48945241

**作者**: nprateem

**发布时间**: 2026-07-17T09:42:05Z

**采集日期**: 2026-07-18


## AI 摘要

AWS user reports a $1.7 billion estimated bill due to a billing system error, sparking community discussion on similar issues.

## AI 评价

The content discusses a significant issue with AWS billing, which can have a major impact on users. The community comments provide valuable insights into similar issues and resolutions, enhancing the discussion's quality.


## 原文内容

URL already posted: <a href="https:&#x2F;&#x2F;health.aws.amazon.com&#x2F;health&#x2F;status" rel="nofollow">https:&#x2F;&#x2F;health.aws.amazon.com&#x2F;health&#x2F;status</a><p>I&#x27;ve got an estimated bill for $1.7 BILLION over this month. Normal usage is &lt; $5.<p>Obvs have created an urgent AWS support ticket. Anyone else seeing something like this?<p>Update: Reddit link: <a href="https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;aws&#x2F;comments&#x2F;1uyuaw7&#x2F;help_my_bill_skyrocketed_from_around_5_cents_per&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;aws&#x2F;comments&#x2F;1uyuaw7&#x2F;help_my_bill_s...</a>


--- Top Comments ---

[donavanm]: Ive dealt with this error at AWS. It’s a unit error. In my case we _meant_ to charge like 5¢&#x2F;GB, but missed the unit (GB), and then the billing system defaults to bytes. 5¢ per Byte of data transferred meant some customers were seeing MM bills within hours. Got paged by support around 2am, had it fixed and amendments issues by 3-4am, apology emails shortly after. Services emit metering values that arent directly tied to prices. Every SKU&#x2F;line item is defined in  a “pricing plan”, wi...

[yuchen20]: I got 3 consecutive emails warning that my budget crossed its $18 threshold. Opened it up: cost was 78 million. Thought it was a phishing attempt, logged into my actual account, and... still 78 million. EMOTIONAL DAMAGE.

[wglass]: It&#x27;s crazy enough this will be fixed soon. Years ago I found an actual hidden error in my bill.  (This was early 2010s).  The system was calculating the EC2 reservation savings incorrectly for some of my servers.  I was crunching all their detailed usage data on a regular basis in an 18 tab spreadsheet and couldn&#x27;t get it to fully reconcile.  I spent months trying to track down the discrepancy. Once I found it, I had to convince AWS their system was wrong, which took another big chu...

[lukaslueg]: Apparently what used to be `GB of storage consumed` is confused with `Bytes of storage consumed`, leading to a cool off by 2*30 error. &gt; You&#x27;re right to question my calculation. The MCP server failed to connect when I tried to look up the field definition. I guessed instead of validating. This is on me. But look at all the revenue!

[fron]: Woke up to a billing alarm email. Thought I had leaked my AWS keys accidentally and somehow run up 437 billion dollars of charges. Joke&#x27;s on them though, I don&#x27;t have 437 billion dollars Anyways I didn&#x27;t need coffee. That produced an adrenaline release unlike any I&#x27;ve experienced before. Thanks AWS