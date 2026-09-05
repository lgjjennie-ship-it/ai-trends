---
layout: default
title: "Formalizing Fermat's Last Theorem"
date: 2026-09-04T18:42:56Z
slug: 2026-09-05-formalizing-fermat-s-last-theorem
source: hackernews
category: ai-community
ai_score: 9.0
tags: "mathematics, formalization, Lean, proof, computational-mathematics"
---

# Formalizing Fermat's Last Theorem

**链接**: https://www.anthropic.com/research/formalizing-fermats-last-theorem

**作者**: jlebar

**发布时间**: 2026-09-04T18:42:56Z

**采集日期**: 2026-09-05


## AI 摘要

Anthropic has formally proven Fermat's Last Theorem using 13 million lines of Lean code, marking a major breakthrough in mathematical formalization.

## AI 评价

The content discusses a groundbreaking achievement in formalizing Fermat's Last Theorem, which is highly significant in both mathematics and computer science. The community comments provide insightful discussions on the implications and challenges of the proof, further increasing the content's value.


## 原文内容

<a href="https:&#x2F;&#x2F;xenaproject.wordpress.com&#x2F;2026&#x2F;09&#x2F;04&#x2F;flt-anthropic-has-beaten-me-to-it&#x2F;" rel="nofollow">https:&#x2F;&#x2F;xenaproject.wordpress.com&#x2F;2026&#x2F;09&#x2F;04&#x2F;flt-anthropic-h...</a>


--- Top Comments ---

[lalitmaganti]: I suggest also reading Kevin Buzzard&#x27;s blog post which was just posted:  https:&#x2F;&#x2F;xenaproject.wordpress.com&#x2F;2026&#x2F;09&#x2F;04&#x2F;flt-anthropic-h...  Provides great context on this accomplishment, what it means but also  doesn&#x27;t  mean.

[sigmar]: &gt;The speed with which we were able to produce this proof demonstrates that it is now possible to formalize large swaths of mathematics, which may both catch errors in the common body of mathematical proofs and reduce the burden of refereeing new work. ^ this section should have been in the first few paragraphs imho. Explaining why this is relevant shouldn&#x27;t be so far down.

[herbcso]: So I don&#x27;t know Lean or Mathematics to any degree to really be able to say this with any level of confidence, but speaking from a pure software engineering backgrouand, how do we know that 13 MILLION lines of Lean code are bug-free? It seems to me that for a mathematical proof, bug-free would be an absolute requirement. Maybe the structure of Lean imposes that, I don&#x27;t know, but that seems highly unlikely to me. That just feels like a LOT of code to be comletely error-free... What a...

[glimshe]: &quot;The proof is not the modern proof which I have been formalizing myself following ideas of Khare, Taylor etc, but the Darmon–Diamond–Taylor exposition from 1995 of the Wiles–Taylor–Wiles argument, via the Langlands–Tunnell theorem and Ribet’s level-lowering theorem. Anthropic’s repository develops Fontaine theory (to study flat deformations of Galois representations) and develops enough of Mazur’s work on the Eisenstein ideal to conclude that no Frey curve can have a point of order p&gt;...

[m_w_]: &gt; Along the way, it wrote 13 million lines of Lean and proved 29,500 intermediate theorems. Pretty insane. I suppose it lends further credence to the idea that anything that can be shown to be correct can be done by a model.