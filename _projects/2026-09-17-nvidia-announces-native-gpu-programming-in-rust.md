---
layout: default
title: "Nvidia announces native GPU programming in Rust"
date: 2026-09-16T11:15:53Z
slug: 2026-09-17-nvidia-announces-native-gpu-programming-in-rust
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Nvidia, Rust, GPU Programming, CUDA, Tech"
---

# Nvidia announces native GPU programming in Rust

**链接**: https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/

**作者**: nonmaskable

**发布时间**: 2026-09-16T11:15:53Z

**采集日期**: 2026-09-17


## AI 摘要

Nvidia introduces native GPU programming in Rust, sparking community discussion on the implications and comparisons with existing technologies.

## AI 评价

The content announces a significant development in GPU programming with native Rust support, which is highly relevant for the tech community. The discussion is insightful with diverse viewpoints on CUDA, Rust, and potential future developments, indicating high community engagement.


## 原文内容


--- Top Comments ---

[jacobgorm]: I strongly dislike CUDA. Once you have allowed that proprietary cr*p into your C++ codebase, it is very hard to get rid, and you end up with code that is either tied to a single vendor or an #ifdef hell, probably both. The best way to program GPUs is face up to the reality that they are not the same machine as the CPU, write your kernels in separate files, and launch them manually, like in Metal, OpenCL, and D3D12, etc.
These days we even have DSLs like Triton that make kernel writing much mo...

[dllu]: Since NVIDIA owns huggingface now and huggingface has the excellent Candle [1] crate for inference on Rust, this seems like a good step towards nice native Rust kernels. [1]  https:&#x2F;&#x2F;github.com&#x2F;huggingface&#x2F;candle

[winwang]: Really exciting but it reads like Claude instead of what Nvidia posts have generally been like in the past. I don&#x27;t need nor want my tech blogs to sound like a young adult novel.

[HexDecOctBin]: Anyone know when Rust&#x27;s std::autodiff will become stable? Assuming this Rust support expands to other GPU vendors, autograd will probably be the only reason to use Slang instead of Rust anymore.

[michalsustr]: Not a cuda programmer, but since they’re making a new API, why would they already make it inconsistent at start? :-&#x2F; I’m referring to the examples a,b,c vs z,x,y (different ordering of output elements)