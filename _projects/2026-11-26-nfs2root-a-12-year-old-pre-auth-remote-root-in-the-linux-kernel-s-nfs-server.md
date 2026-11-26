---
layout: default
title: "Nfs2root: A 12-year-old pre-auth remote root in the Linux kernel's NFS server"
date: 2026-11-25T20:35:50Z
slug: 2026-11-26-nfs2root-a-12-year-old-pre-auth-remote-root-in-the-linux-kernel-s-nfs-server
source: hackernews
category: ai-community
ai_score: 9.0
tags: "Linux kernel, NFS, security vulnerability, remote root, Linux security"
---

# Nfs2root: A 12-year-old pre-auth remote root in the Linux kernel's NFS server

**链接**: https://opensec.in/blog/nfs2root-cve-2026-99362

**作者**: dm

**发布时间**: 2026-11-25T20:35:50Z

**采集日期**: 2026-11-26


## AI 摘要

A 12-year-old pre-auth remote root vulnerability in the Linux kernel's NFS server is discovered and discussed with potential fixes.

## AI 评价

The content discusses a critical security vulnerability in the Linux kernel's NFS server, which is a groundbreaking issue with high potential impact. The community discussion is highly engaged with insightful comments and practical mitigation strategies.


## 原文内容


--- Top Comments ---

[r3tr0]: yeet can actually patch this via its XDP L7 programmable firewall  https:&#x2F;&#x2F;github.com&#x2F;yeet-src&#x2F;pfw  Here is the specific rule. I just added and confirmed it. (can see the CI).  https:&#x2F;&#x2F;github.com&#x2F;yeet-src&#x2F;pfw-rules&#x2F;blob&#x2F;53f78fc5823354f4a...  just pull the repo w `pfw pull` then `pfw ls` and apply and you&#x27;re all set.

[FranGro78]: &gt; Given enough eyeballs, all bugs are shallow Obviously not written with AI in mind, but certainly seems to be true with the many AI eyes on open source at the moment. Makes me wonder, is the access to the Windows source code one could apply for still a thing? If so, anyone know if there are security firms out there running the same kind of AI deep review for vulnerabilities against it? From my limited understanding, the NT kernel runs a lot less code at the most privileged level (e.g. dri...

[aidenn0]: I run my NFSv4 server behind spiped, so I think I&#x27;m safe here?

[superkuh]: It really sounds like this is only NFS 4.1 and 4.2 and up(?). So my mitigation for right now (on distros that are out of support re: kernel) is simply to disable 4.1 and 4.2 protocol like the below (turn nfs-server off first),       $ echo &quot;-4.1 -4.2&quot; | sudo tee &#x2F;proc&#x2F;fs&#x2F;nfsd&#x2F;versions
  
I am no security expert but for now this change, which is temporary and reverts on reboot, seems reasonable. Before I did this I checked if my clients used nfs 4.1 or 4.2 at all ...

[gsich]: no poc posted