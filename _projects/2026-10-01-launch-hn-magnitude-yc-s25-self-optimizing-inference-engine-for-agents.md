---
layout: default
title: "Launch HN: Magnitude (YC S25) – Self-optimizing inference engine for agents"
date: 2026-09-30T17:37:40Z
slug: 2026-10-01-launch-hn-magnitude-yc-s25-self-optimizing-inference-engine-for-agents
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Inference Engine, Performance Optimization, Open Source, Hardware Acceleration"
---

# Launch HN: Magnitude (YC S25) – Self-optimizing inference engine for agents

**链接**: https://github.com/magnitudedev/magnitude

**作者**: anerli

**发布时间**: 2026-09-30T17:37:40Z

**采集日期**: 2026-10-01


## AI 摘要

Magnitude is a new self-optimizing inference engine for agents that claims to be up to 2x faster than llama.cpp on various hardware platforms.

## AI 评价

The content is highly relevant to the field of AI/ML and software engineering, with a novel approach to optimizing inference engines. The community discussion is insightful and demonstrates the potential impact on the field.


## 原文内容

Hey HN, Anders and Tom here. We&#x27;re building Magnitude, an inference engine for agents that optimizes itself to run as fast as possible on your hardware. It works on Mac, Linux, and Windows on any hardware and is up to 2x faster than llama.cpp.<p>We&#x27;re both software engineers and previously built an open source browser agent to 4k+ GH stars and 100k+ downloads. We increasingly wanted to run it on local models, but found that no inference engine worked for our use case.<p>Inference engines today all make a performance tradeoff. They are either:<p>- Built for batched inference on datacenter hardware at the cost of single-session performance (vLLM, SGLang)
- Designed for broad compatibility instead of optimizing for specific hardware (llama.cpp, Ollama)
- Specialized for specific hardware or models but lacking engine completeness (oMLX, ds4)<p>Plus none of them are designed for running agents locally. Sessions are long, several often run at once, and you still want to use your computer for other things.<p>Magnitude is built for maximum performance on your hardware and running local agents:<p>- On-device compilation and tuning: Kernels are written with flexible parameters that are tuned on your actual device before the model runs. This gives you broad hardware compatibility with the same performance ceiling as hardware-specific kernels.<p>- Focus on best architectures: We write our tunable, highly efficient kernels for the most popular open-weights families. This allows us to achieve and surpass the performance of hardware or model specialized engines, without forcing ourselves to over-generalize at the cost of performance.<p>- Dynamic memory allocation: Magnitude reserves only enough memory up front to hold model weights. As your agent sessions grow, the memory heap dynamically increases, and frees itself when agents stop. Your hardware can still be used for other stuff while agents run.<p>- Hybrid paged attention: We borrow the best ideas from engines like SGLang to allow concurrent sessions to share prefix caches, but optimize placement for memory-adjacency so single-session performance doesn&#x27;t suffer.<p>Magnitude is fully open source (Apache 2.0). We built it in Rust, including a custom GPU kernel runtime and autotuner. We take inspiration from the best innovations in inference from academics (e.g. FlashAttention, FlashInfer, TurboQuant) as well as other engines (e.g. SGLang radix attention) to reach the performance ceiling.<p>Benchmarked against llama.cpp with Qwen 3.6 35B A3B (4 bit), 64k context, no speculative decoding:<p>Metal (Mac M4 Pro 48 GB)
- 92% faster decode (30 tok&#x2F;s → 57 tok&#x2F;s)
- 9% faster prefill (466 tok&#x2F;s → 507 tok&#x2F;s)
- 28% less per-agent memory usage<p>CUDA (DGX Spark)
- 19% faster decode (49 tok&#x2F;s → 58 tok&#x2F;s)
- 23% faster prefill (2,033 tok&#x2F;s → 2,507 tok&#x2F;s)
- 27% less per-agent memory usage<p>Magnitude ships as a desktop app that you can easily connect with whatever agents you already use (Pi, OpenCode, Hermes, Codex, and more). It automatically runs models on demand when these agents actually need them, and shuts them down after inactivity.
Here&#x27;s what it looks like: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=0qE8BWEZu7o" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=0qE8BWEZu7o</a><p>We&#x27;re excited to push Magnitude further to let you run bigger models on the same hardware while continuing to improve performance. Our plans include:<p>- Expert streaming: store experts on RAM or disk and load them just-in-time. This lets you run models bigger than what otherwise would fit on your GPU.<p>- Kernel compiler: our current kernels tune a few parameters to fit your hardware. We can take this further with a fully custom compiler that automatically chooses how to fuse kernels and which implementations to use, to make it fit to your hardware even better.<p>- Multi-device utilization: Make the best possible use of all hardware on a system (CPU, GPUs, RAM, disk) by detecting these and automatically solving for the best model layout.<p>We&#x27;d love for more people to try it out and give us feedback. Feel free to comment here, we&#x27;ll be around all day!


--- Top Comments ---

[lxe]: On my local inference box I have a perpetual codex thread open in my llama.cpp checkout that I periodically ask to take a look at currently pending llama.cpp PRs, do some research on latest MTP, Dflash and other prediction or attention optimizations, do research on the latest model quants and finetunes, take a look at localLlama Reddit threads and just do essentially a sweep of the frontier. Then it rebuilds latest llama.cpp, grabs the PRs it finds relevant to test against, and then it perfor...

[bythreads]: Ok so i took the time to benchmark this on the following on my m5 max 128gb: Qwen3-4B-Instruct-2507-4bit 
Qwen3.5-35B-A3B-4bit
Qwen3.5-9B-MLX-4bit
Qwen3-Reranker-0.6B-4bit
Qwen3-Coder-30B-A3B-Instruct-4bit
qwen2.5:0.5b and the results are what i kinda expected to begin with, this adds next to nothing? - also the repo was pivoted from a playwright sub assembly to this not long ago - so my conclusion - THIS MIGHT be worth some watching if you have a model where no-one!, has optimized it at all ...

[mrtsepelev]: Congrats on launch! Tried it on the gemma-4-26b-qat-4bit model. Was indeed faster on token generation then on oMLX (82.8 tok&#x2F;s vs 76.5 tok&#x2F;s), but the prefill time was ~2.6x slower (709 tok&#x2F;s vs 1843 tok&#x2F;s). Don’t use any acceleration on the oMLX. Macbook M5 Pro, 48 gb

[sebastienburel]: On a Mac the baseline I&#x27;d want is MLX, not llama.cpp. llama.cpp isn&#x27;t the fast path on Apple Silicon for most models people run locally, so a speedup over llama.cpp could still be slower than mlx_lm. Do you have that number? Second, more important for agents: decode speed is rarely what hurts. It&#x27;s resending the same system prompt plus tool schemas every turn. Does self-optimizing cover prefix cache reuse across requests, or is it kernel and layout tuning only? And is the endpo...

[kmike84]: This seems to be a good idea. However, beating llama.cpp on speed is a low bar :) I found it to be a good baseline, but at least on Mac there was always something way faster, and&#x2F;or with better memory requirements - like you said, ds4, omlx, mtplx, etc. It seems if you use local LLMs for real, there is very little reason not to use one of the more optimized engines. 3 main failure modes I observed in the engines: * Not using best available spec decoding * Using too much VRAM for KV cache...