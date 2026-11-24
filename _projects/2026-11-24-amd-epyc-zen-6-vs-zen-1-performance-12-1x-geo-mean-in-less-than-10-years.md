---
layout: default
title: "AMD EPYC Zen 6 vs. Zen 1 Performance: 12.1x Geo Mean in Less Than 10 Years"
date: 2026-11-24T05:15:22Z
slug: 2026-11-24-amd-epyc-zen-6-vs-zen-1-performance-12-1x-geo-mean-in-less-than-10-years
source: hackernews
category: ai-community
ai_score: 9.0
tags: "AMD EPYC, Zen 6, Performance Improvement"
---

# AMD EPYC Zen 6 vs. Zen 1 Performance: 12.1x Geo Mean in Less Than 10 Years

**链接**: https://www.phoronix.com/review/amd-epyc-9006-7601

**作者**: zdw

**发布时间**: 2026-11-24T05:15:22Z

**采集日期**: 2026-11-24


## AI 摘要

AMD EPYC Zen 6 processors show a 12.1x geometric mean performance improvement over Zen 1 processors in less than 10 years.

## AI 评价

The content discusses a significant performance improvement in AMD EPYC processors, which is highly relevant to software engineering and systems research. The community comments provide insightful analysis, further increasing the content's value.


## 原文内容


--- Top Comments ---

[Aurornis]: Compiling the Linux kernel in 18 seconds and LLVM in almost a minute flat is amazing. &gt; the EPYC 9006 SP7 processors have begun shipping. With the AMD EPYC 9996 256-core flagship are 256 Zen 6C cores &#x2F; 512 threads per socket, 2.55GHz base clock, 4.1GHz max boost frequency, and an incredible 1024MB of L3 cache. EPYC 9006 SP7 processors support DDR5 RDIMMs or up to MRDIMM-12800 memory at 16 channels. There is also 96 lanes of PCI Express 6.0. The EPYC 9996 has a 600W default power ratin...

[x-complexity]: There&#x27;re 2 parts to the 12x gain: Raw core count bumps, &amp; per-core performance improvements.  https:&#x2F;&#x2F;www.phoronix.com&#x2F;benchmark&#x2F;result&#x2F;amd-epyc-zen-6-ven...  EPYC 7601 2P Zen 1 Naples = 2 x AMD EPYC 7601 32-Core (64 Cores &#x2F; 128 Threads) EPYC 9686F 2P Zen 6 Venice = 2 x AMD EPYC 9686F 96-Core @ 5.32GHz (192 Cores &#x2F; 384 Threads) The core count bump alone will give an almost 3x improvement (192&#x2F;64), had the architectures stayed the same. Thus the...

[skywal_l]: What I was personally looking for so here it is: &quot;on a performance-per-Watt basis was about 5x the performance-per-Watt from these Zen 1 to Zen 6 flagship CPUs&quot;

[kvemkon]: &gt; Performance: 12.1x Geo Mean in Less Than 10 Years If we only could use the same software code base today! The most interesting comparison is taking the code you needed to compile when Zen 1 has arrived comparing with the code when Zen 6 became available. Considering available benchmarks from Phoronix. Looking at compilation speed, performance per $ has decreased considering the price increase (let alone RAM).     AMD EPYC 7601 -  32x Zen 1  -  $5783 [1] ($4200) - 180W (2017) [2]
  AMD EP...

[samuelknight]: These hardware comparisons understate the total experienced improvement between 2017 and today. A 2022 Phoronix article compared Zen 1 with Ubuntu 16.04 vs 22.04 and found a 27% uplift.  https:&#x2F;&#x2F;www.phoronix.com&#x2F;review&#x2F;ubuntu-2204-epyc7601

--- From hackernews ---

--- Top Comments ---

[Lerc]: A LLM should be considered an advisor to the same extent as legal, financial, and medical.  They should be legally required to act to the best of their capability in the interests of their client, subject to the same requirements that they don&#x27;t break the law to do so as applies to legal, financial, or medical advisors. An important part of that is that they must never represent themselves as acting  for someone who is not their client. This still allows them to work for you while being ...

[ArcHound]: This is a huge issue that everyone will be surprised by. Private data, trade secrets, research in progress (ehm, mathematics). One day you&#x27;ll wake up to your AI provider taking over your business even though the terms and conditions were stated differently. To be fair, I&#x27;m also expecting this from Microsoft and other cloud providers, especially those with their own AI (Google).

[ozgung]: &gt; The Chinese models are likely to refuse to answer questions about Taiwan, for example. I think all open-weight models can be jailbroken by default. You can train a Chinese-born model to be an expert on Taiwan. Actually, models are just numbers and math. They don&#x27;t really have nationality. They can have owners, only if you keep them under lock and key.

[Trieste_app]: A model is trained before it is used, and the designer’s choices precede and limit the user’s, whatever you do. The consequence is that we should favor models whose design process is public and that run in a known environment, without hidden instructions.

[dudhatprakash99]: This is the part that should worry us about model&#x27;s loyalties. If we enabled auto approve, we moved to the problem to model itself and now it&#x27;s the principal. The approach that worked better for me is to keep the approval gate outside the agent entirely e.g. some other tool. and so agent can propose it wants but anything with critical side effects e.g. merges, payments, etc. goes through approval gate on something that team controls. that&#x27;s slower, but now team is in loop and h...