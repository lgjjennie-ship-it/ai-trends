---
layout: default
title: "GitHub's new Git storage architecture"
date: 2026-11-06T19:24:21Z
slug: 2026-11-07-github-s-new-git-storage-architecture
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Git, GitHub, Scalability, Storage Architecture, Performance"
---

# GitHub's new Git storage architecture

**链接**: https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/

**作者**: DAlperin

**发布时间**: 2026-11-06T19:24:21Z

**采集日期**: 2026-11-07


## AI 摘要

GitHub introduces a new Git storage architecture to improve scalability and performance, with community discussions comparing it to existing solutions and analyzing its potential impact.

## AI 评价

The content discusses a significant technical development in GitHub's Git storage architecture, which is important for scalability and performance. The community comments provide insightful comparisons and discussions, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[dwm]: This looks a lot like Cursor&#x27;s Continuity, though Github are reporting an order of magnitude greater write throughput.  https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;git-at-any-scale

[yakkomajuri]: If I&#x27;m reading this right, this is (really solid) future planning but won&#x27;t help with the current outages? I&#x27;d have thought so from the headline + initial content but then they say that the horizontal scale techniques are basically carrying over from the existing architecture (where it seems the problem is?) and this is mostly to help with what they call &quot;vertical scale&quot; (intra-repo scalability). They also admit right after that the most active repos today will receiv...

[pksunkara]: Most of this is similar to what  https:&#x2F;&#x2F;enroute.sh  already did scaling Git.  https:&#x2F;&#x2F;enroute.sh&#x2F;blog&#x2F;everyone-is-doing-git-on-s3-wrong

[bob1029]: I think perforce might be the better VCS if you intend to have a bunch of autonomous agents attempt to collaborate over one big pile. Multiple terabytes is no problem out of the box. You get exclusive locking of files. You can easily take partial checkouts of the monolith. Centralization is a  feature  in this particular context. Git works great if the need for coordination is moderate. If you&#x27;ve got thousands of automated developers with their hands in the cookie jar, exclusive locks st...

[jxramos]: Agent scale is definitely on the mind around industry, I wonder what github folks would say in response to  https:&#x2F;&#x2F;www.anthropic.com&#x2F;research&#x2F;redesigning-source-contro... . It&#x27;s an interesting read to step back and consider source control from first principles and rebalance the tradeoffs for what qualities matter in this new regime.

--- From hackernews ---

--- Top Comments ---

[ModernTimes]: None of this would work if Google Adsense didn&#x27;t allow scam ads on their system. But they do, millions every day (I deal with this every day on my websites, Google don&#x27;t care).  https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Racketeer_Influenced_and_Corru...

[albert_e]: A total of 404 fake domains impersonating a single restaurant brand site! The scale is mind-boggling. The number 404 is poetic. Any possible (mis) spelling of the brand will open the &quot;intended&quot; site - you will never see a 404 :D. Auto-correct on steroids indeed. And I imagine this sort of thing must be happening across hundreds of markets not just US. And possibly not just food delivery but other types of ecommerce as well.

[mrguyorama]: Google is the entire problem here. Pay them money and your literal scam site can sit above the real site in the search results. Why are they allowed to direct you to literal scams? Why are they allowed to profit off of literal scams? This affects the company I work for, who gets called every single day with customer complaints from people who clicked the scam link from a search ad when looking for our site. Our site has existed for over a decade. There&#x27;s no justifiable reason that a comp...

[mlmonkey]: Couldn&#x27;t the original website owner just look at the logs and see where most of the requests are coming from? And also the referrers would be a dead giveaway, right? That&#x27;s assuming someone is looking at the `access.log` file occasionally.

[_def]: damn it. Every now and then I daydream about a federated network of digital delivery infra to cut out these platform middlemen but abuse&#x2F;moderation like this is still what makes the idea impossible to take off. That&#x27;s what you (and the restaurant) get from the centralization.