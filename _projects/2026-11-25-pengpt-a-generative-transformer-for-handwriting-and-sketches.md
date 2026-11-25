---
layout: default
title: "PenGPT: A Generative Transformer for Handwriting and Sketches"
date: 2026-11-25T00:54:49Z
slug: 2026-11-25-pengpt-a-generative-transformer-for-handwriting-and-sketches
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Generative Transformer, Handwriting, Sketches, AI, Machine Learning"
---

# PenGPT: A Generative Transformer for Handwriting and Sketches

**链接**: https://greydanus.github.io/2026/11/12/pengpt/

**作者**: smusamashah

**发布时间**: 2026-11-25T00:54:49Z

**采集日期**: 2026-11-25


## AI 摘要

PenGPT is a new Generative Transformer designed for generating handwriting and sketches, emphasizing the importance of data quality over complex architecture.

## AI 评价

The content introduces a novel Generative Transformer for handwriting and sketches, which is a significant development in the field. The community discussion is insightful, with comments highlighting the importance of data quality over architectural cleverness, and the author's previous work is recognized, indicating relevance and credibility.


## 原文内容


--- Top Comments ---

[keyle]: The most interesting part to me is this mention of the Bitter Lesson [1]  &quot;The results are interesting and the project was a pleasure to work on. And yet there was no clever architectural idea behind it. About 80% of my effort went into building the biggest, cleanest datasets possible and doing lots of quality control on them.&quot;  I spend way too much time on trying to out-clever existing solutions, when a clean application of known approaches would serve best. [1]  http:&#x2F;&#x2F;w...

[samgreydanus]: Author here! Given that I only trained these on an 8xH100 it&#x27;s not exactly the most spectacular illustration of the Bitter Lesson. All I can say is that historically I always wanted to impress people with better model architectures or training techniques. This time I just put all my energy into data. Agentic workflows + good open weight vision models + cheap multimodal AI APIs make data quality filtering &#x2F; caption generation really smooth

[jlarks32]: Sam is a ripper. Lovely blog post. Good to see his name float back up. When I was a senior in college working on my eng thesis [1], some of his earlier posts (Scribe: Generating Realistic Handwriting with TensorFlow [2]) were helpful and inspiring to read. [1]:  https:&#x2F;&#x2F;johnlarkin1.github.io&#x2F;pdfs&#x2F;Handwriting-Synthesis-E90...  [2]:  https:&#x2F;&#x2F;greydanus.github.io&#x2F;2016&#x2F;08&#x2F;21&#x2F;handwriting&#x2F;

[NitpickLawyer]: It&#x27;s cool, and on the face of it looks impressive (there&#x27;s a lot of diversity in styles) but I noticed a &quot;tell&quot; that once you see it, is really obvious. Lots of straight lines (Is, Ls, Fs, As, Ms, etc) have wobbles in them that look artificial. There&#x27;s something about lines that this didn&#x27;t capture correctly (or oversampled from someone with wobbly lines).

[thrance]: I don&#x27;t know how I should feel about the fact that pushing the &quot;neat&#x2F;loose&quot; cursor all the way to &quot;loose&quot; still outputs something prettier than my own handwriting.