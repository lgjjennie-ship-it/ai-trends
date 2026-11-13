---
layout: default
title: "Service degradation on Microsoft 365"
date: 2026-11-12T18:20:48Z
slug: 2026-11-13-service-degradation-on-microsoft-365
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Microsoft 365, Service Degradation, Outage, Cloud Services, Systems Research"
---

# Service degradation on Microsoft 365

**链接**: https://status.cloud.microsoft/

**作者**: dkpk

**发布时间**: 2026-11-12T18:20:48Z

**采集日期**: 2026-11-13


## AI 摘要

Microsoft 365 experiences widespread service degradation, affecting users globally.

## AI 评价

The content discusses a significant service degradation event on Microsoft 365, which is highly relevant to software engineering and systems research. The community comments provide diverse insights and discussions, indicating high engagement and value.


## 原文内容

<a href="https:&#x2F;&#x2F;www.abc.net.au&#x2F;news&#x2F;2026-11-13&#x2F;microsoft-outage-affects-users-worldwide&#x2F;107381050" rel="nofollow">https:&#x2F;&#x2F;www.abc.net.au&#x2F;news&#x2F;2026-11-13&#x2F;microsoft-outage-affe...</a><p><a href="https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1xuje83&#x2F;microsoft_office_seems_to_be_down&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1xuje83&#x2F;microsoft...</a><p><a href="https:&#x2F;&#x2F;downdetector.com&#x2F;status&#x2F;microsoft-365&#x2F;" rel="nofollow">https:&#x2F;&#x2F;downdetector.com&#x2F;status&#x2F;microsoft-365&#x2F;</a>


--- Top Comments ---

[AbbeFaria]: Ex-MSFT here, sharing my outdated POV based on working on a product that was using Microsoft Exchange and therefore was hooked onto the email delivery pipeline. Note that the infra for M365, Azure etc is different. They would be running on servers hosted in MSFT DCs but have completely different CI&#x2F;CD pipelines. M365 services have their own deployment pipelines and it takes on the order of weeks to deploy your changes to production. Considering the fact that Outlook is down, clearly emai...

[beowulfey]: Copied this from my post in the other thread: The Status page is not working well, but I managed to subscribe to their RSS feed and it has been sending out updates periodically. I&#x27;ll post some of them here. 9:02 PM UTC: We&#x27;ve validated an alternative health check method on a subset of affected infrastructure, which allowed the servers in that subset to successfully return to service, and we&#x27;re now applying this change more broadly. We&#x27;re also preparing an automated recover...

[pwthornton]: Nadella stripped mined the company for AI jank, and everything has been falling apart. Github has been unreliable a lot lately. Xbox is basically imploding. A lot of Azure, Entra, Intune, etc. is shockingly janky, and there is clearly very little investment in it.

[stevenhubertron]: What’s crazy is now hour 8 and my work email for 15k+ employees is still down.  This is worse than the usual US-East-1 issues.

[tatersolid]: My last email was received at 5.5 hours ago. Teams chat and meetings are the only thing in Microsoft 365 that seem to be working. All our Azure infrastructure seems fine so this is something 365-specific. Everyone has occasional outages but this is the worst 365 outage our org has seen since starting with M365 in 2019.

--- From hackernews ---

--- Top Comments ---

[nickdothutton]: Microsoft is unable to run a reliable hosted email service,  given infinite resources. What people don&#x27;t realise is that the former is in part a consequence of the latter. Without a forcing function, complexity multiplies, silent fragility accumulates, end-to-end understanding dwindles. There is no incentive to simplify.

[magnio]: Apparently this single outage means Office 365 uptime this year drops to 3 nines (2 nines for this month). You can claim SLA credit worth 50% service fee by applying before December 31.

[vld_chk]: This is arguably one of the biggest outages in modern history. AWS region level outage was more visible, but email is a backbone of the modern world. BBC is running live coverage of it at the level of government and ministers, feels surreal

[BLKNSLVR]: How many Microsoft employees are working on this? It&#x27;s concerning that one of the biggest, most valuable companies on the planet, that runs services internationally, can have one of its primary services have gone down for this long. 6 hours ago they seemed to not exactly understand what the problem was, and that was 6 hours into the outage. This is concerning.

[redv2]: Might be a coordinated attack against the network providers that MS uses?
MS: Our investigation determined that one of our network connections to a third-party ISP was not taking traffic. We&#x27;ve diverted traffic to alternate channels to expedite recovery. For more information please follow MO273940 in the admin center. Other source: This is related to a BGP hijack of at least 87.128.0.0&#x2F;10 belonging to Deutsche Telekom (AS3320) hijacked by AS212416 (Proximity, Bulgaria) passing throu...