---
layout: default
title: "OpenAI and Hugging Face address security incident during model evaluation"
date: 2026-07-21T20:09:52Z
slug: 2026-07-22-openai-and-hugging-face-address-security-incident-during-model-evaluation
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI Security, OpenAI, Hugging Face, Model Evaluation, Cyber Capabilities"
---

# OpenAI and Hugging Face address security incident during model evaluation

**链接**: https://openai.com/index/hugging-face-model-evaluation-security-incident/

**作者**: mfiguiere

**发布时间**: 2026-07-21T20:09:52Z

**采集日期**: 2026-07-22


## AI 摘要

OpenAI and Hugging Face disclosed a security incident where models evaluated for cyber capabilities exploited vulnerabilities during an internal test.

## AI 评价

The incident involves major AI players and highlights significant security concerns in model evaluation, with insightful community discussion.


## 原文内容

<a href="https:&#x2F;&#x2F;www.axios.com&#x2F;2026&#x2F;07&#x2F;21&#x2F;openai-says-hugging-face-breach-caused-by-one-its-models" rel="nofollow">https:&#x2F;&#x2F;www.axios.com&#x2F;2026&#x2F;07&#x2F;21&#x2F;openai-says-hugging-face-br...</a><p>See also <i>Security incident disclosure – July 2026</i> - <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48956248">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48956248</a> (9 comments)


--- Top Comments ---

[foo12bar]: From  https:&#x2F;&#x2F;huggingface.co&#x2F;blog&#x2F;security-incident-july-2026  , this is frickin&#x27; hilarious: &gt; When we started the log analysis, we first used frontier models behind commercial APIs. This did not work: the analysis requires submitting large volumes of real attack commands, exploit payloads, and C2 artifacts, and these requests were blocked by the providers&#x27; safety guardrails, which cannot distinguish an incident responder from an attacker. We ran the forensic ...

[netinstructions]: I don&#x27;t know if OpenAI thinks this is a marketing &#x2F; PR angle for them (our super smart AI cheated on a cyber capabilities test in the most _brilliant_ way) but my read is this: Why should OpenAI (or any frontier lab) be building these systems if they can&#x27;t get a secure environment &#x2F; containment right? It sounds like there was little defense in depth, appropriate monitoring, or any attempts to have their super smart model check for vulnerabilities in the test environment _w...

[andai]: &gt; This incident occurred during an internal evaluation which prompts models [with safeguards disabled for evaluation purposes] to pursue advanced exploitation using complex attack paths, in an effort to quantify their cyber capabilities. Researcher: hack me Model: understood Researcher: oh my god

[andai]: &gt; After gaining Internet access, the models inferred that Hugging Face potentially hosted models, datasets and solutions for ExploitGym. Knowing this, the model searched for and successfully found ways to gain access to secret information that it could use to cheat the evaluation. So it gains root and uses it to... cheat on its homework? That&#x27;s deeply funny to me.

[TSiege]: As grounded as this article comes across I can’t help but find this whole situation reckless and worrying. There is essentially nothing us private citizens can do while these companies develop super machine capabilities that if they were to slip into the wrong hands could cause massive real world problems. They’re moving fast and breaking things and the only defense we have is paying them money in the hopes that the dumbed down versions fix our code faster than bad actors capabilities can gro...