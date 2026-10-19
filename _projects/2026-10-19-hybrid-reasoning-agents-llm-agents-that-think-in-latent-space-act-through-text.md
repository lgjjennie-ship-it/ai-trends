---
layout: default
title: "Hybrid Reasoning Agents: LLM agents that think in latent space, act through text"
date: 2026-10-18T20:48:14Z
slug: 2026-10-19-hybrid-reasoning-agents-llm-agents-that-think-in-latent-space-act-through-text
source: hackernews
category: ai-community
ai_score: 8.0
tags: "LLM agents, latent space, AI/ML, natural language processing, software engineering"
---

# Hybrid Reasoning Agents: LLM agents that think in latent space, act through text

**链接**: https://arxiv.org/abs/2610.18861

**作者**: allinonai

**发布时间**: 2026-10-18T20:48:14Z

**采集日期**: 2026-10-19


## AI 摘要

A new type of LLM agent that uses latent space for thinking and text for actions is introduced, sparking discussions on its potential and challenges.

## AI 评价

The content introduces a novel approach to LLM agents that think in latent space and act through text, which is highly relevant to AI/ML and software engineering. The community discussion is insightful, with comments touching on technical aspects, safety, and practical testing.


## 原文内容

<a href="https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476" rel="nofollow">https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476</a><p><a href="https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent</a><p><a href="https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridagent" rel="nofollow">https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridag...</a><p>Evaluations: <a href="https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5" rel="nofollow">https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5</a>


--- Top Comments ---

[SubiculumCode]: Isn&#x27;t this what openai is doing, at least in spirit, by running multiple passes through the network before exhibiting thinking tokens? Isn&#x27;t the same issue one of safety and control, because being able to interpret thinking tokens helps u control &#x2F; monitor unwanted behaviors, and multiple passes before writing out the thinking tokens increases their capacity for deception?

[bhattisatish]: The code is available at:  https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent  LLM Models and data:  https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridag...  Evaluations:  https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5

[sinuhe69]: It sounds pretty nice on paper. But I tested the huggingface.co&#x2F;mradermacher&#x2F;hybridagent-8b-agentic-gguf:IQ4_XS with a simple question: &quot;Who is the pope?&quot; and it got stuck in a thinking loop forever and simply could not finish the task. ``` Okay, the user is asking who the pope is. The pope is the leader of the Catholic Church. The current pope is Pope Francis, who became pope in 2013 after Pope Benedict XVI resigned. There&#x27;s no indication of a change since then, so t...

[moeadham]: Authors: Jiaru Zou, Yunzhe Qi, Sirui Chen, Federico Bianchi, Shang Zhu, Pan Lu, Jingrui He, James Zou Having a hard time seeing how the US is going to &quot;win SI&quot; while also making it nearly impossible immigrate.

[amluto]: I wonder how this compares to going all-in: widen the input embedding to fit the output (post-“Hybrid Link”) latent vector  and  a token embedding and pass both through even when in text mode.  After all, you’re paying essentially the full cost of running the latent-mode model while generating text, so why not let it latently reason at the same time? (Or just add the vectors instead of using wider vectors - everyone seems to have good results from munging vectors together with plain addition.)