---
layout: default
title: "It took a year to ship WebAssembly in Anubis"
date: 2026-09-06T20:32:38Z
slug: 2026-09-07-it-took-a-year-to-ship-webassembly-in-anubis
source: hackernews
category: ai-community
ai_score: 8.0
tags: "WebAssembly, Anubis, Development, Community Discussion"
---

# It took a year to ship WebAssembly in Anubis

**链接**: https://anubis.techaro.lol/blog/2026/anubis-wasm/

**作者**: xena

**发布时间**: 2026-09-06T20:32:38Z

**采集日期**: 2026-09-07


## AI 摘要

Anubis, a project, has spent a year integrating WebAssembly, sparking community discussions on its impact and use cases.

## AI 评价

The content discusses the significant effort and time taken to integrate WebAssembly into Anubis, indicating a substantial development. The community comments provide insightful discussions on WebAssembly's implications, its use cases, and challenges, which adds to the content's value.


## 原文内容


--- Top Comments ---

[vintagedave]: &gt;  In my experience the kinds of people who run this exact combination of circumstances also tend to be the kind of people that have a wide variance in the level of kindness they display to the authors of open source programs that happen to be in their way.  Love this. There’s been past discussion on HN re how OSS maintainers are treated, and this is such a wry sentence. I really appreciate the tone &#x2F; attitude to the problem.

[doctor_radium]: I have every copy of Firefox here configured with webassembly disabled...because I don&#x27;t tend to do what Webassembly was designed for, i.e. online games, video&#x2F;audio editing, emulation, etc. [1] and because I dislike things running in the background without my knowledge. So this is going to be interesting. My plea (in a small voice) to the OP: just as many sites still do for JavaScript, please add a &quot;This captcha required Webassembly to continue&quot; message to your code when ...

[adrian17]: &gt; something I was doing with my &quot;strict MVP&quot; build of Anubis&#x27; WASM wasn&#x27;t in fact sticking to just the MVP features of WebAssembly Fun fact, this _used_ to be the case - wasm32-unknown-unknown had extra non-mvp features added later, which in my eyes has been a breaking change on stable. You&#x27;re not the first person to have been bitten by this, there&#x27;s [1] and a similar story  in Ruffle [2]. Weirdly, the response from the rustc side (IIRC we also talked with one...

[kccqzy]: Hats off to Xe for spending so much time on backwards compatibility, especially the tidbit about targeting Chrome 66. I have a Mac from 2014 running Yosemite that I occasionally use to test for backwards compatibility in my own frontend code (for fun!). But IMO the best way to ensure compatibility is to use period-correct toolchains or toolchains where the pace of change is slower, like ClojureScript.

[Aachen]: Is there a place where I can try out if my browser is compatible? Easier to find out now than when I&#x27;m trying to get work done and a million websites now have it deployed On  https:&#x2F;&#x2F;wasm-feature-detect.surma.technology  it shows that I don&#x27;t have 3 of all these features but I&#x27;m not sure if Anubis needs any of them to not kick me back to the pure JS solution Which would apparently be bad because &gt; The WebAssembly that&#x27;s shipped with this flow is ridiculously p...