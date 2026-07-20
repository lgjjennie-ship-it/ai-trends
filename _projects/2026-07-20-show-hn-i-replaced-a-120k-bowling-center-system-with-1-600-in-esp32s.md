---
layout: default
title: "Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s"
date: 2026-07-19T14:41:16Z
slug: 2026-07-20-show-hn-i-replaced-a-120k-bowling-center-system-with-1-600-in-esp32s
source: hackernews
category: ai-community
ai_score: 8.0
tags: "embedded systems, retrofitting, bowling center, ESP32, cost-effective solutions"
---

# Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s

**链接**: https://news.ycombinator.com/item?id=48968606

**作者**: section33

**发布时间**: 2026-07-19T14:41:16Z

**采集日期**: 2026-07-20


## AI 摘要

An SRE replaces an expensive bowling center scoring system with affordable ESP32s, highlighting the potential for modern technology to upgrade outdated systems.

## AI 评价

The content is highly relevant to software engineering and embedded systems, showcasing a creative and cost-effective solution to a complex problem. The community comments provide insightful discussions on retrofitting old systems with modern technology, adding to the value of the post.


## 原文内容

I might be the only SRE on Earth with his own bowling center. It&#x27;s a more in-depth gig than you&#x27;d think.<p>My family and I bought an abandoned 8-lane bowling center in the rural mid-west. In our small town there weren&#x27;t many recreation options for families. You&#x27;ve heard of a food desert? This is an R&amp;R desert.<p>It had been abandoned for a good reason. The roof leaks, the electrical system was constantly surging, and my 70-year-old bowling equipment (still) doesn&#x27;t work perfectly. The system that keeps your score is particularly interesting to me. It&#x27;s the thing you watch during your game, but it fades into the background beyond that. Turns out these things are really cool, but absurdly expensive.<p>Ours was installed in 2008 and cost six figures. It&#x27;s calculating ball speed and trajectory, camera-based pin detection (object detection and trig, on ICs!), runs the fouling, the animations, the pinsetting machine and ball return. Very cool stuff for its age.<p>From the business perspective, my facility only cost me $105k. To forklift-replace the score keeping system runs anywhere between $80-$120k, depending on features, vendor, and unit age. No upgrades or service contracts, mind you, and every feature and customization is a new line item. That&#x27;s for a 1:1 replacement on a system installed in 2008. Incredible, given how fast the tech world moves.<p>Replacement parts cost a shocking $4000 per pair of lanes. But wait, the bowling machines themselves are 70 years old, so what&#x27;s this &quot;advanced&quot; system actually doing back there? Actuating a single relay to trigger that big old machine. Everything else is strictly mechanical. Meanwhile I&#x27;ve got a six-figure invoice in my hand. I&#x27;m upset.<p>Given the state of open hardware, computer vision, real-time event streaming, and open source running megascale products worldwide, there had to be a way to do this myself.<p>So far I&#x27;ve built an equivalent prototype for about $200 per lane-pair, $400 if you&#x27;re fancy. ESP32 and ESPNow with an RS485 fallback, reporting to a raspberry pi lane computer that&#x27;s really just redis and a state machine bolted to an ESP32 gateway for the mesh.<p>Since it&#x27;s all ESP32, I&#x27;ve got a fistful of spare controllers in a drawer, pre-flashed or waiting to be. All common off-the-shelf hardware: microcontrollers wired to relays, optocouplers, and IR-break-beam sensors, each running slightly different firmware. Writing the firmware and protocol is the actual hard part.<p>It&#x27;s an ESPNow star-topology mesh: each node emits events from its sensors and accepts commands for its controls, reporting to a gateway node connected to the raspi over UART. From there it&#x27;s event streaming: RX packets get translated and tossed into redis, commands relay back out to the mesh as needed. RS485 sits underneath as a wired fallback for noisy RF environments.<p>Once the data&#x27;s in redis, it&#x27;s familiar middleware&#x2F;React&#x2F;websocket&#x2F;pub-sub stuff. Any React dev can build their own UI and bowling animations. Since it all runs on commodity hardware, I can do legit anything I want as the proprietor, and I own all my data. Repairs take five minutes; I can swap the rig on a lane pair in under 10. I&#x27;d bet a house like mine could go from zero to running in an hour or two.<p>We&#x27;re calling it OpenLaneLink, and I plan to open source the hardware, firmware, and software stack when it&#x27;s ready. Bowling is fun, and I want to help keep it affordable for alleys like mine.
I hate vendor lock-in. I&#x27;m not a fan of closed systems, calling support for every hiccup, or paying to &quot;white label&quot; my own equipment. Want to go Tron-themed for a night? Good luck finding a neon neumorphic theme in something bought at the turn of the century.<p>All that bugged me. Sure, bowling equipment is niche, but the open hardware and software landscape is amazing.<p>Thanks for reading! Let me know if anyone&#x27;s interested in more posts about this bowling nonsense.


--- Top Comments ---

[HeyLaughingBoy]: Thank you for posting this, it reaffirms what I&#x27;ve been thinking for so long. There are many opportunities to retrofit old systems of all types with modern low-cost embedded technologies. Around 2019 or so I was approached by an engineer who had a small business retrofitting very old machine tools with modern motion controls. Think very large lathes and planers. The problem they had was that in order to get these systems working with newer controls, they had to make time-consuming modifi...

[vikbez]: Lol, nice! It depends on what you mean by &quot;owning a bowling center,&quot; but it looks like there are at least two of us into this :D I bought a really old fully mechanical (and automated!) mini bowling lane. It works without a CPU, except for the score display, which originally used a 1970 Intel D8749H (MCS-48)! Just like yours, the only thing that turns this machine on is a single relay :D
On my model, I also get feedback on the pin status and a &quot;ball received&quot; signal, so I c...

[msisk6]: I grew up behind the bowling machines. My dad was a bowling machine mechanic and worked on machines all around the midwest. He often moon-lite as the on-duty mechanic during league nights and I&#x27;d go with him. Mostly he worked at the local 16-lane alley with ancient AMF machines. The logic was all relays in a &quot;chassis&quot; on each machine. Relays would fail, pins and balls would end up where they&#x27;re not supposed to be, folks would roll the ball into the sweep. All kinds of stuf...

[section33]: Right now I&#x27;m working on adding LED + DMX DJ light control - I kinda want to be able to order LED strips to &quot;chase&quot; a ball as it goes down the lane or back up the return. I plan on triggering laser-light shows and such with the DMX controller. Eventually, I want to allow a customer walk up to the lane, tap to pay and start bowling immediately, too. Kiosk-ize bowling alleys, yknow? I&#x27;m pumped. So much room for activities!

[monster_truck]: Is there a URL I can send people? I would like to show this to an OG in the pro circuit who has been looking to buy an alley and modernize it but is being dissuaded by the exact situation you are describing. We so desperately need more &#x27;third spaces&#x27; and Bowling Alleys are great for this