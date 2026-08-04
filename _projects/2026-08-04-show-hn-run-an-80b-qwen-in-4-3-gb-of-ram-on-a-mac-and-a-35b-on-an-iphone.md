---
layout: default
title: "Show HN: Run an 80B Qwen in 4.3 GB of RAM on a Mac, and a 35B on an iPhone"
date: 2026-08-03T16:54:15Z
slug: 2026-08-04-show-hn-run-an-80b-qwen-in-4-3-gb-of-ram-on-a-mac-and-a-35b-on-an-iphone
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLM, AI, Swiftlet, Mac, iPhone"
---

# Show HN: Run an 80B Qwen in 4.3 GB of RAM on a Mac, and a 35B on an iPhone

**链接**: https://github.com/leonickson1/Swiftlet

**作者**: leonickson

**发布时间**: 2026-08-03T16:54:15Z

**采集日期**: 2026-08-04


## AI 摘要

A new method allows running an 80B Qwen model in 4.3 GB of RAM on a Mac and a 35B model on an iPhone, sparking community discussion on efficiency and future possibilities.

## AI 评价

The content discusses a significant technical achievement in running large language models on consumer-grade hardware, with insightful community comments that add value by discussing potential future implications and practical applications.


## 原文内容


--- Top Comments ---

[dghlsakjg]: I know everyone wants to crap all over these setups that are impractical, but this is how progress happens. People will keep plugging away at this and figure out how to avoid wearing the hard drive, how to make it run faster, custom hardware buses etc. Keep going! I personally can&#x27;t wait for the day when a 1t param model runs off a $200 SSD instead of a $50k rack of Nvidia chips.

[AHASIC]: I read a comment on here a few months back I wanna restate. Basically, there is a good chance that Apple is betting that the LLMs in the future will be so efficient that those that consumers will use everyday will be easily computed by the iPhone or even bigger ones on Macs. Honestly makes the most sense that we are heading that way in a few years latest.

[adrianco]: This looks useful, you can increase the RAM cache so if you have a Mac with 24-32GB it should speed up a lot and still run models that wouldn’t normally fit. I’m going to run some tests…

[crossroadsguy]: I see this at the end of the README &gt; Swiftlet was built in collaboration with Claude Code. Did this really happen (some sort of working with Anthropic or Claude Code team) or is it some kind of requirement when you develop some software with Claude Code (I see the other author is:  https:&#x2F;&#x2F;github.com&#x2F;claude ), or sort of reuse some of its parts? Is it like someone saying &quot;built in collaboration with VS Code&quot; or &quot;.. in collaboration with &lt;xyz&gt; autocomple...

[CyLith]: I know relatively little about the workings of LLMs, but I keep seeing projects like this that run massive MoE models using very modest amounts of RAM, perhaps excessively so. I wonder, is there a way to make the RAM usage tunable? I have a Macbook with 32 GB of RAM, and it&#x27;d be great if I could run the same model but take advantage of the additional RAM to make it run faster.