---
layout: default
title: "Inflect-Micro-v2: complete voice in 9.36M parameters"
date: 2026-07-26T00:36:30Z
slug: 2026-07-26-inflect-micro-v2-complete-voice-in-9-36m-parameters
source: hackernews
category: ai-community
ai_score: 8.0
tags: "voice synthesis, text-to-speech, AI, deep learning"
---

# Inflect-Micro-v2: complete voice in 9.36M parameters

**链接**: https://huggingface.co/owensong/Inflect-Micro-v2

**作者**: nateb2022

**发布时间**: 2026-07-26T00:36:30Z

**采集日期**: 2026-07-26


## AI 摘要

Inflect-Micro-v2 is a new voice synthesis model with a small parameter size, receiving positive feedback for its quality and utility.

## AI 评价

The content announces a new version of a voice synthesis model with a significant reduction in parameters, which is highly relevant and innovative. The community discussion is insightful and demonstrates high engagement, with users highlighting both the benefits and limitations of the model.


## 原文内容


--- Top Comments ---

[itake]: Amazing quality for small size, but definitely not that enjoyable to listen to. IMHO, its at about the same quality level of historic TTS tools.

[modinfo]: This is amazing, the quality blow my mind for such small model! I just replaced my old onnx model with yours! here my implementation with speech dispatcher and server:
 https:&#x2F;&#x2F;github.com&#x2F;skorotkiewicz&#x2F;inflect-speechd  thanks for shearing!

[yjftsjthsd-h]: Couple highlights: &gt; Complete local text-to-waveform speech synthesis under 10M parameters. In case, like me, you hoped &quot;complete&quot; voice might mean  both  stt and tts. Not to speak poorly of it, just clarifying. &gt; English only, with one fixed male voice. This is not zero-shot voice cloning. (And then a bunch of statements on limitations that I read as &#x27;quality can be spotty but if you play with it it should be fine&#x27;) But like. In &lt;10M params I&#x27;m not judging:)

[tmaly]: This is impressive.  I wish there were a voice clone option.

[jsomedon]: amazing quality for such small size!

--- From hackernews ---

--- Top Comments ---

[aryehof]: It strikes me that a problem with this analysis is with the modeled example system itself. The assumption that stock should follow immediately preceding demand is valid but typically wrong. Pursuing the intellectual mechanics of a system is obscuring the error of the wrong system! Instead stock levels should take into account lead time, historical seasonal demand, and a subjective value. The observation and order frequency should be in months not days.
While computing allows near “real time” ...

[dognotdog]: In terms of control theory, the order &quot;delay&quot; is actually a simple filter. What leads to bad outcomes is exactly the described scenario, when the control response too fast for the system, overcorrecting and oscillating. Increasing the order filtering dampens the control response.

[milanhbs]: For people interested in the related math, &quot;Nonlinear Dynamics and Chaos&quot; by Steven Strogatz is a great book! Pdfs abound online.

[bloaf]: Reminds me of this piece I read on hacker news over a decade ago:  https:&#x2F;&#x2F;mcfunley.com&#x2F;whom-the-gods-would-destroy-they-first-...

[skybrian]: I think the source of confusion is that the &quot;response delay divisor&quot; isn&#x27;t a delay at all. This parameter is the inverse of amplification. If you dampen a signal more then it will oscillate less.