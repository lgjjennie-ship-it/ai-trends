---
layout: default
title: "Novita, StreamLake, etc. are ByteDance Ark wrappers"
date: 2026-11-26T21:59:19Z
slug: 2026-11-27-novita-streamlake-etc-are-bytedance-ark-wrappers
source: hackernews
category: ai-community
ai_score: 8.0
tags: "compute arbitrage, inference wrappers, ByteDance Ark, GPU optimization, AI infrastructure"
---

# Novita, StreamLake, etc. are ByteDance Ark wrappers

**链接**: https://kendell.dev/blog/arkwrapper/

**作者**: leafingensemble

**发布时间**: 2026-11-26T21:59:19Z

**采集日期**: 2026-11-27


## AI 摘要

Inference wrappers like Novita and StreamLake are used to arbitrage compute costs by routing traffic to cheaper GPU providers.

## AI 评价

The content discusses the existence of inference wrappers like Novita and StreamLake, which are wrappers for ByteDance's Ark. It highlights the strategic use of these wrappers to arbitrage compute costs, particularly for accessing pre-emptible GPU hours at low prices. The discussion in the comments provides additional context and examples of similar wrappers, indicating a high level of community interest and engagement.


## 原文内容


--- Top Comments ---

[snake_doc]: There is a reason why these inference wrappers exist, it’s a way to arbitrage compute. Imagine, some team or individual has a way to access pre-emptible GPU hours at some low price. Let’s say that low price is $6&#x2F;GB300&#x2F;hour. If the inference wrapper can achieve demand of some base load of, equivalent of a rack of GB300s (72 GPUs). Essentially, the wrapper can route baseload traffic to the primary provider at market API prices (and make no money). But when the cheap GPUs are availabl...

[leafingensemble]: See also: Venice is a DeepInfra+ wrapper
[ https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50660720 ] Blackfuel ($250m+ in contracts) routes K3 to Openrouter. 
Source: [ https:&#x2F;&#x2F;xnologin.com&#x2F;ThibaultJaigu&#x2F;status&#x2F;212555365159084482... ] Venice removes E2EE models and rewrites docs (routed phala -&gt; chutes). (11&#x2F;26&#x2F;2026) [ https:&#x2F;&#x2F;zoan.space&#x2F;llm-verification&#x2F;venice.html#timeline ] Zero retention AI providers caught logging prompts [ h...

[Palmik]: And wrappers of many others! All in the race to offer as many models as possible with limited compute. Many months ago I used Novita for some testing, and at some point noticed that their Qwen endpoint was returning Alibaba specific error messages. So I sent them an email, asking them about it. At first they tried to deny it, but eventually admitted they routed it to Alibaba. Honestly, if these providers were transparent about &quot;hosted exclusively by us&quot; &#x2F; &quot;may fail over to...

[jmward01]: ZDR is my red line. Period. If that isn&#x27;t the case then I have no words. This is my entire life and livelihood. I am paying to not have someone get access to it. If I didn&#x27;t care I would go to the cheaper direct, steal your tokens, route. If my data is being stolen I honestly don&#x27;t know what to say. If it really is true this is being sent to a company that is looking, and using, my tokens then I hope they burn and I will do everything in my power to make it happen.