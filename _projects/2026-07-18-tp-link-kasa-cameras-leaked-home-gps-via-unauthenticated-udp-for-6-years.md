---
layout: default
title: "TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years"
date: 2026-07-17T21:42:43Z
slug: 2026-07-18-tp-link-kasa-cameras-leaked-home-gps-via-unauthenticated-udp-for-6-years
source: hackernews
category: ai-community
ai_score: 8.0
tags: "IoT security, vulnerability, TP-Link Kasa, GPS data, UDP vulnerability"
---

# TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years

**链接**: https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md

**作者**: BadChemical

**发布时间**: 2026-07-17T21:42:43Z

**采集日期**: 2026-07-18


## AI 摘要

TP-Link Kasa cameras were found to leak home GPS data via unauthenticated UDP for six years, highlighting a major security flaw in IoT devices.

## AI 评价

The content details a significant vulnerability in TP-Link Kasa cameras that could expose home GPS data for years, indicating a high technical importance and relevance to IoT security. The discussion quality is strong with 18 comments providing diverse viewpoints and insights.


## 原文内容


--- Top Comments ---

[gruez]: The report seems obviously AI generated, so I can&#x27;t be bothered to read in its entirety, but based on my quick skim, &quot;leaked home GPS&quot; makes it sound worse than it is. Unless you&#x27;re dumb enough to set DMZ on this device, this won&#x27;t be exposed to the internet, and if it&#x27;s LAN only, don&#x27;t you already know the location? Even for a remote attacker who somehow got LAN access remotely, they can probably deduce the location through other means (eg. using crowdsourc...

[drnick1]: This underscores the principle that IoT devices should not be allowed to communicate over the public Internet. Pretty much all cheap, Chinese-made hardware of this kind has intentional or unintentional security holes waiting to be exploited.

[BobbyTables2]: That disclosure timeline is brutal…

[BadChemical]: Six months of coordinated disclosure on a TP-Link Kasa camera resulted in two CVEs, a triage failure where the vendor described a vulnerability that doesn&#x27;t exist in the reported payload, a beta patch that permanently bricked my test device, and a factory reset that doesn&#x27;t clear previous owner data. The GPS finding (CVE-2026-13230) has been publicly documented on this device class since 2020. A single UDP packet returns sub-meter home coordinates with no authentication required. TP...