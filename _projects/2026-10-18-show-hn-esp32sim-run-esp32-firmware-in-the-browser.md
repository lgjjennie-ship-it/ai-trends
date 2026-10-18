---
layout: default
title: "Show HN: Esp32sim – Run ESP32 firmware in the browser"
date: 2026-10-17T13:51:08Z
slug: 2026-10-18-show-hn-esp32sim-run-esp32-firmware-in-the-browser
source: hackernews
category: ai-community
ai_score: 8.0
tags: "ESP32, emulator, browser, IoT, embedded systems"
---

# Show HN: Esp32sim – Run ESP32 firmware in the browser

**链接**: https://github.com/mikroverk/esp32sim

**作者**: joakimeriksson

**发布时间**: 2026-10-17T13:51:08Z

**采集日期**: 2026-10-18


## AI 摘要

Esp32sim is an open-source ESP32 emulator that runs in the browser, allowing developers to experiment with ESP32 firmware without physical hardware.

## AI 评价

The content introduces a novel tool for ESP32 firmware simulation in the browser, which is highly relevant for embedded developers. The community discussion is insightful and demonstrates potential use cases, increasing the content's value.


## 原文内容

Hi HN,<p>I’ve been working on esp32sim, an open-source ESP32 emulator that runs in the browser.<p>The fun part of the demo is that there is no ESP32 involved — the firmware is executing in the emulator.<p>The goal is to make ESP32 software easier to experiment with, test and simulate without always needing physical hardware connected.<p>Source:
<a href="https:&#x2F;&#x2F;github.com&#x2F;mikroverk&#x2F;esp32sim" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;mikroverk&#x2F;esp32sim</a><p>I made a short video showing it in action:
<a href="https:&#x2F;&#x2F;youtu.be&#x2F;waoWFilTWEc" rel="nofollow">https:&#x2F;&#x2F;youtu.be&#x2F;waoWFilTWEc</a><p>I’m particularly interested in feedback from embedded developers: what would an emulator like this need to support before you’d actually use it for development, testing or CI?


--- Top Comments ---

[snakeman]: Very nice! Are you planning P4 support?
Have lots of S3 units and some C6, but P4 are the ones getting the most attentation at the moment.

[mrtksn]: Very cool, that was something I was looking into very recently. I vibe coded a drone simulator that flys drones by simulating ESP32 in the browser where the actual flight controller C code that runs on real ESP32 is running as WebAssembly:  https:&#x2F;&#x2F;mrtksn.github.io&#x2F;liftlab&#x2F;  So the drones are flying with the actual ESP32 flight controller and you can flash the real ESP32 board directly.

[raminf]: Outstanding! Very cool. On a lot of IoT projects, it&#x27;s easier to create a &quot;functional&quot; software simulator for the hardware part so the mobile and cloud people can get going without having to wait for test hardware. Those simulators work at the level of emulating BLE or WiFi&#x2F;API commands. Once you have hardware, the simulators are only used in CI&#x2F;CD testing. Where I can see this coming handy is instead of a &quot;functional simulator&quot; to actually have real firmwar...

[Klovy]: This emulator is actually pretty cool — especially since it’s based on an ESP32; you can do all sorts of neat things with it, even simple ones:)

[djmips]: Is there one for RP2350?

--- From hackernews ---
FOSS, Basically it plugs into your existing coding agent workflow and every time you push to prod it&#x27;ll throw up a questionnaire that checks if you understand how the code you&#x27;re pushing works.


--- Top Comments ---

[theParadox42]: I certainly feel like certain AI coding practices I have leave me with nothing learned in a frustrating way. Sometimes the most effective way to getting what I want is just describing a goal really clearly, and then bashing the AI until it gets there. That bashing process can take a lot of energy and yet I don’t gain useful skills or a “better way” that I would if I was still coding. I generate more training data for BigAI corp, but that’s a slow return cycle. Not sure if this is the right so...

[freshnode]: Have you ever heard the idiom &quot;ambulance at the bottom of the cliff&quot;?

[nkmnz]: It’s ironic that all negative comments on here are dismissive because “slop’s baaaaad”. Yes, slop is bad. Carelessness is bad. Lack of understanding is bad. It always has been. Code has been copied from stackoverflow. Built-in methods or std libraries have been used in a wrong way. Edge cases haven’t been covered. Rate-limiting and other hardening tasks haven’t been taken care of until the system broke. The code wasn’t DRY. Now, people are building tools that not only hide the solutions to th...

[chacha-bong]: Lol I built this and immediately got frustrated with it and stopped using it. I think I don&#x27;t like being questioned by someone who I expect to work like magic.

[sshah03]: I considered doing this with an open source app I have that let&#x27;s you get a visual summary on a PR + get quizzed on it, but ultimately decided it&#x27;s better to keep it an optional thing for people that want to understand AI PRs rather than force it as a gate, the volume is slowly becoming too high for even that. I agree with the sentiment behind this though as I felt this was needed as well.