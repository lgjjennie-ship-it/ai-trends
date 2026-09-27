---
layout: default
title: "DeepSeek Elastic Compute (DSec)"
date: 2026-09-26T18:22:41Z
slug: 2026-09-27-deepseek-elastic-compute-dsec
source: hackernews
category: ai-community
ai_score: 8.0
tags: "DeepSeek, Elastic Compute, Sandboxes, High-Performance Computing, Resource Allocation"
---

# DeepSeek Elastic Compute (DSec)

**链接**: https://arxiv.org/abs/2609.22978

**作者**: shenli3514

**发布时间**: 2026-09-26T18:22:41Z

**采集日期**: 2026-09-27


## AI 摘要

DeepSeek Elastic Compute (DSec) paper presents a system with 380,000 concurrent sandboxes on 160 Epyc server nodes, sparking discussions on authorship, resource allocation, and comparisons to Google's ax.

## AI 评价

The content discusses a significant technical development with high community engagement, featuring insightful comments on the technical aspects and potential implications.


## 原文内容


--- Top Comments ---

[flowerlad]: It seems every DeepSeek paper&#x2F;patent has a huge number of authors, and this one is no exception. They couldn&#x27;t even fit everyone on the page, there are 31 others not shown. This could be an asset protection strategy (i.e., human assets). Imagine if there were only 3 authors. Those authors may get hired away by competitors. If you list every employee on every paper then competitors don&#x27;t know who to lure away.

[vblanco]: 380.000 concurrent sandboxes on 160 Epyc based server nodes. Crazy stuff

[piterrro]: 12 sandboxes per code is insane, I wonder how many of these sandboxes are idle at a time. Depending on the tasks assigned the resource requirements are different. Compare an agent doing pdf conversion and one responding to a simple question. One is cpu bound the other is mostly network wait. This is an interesting problem from infra perspective since you cannot predict the workload. On a bigger scale you may get away with forecasts. Im waiting for tech that elastically allocates cpu&#x2F;mem ...

[erulabs]: Appears to be similar to what Google is building with ax  https:&#x2F;&#x2F;github.com&#x2F;google&#x2F;ax

[throwaway7783]: Is this like agent substrate?

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTE9RUjlMTHl1Y09qcExJTnY1YWo3dVgzX0hOOEV5endkTmlkWTg3UUNWNWdkSU9QaEtkdWNhbDRxQWVZTklBYm1UMlJoZjVEdFVEMC1PdzRyQ1hoRllxamc?oc=5" target="_blank">接连发生AI失控事件，OpenAI再次暂停最新模型训练</a>&nbsp;&nbsp;<font color="#6f6f6f">京报网</font>