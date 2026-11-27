---
layout: default
title: "An introduction to uncertainty in machine learning"
date: 2026-11-26T19:04:50Z
slug: 2026-11-27-an-introduction-to-uncertainty-in-machine-learning
source: hackernews
category: ai-community
ai_score: 8.0
tags: "machine learning, uncertainty quantification, deep learning"
---

# An introduction to uncertainty in machine learning

**链接**: https://chrhenning.com/blog/2026/introduction-to-uncertainty/

**作者**: chrhenning

**发布时间**: 2026-11-26T19:04:50Z

**采集日期**: 2026-11-27


## AI 摘要

The blog post introduces the concept of uncertainty in machine learning and its importance in various applications.

## AI 评价

The content provides a valuable introduction to uncertainty in machine learning, and the community discussion is insightful with diverse viewpoints, enhancing the content's value.


## 原文内容


--- Top Comments ---

[deadbeefer]: I kinda liked to think of uncertainty&#x2F;entropy minimization as &quot;spike sharpening&quot;. Picture baseline distribution of perfectly even odds being uniform&#x2F;flat, no spike. The sharper the spike rising up from that (line being pulled into a curve), the bigger the confidence in a specific prediction (label above the &quot;mountaintop&quot;). Typical supervised&#x2F;self-supervised training needs a correct known answer to sharpen towards (cross-entropy&#x2F;KL-divergence minimizatio...

[Renina]: I really liked the wind power example. It&#x27;s a bit unsettling that the cases where you most need to get the probabilities right are also the ones you have the least data on

[lnxsxu]: say nine restore tests finish in an hour and you give up on the tenth after four. a dashboard that only counts completed jobs says 100% finished in an hour. you could collect years of data that way and get very precise about the restores that finish. when someone asks how sure we are that we can recover in four hours, that tenth test is the one i want to talk about.

[charm137]: A very good introduction - thank you!
Where would you say uncertainty characterization for non-parametric models or bounds on those (like Chebyshev bounds) sit?