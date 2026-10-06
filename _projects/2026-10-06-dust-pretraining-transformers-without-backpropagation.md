---
layout: default
title: "Dust: Pretraining Transformers Without Backpropagation"
date: 2026-10-05T21:15:07Z
slug: 2026-10-06-dust-pretraining-transformers-without-backpropagation
source: hackernews
category: ai-community
ai_score: 8.0
tags: "transformers, pretraining, neural networks, optimization, deep learning"
---

# Dust: Pretraining Transformers Without Backpropagation

**链接**: https://qlabs.sh/research/dust

**作者**: E-Reverance

**发布时间**: 2026-10-05T21:15:07Z

**采集日期**: 2026-10-06


## AI 摘要

A new method for pretraining transformers without backpropagation is introduced, sparking discussion on its potential and limitations.

## AI 评价

The content discusses a significant research breakthrough in transformer pretraining without backpropagation, and the community comments provide insightful analysis and debate, indicating high relevance and engagement.


## 原文内容


--- Top Comments ---

[blt]: Every few years, a derivative-free neural network optimization algorithm gets some hype. I&#x27;d bet my life savings that none of them ever make an impact. Derivative-free optimization can be useful for genuinely discontinuous objectives [1], but common neural network objectives are smooth and&#x2F;or Lipschitz. The gradient is useful. Instead of trying random directions and hoping that one of them is an improvement, it tells you where to go. The more parameters you have, the more useful it ...

[syntacticsalt]: I&#x27;m skeptical as to whether zeroth-order methods really lend themselves to a Bitter Lesson argument. First-order methods don&#x27;t explore the loss landscape optimally, but the loss function tends to be nonconvex, and zeroth-order methods don&#x27;t address that issue head on. Dust smooths, and so do applicable first-order methods. Remove the nonconvexity issue, and I suspect Dust&#x27;s purported advantages evaporate (based on published theoretical work), so it&#x27;s pretty odd to me ...

[usernametaken29]: &gt; There are many interesting open questions. The first is whether, and how, Dust can find better directions than backprop’s first-order gradient Both algorithms are bound by the same Pareto frontier based on the Empirical Risk Minimisation Principle, so they’re already on the same trajectory.
Interestingly backprop is limited by conditioning of the Hessian matrix in order to converge (differentiate correctly). So removing this limitation is actually a great step.
I’m excited to see a comeb...

[polyomino]: Even though this is way more expensive than backprop, could a hybrid approach where you fine tune an existing checkpoint that&#x27;s been backpropped unlock further gains? 
It would be cool to apply this to different stages and see if that affects the learning trajectory

[soltanov]: I would like to see wall clock time, energy, peak memory and downstream quality compared at equal loss. Until the effiency gap closes, this is an interesting research direction.