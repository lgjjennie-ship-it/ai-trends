---
layout: default
title: "Backups Aren't Simple"
date: 2026-09-16T20:27:16Z
slug: 2026-09-17-backups-aren-t-simple
source: hackernews
category: ai-community
ai_score: 8.0
tags: "backups, data retention, data loss, restoration, ZFS"
---

# Backups Aren't Simple

**链接**: https://filipovski.net/2026/09/16/backups-arent-simple.html

**作者**: afilipovski

**发布时间**: 2026-09-16T20:27:16Z

**采集日期**: 2026-09-17


## AI 摘要

The article highlights the challenges and importance of data backups, emphasizing the need for robust restoration strategies.

## AI 评价

The content discusses the complexity and importance of backups, which is highly relevant in the field of software engineering and systems research. The community comments provide diverse personal experiences and technical insights, enhancing the value of the discussion.


## 原文内容


--- Top Comments ---

[dirkc]: &gt; “There are two types of people: those who have suffered a catastrophic loss of data, and those who will.” When I was a teenager, I was the reason for data loss for my dad, twice. Both times it was because I was re-partitioning a hard drive to install linux. You would think that taught me a lesson about backups, instead it reminds me every now and again to be grateful for an awesome dad and aspire to handle situations with my kid similarly :)

[publlus_enigma]: There are four times in my life I have suffered regrettable data loss incidents. The first was when the telephone pole outside our house was struck directly by lightning. Not only was it the loudest thing I have ever heard, the current surged through the telephone line, into the internal fax modem, and fries everything within its vicinity. I was 10. I did have backuos, but only only floppy and they didn&#x27;t cover everything. The second was storing data in OneDrive - a change to their terms...

[AdieuToLogic]: A friend of mine used to work at Veritas[0] making enterprise data retention solutions.  When I spoke about their product as being &quot;making backups&quot;, he corrected me by saying:     We are not in the backup business.  We are in the restoration
  business.
  
0 -  https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Backup_Exec

[Helmut10001]: I really like ZFS snapshots with offsite pull-mode sync using 
Jim Salter&#x27;s sanoid&#x2F;syncoid [1]. ZFS is the base for all OS&#x2F;filesystems on top of it. If you have a good system for organizing ZFS datasets, and separating ephemeral from persistent data (e.g. [2]), then this is 90% of the backup requirements already fullfilled.       [1]: https:&#x2F;&#x2F;github.com&#x2F;jimsalterjrs&#x2F;sanoid
    [2]: https:&#x2F;&#x2F;du.nkel.dev&#x2F;blog&#x2F;2026-05-16_rootless_docker_virti...

[ebrahimh]: I’m setting up 3-2-1-ish backups for my infra of 3 hosts, and definitely leaning towards Restic + Backrest. All my hosts run the same CoreOS setup ( https:&#x2F;&#x2F;github.com&#x2F;ebrahim37&#x2F;infra-template ), where container volumes are placed in one central volumes&#x2F; folder and that is the only thing I have to backup. I plan to implement it like this:     vps1:
  - restic container with custom sh entrypoint that will backup volumes&#x2F; to homelab every 24 hours
  homelab:
  - ba...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE9DWlN4cE1IbURvU21XOFpRamJUZXJLTVZQSklRTWI1alVZR1lDdmU4b3NDb0FLTDk4TFVidmtvQU9FYXNYRjBreUtDbkxSdmM0dkVPMFB6SVZHLTVoQzA5aA?oc=5" target="_blank">广电总局：使用AI的广电视听节目必须添加标识，严禁AI魔改</a>&nbsp;&nbsp;<font color="#6f6f6f">thepaper.cn</font>