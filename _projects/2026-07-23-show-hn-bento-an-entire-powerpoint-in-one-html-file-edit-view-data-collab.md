---
layout: default
title: "Show HN: Bento - An entire PowerPoint in one HTML file (edit+view+data+collab)"
date: 2026-07-22T15:19:23Z
slug: 2026-07-23-show-hn-bento-an-entire-powerpoint-in-one-html-file-edit-view-data-collab
source: hackernews
category: ai-community
ai_score: 8.0
tags: "web-technology, presentation-tools, local-state, innovative-software, html5"
---

# Show HN: Bento - An entire PowerPoint in one HTML file (edit+view+data+collab)

**链接**: https://bento.page/slides/

**作者**: starfallg

**发布时间**: 2026-07-22T15:19:23Z

**采集日期**: 2026-07-23


## AI 摘要

Bento is a single HTML file that enables users to edit, present, print, and collaborate on slide decks without needing an install or cloud login.

## AI 评价

The content introduces Bento, a novel approach to creating and editing PowerPoint-like presentations entirely within a single HTML file, which is highly relevant and innovative for web-based tools. The community discussion is insightful and adds value with diverse viewpoints on the potential and implications of this technology.


## 原文内容

Over the past few months, our team has been building more and more slidedecks using web frontend technologies with coding harnesses like Claude Code, but a common complaint is to make even small edits we need to edit the code either manually or via the harness.<p>To avoid this loop, I ended up creating Bento, a single HTML file with everything you need in a slide tool including animations and shared editing. There&#x27;s no install or cloud login, everything works offline. The default deck is around 560 KB and it doesn&#x27;t need to fetch anything once you got it.<p>Open it in a browser and then you can edit, present, print and save. Share it via email or via Airdrop and all they need is a browser to edit, present and also do live collab on the slides. Drop it in to Claude or ChatGPT to transform existing pptx files into Bento slides. There is no cloud involved, only an encrypted blind relay to allow for shared editing. The relay doesn&#x27;t see any of the data.<p>Check it out at <a href="https:&#x2F;&#x2F;bento.page&#x2F;slides&#x2F;" rel="nofollow">https:&#x2F;&#x2F;bento.page&#x2F;slides&#x2F;</a> which takes you straight to the editor.<p>Go to <a href="https:&#x2F;&#x2F;bento.page&#x2F;guestbook&#x2F;" rel="nofollow">https:&#x2F;&#x2F;bento.page&#x2F;guestbook&#x2F;</a> to try out the live guestbook to experience share editing &#x2F; collab.<p>There is also a gallery with some sample decks on the website - <a href="https:&#x2F;&#x2F;bento.page&#x2F;" rel="nofollow">https:&#x2F;&#x2F;bento.page&#x2F;</a><p>All the code is MIT licensed and you can find it here - <a href="https:&#x2F;&#x2F;github.com&#x2F;nyblnet&#x2F;bento" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;nyblnet&#x2F;bento</a> . I used reveal.js with several other libraries (including some homegrown ones), and Claude Code.


--- Top Comments ---

[starfallg]: Hi, I&#x27;m the creator of Bento. Just wanted to share a bit more about how I created it beyond what&#x27;s in Github. The file contains more or less two sections. There is a plain block of JSON near the top of the file which is the slide data. You can read, grep, or point a harness at it. The app itself is in a base64 blob that loads through a small shim which deflates in the browser with DecompressionStream, which keeps the package small and so that we don&#x27;t need to fetch any external...

[praveer13]: This is amazing. I also think this will become more common. I feel there is a lot of software that can just be served locally via html&#x2F;typescript&#x2F;react etc and even have local state. There&#x27;s just not been an economic incentive till now. I am personally using kimi k3 to create a mobile friendly set of games, starting from math like linear algebra to quantum physics - neurodivergent friendly, completely local state, served from github pages -  to get someone interested in the fie...

[maxloh]: HTML and CSS feel fundamentally better suited for slide decks than JSON. At their core, most slides just boil down to simple flexbox structures:     ┌──────────────────────────────────────────────┐
  │ ┌─ Row 1 Container ────────────────────────┐ │
  │ │ ┌─ 4-way padding ──────────────────────┐ │ │
  │ │ │ [ Text Content ]  (sole child node)  │ │ │
  │ │ └──────────────────────────────────────┘ │ │
  │ └──────────────────────────────────────────┘ │
  │                    ↕ gap                ...

[calebm]: Awesome. I&#x27;ve been trying to promote this kind of Single-File Web Apps as a concept - feel free to add this to the proposed Wikipedia page:  https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Draft:Single_File_Web_Apps

[d4rkp4ttern]: Love it. Like some others here, I&#x27;ve been making html presentations with code-agents and they come out really nice. Other alternatives for that suit different purposes are these: - slidev markdown-based slides, I often have a code-agent make these.
   https:&#x2F;&#x2F;github.com&#x2F;slidevjs&#x2F;slidev  - typst slides are great looking too, especially with math etc. Again easy for agents to do One minor nit: Based on the title, I thought this was literally a tool that had something to...