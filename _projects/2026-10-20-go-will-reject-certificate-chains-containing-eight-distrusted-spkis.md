---
layout: default
title: "Go will reject certificate chains containing eight distrusted SPKIs"
date: 2026-10-20T03:05:07Z
slug: 2026-10-20-go-will-reject-certificate-chains-containing-eight-distrusted-spkis
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Go, cryptography, certificate authorities, security, open source"
---

# Go will reject certificate chains containing eight distrusted SPKIs

**链接**: https://github.com/golang/go/issues/82345

**作者**: mendym

**发布时间**: 2026-10-20T03:05:07Z

**采集日期**: 2026-10-20


## AI 摘要

Go's update to reject certificate chains with eight distrusted SPKIs and the community's reaction to this change.

## AI 评价

The content discusses a significant technical development in Go's handling of certificate chains, with high community engagement and insightful comments. The discussion provides valuable context and analysis.


## 原文内容


--- Top Comments ---

[agwa]: https:&#x2F;&#x2F;gist.github.com&#x2F;AGWA&#x2F;5a78186e0f4a7d537b8891a7b46f945...  is the list of certificates in Certificate Transparency  issued  by the blocked CAs as of this time. They appear to be non-malicious test certificates, and the DNS name in the first certificate indicates who likely discovered the issue. What&#x27;s alarming and unprecedented is that yesterday, two Certificate Transparency log implementations were updated to block the logging of certificates issued by the CAs....

[ericbarrett]: A bit more info (and some discussion linked from these Bugzilla reports):  https:&#x2F;&#x2F;bugzilla.mozilla.org&#x2F;show_bug.cgi?id=2083709   https:&#x2F;&#x2F;bugzilla.mozilla.org&#x2F;show_bug.cgi?id=2018979

[wnoise]: It is a shame that you cannot have a cert signed by multiple CAs. (The format seems like it would allow it, but nothing supports it, and in practice CAs demand the ability to actually modify some fields, and then sign that.)

[accountrequired]: &quot;Sir, this is a Wendy&#x27;s&quot; moment where my compiler thought it was a root certificate authority

[mendym]: This seems to be the list of certs
 https:&#x2F;&#x2F;gist.github.com&#x2F;mendymm&#x2F;ff7a9fd00339260b4d2dbdcb0f48...  data from  https:&#x2F;&#x2F;www.ccadb.org&#x2F;resources