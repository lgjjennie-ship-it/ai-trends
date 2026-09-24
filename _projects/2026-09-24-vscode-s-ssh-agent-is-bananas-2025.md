---
layout: default
title: "VSCode's SSH Agent Is Bananas (2025)"
date: 2026-09-23T21:01:48Z
slug: 2026-09-24-vscode-s-ssh-agent-is-bananas-2025
source: hackernews
category: ai-community
ai_score: 8.0
tags: "VSCode, SSH, Remote Development, Security, Community Feedback"
---

# VSCode's SSH Agent Is Bananas (2025)

**链接**: https://fly.io/blog/vscode-ssh-wtf/

**作者**: Rapzid

**发布时间**: 2026-09-23T21:01:48Z

**采集日期**: 2026-09-24


## AI 摘要

A discussion on VSCode's SSH Agent and its implications for remote development, with community feedback on its advantages and disadvantages.

## AI 评价

The content discusses a significant feature of VSCode's SSH Agent, with insightful community comments that provide diverse viewpoints on its utility and potential security concerns. The high engagement score and substantive discussion enhance the content's value.


## 原文内容


--- Top Comments ---

[danielklnstein]: Missing a (2025) FYI VSCode&#x27;s SSH Agent is a godsend for remote development - the &quot;disadvantages&quot; that Fly lists are part of its advantages. I&#x27;ve worked in several teams that have made extensive use of the extension, and it&#x27;s never been an issue. You can restrict SSH access arbitrarily to ensure whatever security or access guardrails you need.

[qwertox]: 2026-09-24 09:35:24 dev ~ du -h -d 0 .vscode-server
  6.0G    .vscode-server                                                                                                                               
  
This is what makes it bananas for me. I don&#x27;t know what Microsoft is thinking if they allow this.

[10000truths]: So a program that is specifically designed to edit files and run arbitrary commands on a remote machine... can do so. Not sure where the bananas part comes in. Sending a binary over SSH&#x2F;SFTP might sound weird at first glance, but VSCode can&#x27;t assume that your remote machine can access the wider internet, and it needs a reliable way to bootstrap the agent on the remote. Shipping it over the SSH tunnel is the natural solution.

[binlog]: The agent is supposed to run on a remote dev box. The purpose is to make the remote machine an extension of your local one, to run extensions, containers, install packages, test deployments, forward ports and tons more. Tunneling is part of the feature set. If you are installing it on production servers and are surprised by its behavior that’s on you.

[MajesticHobo2]: This part of VSCode&#x27;s architecture is acceptable to me. The reverse direction, where a compromised remote can do whatever it wants to my local machine, is not.