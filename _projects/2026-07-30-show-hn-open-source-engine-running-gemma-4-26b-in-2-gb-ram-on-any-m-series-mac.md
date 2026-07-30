---
layout: default
title: "Show HN: Open-source engine running Gemma 4 26B in 2 GB RAM on any M-series Mac"
date: 2026-07-29T15:05:43Z
slug: 2026-07-30-show-hn-open-source-engine-running-gemma-4-26b-in-2-gb-ram-on-any-m-series-mac
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Machine Learning, Swift, Metal"
---

# Show HN: Open-source engine running Gemma 4 26B in 2 GB RAM on any M-series Mac

**链接**: https://github.com/drumih/turbo-fieldfare

**作者**: gitpusher42

**发布时间**: 2026-07-29T15:05:43Z

**采集日期**: 2026-07-30


## AI 摘要

A specialized inference engine for running a 26B Gemma model on any M-series Mac using only 2GB of RAM.

## AI 评价

The content is highly valuable as it presents a novel approach to running large AI models on resource-constrained devices, with insightful community comments that discuss technical details and comparisons. The engagement and discussion quality are high.


## 原文内容

Hi HN,<p>I built a specialized inference engine for running 4-bit Gemma 4 26B-A4B-IT on any M-series Mac using about 2 GB of RAM. It is called TurboFieldfare and is written in Swift and Metal.<p>I have always adored on-device AI. It feels like magic that you can run a powerful NN on your Mac or iPhone. So I wanted to push the limits a bit and run a model whose weights don’t fit in memory.<p>The model’s 4-bit quantized weights occupy roughly 14 GB, which makes running it with conventional inference tools almost impossible on an 8 GB or even 16 GB Mac once the OS, applications, and KV cache are included.<p>The trick is to keep the shared part of the model and the KV cache in RAM, then stream only the routed experts needed for each token from SSD. An SSD is way slower than RAM, so the runtime uses a small expert cache and bounded parallel `pread`. While those reads are in flight, the GPU runs the shared part of the layer.<p>I ran more than 100 experiments. Most didn’t work. A few got me here. The experiments are described in the GitHub repo.<p>It currently generates 5–6 tok&#x2F;s on an 8 GB M2 MacBook Air and 31–35 tok&#x2F;s on an M5 MacBook Pro.<p>I also added an experimental OpenAI-compatible local server. It supports streaming and tool calls, and reuses one prompt prefix from the KV cache.<p>Try it! The Mac app is easy to install. On the first run, it will download 15 GB of weights from Hugging Face. The model is surprisingly capable.<p>I would love any kind of feedback!


--- Top Comments ---

[giancarlostoro]: Nice, I think this is the second time I see this here on HN, I always wondered why we need to shove the entire model into memory, I don&#x27;t care who King Charles is every single time. It always felt as though we already figured out how to break up large files and parse them efficiently with very little memory. Frontier AI feels like its full of people who are brilliant at making models, but when it comes to scale and practicality, they just leave it to whoever sets up infrastructure to wor...

[xenonite]: With my M1 MBA, I am still on macOS 15. To compile it, just remove the two lines with     opts.languageVersion = .version4_0
  
or surround them with     if #available(macOS 26.0, *) {
    opts.languageVersion = .version4_0
  }
  
You&#x27;ll miss out on a prefill speedup of 2.4x (as it yields 11.24x faster attention), according to the git comments, but it works. (On the 8-GPU-core MBA M1, I get 5-6 tok&#x2F;s.)

[tredre3]: I&#x27;m curious how your project compares to plain mmap! Because llama.cpp will already run 26B in 2GB of RAM if you really want to (mmap enabled, repacking disabled). It seems like the main difference is that your project synchronizes the SSD reads with inference activity, which you&#x27;ve presumably tuned to cause the least latency possible? Whereas the OS wouldn&#x27;t care about any of that.

[pwython]: Ran this on a 64 GB M4 Max MacBook. I figured having Gemma available with a small footprint would be a nice setup. No more unloading models when I need more RAM for work? Hell yea. Got 48 tok&#x2F;s decode at 1.9 GB RSS (2.4 GB peak), faster than the 24 GB M5 Pro mentioned in the benchmarks. The ~2.0 GB&#x2F;s SSD number quoted for M4 is the base chip. This M4 Max does ~7 GB&#x2F;s. Page cache seems to be why it beats the M5 Pro. With 64 GB the whole 12 GB packed_experts set stays resident, a...

[mmastrac]: I have a project that&#x27;s almost ready to run DiffusionGemma as well. The two project might potentially work well together. I&#x27;m getting ~20tok&#x2F;s on a 36GB M3 and there&#x27;s strong possibility we might be able to crib faster kernels from each other. Feel free to reach out. (currently at  https:&#x2F;&#x2F;github.com&#x2F;mmastrac&#x2F;diffgemma  but not in a releasable state yet)