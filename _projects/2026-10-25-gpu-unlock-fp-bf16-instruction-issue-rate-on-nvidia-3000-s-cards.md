---
layout: default
title: "GPU-unlock: FP/BF16 instruction issue rate on Nvidia 3000's cards"
date: 2026-10-24T09:58:27Z
slug: 2026-10-25-gpu-unlock-fp-bf16-instruction-issue-rate-on-nvidia-3000-s-cards
source: hackernews
category: ai-community
ai_score: 8.0
tags: "GPU, Nvidia, Performance"
---

# GPU-unlock: FP/BF16 instruction issue rate on Nvidia 3000's cards

**链接**: https://github.com/Zagitta/gpu-unlock

**作者**: fragebogen

**发布时间**: 2026-10-24T09:58:27Z

**采集日期**: 2026-10-25


## AI 摘要

The post details GPU-unlock, a project aimed at improving FP/BF16 instruction rates on Nvidia 3000 series cards, along with community insights on related GPU enhancements.

## AI 评价

The content discusses significant technical developments related to GPU unlocking and performance enhancements, with insightful community comments that add value. The engagement score and number of comments indicate community interest and validation.


## 原文内容


--- Top Comments ---

[Zagitta]: Hey this is my work, although the exploits etc aren&#x27;t my ideas by any means.
This is just a way to wrap the whole thing up in a much less annoying package than having to patch the nvidia driver. I originally got inspired by the CMP90&#x2F;50 windows unlocks that run as standalone UEFI modules that chainloads into the OS. Happy to answer questions!

[RachelF]: A semi related: a patch for those with multiple cards. You can unlock around 20% increased card to card speed on consumer GPUs using this library:  https:&#x2F;&#x2F;github.com&#x2F;aikitoria&#x2F;open-gpu-kernel-modules  The hardware supports it, but then Nvidia disabled it if the driver detects cheaper cards. This bypasses the NVidia slowdown.

[wewewedxfgdf]: There is also the unlock for Nvidia encoding which &quot;removes restriction on maximum number of simultaneous NVENC video encoding sessions&quot;  https:&#x2F;&#x2F;github.com&#x2F;keylase&#x2F;nvidia-patch  So yeah, buy an Nvidia card then download and run all the software needed to make it work to its full potential so Jensen can buy his 500 millionth leather jacket.

[jacquesm]: This one is real, but there are some caveats: - you will need to run your card hotter than you might be comfortable with - the real pay-off (on some cards, apparently, see downthread) requires increasing the maximum power to 450W - This is well above what the stock cooler was designed for so a bit more cooling would help What&#x27;s nice is that you can stack this mod on top of (or rather, below of, this one loads first) the p2p mod that has been out for a while, they don&#x27;t seem to inter...

[Tiberium]: I&#x27;ve tested myself and the results are legit, this is incredible, even if a little risky (it relies on exploiting firmware):  https:&#x2F;&#x2F;github.com&#x2F;Zagitta&#x2F;gpu-unlock&#x2F;blob&#x2F;main&#x2F;docs&#x2F;How%20A...  &gt; Unfortunately for Nvidia the booter is vulnerable to a classic buffer overflow that writes straight into the stack which gives us the ability to execute code via Return Oriented Programming (ROP). Repo for RTX 4090 and 4070 Ti Super:  https:&#x2F;&#x2F;git...