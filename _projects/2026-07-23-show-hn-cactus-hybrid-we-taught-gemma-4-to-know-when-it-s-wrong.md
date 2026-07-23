---
layout: default
title: "Show HN: Cactus Hybrid: We taught Gemma 4 to know when it's wrong"
date: 2026-07-22T17:56:29Z
slug: 2026-07-23-show-hn-cactus-hybrid-we-taught-gemma-4-to-know-when-it-s-wrong
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Natural Language Processing, Model Evaluation, On-Device AI, Hybrid AI"
---

# Show HN: Cactus Hybrid: We taught Gemma 4 to know when it's wrong

**链接**: https://github.com/cactus-compute/cactus-hybrid

**作者**: HenryNdubuaku

**发布时间**: 2026-07-22T17:56:29Z

**采集日期**: 2026-07-23


## AI 摘要

A new method for post-training Gemma 4 E2B to assess its confidence in responses, helping developers route queries more effectively between on-device and cloud models.

## AI 评价

The content introduces a novel approach to model confidence scoring, which is highly relevant in the field of AI/ML. The community discussion is insightful, with comments exploring the technical details and implications of the work.


## 原文内容

Hey HN, Henry &amp; Roman here from Cactus.<p>A small, on-device model is fast and private, but sometimes wrong, but frontier models are getting expensive pretty fast. So, we post-trained Gemma 4 E2B post-trained to know when it&#x27;s wrong. Every response comes with a confidence score between 0 and 1. Developers can accept the on-device when it&#x27;s high, hand off to a bigger cloud model when it&#x27;s low. By routing only 15-35% of queries to Gemini 3.1 Flash-Lite, Gemma-4-E2B matches Gemini 3.1 Flash-Lite on most benchmarks.<p>- ChartQA: 15-20%<p>- LibriSpeech: 25-30%<p>- MMBench, GigaSpeech, MMAU: 30-35%<p>- MMLU-Pro: 45-55%<p>We were always frustrated by the routing signals hybrid apps rely on: asking the model to rate itself in text (unreliable, and you&#x27;re parsing prose), or token entropy heuristics (barely better than a coin flip in our tests). So we did mechanistic studies on small models, Gemma 4 particularly, and found the hidden state for different layers carry meaningful self-awareness signal for various situations.<p>SO we extended the model with a 68k params probe layer (LayerNorm, low-rank projection, attention pooling, small MLP head) reads one intermediate layer during decoding and predicts p(wrong); confidence = 1 - p(wrong), returned as structured data, never parsed out of the answer text.<p>Across 12 hold-out benchmarks spanning text, vision and audio, the probe averages 0.814 AUROC vs 0.549 for token entropy. The result that convinced us this is real: the probe was trained on zero audio data, yet scores 0.79-0.88 AUROC on four audio benchmarks where entropy is near-random or worse (0.32-0.52). It&#x27;s reading a modality-independent correctness signal from the hidden state, not memorizing patterns from its training data.<p>We published all weights on HuggingFace and provide copy-pase codes to run it on Transformers, MLX, Llama.cpp or Cactus. With Ollama, vLLM, SGLang etc in the works. For llama.cpp we ship a patch series you compile in once (upstreaming is planned). The code is MIT licensed; Gemma model use remains subject to the Gemma terms.<p>GitHub: <a href="https:&#x2F;&#x2F;github.com&#x2F;cactus-compute&#x2F;cactus-hybrid" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;cactus-compute&#x2F;cactus-hybrid</a><p>Weights: <a href="https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;Cactus-Compute&#x2F;cactus-hybrid-6a60da4551074db058e8bb64" rel="nofollow">https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;Cactus-Compute&#x2F;cactus-hyb...</a><p>Some caveats:<p>- The probe scores single-sequence decoding only, up to the first 1024 generated tokens.<p>- Handoff works best when routing per task in a multi-step process, not per step.<p>- Hierarchical routing is still in the works: try on-device, then DeepSeek v4 Flash, before Fable&#x2F;GPT5.5&#x2F;Gemini&#x2F;Muse&#x2F;Grok.<p>- The technique is boutique for each model, we will share each weights as they roll out.<p>These issues are currently being tackled at Cactus and updated weights will be shipped directly into the HuggingFace collection and GitHub repository straight up. Please let us know your thoughts, it helps us find ways to improve the design progressively.<p>Thanks a million!


--- Top Comments ---

[BugsJustFindMe]: &gt;  &quot;post-trained to know when it&#x27;s wrong&quot;  Is it also post-trained to know when it&#x27;s wrong about when it&#x27;s wrong? &gt;  &quot;Every response comes with a confidence score between 0 and 1&quot;  How confident is it in its confidence? Please, I&#x27;m sure that what you&#x27;re doing is very neat and useful, but use other language to describe it. I beg you. You can&#x27;t know when you&#x27;re wrong. You can only know when you&#x27;re unsure or inconsistent. You can ...

[mncharity]: &gt;  the hidden state for different layers carry meaningful self-awareness signal for various situations. Is it plausible to wonder if some developer judgement feels, like maybe &quot;the code I just wrote is clean&#x2F;crufty&quot;, or &quot;things came together smoothly&#x2F;janky&quot;, might have extractable signals in some models? If so, might one create a shopping list of desired signals to check for in a model, as with activation steering concepts, where one checks whether and how har...

[astrobiased]: Is this in any way similar to Goodfire&#x27;s work?  https:&#x2F;&#x2F;www.goodfire.ai&#x2F;research&#x2F;rlfr#

[olafura]: Was actually pulling on a similar thread as I saw announcement so I integrated it just for fun. Have been only running this on my Framework Desktop but should be runnable elsewhere
 https:&#x2F;&#x2F;github.com&#x2F;olafura&#x2F;gemma-4-mic-transcribe

[cacio-e-pepe]: &gt; So we did mechanistic studies on small models, Gemma 4 particularly, and found the hidden state for different layers carry meaningful self-awareness signal for various situations. Neat! Just to make sure I understand - you trained your probe layer to take this hidden state and predict p(wrong)? Curious to learn more. Any more info on your approach (esp the mechanistic study)?