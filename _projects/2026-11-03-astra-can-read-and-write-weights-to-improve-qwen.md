---
layout: default
title: "Astra can read and write weights to improve Qwen"
date: 2026-11-02T18:21:28Z
slug: 2026-11-03-astra-can-read-and-write-weights-to-improve-qwen
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Language Models, Weight Space Programming"
---

# Astra can read and write weights to improve Qwen

**链接**: https://rikiyat.github.io/blog/weight-space-programming/

**作者**: dbreunig

**发布时间**: 2026-11-02T18:21:28Z

**采集日期**: 2026-11-03


## AI 摘要

Astra, a tool for reading and writing weights to improve Qwen, demonstrates advanced capabilities in weight space programming.

## AI 评价

The content discusses a significant development in weight space programming for improving Qwen, a language model. The community discussion is highly engaged and insightful, providing diverse viewpoints and critiques.


## 原文内容


--- Top Comments ---

[yurimo]: Respectfully to the authors and to everyone here, I ask you to actually read the paper before losing your mind, or at the very least plug it into Claude. It is a cool project but not as nearly as insane as people say. I think the blog writing and subsequent posting overstate the results. Part of my research is in weight space learning. For starters, we have had the ability to edit weights, to generate new weights, to identify weights for a while. Here is an example for larger models as early ...

[vessenes]: This is insane. Astra can, without tooling, determine what games small networks are trained on, can edit the weights of networks directly to improve outcomes, and can hand edit a small qwen model to improve its math skills by like 5x. I&#x27;m shook. If you&#x27;d asked me this morning whether LLMs have native understanding of their weights that is less than human &lt;-&gt; neuron understanding, the same as human or more than human, I would have said &quot;same to less&quot; depending on defi...

[xg15]: And here we go... As others have said, while still absolutely insane, I don&#x27;t find it completely out-of-the-blue surprising. One of the recurring abilities of (current-generation) LLMs seem to be to rapidly grasp very complex systems, where humans would need months or years to reach the same level of expertise. You can see this in the way a coding agent can &quot;understand&quot; and explain sprawling legacy codebases in seconds. You can also see it in the projects that are using them to...

[vanyle]: I don&#x27;t think this is an emergent capability. I think Astra was trained on neural weights data as an attempt by OpenAI to get to recursive self improvement. Something similar happen in early GPT models which had a lot of chess game in standard notation in their training data which made them very good at chess as long as your prompt had the right format. We&#x27;ll see if this attempt at RSI worked.

[NitpickLawyer]: &gt; As a result, Astra spots and fixes a common failure of tiny reasoning models: they loop [13]. When the base model loops, it repeats the same text and rarely reaches an answer (85 of its first 96 practice answers ran to the 32,768-token limit). Astra traced the looping to one direction written by the MLPs of layers 15 and 19, and subtracted that direction from 64 output columns in each (131,072 weights), much like removing a behavior by deleting a single direction from a model’s weights H...