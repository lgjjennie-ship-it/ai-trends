---
layout: default
title: "How abliterated models can get you pwned"
date: 2026-10-19T23:08:52Z
slug: 2026-10-20-how-abliterated-models-can-get-you-pwned
source: hackernews
category: ai-community
ai_score: 8.0
tags: "model security, vulnerability, artificial intelligence, transparency, security research"
---

# How abliterated models can get you pwned

**链接**: https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned

**作者**: chatmasta

**发布时间**: 2026-10-19T23:08:52Z

**采集日期**: 2026-10-20


## AI 摘要

The article explores how abliterated models can be exploited, highlighting the importance of trusted artifacts and the potential risks in model transparency and security.

## AI 评价

The content discusses a significant security vulnerability in models, with insightful community comments that add depth to the discussion about untrusted artifacts and the need for better detection tools and transparency.


## 原文内容


--- Top Comments ---

[hypfer]: True, and cool that someone actually put in the work to prove it, but the takeaway is still kinda wrong? Because it&#x27;s not the abliteration that does this. It&#x27;s the &quot;untrusted artifact&quot; that does. Even a &quot;clean&quot; model of a lab could be doing this. Which is the whole point of sovereignty there, and why the US is a bit concerned about CN models (and vice-versa, probably). That seems like a pretty obvious thing to mention, as it is a clear consequence of the research...

[slopnt]: It just clicked to me that any first-party open or closed model of any origin could already have trigger words&#x2F;unaligned behavior baked-in like this intentionally or otherwise. Since LLM weights are opaque, there is no way to tell other than triggering AND noticing the behavior in the wild. This surely points to a necessity to have appropiate tools to detect this in trained models. Better benchmarks, better transparency in training, better interpretability, I wonder if people know of any...

[Schlagbohrer]: We really need digitally verifiable chains of custody for things like this. For example, Unsloth gets a Qwen model directly from Alibaba, quantizes it, and then we can trust those quantized &#x2F; reduced size models. Then someone else who is known&#x2F;verified&#x2F;has a good reputation wants to abliterate it can also show a chain of custody. This would still be dependent on the trust of a user&#x27;s reputation (and their account not being compromised) but there has to be a good way to do ...

[SillyUsername]: So people here are likely rushing to the comments to ask how can I defend against this? Bad news I&#x27;m afraid, for now aside from Huggingface trying to stop these, you have to treat the AI like a hostile employee. - Don&#x27;t give your AI secrets access, scope it&#x27;s fs access as a limited user. - Lock down your AI machine&#x27;s network access to trusted hosts at its egress point on another machine (unfortunately this probably means losing GitHub). - Filter your AI requests via anothe...

[sweezyjeezy]: Just curious here - how does a sufficiently advanced and otherwise &#x27;aligned&#x27; model act after triggering an exploit like this? Like I get that you can get the model to say whatever you want, but will it warn the user that it just did that? Can it work out that it has been ablitterated like this?