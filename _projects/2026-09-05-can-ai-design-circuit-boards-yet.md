---
layout: default
title: "Can AI design circuit boards yet?"
date: 2026-09-04T19:48:29Z
slug: 2026-09-05-can-ai-design-circuit-boards-yet
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, circuit boards, PCB design, hardware, engineering"
---

# Can AI design circuit boards yet?

**链接**: https://eebench.org/blog/can-ai-design-circuit-boards-yet/

**作者**: iopapa

**发布时间**: 2026-09-04T19:48:29Z

**采集日期**: 2026-09-05


## AI 摘要

AI tools like Fable and Claude are being used to design circuit boards, with mixed results and valuable insights from experienced designers.

## AI 评价

The content discusses the potential of AI in designing circuit boards, with insightful comments from experienced professionals sharing their personal experiences and results. The high engagement and quality of discussion further validate the importance of the topic.


## 原文内容


--- Top Comments ---

[SequoiaHope]: I have 15+ years of PCB design experience. Mostly hobby stuff but a fair amount of processional work. Kilowatt range brushless motor controllers, basic RF stuff, lots of microcontroller stuff. I had Fable design an LED earring. Rechargeable coin cell, RP2350 cpu, IMU, 45 addressable LEDs. It made two mistakes - missed the through holes on the coin cell holder footprint and made the center pad too small. I was able to have JLC swap the through hole battery holder for a surface mount one, and I...

[CyLith]: A personal data point: I had Claude Opus 4.8 design a fairly textbook circuit that outputs a monochrome image burned in an EEPROM over standard 640x480 VGA using only 74 series logic and GALs. It designed the circuit and GAL code, and I did the routing, and got it made through JLC for $6. After it came back, there was one error that was not caught, which I could blue-wire, and it works just fine otherwise. I was fairly impressed.

[iamflimflam1]: I did this recently -  https:&#x2F;&#x2F;www.atomic14.com&#x2F;2026&#x2F;08&#x2F;03&#x2F;twelve-dev-boards-from-o...  Instead of trying to vibe it all - I got Claude to write deterministic scripts for creating the boards. And did this before trying to completely vibe it:  https:&#x2F;&#x2F;www.atomic14.com&#x2F;2025&#x2F;07&#x2F;12&#x2F;vibing-hardware

[itomato]: I got a flexpcb that validates in JLC and PCBWay DRC tools from the KiCAD MCP Server and Codex. I have yet to order any or program it, but it was enough to make me push on with a PCB art project for ST-style guitar pickguards - no netlist, no problems. I&#x27;m also foolishly toying with NeXTBus dev boards for the Cube. Is it cursed? Probably.  https:&#x2F;&#x2F;github.com&#x2F;itomato&#x2F;NeXTBus-Dev-Board

[holoduke]: As long as you keep in the loop Claude can do anything. Question is can it do stuff in which you are not in the loop. For simple tasks yes, but not for complex ones yet.