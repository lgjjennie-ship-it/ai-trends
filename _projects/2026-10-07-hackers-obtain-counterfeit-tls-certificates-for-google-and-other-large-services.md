---
layout: default
title: "Hackers obtain counterfeit TLS certificates for Google and other large services"
date: 2026-10-07T04:37:05Z
slug: 2026-10-07-hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services
source: hackernews
category: ai-community
ai_score: 9.0
tags: "cybersecurity, TLS certificates, DNS security"
---

# Hackers obtain counterfeit TLS certificates for Google and other large services

**链接**: https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/

**作者**: colinprince

**发布时间**: 2026-10-07T04:37:05Z

**采集日期**: 2026-10-07


## AI 摘要

Hackers have obtained counterfeit TLS certificates for Google and other large services, raising concerns about the security of major online services.

## AI 评价

The content discusses a major security breach involving counterfeit TLS certificates for major services, indicating a significant threat to online security. The discussion quality is high with 27 comments providing insightful analysis and technical discussion.


## 原文内容


--- Top Comments ---

[Borealid]: This sounds like something that HPKP (  https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;HTTP_Public_Key_Pinning  ) could have prevented and CAA records (  https:&#x2F;&#x2F;letsencrypt.org&#x2F;docs&#x2F;caa&#x2F;  ) could not. But HPKP is deprecated.

[iso1631]: So looks like 1) Top level CC DNS entries were hacked 2) CAA entries were removed (I assume google had them -- they do now CAA 0 issue &quot;pki.goog&quot; 3) These were then used to verify issuing certificates against major CAs (letsencrypt etc) - for example by creating a new CNAME record for DNS verification Looking at google.as specifically shows Let&#x27;s Encrypt issuing a certificate on 2026-09-27  https:&#x2F;&#x2F;ctlogs.dev&#x2F;search?q=google.as  Google normally issues certificate...

[TheChaplain]: I&#x27;m just waiting for Claude-powered hackers to break into the dns root system or bgp routing system. It&#x27;s going to be a wreck :(

[rswail]: The affected country ccTLDs are: AS: American Samoa GH: Greenland SL: Sierra Leone