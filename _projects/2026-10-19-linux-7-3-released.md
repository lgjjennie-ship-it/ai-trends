---
layout: default
title: "Linux 7.3 Released"
date: 2026-10-19T07:23:57Z
slug: 2026-10-19-linux-7-3-released
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Linux, kernel, Apple silicon"
---

# Linux 7.3 Released

**链接**: https://lwn.net/Articles/1101143/

**作者**: cjd8

**发布时间**: 2026-10-19T07:23:57Z

**采集日期**: 2026-10-19


## AI 摘要

Linux 7.3 has been released with substantial improvements and new features, including support for Apple silicon and a record number of commits.

## AI 评价

Linux 7.3 release is a significant update with a large number of commits and new features, including support for Apple silicon. The community discussion is insightful, with comments on the technical aspects and the impact of the release.


## 原文内容


--- Top Comments ---

[theden]: SMB improvements ( https:&#x2F;&#x2F;git.kernel.org&#x2F;pub&#x2F;scm&#x2F;linux&#x2F;kernel&#x2F;git&#x2F;torvalds&#x2F;lin... ), I&#x27;ve moved to borg, but depending on how this goes may give time machine another try:      - Add opt-in Apple Time Machine support

     Implement the AAPL negotiation and related Finder, stream,
     COPYCHUNK, sparse-file, CHANGE_NOTIFY, and RPC compatibility
     required for Time Machine shares, allowing macOS backupd to use
     ksmbd for backups
  
 htt...

[sirnicolaz]: &gt; This release is a record-breaker on all fronts; it brought in 18,765 non-merge commits from 3,021 developers, 807 of whom were first-time kernel developers. hopefully without kernel-slops :P good job everyone btw!

[djfergus]: &gt;ARM &gt; Device Tree Updates &gt;  Apple platform gains support for M3 Pro, Max and Ultra SoC Incredible how fast support for Apple silicon is progressing.

[INTPenis]: &gt; This release is a record-breaker on all fronts; it brought in 18,765 non-merge commits from 3,021 developers, 807 of whom were first-time kernel developers. I&#x27;m reading that as many new AI assisted code patches. Not everyone does an obviously bad job at submitting AI assisted code. Not a criticism, just an observation.

[sgt]: I wonder how many people nowadays see something like this, clicking on it and expecting a &quot;Download and Install&quot; button.