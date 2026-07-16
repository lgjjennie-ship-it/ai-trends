---
layout: default
title: "Mysteries of Telegram Data Centers (2022)"
date: 2026-07-15T13:22:00Z
slug: 2026-07-16-mysteries-of-telegram-data-centers-2022
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Telegram, Data Centers, Infrastructure, Technical Analysis, Community Discussion"
---

# Mysteries of Telegram Data Centers (2022)

**链接**: https://dev.moe/en/3025

**作者**: theanonymousone

**发布时间**: 2026-07-15T13:22:00Z

**采集日期**: 2026-07-16


## AI 摘要

Analysis and discussion of Telegram's data center infrastructure, revealing operational insights and community debates on technical aspects.

## AI 评价

The content delves into significant technical and operational aspects of Telegram's data centers, with insightful community comments that add depth and relevance. The discussion is technical and engaging, indicating high community interest.


## 原文内容


--- Top Comments ---

[vvpan]: Somebody already posted it but I wanted to mention it again, investigations that Telegram has not been able to dispute have revealed that Telegram&#x27;s infrastructure is managed by a person who is also managing infra for FSB. And this is happening unbeknownst to Telegram employees.  https:&#x2F;&#x2F;istories.media&#x2F;en&#x2F;stories&#x2F;2025&#x2F;06&#x2F;10&#x2F;telegram-fsb&#x2F;

[flexagoon]: Just like DC5 is often down to the discontent of Chinese users, DC2 is the one serving all Russian and Ukrainian users, so in the more technical Russian-speaking communities &quot;dc2 down&quot; is also a pretty common saying

[glaslong]: The DC3 gap is interesting. I wonder whether they deprecated it because the other EU server had plenty of capacity, or still keep it but only for... &quot;special&quot; account data flow. Also, it looks like it&#x27;s easy enough to ID your DC on their API, though I haven&#x27;t tried it yet (more of a Matrix Stan personally):
 https:&#x2F;&#x2F;core.telegram.org&#x2F;method&#x2F;help.getConfig

[SpaceL10n]: For a hot second there I was really excited to learn about historical telegram &quot;data centers&quot;. It&#x27;s a capital T.

[londons_explore]: This strikes me as a huge amount of custom code and technical debt.    Every new software dev probably has to learn this. Why not a sticky master election per user, and have no special data centers?

--- From hackernews ---

--- Top Comments ---

[eamag]: What are the quotas like execution time, storage etc?

[domh]: This is cool. I wish Signal had a bot API like telegram&#x27;s.

[imhoguy]: Clever idea! Although after reading it briefly I see a need for secrets storage. I&#x27;ve made one Telegram bot hosted on VPS with Docker  and cloud LLM. It also interacts with a few other outside services and all credentials are injected via env vars now. Should I push them as `.env` file for Telegram serverless?

[raybb]: Providing a SQLite db out of the box is a nice touch. I wonder if they&#x27;re capping it&#x27;s size in any way.

[victorbjorklund]: I don&#x27;t see anything about pricing.