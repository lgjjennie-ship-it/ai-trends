---
layout: default
title: "Fireworks AI security breach impacts Notion and their customers"
date: 2026-11-10T07:19:38Z
slug: 2026-11-10-fireworks-ai-security-breach-impacts-notion-and-their-customers
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI security, data breach, Notion, Fireworks AI, privacy"
---

# Fireworks AI security breach impacts Notion and their customers

**链接**: https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor

**作者**: werrett

**发布时间**: 2026-11-10T07:19:38Z

**采集日期**: 2026-11-10


## AI 摘要

Fireworks AI's security breach exposes Notion AI chat transcripts and other customer data, prompting community discussion on the incident's details and implications.

## AI 评价

The content discusses a significant security breach involving Fireworks AI that impacts Notion and their customers, with insightful community comments that delve into the technical aspects and implications of the breach.


## 原文内容


--- Top Comments ---

[Shank]: &gt; Upon analysis of the new data, we discovered that it included unattributable Notion AI chat transcripts used for the Insights feature. Chats weren&#x27;t labeled with who wrote them or which workspace they came from, and the transcripts did not contain any tool call results. Beyond the words in the chat transcripts themselves, the data contained no information that could specifically identify the workspace, user, or company. &gt; As a precaution, we recommend that you treat this unattrib...

[leumon]: On Openrouter the Fireworks AI is labeled as ZDR. &gt; Private: this provider does not train on prompts and does not retain prompt data. So how come notion discovered that they actually stored the data? &gt; Upon analysis of the new data, we discovered that it included unattributable Notion AI chat transcripts

[edot]: So Fireworks is ZDR by default, yet Notion configured (asked) Fireworks to retain data? Otherwise, how is there anything to leak? On the main fireworks breach page, they also say some customer weights of models and datasets to train them were leaked.

[petterroea]: Does anyone actually use the AI features? $job switched off because they spent too much time on AI features we never used, and too little time making a text editor that wasn&#x27;t painful to use

[Pi9h]: If you’re looking for a Notion alternative you can self-host, I’m building Docmost. We launched on HN 2 years ago. Website:  https:&#x2F;&#x2F;docmost.com  GitHub:  https:&#x2F;&#x2F;github.com&#x2F;docmost&#x2F;docmost