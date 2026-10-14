---
layout: default
title: "AlphaNIST"
date: 2026-10-13T21:57:29Z
slug: 2026-10-14-alphanist
source: hackernews
category: ai-community
ai_score: 8.0
tags: "robotics, AI, Deepmind, Nvidia, UW"
---

# AlphaNIST

**链接**: https://alpha-nist.github.io/

**作者**: jasonjmcghee

**发布时间**: 2026-10-13T21:57:29Z

**采集日期**: 2026-10-14


## AI 摘要

AlphaNIST is a new robotics project inspired by earlier work in AI and robotics research.

## AI 评价

The content is an announcement of a new robotics project with potential high impact, and the community discussion is insightful with diverse viewpoints.


## 原文内容


--- Top Comments ---

[romesc]: Hi, one of the authors here! We can answer questions! But also, I want to highlight that the &quot;AlphaNIST&quot; name is an homage to the very well known work from David Silver&#x27;s research group @ Deepmind circa 2016-&gt;2018. This was when we were coming up very early in our research careers and their work obviously had a big impact on us! It has taken longer to make some of those ideas work for areas as challenging as robotics where there are physical constraints to deal with (and adm...

[Mr_P]: This is a robotics paper by Nvidia &amp; UW researchers. It is not an Alphabet&#x2F;Deepmind paper, and it also has nothing to do with the &quot;NIST&quot; OCR dataset. Was there really not a more appropriate name than &quot;AlphaNIST&quot;?

[amluto]: I’m highly entertained by the way the robot tightens nuts. There is no way this would work in the real world :) (This whole thing is awesome. I think they will need to get the number of rollouts needed down before it translates well to real robots — running hundreds of thousands of rollouts on small parts with a real rollout will be a real logistical mess when cleaning up parts on the floor and dealing with everything that the robots physically break while learning.)

[BoppreH]: Really cool stuff. I especially liked the flicking behavior. Very organic movements. In case somebody got the same question as me: the robot &quot;sees&quot; point clouds as input, so basically the full simulation state except for velocities (correct me if I&#x27;m wrong). As put in the limitations section, it &quot;[does] not establish robustness to perception error, latency, or contact-model mismatch&quot;.