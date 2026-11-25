---
layout: default
title: "Taking over US Treasury subdomains for $3 each"
date: 2026-11-25T04:27:55Z
slug: 2026-11-25-taking-over-us-treasury-subdomains-for-3-each
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cybersecurity, DNS security, US Treasury, AWS, SSL certificates"
---

# Taking over US Treasury subdomains for $3 each

**链接**: https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each

**作者**: negura

**发布时间**: 2026-11-25T04:27:55Z

**采集日期**: 2026-11-25


## AI 摘要

A security research reveals that US Treasury subdomains can be taken over for $3 each, prompting discussions on the role of AWS and the implications for SSL certificates.

## AI 评价

The content discusses a significant security issue involving US Treasury subdomains being taken over for a low cost, with insightful community comments that discuss the implications and potential solutions. The discussion quality is high with diverse viewpoints.


## 原文内容


--- Top Comments ---

[chinathrow]: &gt; AWS confirmed with us that they don’t plan to make changes, as they see the takeover as depending on customer-side DNS records rather than an issue in their services. They also told us they treat rapid allocation and release as a policy violation and have controls against it. Whilst this is true, they could do more to prevent the issue in our opinion, and the vulnerability class remains open due to their position.

[RandomBK]: I want to zoom in on the HTTPS angle of this. The ability to provision a valid cert for any domain so long as you could host a file on that domain has undoubtedly eased the rapid adoption of SSL, but makes attacks like this extra devastating. Are EV certs still a thing these days? Perhaps certain domains should be given extended validation requirements? I&#x27;m shocked that a .gov could fall prey to something like this

[lmz]: AWS could offer an Elastic IP record type for Route53 that is deleted automatically.

[bilekas]: &gt; moved the matching IPs across. It worked without any issues, despite sitting in the same organization as the banned account That really feels like an oversight on AWS part no ?

[scalableUnicon]: I remember reading something like this long back, and dug this out after a bit of searching: A Recycled IP Address Caused Me to Pirate Books by Accident( https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=17020944 ) Should definitely clean up DNS records after server&#x2F;IP removals, seems to be actively exploited even long before.