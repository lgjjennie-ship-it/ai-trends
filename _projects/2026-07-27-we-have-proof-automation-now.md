---
layout: default
title: "We have proof automation now"
date: 2026-07-26T20:53:26Z
slug: 2026-07-27-we-have-proof-automation-now
source: hackernews
category: ai-community
ai_score: 8.0
tags: "formal verification, software development, programming languages, security, AI/ML"
---

# We have proof automation now

**链接**: https://www.imperialviolet.org/2026/07/26/zstd-lean.html

**作者**: zdw

**发布时间**: 2026-07-26T20:53:26Z

**采集日期**: 2026-07-27


## AI 摘要

The article explores the growing importance of formal verification in software development and its potential future integration into programming languages.

## AI 评价

The content discusses the importance of formal verification in software development and its potential future integration into programming languages. The community comments provide insightful discussions on the costs and benefits of formal verification, as well as its relevance to future programming practices.


## 原文内容


--- Top Comments ---

[m1el]: Self-insert time. I spent some time exploring this topic.
Here&#x27;s my thesis:
Formal verification was expensive. 20x expensive compared to just developing the software, as the author notes.
The cost of finding and developing exploits also was high.
That creates an incentive to put software verification aside, since it solves a relatively small problem, at an extremely high cost. We&#x27;ve seen how Mythos has found more vulnerabilities than the rest of the security industry combined. (you ...

[gz09]: Strongly agree with the author here. The future will belong to programming languages that natively embed theorem proofers into their type systems so LLMs can forego a lot of testing by just validating the implementations they write against the specs with formal proofs. Writing formal specs is probably the main skill a programmer in the future will need to get work done. Verus ( https:&#x2F;&#x2F;github.com&#x2F;verus-lang&#x2F;verus ) is a good start for the rust ecosystem, but it&#x27;s esse...

[Jhsto]: As a meta-comment on the topic, something I have noticed is that there still exists confusion what it means to use theorem provers for projects -- the other day I read a tweet from Paradigm, a crypto-VC now seemingly AI-pilled. Some LP of theirs had made a Lean 4 formalization of the Ethereum&#x27;s virtual machine. The tweet said this would have cost like $150k in API tokens (&quot;would have&quot;, as in, I guess they get theirs for free), and took a week of inference time for an LLM to pro...

[keithwinstein]: This is really cool stuff, and I agree the future is likely to look more like this. I was surprised by the last two paragraphs (&quot;Aside: verified assembly&quot;) -- my understanding was that this future is basically already here. I believe agl&#x27;s colleagues at Google have already deployed some auto-mutated verified assembly versions of some crypto routines, based on the Fiat Crypto + CryptOpt work ( https:&#x2F;&#x2F;arxiv.org&#x2F;pdf&#x2F;2211.10665 ), both involving Andres Erbsen w...

[henryrobbins00]: I&#x27;m very bullish on proof automation as well. I&#x27;m currently researching AI for algorithm design and using automated theorem provers to get formal guarantees for generated algorithms. To make a shameless plug, I&#x27;m working on a Python package called OpenATP [1] to make it easy to benchmark different models&#x2F;harnesses for automated theorem proving. It supports running agents in Docker containers or Modal out of the box. If you try it out, I&#x27;d love to get your feedback! I ...