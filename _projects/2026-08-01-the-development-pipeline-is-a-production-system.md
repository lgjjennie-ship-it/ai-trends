---
layout: default
title: "The development pipeline is a production system"
date: 2026-08-01T03:16:09Z
slug: 2026-08-01-the-development-pipeline-is-a-production-system
source: hackernews
category: ai-community
ai_score: 8.0
tags: "software development, CI/CD, DevOps, operations, developer experience"
---

# The development pipeline is a production system

**链接**: https://sundry.jerryorr.com/2026/07/31/development-pipeline-is-a-production-system

**作者**: firefoxd

**发布时间**: 2026-08-01T03:16:09Z

**采集日期**: 2026-08-01


## AI 摘要

The article explores the concept of development pipelines as production systems, emphasizing the need for high availability and proper management of dev and testing environments.

## AI 评价

The content discusses a critical aspect of software development pipelines, highlighting the importance of treating development and testing environments as part of the production system. The discussion quality is high, with insightful comments from various professionals in the field.


## 原文内容


--- Top Comments ---

[tetha]: This is one of the unintuitive parts when you get into operations: If you go to lower layers in the stack, production expands towards dev: To the product developers and operators, customer-facing systems are production. To us in infra-operations, dev and testing are actually production as well. Maybe with a lower SLA and easier maintenance scheduling, but if we fry dev or testing, a hundred developers can&#x27;t work and start screaming. Within the infra-ops team, our config management tests ...

[donatj]: &gt; If the QA server is down, the testers are unable to do their jobs, and the team isn’t producing working software. For the QA team, this is a production outage. Fixing it should be a top priority. Genuine question, does anyone here ITT working in software still have dedicated QA? They laid off all our QA engineers about a year ago, and talking to friends and former colleagues it seems to be the industry wide trend? FWW I think a good QA person is worth their weight in gold and this has be...

[wxw]: In my experience, most large companies  do  treat not being able to ship code (i.e. deploy to prod) as outages. Being on-call in a CI&#x2F;CD infra team is fairly common. Agreed that many parts of the development pipeline can be hit-or-miss. At scale, it&#x27;s great to have a dedicated &quot;Developer Experience&#x2F;Tools&quot; org, though I&#x27;ve seen mixed results even with one.

[malikolivier]: Once you enumerate what your development pipeline actually depends on, you will see it rely on a lot of stuff. A typical CI run pulls from npm, PyPI, Docker Hub, a distro mirror and a handful of third-party, none under your control, none with an SLA to you. Third-party outages, yanked versions, compromised packages are the things that can waste your time.
Some packages may also drop support for whatever distro you&#x27;re still using, and the mirrors may disappear (e.g. older Python versions,...

[reactordev]: So is the recruiting pipeline. Kill that and you kill the company. Agents and AI can only do so much, the rest is people power. Sadly too many companies have broken recruiting processes.