---
layout: default
title: "DeepSeek v4.1 Flash"
date: 2026-09-10T06:11:05Z
slug: 2026-09-10-deepseek-v4-1-flash
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Machine Learning, Deep Learning, Model Release, Benchmarking"
---

# DeepSeek v4.1 Flash

**链接**: https://twitter.com/deepseek_ai/status/2097930608790167907

**作者**: Liwink

**发布时间**: 2026-09-10T06:11:05Z

**采集日期**: 2026-09-10


## AI 摘要

DeepSeek v4.1 Flash is released with a 552B parameter model, showing significant improvements in benchmark scores.

## AI 评价

The release of DeepSeek v4.1 Flash is a significant development in the field of AI models, with a substantial increase in size and benchmark scores. The community comments are insightful and engaging, discussing the technical details and the impact of the release.


## 原文内容

<a href="https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4.1-Flash" rel="nofollow">https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4.1-Flash</a>


--- Top Comments ---

[kouteiheika]: It&#x27;s so refreshing to see DeepSeek&#x27;s tech report[1] full of juicy details; meanwhile, something like Fable&#x27;s system card[2] is like 70% &quot;safety&quot;, 10% &quot;model welfare&quot; to make sure little Claude isn&#x27;t distressed, and 20% benchmark numbers. [1]:  https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4.1-Flash&#x2F;blob&#x2F;...  [2]:  https:&#x2F;&#x2F;www.anthropic.com&#x2F;claude-fable-5-1-mythos-5-1-system...

[rao-v]: As I also said on Twitter - it really amazes me how fearless Deepseek are. Every single model release is packed with new and crazy clever ideas and somehow, they always commit to training them at near frontier scale. I know everybody wants the tell all story of the clever ideas that were developed over the last ~3 years at Anthropic and OpenAI, but what I really want to thumb through is DeepSeek&#x27;s notebook of &quot;brilliant but didn&#x27;t quite make the cut&quot; ideas. They must be tr...

[revolvingthrow]: Already on HuggingFace:  https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4.1-Flash  The bad news is that the original v4 flash was 284B, which was large but still somewhat reasonable for running locally. This one is 552B so almost twice that, so the huge gains in benchmark scores make sense - it&#x27;s not really flash anymore, imo. I&#x27;ve no idea about actual performance vs benchmaxxing, though deepseek was fairly trustworthy as far as Chinese models go. If that holds (an...

[walrus01]: Looking at the huggingface page, the unsloth people haven&#x27;t finished quantizing it yet, but I&#x27;m sure they&#x27;re active on it right now. It&#x27;ll be interesting to see how the capabilities and benchmark tests compare on system where it can fit in under 512GB of RAM with full context. In terms of coding and command line capabilities I&#x27;m also very interested to see a head-to-head of it vs. qwen 3.8-flash-next Q8 which is something like 190GB of memory used when loaded into lla...

[karimf]: While this is very impressive benchmark-wise, GPT-6 Astra showed us that benchmarks don&#x27;t always correlate 1:1 to intelligence of a model. When Astra launched, I think Artifical Analysis showed that it was on par with GPT-5.6 Sol and lower than Opus or something like that? Then, they updated the scoring. I hope that more open source models, including this model, to be &quot;as good to use&quot; as Astra.