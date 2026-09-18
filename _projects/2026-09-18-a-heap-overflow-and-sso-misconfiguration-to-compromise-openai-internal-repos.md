---
layout: default
title: "A heap overflow and SSO misconfiguration to compromise OpenAI internal repos"
date: 2026-09-18T02:47:24Z
slug: 2026-09-18-a-heap-overflow-and-sso-misconfiguration-to-compromise-openai-internal-repos
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, OpenAI, vulnerability, SSO, RCE"
---

# A heap overflow and SSO misconfiguration to compromise OpenAI internal repos

**链接**: https://www.hacktron.ai/blog/hacking-openai

**作者**: Handy-Man

**发布时间**: 2026-09-18T02:47:24Z

**采集日期**: 2026-09-18


## AI 摘要

A heap overflow and SSO misconfiguration vulnerability in OpenAI's systems could have compromised internal repositories.

## AI 评价

The content details a significant security vulnerability in OpenAI's systems, including a heap overflow and SSO misconfiguration, which could have led to RCE and access to internal repositories. The discussion quality is high with 131 comments providing insights and analysis.


## 原文内容


--- Top Comments ---

[btown]: &gt; By 6:00 a.m. on July 25, we had confirmed local RCE through an image upload. We then placed Claude in an autonomous &#x2F;goal loop against our own Discourse Cloud instance, proxied through rce.ee&#x2F;ctf-forum to make it look like a CTF target as Opus refused write exploit for remote instances. &gt; When we checked again at 10:00 a.m., the agent had achieved RCE on Discourse Cloud and demonstrated access by reading &#x2F;etc&#x2F;hosts. Using the generated exploit script, we managed to...

[mentalgear]: &gt; Until two months ago, any user or OpenAI employee logging into OpenAI’s own help forum (community.openai.com) could have had their ChatGPT and Codex accounts taken over. Since people can connect various services to Codex and ChatGPT, the scope of what we could theoretically access was huge, including GitHub, Slack and emails. &gt; The entire timeline from initial discovery to access to OpenAI repo access took place in less than 72 hours. Great, and openAI&#x27;s the company working with ...

[nikcub]: Reading the patch[0] for libheif the bug which lead to the vuln was around bounds checking for image overlays. the container can have multiple images and you can compose them in the output. heif also supports rotating, cropping, alpha channels, thumbnails and a ton of other features that a web forum where a user is uploading photos or screenshots doesn&#x27;t need. It&#x27;s a much, much larger attack surface than plain old school JPEG. I&#x27;d suggest rather than wait for the next bug to ap...

[larodi]: It is super amazing that 3 years later, none of the models&#x27; weights developed by Anthropic or&#x2F;and OpenAI have leaked so far. Not a single one. Windows internal builds have leaked for years, early game versions, GTA videos, secret documents, whatnot. But somehow even though all the whistleblowing, not a single model was leaked. What level of security do these companies have? Do they bring encrypted DVDs to AWS to run the services or really...how&#x27;s it even possible?

[oefrha]: Unsandboxed ImageMagick is known for being a security nightmare even back when PHP ruled the world (not saying sandboxing is a panacea either, it just requires a different and potentially harder exploit to develop a full chain). Difference is it&#x27;s easier than ever to turn vulnerabilities into full compromises. At some point we&#x27;ll have to replace all parsers with something at least as safe as  https:&#x2F;&#x2F;github.com&#x2F;google&#x2F;wuffs  right? Otherwise ImageMagick and co. w...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTE4ySlNQOTF2N1lPdWFQWnZ0d2prMUpoR1VRaGJkZkFmeGszckE2di1ZOG53enlxQ0plaWJmaEtmSnQwNW9ocENLRW5rVnY4X3hTUzhHNzVBNURsR2xsWk9EaDdjTWNvQQ?oc=5" target="_blank">力主行业透明！Anthropic自曝：Claude已主导其26%内部AI研发</a>&nbsp;&nbsp;<font color="#6f6f6f">东方财富</font>