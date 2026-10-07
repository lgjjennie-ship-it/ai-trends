---
layout: default
title: "OpenTPU – An open-source AI accelerator, developed by AI"
date: 2026-10-06T16:23:25Z
slug: 2026-10-07-opentpu-an-open-source-ai-accelerator-developed-by-ai
source: hackernews
category: ai-community
ai_score: 9.0
tags: "AI accelerator, open source, AI development, hardware innovation, recursive self improvement"
---

# OpenTPU – An open-source AI accelerator, developed by AI

**链接**: https://github.com/FeSens/openTPU

**作者**: fsbonetto

**发布时间**: 2026-10-06T16:23:25Z

**采集日期**: 2026-10-07


## AI 摘要

OpenTPU is an open-source AI accelerator developed by AI, capable of running modern models like Qwen 3.5 and Gemma 4, showcasing significant advancements in AI-driven hardware development.

## AI 评价

The content introduces OpenTPU, an open-source AI accelerator developed using AI, which is a groundbreaking development with high potential impact on the field. The community discussion is insightful and diverse, further validating the importance of the content.


## 原文内容


--- Top Comments ---

[pcarolan]: Really dumb question from a software guy. Why aren&#x27;t the labs burning their frontier models into chips already? Seems like the performance gains and cost per request would be worth it. That said, I understand neither the economics nor the physical challenges to doing this.

[rcarmo]: Well, as long as it doesn&#x27;t start developing anatomically accurate metal skeletons with red glowing eyes...

[athrowaway3z]: I haven&#x27;t really dug into the results yet, but my guess is
that a SOTA model has been able to produce an accelerator that runs a model since around December. The obvious next step is to get enough memory throughput to run that SOTA model itself so that it develop its own hardware. But perhaps the more interesting question is this: Can an AI be given a big FPGA and design a model architecture that takes advantage of the fabric being reconfigurable.

[etienne_l]: You never know what will be remembered as the birth of the singularity. Could be a small github repo like this one, who knows.

[fsbonetto]: After using AI to develop risc-v CPU cores, the same technique was used for developing openTPU. An open source AI inference engine. It&#x27;s able to run most of the modern models like Qwen 3.5, Gemma 4, and many others. The TPU started able to produce only a few tokens per second and trough a recursive self improvement loop got to 80+ tok&#x2F;sec on the smallers models.