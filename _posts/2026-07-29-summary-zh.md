---
layout: default
title: "AI 风向: 2026-07-29 (ZH)"
date: 2026-07-29
lang: zh
---

> 从 135 条内容中筛选出 13 条重要资讯。

---

1. [UCLA 博士团队创立人形机器人基础模型公司，拿下近 5 亿元天使++轮融资](#item-1) ⭐️ 9.0/10
2. [OpenAI 开源 Codex Security CLI 工具](#item-2) ⭐️ 8.0/10
3. [Wayland 中的多个鼠标光标](#item-3) ⭐️ 8.0/10
4. [Hubble：面向代理的开源笔记应用](#item-4) ⭐️ 8.0/10
5. [Kimi K3 架构概述](#item-5) ⭐️ 8.0/10
6. [Zig 的增量编译内部机制](#item-6) ⭐️ 8.0/10
7. [华辰芯光完成超亿元融资，突破高端激光芯片封锁](#item-7) ⭐️ 8.0/10
8. [Mind Lab 的持续学习模型展示成功](#item-8) ⭐️ 8.0/10
9. [柔性触觉感知企业获新一轮融资](#item-9) ⭐️ 8.0/10
10. [中国 AI-物理集合预报系统用于台风预测](#item-10) ⭐️ 8.0/10
11. [英伟达牵头成立开放安全 AI 联盟](#item-11) ⭐️ 8.0/10
12. [IMF 总裁谈 AI 对全球工作的影响](#item-12) ⭐️ 8.0/10
13. [AI 短剧用户突破 6 亿](#item-13) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [UCLA 博士团队创立人形机器人基础模型公司，拿下近 5 亿元天使++轮融资](https://36kr.com/p/3913213962540164?f=rss) ⭐️ 9.0/10

德塔智能，一家由 UCLA 博士团队创立的公司，近日完成近 5 亿元天使++轮融资，专注于开发通用的人形机器人基础模型 HFMs，推动具身智能在真实工业场景中的应用。 这一发展意义重大，因为它专注于基础的全身智能，弥补了当前人形机器人模型的空白，有潜力革新工业和家庭自动化场景。 该公司正在开发一个原生三维世界引擎，以实现真正的三维理解和交互，这是与现有二维模型的关键区别。

rss · 36氪 · 7月28日 10:38

**背景**: 人形机器人一直是研究的焦点，但实现真正的全身智能一直具有挑战性。德塔智能旨在通过创建一个集感知、规划和控制于一体的基础模型来解决这个问题。

**标签**: `#人形机器人`, `#具身智能`, `#天使投资`, `#HFMs`, `#UCLA`

---

<a id="item-2"></a>
## [OpenAI 开源 Codex Security CLI 工具](https://github.com/openai/codex-security) ⭐️ 8.0/10

OpenAI 已开源 Codex Security，这是一款新的网络安全 CLI 工具，并收到了积极的社区反馈和讨论。 这具有重要意义，因为它通过开源引入了一种新颖的网络安全方法，可能会影响组织检测和修复漏洞的方式。 该工具采用&\#x27;代理&\#x27;思维运作，与传统的静态分析工具不同，并在验证发现后可以提出补丁。

hackernews · bakigul · 7月28日 20:52 · [社区讨论](https://news.ycombinator.com/item?id=49089755)

**背景**: Codex Security 是一款 AI 驱动的网络安全代理，旨在通过理解特定仓库的上下文来检测和修复漏洞，利用了 OpenAI 的 Codex 模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://help.openai.com/en/articles/20001107-codex-security">Codex Security | OpenAI Help Center</a></li>
<li><a href="https://socfortress.medium.com/openai-codex-security-7896113ba110">OpenAI Codex Security . Intro | by SOCFortress | Medium</a></li>
<li><a href="https://www.gend.co/blog/codex-security-ai-appsec-agent">Codex Security : Detect and Patch Vulnerabilities with AI</a></li>

</ul>
</details>

**社区讨论**: 社区成员分享了关于该工具性能的反馈，指出了一些问题，如扫描时间长，需要改进。大家普遍认为该工具具有潜力，但也存在当前限制。

**标签**: `#cybersecurity`, `#open-source`, `#CLI`, `#AI`, `#tool`

---

<a id="item-3"></a>
## [Wayland 中的多个鼠标光标](https://blinry.org/multi-seat-wayland/) ⭐️ 8.0/10

探索在 Wayland 中使用多个鼠标光标的概念，讨论了潜在的益处和挑战。 此功能可以通过允许独立的鼠标光标控制，显著增强多座位桌面用户体验，影响用户和开发者。 关键细节包括可能破坏 GUI 工具包和应用，这些工具包和应用假设一次只有一个窗口处于焦点状态。

hackernews · marvinborner · 7月29日 00:59 · [社区讨论](https://news.ycombinator.com/item?id=49092112)

**背景**: Wayland 是一个为 Linux 设计的现代窗口系统，取代了 X 窗口系统，旨在更安全、更简单。它处理输入设备的方式不同，使得多光标支持成为一个复杂但具有创新性的功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blinry.org/multi-seat-wayland/">State of multi-player Wayland</a></li>
<li><a href="https://en.wikipedia.org/wiki/Wayland_%28protocol%29">Wayland (protocol) - Wikipedia</a></li>
<li><a href="https://www.howtogeek.com/900698/what-is-wayland-on-linux-and-how-is-it-different-from-x/">What Is Wayland on Linux, and How Is It Different From X?</a></li>

</ul>
</details>

**社区讨论**: 社区评论强调了潜在的用例，如分体键盘和独立的指针设备光标，同时讨论了技术挑战和对 GUI 工具包的影响。

**标签**: `#Wayland`, `#multi-seat`, `#desktop UX`, `#compositor`, `#input devices`

---

<a id="item-4"></a>
## [Hubble：面向代理的开源笔记应用](https://www.hubble.md/) ⭐️ 8.0/10

Hubble 是一款面向代理的开源笔记应用，支持 Markdown 并采用代理工程实践。 这款应用具有重要意义，因为它引入了使用开源工具与 AI 代理协作的新方式，可能对 AI 领域的生产力和创新产生影响。 该应用支持 Markdown 并采用代理工程实践，允许用户无缝集成 AI 代理以提高生产力。

hackernews · handfuloflight · 7月29日 00:11 · [社区讨论](https://news.ycombinator.com/item?id=49091730)

**背景**: 代理工程涉及将 AI 代理作为工程系统构建，具有定义的任务分解、上下文管理和人工监督。开源笔记应用已变得更加复杂，提供 Markdown 支持、代理集成等功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.mindstudio.ai/blog/agentic-engineering-vs-vibe-coding-google-spectrum-2">Agentic Engineering vs Vibe Coding: Google&#x27;s Spectrum... | MindStudio</a></li>
<li><a href="https://soleur.ai/blog/vibe-coding-vs-agentic-engineering/">Vibe Coding vs Agentic Engineering for Solo Founders</a></li>
<li><a href="https://websearchapi.ai/blog/andrej-karpathy-from-vibe-coding-to-agentic-engineering">Andrej Karpathy on Agentic Engineering : Why He&#x27;s Never Felt More...</a></li>

</ul>
</details>

**社区讨论**: 社区评论强调了该应用的价值，用户称赞其 Markdown 支持和代理工程实践等特性。一些用户要求在着陆页上提供更多内容，并讨论与传统 EHR 集成解决方案的比较。

**标签**: `#notetaking`, `#open-source`, `#agents`, `#Markdown`, `#agentic-engineering`

---

<a id="item-5"></a>
## [Kimi K3 架构概述](https://sebastianraschka.com/blog/2026/kimi-k3-architecture-notes.html) ⭐️ 8.0/10

文章详细概述了 Kimi K3 架构，这是一种新的 AI/ML 模型，拥有 2.8 万亿参数，并突出了其使用 LatentMoE、Kimi Delta Attention 和 NoPE 的特点。 这种架构具有重要意义，因为它通过引入 NoPE 和 LatentMoE 等创新技术，推动了 AI/ML 领域的发展，可能影响未来的模型开发和性能。 Kimi K3 特别地消除了 RoPE 层，改用 NoPE，这引发了对其有效性和模型在不使用归纳偏差的情况下处理位置信息能力的疑问。

hackernews · ModelForge · 7月28日 15:48 · [社区讨论](https://news.ycombinator.com/item?id=49085698)

**背景**: 位置嵌入对于理解词序至关重要，而 Kimi K3 使用 NoPE 挑战了传统方法，去除了对固定位置信息的依赖。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://sebastianraschka.com/blog/2026/kimi-k3-architecture-notes.html">Kimi K 3 Architecture Notes | Sebastian Raschka, PhD</a></li>
<li><a href="https://www.kimi.com/blog/kimi-k3">Kimi K 3 Tech Blog: Open Frontier Intelligence</a></li>
<li><a href="https://www.eesel.ai/blog/kimi-k3">Kimi K 3 explained: Moonshot&#x27;s open frontier model | eesel AI</a></li>

</ul>
</details>

**社区讨论**: 社区评论集中在 Kimi K3 的可复现性、可用性和技术方面，讨论了其优势，如避免 mHC 和使用 Latent MoE，同时也关注了线性注意力和非位置嵌入的担忧。

**标签**: `#AI/ML`, `#Kimi K3`, `#Architecture`, `#Deep Learning`, `#Positional Embeddings`

---

<a id="item-6"></a>
## [Zig 的增量编译内部机制](https://mlugg.co.uk/posts/incremental-compilation-internals/) ⭐️ 8.0/10

文章探讨了 Zig 的增量编译内部机制，强调了其效率，并与其他语言如 Rust 进行了潜在的比较。 这对于软件工程具有重要意义，因为它提供了关于优化构建时间和理解语言设计对编译效率影响的见解。 Zig 的编译器能够检测单个函数和声明的变化，仅重新编译受影响的代码并直接修补到二进制文件中，这是其增量方法的一个关键细节。

hackernews · garyhtou · 7月28日 15:46 · [社区讨论](https://news.ycombinator.com/item?id=49085666)

**背景**: 增量编译在代码进行小更改时重用之前编译的工作，从而减少整体构建时间。Zig 的设计侧重于快速和增量编译，与 Rust 等语言形成对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mlugg.co.uk/posts/incremental-compilation-internals/">Inside Zig&#x27;s Incremental Compilation - mlugg.co.uk</a></li>
<li><a href="https://byteblog.medium.com/how-i-reduced-my-compile-times-by-50-with-rusts-incremental-compilation-magic-aa4933064308">How I Reduced My Compile Times by 50% with Rust’s Incremental ...</a></li>
<li><a href="https://deepwiki.com/ziglang/zig/3.3-incremental-compilation">Incremental Compilation | ziglang/zig | DeepWiki</a></li>

</ul>
</details>

**社区讨论**: 社区评论强调了 Zig 令人印象深刻的工具链工作，与 Rust 增量编译的比较，以及关于语言设计影响和潜在改进的讨论。

**标签**: `#Zig`, `#Incremental Compilation`, `#Compiler Internals`, `#Software Engineering`, `#Language Design`

---

<a id="item-7"></a>
## [华辰芯光完成超亿元融资，突破高端激光芯片封锁](https://36kr.com/p/3916108853521792?f=rss) ⭐️ 8.0/10

浙江华辰芯光技术有限公司完成新一轮超亿元级人民币融资，计划于 2026 年下半年量产并向全球销售，突破高端激光芯片制造壁垒。 这是具有重要意义的，因为它展示了中国公司在克服高端激光芯片行业的技术壁垒和进口依赖方面取得了重大突破，这可能影响全球供应链和创新。 该公司的 GaAs 核心产品，即 1000mW 974nm/976nm 泵浦激光芯片，已通过严格的内部测试，光电性能与可靠性可与美国同级产品媲美，制造成本约为国外产品的 50%。

rss · 36氪 · 7月29日 05:38

**背景**: IDM（集成器件制造）是半导体行业的一种垂直整合制造模式，涵盖芯片设计、制造、封装、测试和销售。它是一种重资产运营模式，全球仅有三星、德州仪器等少数企业维持这一模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/403874080">半导体行业的idm模式是什么意思 - 知乎</a></li>
<li><a href="https://baike.baidu.com/item/IDM/23427797">IDM（半导体行业垂直整合制造模式）_百度百科</a></li>

</ul>
</details>

**标签**: `#激光芯片`, `#半导体`, `#中国科技`, `#融资`, `#高端制造`

---

<a id="item-8"></a>
## [Mind Lab 的持续学习模型展示成功](https://36kr.com/p/3916202023660929?f=rss) ⭐️ 8.0/10

Mind Lab 推出 Macaron-V1-Preview，这是一个持续学习模型，在发布后两周内就取得了令人印象深刻的性能和快速的商业成功。 这一发展具有重要意义，因为它突出了持续学习在 AI 模型下一阶段的重要性，这正逐渐成为行业关注的重点。 Macaron-V1-Preview 基于 GLM-5.1 构建，带有 5 个 LoRA 专家模块，其性能优于 GLM-5.1 等基础模型，甚至超过了 GPT 5.4 和 Claude Opus 4.6 等高级模型。

rss · 36氪 · 7月29日 04:10

**背景**: 持续学习是 AI 领域的一个关键方向，正如 Richard Sutton 和 Mira Murati 等专家所强调的，模型需要根据经验而不是静态数据来适应和进化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pandaily.com/mindlab-macaron-v1-glm-52-rl-jul2026">Macaron-V1: How RL Made GLM 5.2 Great Again... - Pandaily</a></li>

</ul>
</details>

**标签**: `#AI`, `#continuous learning`, `#Macaron-V1-Preview`, `#Mind Lab`, `#deep learning`

---

<a id="item-9"></a>
## [柔性触觉感知企业获新一轮融资](https://36kr.com/p/3915175290901889?f=rss) ⭐️ 8.0/10

柔性触觉感知企业尧乐科技完成 Pre-A+轮融资，用于开发创新的数据手套，用于真实物理交互数据采集。 此次融资具有重要意义，因为它解决了 AI 和机器人领域触觉数据的缺口，这对于人机交互的发展至关重要。 该公司数据手套将传感功能直接融入织物结构，采用“金属纱线+三明治矩阵”传感器进行精确数据采集。

rss · 36氪 · 7月29日 01:30

**背景**: 柔性触觉感知技术对于开发人机交互至关重要，并对该领域具有重大影响。该行业在为 AI 和机器人获取触觉数据方面面临重大挑战。

**标签**: `#touch perception`, `#data gloves`, `#human-robot interaction`, `#AI`, `#robotics`

---

<a id="item-10"></a>
## [中国 AI-物理集合预报系统用于台风预测](https://news.google.com/rss/articles/CBMiYkFVX3lxTFA5T0pTMWVDMkdrRjVtb1dmelp2ZHkyc3lvVGFwZFZEUWVIR1dhM0pyUTZocmNvdmtQdmtKeWNBTGM1X1p3cldkQTV3RW1aQVRiS2FwS2pCX0VlZzNmZF94VHhn?oc=5) ⭐️ 8.0/10

中国团队研发了 AI-物理集合预报系统，用于科学确定台风路径。 该系统显著提高了灾害预测的准确性，可能挽救生命并减少台风造成的经济损失。 该系统结合 AI 与传统物理模型，以提高台风路径预测的准确性。

google\_news · 中国科学院 · 7月29日 06:23

**背景**: 台风路径预测对防灾减灾至关重要，AI 正越来越多地与传统物理模型结合使用，以提高预报模型的准确性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2606.02508v1">AI and physics-based weather forecasting: A comparative study</a></li>
<li><a href="https://www.science.org/doi/10.1126/sciadv.adu2854">FuXi-ENS: A machine learning model for efficient and accurate ensemble weather prediction | Science Advances</a></li>
<li><a href="https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational">ECMWF’s ensemble AI forecasts become operational | ECMWF</a></li>

</ul>
</details>

**标签**: `#AI`, `#Meteorology`, `#Disaster Prediction`, `#Technology`, `#China`

---

<a id="item-11"></a>
## [英伟达牵头成立开放安全 AI 联盟](https://news.google.com/rss/articles/CBMilAFBVV95cUxOdlUzQTQyY3IyREFJOU9tR294bWhTTkVydWNxcFlMRk5xX2pXNjdaNmZtbVhMSWVBZ3BBNW5NZmE1dVlEQlVudU5uLWp6QjJJNmZzUk5pYU9ENktRM3FPX1RXSk9PbDdObTBpY3gwTEo0Nm5HZm1XakVkaERqaXdwNlZqRDdNNG1ZQVR5cmQ0bTQ0VkdD?oc=5) ⭐️ 8.0/10

英伟达已成立一个包含 37 个成员的开放 AI 安全联盟，旨在创建公司可以独立运行的 AI 防御系统。 该联盟意义重大，因为它应对了日益增长的 AI 安全需求，可能引领行业在实施 AI 安全措施方面发生转变。 该联盟排除了 OpenAI、Anthropic 和 Google 等主要 AI 参与者，专注于可自我管理的 AI 防御系统。

google\_news · 21财经 · 7月29日 05:36

**背景**: 随着 AI 技术的进步，AI 安全问题已成为一个关键关注点，需要强大的防御措施来防止潜在的滥用或意外后果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.coindesk.com/zh/tech/2026/07/27/nvidia-forms-37-member-ai-security-alliance-without-openai-anthropic-or-google">Nvidia成立37人 AI 安 全 联 盟 ，未包括OpenAI、Anthropic或Google</a></li>
<li><a href="https://www.youtube.com/watch?v=4I_O1OuCveo">黄仁勋的 开 放 权重倡议，77... - YouTube</a></li>

</ul>
</details>

**标签**: `#AI`, `#Safety`, `#Alliance`, `#NVIDIA`, `#Industry`

---

<a id="item-12"></a>
## [IMF 总裁谈 AI 对全球工作的影响](https://news.google.com/rss/articles/CBMiYkFVX3lxTE5qck1DUlNHZU93dzZ4b3dqcGp6aFpUZm1NVUItLWFleUltTkl5dlBkQUt5Z0lzTDVJQi1tY0Q3bXpDSjBzeFY0WjRJLUl4YlVKZUpjNktaMXRpYkx6WUloVHVn?oc=5) ⭐️ 8.0/10

IMF 总裁指出，人工智能可能影响全球约 40%的工作，强调帮助年轻人获得必要技能的必要性。 这一点很重要，因为它突出了人工智能对就业的潜在广泛影响，并强调了未来劳动力适应性的技能发展的重要性。 挑战在于确保年轻人具备在人工智能驱动经济中蓬勃发展的技能，这需要有针对性的教育和培训计划。

google\_news · 观点网 · 7月29日 05:24

**背景**: 人工智能正在迅速改变行业，其融入劳动力正在全球范围内重塑就业市场。IMF 的分析反映了关于工作流失和再培训的持续担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://gonglue.us/237751">煤矿里 的 金丝雀？ 人工智能 影 响 就 业 的 六个事实 – 美国攻略</a></li>
<li><a href="https://news.fx168news.com/stock/2607/7479333.shtml">AI 不 是 抢饭碗，而 是 在“增强人类”？ 谷歌重磅研究报告出炉-FX168财经网</a></li>
<li><a href="https://www.workercn.cn/papers/grrb/2026/05/28/6/grrb202605286.pdf">grrb0620260528B</a></li>

</ul>
</details>

**标签**: `#AI`, `#global employment`, `#skills development`, `#IMF`, `#technology impact`

---

<a id="item-13"></a>
## [AI 短剧用户突破 6 亿](https://news.google.com/rss/articles/CBMijAFBVV95cUxObnZPamE1dEg2bjBhZmVtcENvaERRSUhPVFdVM0cycTVwd1lCT3R1UnV5YkctMkE5OF9WOGZvRUplVndGZ0dTXy04N0VtajFOdGstc0pWbm5la25KWjRoeURjLXdqR29tdzNSbVdITXhwcHBHWkc1SXJkMmJEMjNXVURRTHNDOXRfV2RPWg?oc=5) ⭐️ 8.0/10

AI 短剧用户已突破 6 亿，标志着内容生产逻辑的重大转变。 这一里程碑凸显了 AI 在内容创作中的日益影响力，可能重塑媒体的生产和消费方式。 快速增长表明 AI 驱动的内容正成为主流，但其具体影响尚待明确。

google\_news · 21财经 · 7月29日 05:21

**背景**: AI 短剧是一种较新的内容生产形式，利用 AI 高效生成剧本和视频。

**标签**: `#AI`, `#content production`, `#industry shift`, `#short剧`

---