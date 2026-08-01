---
layout: default
title: "Authorize, don't authenticate"
date: 2026-07-31T14:17:43Z
slug: 2026-08-01-authorize-don-t-authenticate
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, authentication, authorization, web开发, 系统研究"
---

# Authorize, don't authenticate

**链接**: https://blog.marcua.net/2026/07/31/authorize-dont-authenticate.html

**作者**: marcua

**发布时间**: 2026-07-31T14:17:43Z

**采集日期**: 2026-08-01


## AI 摘要

The blog post argues for the importance of distinguishing between authentication and authorization, with community comments discussing the nuances and practical implications of this distinction.

## AI 评价

The discussion provides insightful comments on the distinction between authentication and authorization, with some debate on the practical application of the concept, indicating high relevance and community engagement.


## 原文内容


--- Top Comments ---

[jdub]: (c.f. other comments about confusing misuse of security terminology) An easy way to remember the difference between the As in AAA:       Who is your daddy, and what does he do?
    ^ authentication       ^ authorisation
  
And the  all too often forgotten  final A is accounting, for which you can imagine Arnold writing down the interaction in his police notepad. :-)

[sandeepkd]: Got drawn to the topic, however usage of authentication and authorization seem like misnomer here, the core topic seems to be data ownership The concept on a surface level to have ownership over the data makes a lot of sense and to a large part the support exists in a fragmented manner across the different providers&#x2F;applications. The concrete idea of user having a database and then authorizing that to the service is highly impractical. It might be applied for experimentation purposes in ...

[pakl]: So many tools and libraries combine authorization and authentication, and it’s hard to find an authorization server that lets you outsource identity. (All too often the underspecified abbreviation “auth” is used to cover both.) Shameless plug: My colleagues and I implemented a minimal authorization server that lets you leverage a trusted identity provider of your choice (like Entra ID or even Auth0&#x2F;Okta) and handle authorization. It looks up what roles and permissions the identified user...

[_def]: We are back to File-&gt;Open I guess. We could use native applications instead of web apps while we&#x27;re at it. Sadly this approach does not work for a lot of (web) apps.

[smallerfish]: I&#x27;ve been hacking on my own task manager on-and-off for years ( https:&#x2F;&#x2F;the.do.zone ). It has no database; the primary store is the browser, and you can optionally sync to local file system (if using chrome), dropbox, or google drive (less optimal for my needs, because their js oauth implementation is very conservative about token length.) It has some crude but functional diff resolution, so that you can sync across multiple machines. Browsers _could_ provide better tooling to ...