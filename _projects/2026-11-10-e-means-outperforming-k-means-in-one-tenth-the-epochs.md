---
layout: default
title: "E-means: Outperforming k-means in one-tenth the epochs"
date: 2026-11-09T18:45:43Z
slug: 2026-11-10-e-means-outperforming-k-means-in-one-tenth-the-epochs
source: hackernews
category: ai-community
ai_score: 8.0
tags: "clustering, machine-learning, efficiency, algorithm-improvement"
---

# E-means: Outperforming k-means in one-tenth the epochs

**链接**: https://e-means.github.io/

**作者**: porridgeraisin

**发布时间**: 2026-11-09T18:45:43Z

**采集日期**: 2026-11-10


## AI 摘要

E-means is introduced as a more efficient clustering algorithm compared to k-means, with community feedback on its practical applications and limitations.

## AI 评价

The content presents a significant improvement over k-means with fewer epochs, indicating high technical value. The community discussion is insightful, with diverse applications and critiques, validating the importance of the content.


## 原文内容


--- Top Comments ---

[jlhawn]: I wonder if this could be used anywhere as an alternative to Lloyd&#x27;s algorithm. I have a hobby project which uses Lloyd&#x27;s to &quot;relax&quot; an icosohedral equal area mesh on the surface of a sphere [1]. I&#x27;m going to try to swap it out with an adaptation of this and see if it&#x27;s much better or if I can afford more iterations with this method. Edit: tried it, and it’s definitely  not  better for this use case. e-means wins by needing fewer passes over a huge dataset, but r...

[gilfyole]: Thanks for this. I tried experimenting with e-means in retrieval engine im building, for that I had to port the CPU version from faiss to Rust  https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;emeans   https:&#x2F;&#x2F;pypi.org&#x2F;project&#x2F;emeans  We use k-means to build the cells of our vector index, which today runs 5 Lloyd iterations on a sample of the data. So I ran a quick test on 500k LAION embeddings (768 dimensions, 4,096 cells) against our current code: - Current setup of 5 iterat...

[real_faxenoff]: I adapted the method to my IVF index (the code-daemon project) and achieved a 146x speedup on the GPU. That&#x27;s impressive!

[saagarjha]: As far as I can tell this isn&#x27;t particularly new, people have been doing minibatch k-means for a while, including with an EWA update. I assume the contribution here is that they tried to measure how much better it is and provided code? I&#x27;m not sure I agree with their claims though, because they didn&#x27;t really measure the things that matter–sure, it&#x27;s better than Lloyd&#x27;s algorithm, but that&#x27;s a very low bar. If you are claiming that your algorithm is &quot;highly p...

[shiandow]: These kinds of algorithms tend to have equivalent descriptions as expectation maximisation or simulated annealing. I wonder if it&#x27;s possible to understand their algorithm in that sense. Though I suppose it may be as simple as expectation maximization with a friction term, since Sj = sj - a (sj - Sj). Importantly they note that this update rule keeps the centroid within the convex hull, which is pretty important.