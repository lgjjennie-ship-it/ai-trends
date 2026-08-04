---
layout: default
title: "MiniMax H3 Day-0 Support in ComfyUI: Open Weights, Native Audio, and 2K Video"
date: 2026-08-03T13:34:43Z
slug: 2026-08-04-minimax-h3-day-0-support-in-comfyui-open-weights-native-audio-and-2k-video
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, MachineLearning, ComputerVision, SoftwareDevelopment"
---

# MiniMax H3 Day-0 Support in ComfyUI: Open Weights, Native Audio, and 2K Video

**链接**: https://blog.comfy.org/p/minimax-h3-day-0-support-in-comfyui

**作者**: vblanco

**发布时间**: 2026-08-03T13:34:43Z

**采集日期**: 2026-08-04


## AI 摘要

MiniMax H3 support in ComfyUI now includes open weights, native audio, and 2K video, with community discussions highlighting pruning techniques and performance on modern hardware.

## AI 评价

The content discusses significant advancements in MiniMax H3 support within ComfyUI, including open weights, native audio, and 2K video capabilities. The high engagement and insightful comments further enhance the importance of the content.


## 原文内容


--- Top Comments ---

[embedding-shape]: &gt; We found that the model&#x27;s modulation weights (~40% of the total parameters) could be pruned and replaced with a functionally equivalent lookup table, dramatically shrinking the memory footprint with no loss in output quality. Is this a common approach to reducing weights with &quot;no loss in output quality&quot;, assuming this is true? Seems almost too simple to work. If this is doable, would this be applicable to LLMs as well? Neat with native frame-to-frame generation, but wonder...

[vblanco]: Im running this on my 4070ti super (16 gb vram), and it takes 10 minutes for a 10-seconds 480p video. but the results are spectacular.

[sheesdev]: The mouse render is surprisingly good. Several of those clips stood out to be a pretty big leap in terms of current SOTA models. The only one that looks &quot;off&quot; is the beverage ad video during the can opening clip, it still has that &quot;AI smoothening&quot; effect. Good thing this can be done pretty well using traditional rendering. I feel like for a good while now we&#x27;ll transition into a process that uses traditional &quot;close-up&quot; rendering&#x2F;shots + AI generated wid...

[vunderba]: I dug up a few old parody ideas I’d had back in high school and threw them at MiniMax M3 on my RTX. There’s definitely still a lot of jank once you move away from fairly normal scenarios. The moment you start to veer into weirder concepts, things tend to break down a bit especially in the game show where someone is strapped to a wheel and being spun. Still tho, I was actually shocked by how well the text-to-video turned out overall, and how fast it ran. A 10-second, half-megapixel video gen t...

[Mashimo]: &gt; The result gives a total memory footprint reduced by 66%, from 123.6 GB in full precision to 42.5 GB with the smallest models variants. Combining this with our dynamic VRAM offloading enables a next-generation 2K video model to run locally on a GPU like the RTX 3060. Pretty cool. But assuming you have a 16GB 3060, how long would it take to generate a 15 second clip?