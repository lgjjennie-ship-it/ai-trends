---
layout: default
title: "Tailscale SSH: Investigation and remediation update"
date: 2026-10-27T19:55:21Z
slug: 2026-10-28-tailscale-ssh-investigation-and-remediation-update
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Tailscale, SSH, Security, Cybersecurity, Network Security"
---

# Tailscale SSH: Investigation and remediation update

**链接**: https://tailscale.com/ssh-investigation-update

**作者**: figmert

**发布时间**: 2026-10-27T19:55:21Z

**采集日期**: 2026-10-28


## AI 摘要

Tailscale releases an update on its SSH security investigation, addressing vulnerabilities and providing remediation steps.

## AI 评价

The content discusses a significant security investigation and remediation update for Tailscale SSH, with insightful community comments that provide additional context and perspectives on the issue. The high engagement and quality of discussions further validate the importance of the content.


## 原文内容


--- Top Comments ---

[minimaltom]: Former tailscalar here and now someone managing tailscale at an org. Having done my own review of the vulns and the fixes as they are landing in github, its pretty clear to me that this only affects situations where you use ACLs to permit ssh into a node (via tailscale ssh, not via opensshd), but dont give a path to sudoers&#x2F;root. If a user had no SSH access and&#x2F;or connectivity to a vulnerable node, none of these vulns give them access. However, if you have a vulnerable tailscaled an...

[rietta]: I am fairly glad I have stuck with stock OpenSSH that ships with Linux. This incident proves I am glad with that choice. Over the decades, I have maintained remote access through port forwarding on my router - at one point in 2008 I put SSH on port 80 so I could access it from the restricted wifi network at the hospital my grandmother was at. I have also used openvpn. I have also used cloudflare tunnels. But in the end, I always connect to hardened openssh with key only authentication.

[andix]: Somehow I don&#x27;t think it&#x27;s a good idea to let Tailscale handle service authentication at all. It&#x27;s supposed to be an additional security layer around existing infrastructure and services. Letting Tailscale handle VPN and SSH at the same time is basically once again a single point of failure. Similar to exposing SSH directly to the internet.

[aborsy]: There are too many features, and lines of code (probably more than OpenVPN). I&#x27;m pretty sure there are all kinds of zero days in it, with this attack surface and feature set. I use it extensively, and I would rather pay them a fee if they could review thr code. A possibility is a lock down mode, disabling risky features. I just want a VPN for connrctiviy, no taildrop, taildrive, SSH, funnel, services, DNS, node sharing, ...They are disabled in my admin console, but the code runs on my de...

[teekert]: The amount of people claiming to be happy to have never gotten on the Tailscale (or other virtual network layer like Nebula) boat is too damn high. Remember people, it&#x27;s just a layer. I.e. GitLab seems to have a new set of critical CVEs every week now, and I have been glad to have Tailscale (plus a physical firewall) as a layer in front of it. Total stress level would have been higher without Tailscale. And before people start coming up with alternatives, I know, but they either have the...