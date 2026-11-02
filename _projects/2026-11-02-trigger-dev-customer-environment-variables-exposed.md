---
layout: default
title: "Trigger.dev customer environment variables exposed"
date: 2026-11-02T01:09:16Z
slug: 2026-11-02-trigger-dev-customer-environment-variables-exposed
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security incident, customer environment variables, devops, cloud security, api security"
---

# Trigger.dev customer environment variables exposed

**链接**: https://trigger.dev/blog/security-incident-nov-2026

**作者**: anurag

**发布时间**: 2026-11-02T01:09:16Z

**采集日期**: 2026-11-02


## AI 摘要

Trigger.dev exposed customer environment variables, leading to community debate over the incident's resolution and potential security implications.

## AI 评价

High importance due to security incident involving customer environment variables, with active and insightful community discussion highlighting concerns about resolution and potential impact.


## 原文内容


--- Top Comments ---

[corvad]: I am sorry, this is &quot;Resolved&quot;? How can they even consider marking this resolved in any situation. Yeah we exposed your env vars but we told you about it over email so it&#x27;s all good... We dont know how or to what extend though.

[CharlieDigital]: This should not be marked as &quot;resolved&quot;.  &quot;Mitigated&quot; until some percentage of customers ack the email notification at least (track clicks, get teams on Zoom call, etc.).

[theturtletalks]: The biggest case for building bespoke software is that you drop your attack surface area and it’s not as lucrative to hack one person. Don’t even expose it to the internet if you don’t need to and just run Tailscale.

[iampims]: It’s bold to set status page incident to resolved.

[BADCAFE]: This also happened to a trigger.dev competitor a few months ago, inngest. I was able to patch before it was exploited but that definitely made me question the service.