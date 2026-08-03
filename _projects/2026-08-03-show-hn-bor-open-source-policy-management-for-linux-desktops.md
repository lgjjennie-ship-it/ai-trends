---
layout: default
title: "Show HN: Bor – Open-source policy management for Linux desktops"
date: 2026-08-02T09:06:33Z
slug: 2026-08-03-show-hn-bor-open-source-policy-management-for-linux-desktops
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Linux, Open Source, Policy Management, Desktop Management, Security"
---

# Show HN: Bor – Open-source policy management for Linux desktops

**链接**: https://getbor.dev/blog/2026-08-02-bor-v080-release/

**作者**: eniac111

**发布时间**: 2026-08-02T09:06:33Z

**采集日期**: 2026-08-03


## AI 摘要

Bor is an open-source policy management system for Linux desktops released with new features and support for additional applications.

## AI 评价

The content introduces a new open-source policy management tool for Linux desktops, which is highly relevant and has generated substantial community interest with insightful discussions. The comments provide valuable feedback and questions that indicate the tool's potential impact and utility.


## 原文内容

Hi HN! I&#x27;ve been working on Bor, an open-source system for centralized Linux desktop management.<p>Bor consists of a lightweight Go agent and a central server. Policies are streamed to clients over mTLS&#x2F;gRPC in real time—no polling—and currently support Firefox, Chrome, KDE, dconf, polkit and package management, with more coming.<p>Version 0.8 introduces several new policy types - Thunderbird, Microsoft Edge for Business and FirewallD zones, along with a number of improvements and fixes.<p>I&#x27;d love feedback on the architecture, policy model, and whether this is something you&#x27;d consider for managing Linux workstations.


--- Top Comments ---

[V__]: This looks really close to what I need. I manage a few laptops for a non-profit. For now, it is all done by hand, since I haven&#x27;t found a good solution for Linux and I will kill myself before using Windows and Intune again. I would love to see configurations for Linux Mint&#x27;s Cinnamon. Is there a way to execute custom scripts? How does the user mapping work exactly? Could I create a user in Authentik with a laptop-permission and this would map to a Linux user account? Nonetheless, th...

[stasiu]: This is cool. I’m getting into this type of management for the first time after being in software development for a long time. What other open source or enterprise solutions is this potentially competing with?  What made you write your own, as in, what you weren’t able to do or didn’t like about existing solutions?

[manbash]: Very nice. Can you elaborate why you chose mTLS authentication vs. SSH as a mean to deploy the policies. Regarding the docs, the diagrams should really be replaced with something more familiar and readable such as Mermaid (currently it looks like a mixture of ad-hoc ASCII charts).

[d3Xt3r]: How is configuration drift &#x2F; policy enforcement handled if there&#x27;s no polling interval? Like suppose a user changes a setting, does it revert back to the enforced setting, if so, when and how?

[sandreas]: Is this a similar but more generic approach to cosmic sync[1] or more like a company deploys to many employees? 1:  https:&#x2F;&#x2F;ostechnix.com&#x2F;system76-cosmic-sync-linux-desktop-set...