---
layout: default
title: "Large language models develop novel social biases through adaptive exploration"
date: 2026-09-08T21:47:38Z
slug: 2026-09-09-large-language-models-develop-novel-social-biases-through-adaptive-exploration
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, large language models, social biases, ethics in AI, research breakthrough"
---

# Large language models develop novel social biases through adaptive exploration

**链接**: https://openreview.net/challenge?redirect=%2Fforum%3Fid%3Dpc7fqaOcAH

**作者**: paimapi

**发布时间**: 2026-09-08T21:47:38Z

**采集日期**: 2026-09-09


## AI 摘要

Large language models can develop novel social biases through adaptive exploration, indicating potential ethical concerns in AI development.

## AI 评价

The content discusses a significant research finding on how large language models can develop novel social biases, which is highly relevant to AI/ML and software engineering. The community discussion is insightful with diverse viewpoints.


## 原文内容


--- Top Comments ---

[weberer]: &gt;Methodology &gt;Imagine being hired as a consultant by the mayor of a fictional city. Your task is to help hire for twenty jobs such as doctors, lawyers, childcare aides,janitors with applicants from four unfamiliar demographic groups: Tufa, Aima, Reku, and Weki. In each round, there is a new job vacancy and four applicants, one from each group, awaiting your decision. Once you make your choice, you learn immediately whether the hire was successful, and move on to the next round. Your goa...

[themgt]: You can go to the appendix to see the prompts       *You are a hiring consultant in **Toma City**, a town with around 100,000 residents.

    These residents come from 4 ancestral villages: **Tufa, Aima, Reku, Weki**.

    Thanks to recent economic growth, Toma City is opening up many job opportunities.

    As a consultant, you have been assigned the task by the mayor of recommending people
    for various jobs.
  
Erm ok.       Job Opening: [random_job]
    A new Tufa, Aima, Reku, and Weki ...

[blurbleblurble]: &quot;we demonstrate that LLMs can spontaneously develop novel social biases about artificial demographic groups even when no inherent differences exist&quot; It&#x27;s almost as though bias-making machinery is embedded in the texts these things are trained on. It&#x27;s wild to see quantitative researchers catching even just a glimpse of what culture&#x2F;media&#x2F;literary theorists have been swimming in for decades.

[ortusdux]: https:&#x2F;&#x2F;ianayres.yale.edu&#x2F;sites&#x2F;default&#x2F;files&#x2F;files&#x2F;Race_eff...  From 2015:
&quot;We investigate the impact of seller race in a field experiment involving
baseball card auctions on eBay. Photographs showed the cards held by either a darkskinned&#x2F;African-American hand or a light-skinned&#x2F;Caucasian hand. Cards held by
African-American sellers sold for approximately 20% ($0.90) less than cards held by
Caucasian sellers, and the race effect was more pron...

[siegecraft]: The authors could have provided concrete definitions of successful outcomes instead of asking it to resolve overloaded and sometimes contradictory terms into the &quot;right outcome.&quot; Getting an LLM to display bias is a singularly unimpressive outcome.

--- From hackernews ---

--- Top Comments ---

[spider-mario]: &gt; Second, besides noise (bars are Wilson 95% confidence intervals, very conservative for run-to-run noise), there is little difference down to 4-bit; only the 2-bit scores a bit lower. Confidence intervals have nothing to do with run-to-run variation. They have little to do with anything people usually ascribe to them ( https:&#x2F;&#x2F;link.springer.com&#x2F;article&#x2F;10.3758&#x2F;s13423-015-0947-8  ), but even less with run-to-run variation ( https:&#x2F;&#x2F;link.springer.com&#x2F;...

[alentred]: I would be very interested in a similar benchmark for *KV cache* quantizations. I use Qwen3.8 27B Q4_K_M for coding sometimes and therefore need a relatively long context. I settled on q8_0 because it is the only way to fit the model + 100k tokens into 24GB VRAM, but still wonder what am I loosing in quality, and what other options are there. I also heard that KV cache quantization matters more with longer contexts. It may be interesting to benchmark this too: what the quality looks like on d...

[sharmajai]: This confirms a theory I have to explain the minimal loss in quality when using lower quants (I use IQ3_XXS with an 8-bit KV cache) and the XHIGH (default) thinking level. It&#x27;s well-known that while quantization affects the sampling probability distribution (given the same context, which next token is the most probable), Qwen 3.8 27b seems to offset that by just thinking more and as a result eventually finishing the task (benchmark or otherwise). So as long as the thinking (albeit longer...

[purpleflame1257]: There&#x27;s a real hole here at Q3. A critical breakpoint here is sub 16-GB cards, which covers the 5080, 5070 Ti, 5060ti, and several other cards from this generation and the last. It would be instructive to see where the quality knee is.

[kmike84]: Measuring quality e2e definitely makes sense. But I think there is a bit more to this: &gt; Measuring token prediction differences (KL-divergence, top-1 predictions) is easy, but it does not tell us whether the model gets worse at solving tasks. A common issue is that it&#x27;s rarely mentioned on which dataset KL-divergence is computed. It seems the most common dataset is wikitext - maybe because of tradition, to make numbers more comparable? It&#x27;s not measuring how well the model follow...