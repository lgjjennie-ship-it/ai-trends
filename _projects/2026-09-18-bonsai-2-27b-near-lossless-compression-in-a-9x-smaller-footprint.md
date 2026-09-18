---
layout: default
title: "Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint"
date: 2026-09-17T21:13:31Z
slug: 2026-09-18-bonsai-2-27b-near-lossless-compression-in-a-9x-smaller-footprint
source: hackernews
category: ai-community
ai_score: 8.0
tags: "model compression, AI efficiency, near-lossless compression, Bonsai 2 27B, local deployment"
---

# Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint

**链接**: https://prismml.com/news/bonsai-2-27b

**作者**: JonSchneider

**发布时间**: 2026-09-17T21:13:31Z

**采集日期**: 2026-09-18


## AI 摘要

Bonsai 2 27B is a new model that achieves near-lossless compression in a 9x smaller footprint, offering potential benefits for local deployment and resource efficiency.

## AI 评价

The content discusses a significant technical development in model compression, achieving near-lossless compression in a much smaller footprint. The community comments provide additional context and insights, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[simonw]: If you want to try out out the GGUFs from  https:&#x2F;&#x2F;huggingface.co&#x2F;prism-ml&#x2F;Ternary-Bonsai-2-27B-gguf#th...  be aware that you need Prism&#x27;s llama.cpp fork to get them to work, from  https:&#x2F;&#x2F;github.com&#x2F;PrismML-Eng&#x2F;llama.cpp&#x2F;releases&#x2F;tag&#x2F;prism-...  This should work:     cd &#x2F;tmp

  # Get the Prism macOS runtime
  curl -fL https:&#x2F;&#x2F;github.com&#x2F;PrismML-Eng&#x2F;llama.cpp&#x2F;releases&#x2F;download&#x2F;prism-b10685-7dffb...

[verytrivial]: There&#x27;s a chap called Bijian Bowen who does very quick agentic coding challenges for new models (very soon after release!) mainly for toy games or websites.  He just did one for this model and included a comparison with the base model Qwen 3.8 which shows the &quot;near-lossless&quot; claim should be taken with a grain of salt. It is an interesting model  if  you are GPU starved and want local, but you might have trouble finding things it is good at.

[miffy900]: I really wish people would stop saying N times smaller than something when making a comparison; that makes no sense - it&#x27;s 1&#x2F;9th (11.11%) the size. You don&#x27;t get a smaller quantity by multiplying by a number greater than 1.0. You could instead reverse the subjects being compared - &quot;the original model is 9x bigger than this new smaller, efficient model&quot; or some such. That makes sense. I keep seeing this being used when people talk about efficiency or performance gains ...

[nilsherzig]: Fyi, if you&#x27;re trying to run this under AMD&#x2F;HIP: PTQ1_0 has no optimized MMQ-Path in their llama-cpp fork, try running PTQ2_0 (needs a bit more vram, but is about 2x faster on my 6700 XT)  https:&#x2F;&#x2F;gist.github.com&#x2F;nilsherzig&#x2F;b8266d001c5c01bdb3d81d209...

[Aurornis]: These are small enough that you can run them entirely in the browser  https:&#x2F;&#x2F;huggingface.co&#x2F;spaces&#x2F;webml-community&#x2F;ternary-bonsai...  Remember to clear the downloaded weights afterward. Like the last model, it&#x27;s amazing they work as well as they do. Use it for any longer task and they fall apart spectacularly and in interesting ways.