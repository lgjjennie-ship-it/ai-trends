---
layout: default
title: "Postgres LISTEN/NOTIFY actually scales"
date: 2026-07-24T19:05:53Z
slug: 2026-07-25-postgres-listen-notify-actually-scales
source: hackernews
category: ai-community
ai_score: 8.0
tags: "PostgreSQL, Database, Scalability, LISTEN/NOTIFY, Technical Deep Dive"
---

# Postgres LISTEN/NOTIFY actually scales

**链接**: https://www.dbos.dev/blog/postgres-listen-notify-scalability

**作者**: KraftyOne

**发布时间**: 2026-07-24T19:05:53Z

**采集日期**: 2026-07-25


## AI 摘要

Postgres LISTEN/NOTIFY feature is capable of scaling effectively, as demonstrated by real-world use cases and community experiences.

## AI 评价

The content discusses a significant technical aspect of Postgres, which is valuable for database administrators and developers. The community comments provide diverse insights and practical experiences, enhancing the discussion's quality.


## 原文内容


--- Top Comments ---

[jerf]: &quot;Scale&quot; isn&#x27;t a binary, it&#x27;s a continuum. &quot;Scales to 60K&#x2F;s&quot; can be 5 orders of magnitude more than one system needs and 5 orders of magnitude too small for another. Personally I&#x27;d knock the general &quot;premature optimization&quot; off the list of &quot;most common developer errors&quot; and put in its place &quot;using techs with the wrong scaling factors&quot;. If you use something too small and you exceed its needs, the failure is obvious, but the o...

[phamilton]: Just sharing a data point and experience. We had a lot of success with LISTEN&#x2F;NOTIFY when we paired it with a Rust graphql subscription broker. 10s of thousands of subscriptions, but only 3 or 4 LISTEN connections (one for each host). All changes would be pushed out to all hosts, who would each manage the actual user subscriptions and choose what to actually publish. This worked super well. In general, moving from hundreds of Ruby or Node hosts to just a few Rust hosts just allows so man...

[nzoschke]: I continue to love DBOS for how it just leverages Postgres (and now SQLite) properly. It&#x27;s effortless to drop into an existing CRUD stack. Once you start down the &quot;durable workflows&quot; path, you start seeing them everywhere. My latest experiments are treating individual emails as durable workflows, where you, the people you&#x27;re communicating with, agents and tools like GitHub or Attio all take turns in the flow.  https:&#x2F;&#x2F;housecat.com&#x2F;blog&#x2F;gmail-durable-wor...

[vhiremath4]: I once was the CTO of a company that serviced about 100k requests per day across all our services. We grew to millions and eventually 10&#x27;s of millions, but, somewhere along the way, an engineer on our team decided he wanted to build a queue off LISTEN&#x2F;NOTIFY semantics in order to take advantage of strong consistency with the rest of our data model, which seemed reasonable given LISTEN&#x2F;NOTIFY is not that hard to understand and we did need consistency guarantees for this workflow...

[dang]: Related, presumably:  Postgres LISTEN&#x2F;NOTIFY does not scale  -  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44490510  - July 2025 (321 comments)

--- From hackernews ---

--- Top Comments ---

[zellster]: Recent article about graphdbs including DuckPGQ:  https:&#x2F;&#x2F;theconsensus.dev&#x2F;p&#x2F;2026&#x2F;05&#x2F;29&#x2F;ladybug-duckdb-and-pos...

[scottsiu]: I believe the graph functionality will be a very important new feature for DuckDB. Although the project is still in the research stage, it is incredibly useful for data analysis—especially given the increasing use of semantic relationships in the current internet landscape and within AI agents.

[keynesyoudigit]: I don’t understand why the graph – relational crossover ecosystem doesn’t get more love like this – sometimes I want to explore a different paradigm on my data without installing a completely separate database and performing a migration. This is super cool!

[keynesyoudigit]: Maybe I’m just silly, but one suggestion – I thought the PG stood for Postgres at first – some sort of cute name might be in order so people don’t get the impression that they have to install this on Postgres + pgduck or something. LillipadsDB?

[dzonga]: how&#x27;s this comparable to kuzudb &amp; maybe falkordb ?