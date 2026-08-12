---
layout: default
title: "Nvidia Nemotron 3.5 Lightning and NeMo Switchyard"
date: 2026-08-11T19:35:52Z
slug: 2026-08-12-nvidia-nemotron-3-5-lightning-and-nemo-switchyard
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Machine Learning, Nvidia, Efficient Models, NeMo Switchyard"
---

# Nvidia Nemotron 3.5 Lightning and NeMo Switchyard

**链接**: https://blogs.nvidia.com/blog/nemotron-lightning-switchyard-rtx-dgx/

**作者**: droidjj

**发布时间**: 2026-08-11T19:35:52Z

**采集日期**: 2026-08-12


## AI 摘要

Nvidia introduces Nemotron 3.5 Lightning and NeMo Switchyard, focusing on efficient AI model routing and performance.

## AI 评价

The content discusses Nvidia's Nemotron 3.5 Lightning and NeMo Switchyard, which are significant developments in AI model efficiency and routing. The community comments provide diverse insights and discussions, enhancing the value of the content.


## 原文内容


--- Top Comments ---

[kentonv]: Coincidentally I&#x27;ve been playing with small (~30B) self-hostable models for coding tasks today -- specifically plugging them into Cloudflare OS (which I work on) and asking each to build a collaborative whiteboard. I&#x27;m finding that the Mixture-of-Experts (MoE) models (Qwen 3.6-35B, and Nemotron 3.5 Lightning) are, well, terrible at this. They just couldn&#x27;t get the job done at all. Went way off the rails. They are really fast though! Whereas ~30B  dense  models (not MoE) are pre...

[jmward01]: One major consequence of the ramapocalypse, I think, is an even higher focus on small efficient models. I personally believe that the multi-trillion parameter models are fundamentally missing things and the push to smaller, more efficient will drive evolutionary structural changes that will lead to future gains

[thehamkercat]: &gt; NeMo Switchyard, an open source library for smart routing &gt; When deployed, NeMo Switchyard can intelligently direct each request to the most capable and suitable model for the job How do routers like this handle prompt caching when you send the second request? Sticky models per session? but then the second message of that session won&#x27;t be sent to a suitable model, and will only be sent to the same model as previous one.

[docheinestages]: They conveniently decided not to include the Qwen range of models in the Artificial Analysis graph, except the out-of-league Max variant. At least be brave and honest.

[average_bloke]: I would like to propose something: - problem: massive deluge of information because of AI - solution: human beings should adopt a minimalist style of communicating in writing. - e.g. this entire website page can be ten bullet points.