---
layout: default
title: "I turned my security cameras into an automatic bird identification system"
date: 2026-08-31T16:47:11Z
slug: 2026-09-01-i-turned-my-security-cameras-into-an-automatic-bird-identification-system
source: hackernews
category: ai-community
ai_score: 8.0
tags: "bird identification, security cameras, BirdNet-Go, AI, DIY"
---

# I turned my security cameras into an automatic bird identification system

**链接**: https://jasontucker.blog/how-i-turned-my-security-cameras-into-an-automatic-bird-identification-system-with-birdnet-go/

**作者**: speckx

**发布时间**: 2026-08-31T16:47:11Z

**采集日期**: 2026-09-01


## AI 摘要

The author details how they turned their security cameras into an automatic bird identification system using BirdNet-Go, with community feedback on similar projects and challenges.

## AI 评价

The content is highly relevant and provides a novel technical approach to bird identification using security cameras, with insightful community comments that add value.


## 原文内容


--- Top Comments ---

[ben1040]: I did exactly this with BirdNet-Go and my Unifi doorbell cam.  Unifi exposes an RTSP feed for each camera so it was easy for the tool to just &quot;listen&quot; to the doorbell and start classifying. I have a spare e-ink display and my next weekend project to follow onto this is to wire it up so it shows some faux &quot;woodcut&quot; images of birds detected, or something like that.

[Alles]: For birds (or animals) sound lovers i suggest Cosmo Sheldrake songs example:  https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=TRUQsZQU60k

[comboy]: Btw, Merlin Bird ID app by Cornell University is so good that I got some people interested that weren&#x27;t into that topic at all.

[maciejb]: I tried that with my Aqara camera. The mic there has no windshield, though; wind noise was terrible. Also I couldn’t get Aqara support to enable higher sampling rates in the firmware than 16kHz; BirdNET expects 48kHz audio samples. Ended up installing a better microphone attached to a RPi3A+ and using a RaspberyPi 4 which I already owned for hosting BirdNET-Go
 https:&#x2F;&#x2F;maciejb.me&#x2F;posts&#x2F;birdnet-go-setup&#x2F;  Much better sound quality now!

--- From hackernews ---

--- Top Comments ---

[simonw]: I think the most interesting skill here is the control-browser one:  https:&#x2F;&#x2F;codex-tool-reference.simonw.chatgpt.site&#x2F;skills&#x2F;cont...  It tells ChatGPT Work how to launch a Playwright instance via its Node.js REPL, and tells it to run:     nodeRepl.write(await browser.documentation());
  
To get further instructions. That method returns this text with full details about how to use the browser:  https:&#x2F;&#x2F;codex-tool-reference.simonw.chatgpt.site&#x2F;skills&#x2F;cont...

[simonw]: See this comment for background (and creation prompt):  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49504625#49505116

[satvikpendem]: I don&#x27;t get how this is different from Codex if Codex can do all the same things.

[darepublic]: Some of these work tools can slow things down and waste plentiful tokens

[enraged_camel]: Meta comment: I&#x27;ve been wondering why AI-generated websites&#x2F;artifacts&#x2F;reports always have the same &quot;look&quot;. It reminds me of Bootstrap (CSS Framework) days when every startup website looked the same. Are they following some sort of common guideline?