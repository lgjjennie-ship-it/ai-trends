---
layout: default
title: "Postgres isn't slow, your storage is"
date: 2026-10-12T06:36:53Z
slug: 2026-10-12-postgres-isn-t-slow-your-storage-is
source: hackernews
category: ai-community
ai_score: 8.0
tags: "PostgreSQL, Database Performance, Storage, Cloud Computing, Kubernetes"
---

# Postgres isn't slow, your storage is

**链接**: https://clickhouse.com/blog/posette-talk-recap-postgres-isnt-slow-your-storage-is

**作者**: saisrirampur

**发布时间**: 2026-10-12T06:36:53Z

**采集日期**: 2026-10-12


## AI 摘要

The article argues that PostgreSQL performance issues are often due to storage limitations rather than the database itself, with community comments reinforcing this观点.

## AI 评价

The content discusses a critical aspect of database performance, which is highly relevant to software engineering and systems research. The community comments provide insightful perspectives on storage performance and its impact on database speed, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[smartbit]: CloudNativePG  supports Kubernetes Local Storage from the first release, it one of it&#x27;s main features [0]     Persistent volume management, including:
    Support for Local Persistent Volumes with PVC templates.
    Reuse of Persistent Volumes storage in Pods.
    Separate volumes for WAL files and tablespaces.
  
Temporary PostgreSQL Cluster Degradation [1] While the standard approach ensures service reliability and leverages Kubernetes&#x27; self-healing capabilities, there are scenari...

[mmnfrdmcx]: Cloud is insanely expensive and inefficient. Too many engineers don&#x27;t understand how slow I&#x2F;O back and forth is on network storage, or VMs with chatty neighbors are compared to bare metal...

[CharlieDigital]: &quot;Back in the day&quot;, we used to have to carefully plan the underlying storage array to eek out every ounce of performance from the database server. I think there&#x27;s a generation of devs that just takes big memory pools and SSDs for granted; there&#x27;s a mental disconnect to the fact databases map the underlying storage. It becomes obvious once I bring it up with them in discussion and I can almost see the bulb go off (happened while discussing partitioning and sharding), but the...

[bob1029]: SQLite + NVMe feels like cheating sometimes. If my #1 requirement is lowest possible latency, I can&#x27;t imagine picking anything else. Kestrel (AspNetCore) + SQLite + NVMe all on the same machine is where things start to get really spicy in my experience. Imagine handling an entire form submission that mutates database state in tens to low-hundreds of microseconds. Total wall clock time required to service any HTTP request can be well under a single millisecond. If your average cpu time pe...

[kebsup]: I was using postgres for embarrassingly long time before I&#x27;ve learned the difference between &quot;index scans&quot; and &quot;index only scans&quot;. Including relevant columns in the index can massively improve the performance, because postgres does not need to read the randomly sorted tuple in the original table.