---
layout: default
title: "P99 0 ms* autocomplete for 240M domain names"
date: 2026-08-31T03:20:33Z
slug: 2026-08-31-p99-0-ms-autocomplete-for-240m-domain-names
source: hackernews
category: ai-community
ai_score: 8.0
tags: "autocomplete, performance optimization, domain names, technical deep-dive, user experience"
---

# P99 0 ms* autocomplete for 240M domain names

**链接**: https://ruurtjan.com/articles/p99-0ms-autocomplete-for-240-million-domain-names

**作者**: dbalatero

**发布时间**: 2026-08-31T03:20:33Z

**采集日期**: 2026-08-31


## AI 摘要

A new autocomplete system achieves 0.99th percentile response time of 0 ms for 240 million domain names, sparking discussions on technical implementation and user experience.

## AI 评价

The content discusses a significant technical achievement in autocomplete performance, with insightful community comments that provide additional value and perspectives on the topic.


## 原文内容


--- Top Comments ---

[skybrian]: This autocomplete suggests domains that don&#x27;t exist. You can just type garbage and it will suggest something, but then if you go there, there are no records. It seems like one purpose of an autocomplete box is help you avoid typos, so that makes it less useful.

[chrismorgan]: Using keyup makes  no  sense and is inconsistent with user expectations. For triggering actions (which includes normal typing), you only  ever  use keydown. (Well, there’s  one  exception for reasons unclear to me: activating a button by pressing Space. That triggers on keyup like how clicks are on release, while Enter triggers on keydown.) Keyup is limited to things where you’re constantly reacting to the state of a key, as is common in games. This affects the functionality, too. It is in fa...

[ViscountPenguin]: Unfortunately this approach doesn&#x27;t feel that great down here in Australia, definitely a function of latency. I think you could get a lot closer by framing this as an optimization problem, where you use the full alphabet dictionary, but add a residual prediction which aims to cover as much of the remaining domain name tree as possible  weighted by popularity . This tree could then be pre-baked and stored with the same system. This would probably get you p99 0ms even in Australia.

[oersted]: Why not just trigger the fetch on keyDown and show it as soon as the response arrives, as usual? The time it takes to press a key is a reasonable target to aim at for API latency I suppose, but it is still an arbitrary target. Waiting to display until keyUp just adds more latency if your API is faster. Having it synced with keyUp doesn&#x27;t make it feel more immediate to me.

[kevmo314]: If you’d like to reduce the network latency further you can store each trie node as a file, naming it conveniently the prefix path to that node. Then dump the few hundred million files onto R2. Now the traversal can be done completely via CDN lookups!

--- From hackernews ---

--- Top Comments ---

[haunter]: Yeah the long forgotten Steam release of League of Legends is also in the files (it was only available for like 5 months) Might not be the most interesting game in the leak but old versions of live service games are almost impossible to come by  https:&#x2F;&#x2F;steamdb.info&#x2F;app&#x2F;20590&#x2F;  Downloaded it to extract all the old assets but it still needs an encrypted depot key &gt;error!! -- extract: missing depot key!, pass --key if you know it though Some people reported that &quo...

[zetalyrae]: Tangential, but it&#x27;s interesting to me that there are &quot;Valve watchers&quot;, people who are big on social media for doing Valve analysis and kremlinology. Humans are so cool.

[xnx]: Dupe:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49497110

[giov4]: If it will be really seeded forever that would be a great way of archiving for posterity! btw interestingly from the leak homepage:  &quot;To the operators of browsers&#x2F;indexers: please look into caching or mirroring the blobs, as a large volume of requests at this point are coming from these, which seem to be impacting downloads for everyone. It&#x27;s a 15 GB directory that would save the time of many people. Many people should have them all downloaded by now. We are facing pretty sever...

[WorseIsBetter]: Good question. Probably in a jurisdiction Valve can&#x27;t touch, or they&#x27;re just indexing stuff without hosting the actual files. Either way, it&#x27;s risky. Valve&#x27;s lawyers are definitely already on it