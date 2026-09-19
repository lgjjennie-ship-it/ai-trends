---
layout: default
title: "Saving another 100TB of RAM"
date: 2026-09-18T18:51:46Z
slug: 2026-09-19-saving-another-100tb-of-ram
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Cloudflare, RAM Optimization, Systems Research, Technical Achievement, Hashing"
---

# Saving another 100TB of RAM

**链接**: https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/

**作者**: f311a

**发布时间**: 2026-09-18T18:51:46Z

**采集日期**: 2026-09-19


## AI 摘要

Cloudflare achieves a major breakthrough by saving 100TB of RAM through innovative mathematical techniques.

## AI 评价

The content discusses a significant technical achievement by Cloudflare in reducing RAM usage, which is highly relevant in the field of systems research. The community comments are insightful and contribute to the discussion's value.


## 原文内容


--- Top Comments ---

[zer0x4d]: Incredibly happy to see this series of CF articles. I was always so proud of devs back in the days where RAM and processing were scarce and who had to get creative to fit even the most basic stuff in the budget. It seemed to me that after RAM and processing became abundant, most gave up on optimization and focused on shipping instead which meant now that even with several cores, a basic notepad or music player failed to work. In a way, RAM becoming more expensive has ushered in a new era of f...

[vlovich123]: I would get rid of consistent hashing and ketama for a better system which works save an additional 600TiB. You use the first N bits of your key hash to pick the server partition so it’s a reasonable number (eg 128 servers per partition). Then use high quality precomputed hashes (first 64 bits of sha256) for the server name as N in H(K + N). Use wymum from wyhash as the H so that you do o(n) integer multiplications while retaining a result that’s still a good hash statistically. Now you’re us...

[dr_dshiv]: Cloudflare is truly amazing, they have made so much possible for my main side-project at a price and performance that I can’t really take credit for ( http:&#x2F;&#x2F;sourcelibrary.org ), I don’t care if their text was written with AI, I just wish I could get my own AI to sing so well about hashing… but wait.. today I noticed Claude trying to use hashing when a timestamp would honestly do, and now I’m really doubting myself, hmm…

[ricardobeat]: These optimizations are impressive, but it gets me thinking: at what point does a company become a collection of impenetrable siloes, where nothing really does what you expect? Maybe know with AI this is less of an issue as exploring a codebase is also much faster.

[Fordec]: This sort of thing makes me thing that we&#x27;re about to enter an era where software development is going to be where most of the jobs fallout will be. You can&#x27;t one-shot vibe code your way to this. But for proper Software Engineering, those jobs are safe where more and more problems are going to actually need solving by creatively using math because all the problems individuals deliver are just going to be larger. People are just mourning the loss of the low hanging fruit.