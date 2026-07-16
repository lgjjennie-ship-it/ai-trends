---
layout: default
title: "Show HN: Firefox in WebAssembly"
date: 2026-07-15T21:00:17Z
slug: 2026-07-16-show-hn-firefox-in-webassembly
source: hackernews
category: ai-community
ai_score: 8.0
tags: "WebAssembly, Firefox, Browser Technology"
---

# Show HN: Firefox in WebAssembly

**链接**: https://developer.puter.com/labs/firefox-wasm/

**作者**: coolelectronics

**发布时间**: 2026-07-15T21:00:17Z

**采集日期**: 2026-07-16


## AI 摘要

Firefox is fully rendered in a WebAssembly canvas, showcasing significant advancements in browser technology.

## AI 评价

The content demonstrates a significant technical achievement in compiling and running the entire Firefox browser in WebAssembly, with novel features like end-to-end encryption and a novel JIT. The community discussion is insightful and shows diverse viewpoints.


## 原文内容

This is the entire Firefox browser rendering to a &lt;canvas&gt; element. Gecko, all UI components, and the Spidermonkey JS engine are all compiled and running in WebAssembly.<p>Here are a few things you might find interesting:<p>- This is fully end to end encrypted! We use the WISP protocol for TCP-over-websockets.<p>- There is a novel WASM-&gt;JS JIT for experimental site speedup<p>- This port cost over 25k in opus&#x2F;fable tokens for debugging and JIT research<p>This was just a fun experiment to push the boundaries of WebAssembly. For a more usable &quot;browser in browser&quot; experience, we also built <a href="https:&#x2F;&#x2F;github.com&#x2F;HeyPuter&#x2F;browser.js" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;HeyPuter&#x2F;browser.js</a> that eats a bit less RAM.


--- Top Comments ---

[yjftsjthsd-h]: &gt;This port cost over 25k in opus&#x2F;fable tokens for debugging and JIT research &gt; This was just a fun experiment to push the boundaries of WebAssembly I&#x27;m a huge fan of the project, but I have to ask. If spending $25k is a &quot;fun experiment&quot;, where exactly is your threshold for serious work?

[degamad]: I&#x27;m so glad this exists, I&#x27;ve been considering doing something like this for a few months. I recently got a TV based on VIDAA os, a locked-down linux-based OS where everything is rendered from Web pages. It has a built-in browser that doesn&#x27;t support ad-blocking (I suspect VIDAA is profiting from showing ads on the TV), and you can&#x27;t install new apps unless they&#x27;re Web pages. This would hopefully allow one to run Firefox within the existing browser, then install uBloc...

[coolelectronics]: Oh and for anyone asking, you can run firefox-wasm inside firefox-wasm inside firefox! I only got this to load once though since it gets pretty unstable at that level.

[MajesticHobo2]: Browser sandboxing is now fully solved.

[lxe]: It&#x27;s kind of ironic how this doesn&#x27;t work in Firefox.