---
layout: default
title: "AI 风向: 2026-09-17 (ZH)"
date: 2026-09-17
lang: zh
---

> 从 99 条内容中筛选出 9 条重要资讯。

---

1. [Nvidia 推出 Rust 原生 GPU 编程](#item-1) ⭐️ 8.0/10
2. [恢复美国驾照的签名密钥](#item-2) ⭐️ 8.0/10
3. [数据备份的复杂性](#item-3) ⭐️ 8.0/10
4. [BITCOS 打破 1.58 位三元 LLM 障碍](#item-4) ⭐️ 8.0/10
5. [编码框架对 AI 代理的影响](#item-5) ⭐️ 8.0/10
6. [纳德拉警告 AI 受控与安全](#item-6) ⭐️ 8.0/10
7. [军用 AI 风险升高](#item-7) ⭐️ 8.0/10
8. [IDC 确认中国电信 AI 全栈能力](#item-8) ⭐️ 8.0/10
9. [中国启动 AI4S 专项赛](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Nvidia 推出 Rust 原生 GPU 编程](https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/) ⭐️ 8.0/10

Nvidia 宣布支持 Rust 原生 GPU 编程，允许开发者在 Rust 中直接编写 GPU 内核并将其原生编译为 PTX。 这一发展具有重要意义，因为它为 CUDA 提供了一种替代方案，可能减少供应商锁定，并为 GPU 编程提供更好的性能和安全性保证。 新功能包括两条在 Rust 中编写 GPU 内核的路径，类似于 CUDA 中可用的两条路径，并利用 Rust 的所有权模型和借用检查器来确保安全性。

hackernews · nonmaskable · 9月16日 11:15 · [社区讨论](https://news.ycombinator.com/item?id=49724881)

**背景**: Rust 是一种系统编程语言，以其性能、类型安全和内存安全特性而闻名。CUDA 是由 Nvidia 开发的一个并行计算平台和编程模型，它使支持 CUDA 的 GPU 能够比传统 CPU 更快地解决复杂的计算问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/">Introducing CUDA Rust: Two Tracks for Writing GPU Kernels | NVIDIA Technical Blog</a></li>
<li><a href="https://dasroot.net/posts/2025/12/rust-cuda-gpu-programming-ml-applications/">Rust + CUDA: GPU Programming for ML Applications · Technical news about AI, coding and all</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一，有些人不喜欢 CUDA，其他人则强调了原生 Rust 内核的潜在好处。观点从担心 Rust 的安全性保证与 GPU 编程要求冲突到对未来的发展持乐观态度不等。

**标签**: `#Nvidia`, `#Rust`, `#GPU Programming`, `#CUDA`, `#Tech`

---

<a id="item-2"></a>
## [恢复美国驾照的签名密钥](https://ryan.science/blog/keys-not-included) ⭐️ 8.0/10

一项调查发现，可以从美国驾照条码中恢复签名密钥，这允许任何人验证签名，但不能伪造它们。 这一发现突出了数字驾照中的重大安全漏洞，可能使身份欺诈成为可能，并引发对数据隐私和公共安全的担忧。 恢复的密钥是公开的，旨在验证签名，而不是创建它们。然而，漏洞在于恶意行为者可能滥用这些密钥。

hackernews · Ryan5453 · 9月17日 03:03 · [社区讨论](https://news.ycombinator.com/item?id=49735930)

**背景**: 驾照条码通常包含由公钥保护的数字签名。这些密钥是公开的，旨在验证驾照的真实性，而不是修改它。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ryan.science/blog/keys-not-included">Keys Not Included - Ryan Fahey</a></li>
<li><a href="https://www.gemini.com/cryptopedia/public-private-keys-cryptography">Public and Private Keys : What Are They? | Gemini</a></li>
<li><a href="https://www.aamva.org/identity/mobile-driver-license-digital-trust-service">Mobile Driver License Digital Trust Service - AAMVA</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了其对银行业等行业的潜在影响，并强调了需要加强安全措施。一些人认为公钥不应被披露，而另一些人则认为这是透明度必要的一步。

**标签**: `#cryptography`, `#driver&\#x27;s licenses`, `#security`, `#public keys`, `#technical deep-dive`

---

<a id="item-3"></a>
## [数据备份的复杂性](https://filipovski.net/2026/09/16/backups-arent-simple.html) ⭐️ 8.0/10

文章强调了数据备份的挑战，突出了需要强大的恢复策略来防止数据丢失。 这一点非常重要，因为数据丢失对个人和组织可能造成严重后果，使得强大的备份解决方案在当今数字时代至关重要。 讨论涵盖了特定的备份方法，如 ZFS 快照和 3-2-1 备份策略，指出恢复过程通常比备份过程本身更为关键。

hackernews · afilipovski · 9月16日 20:27 · [社区讨论](https://news.ycombinator.com/item?id=49732513)

**背景**: 数据备份对于防止数据丢失至关重要，数据丢失可能由硬件故障、网络攻击或人为错误引起。像 ZFS 这样的高级文件系统提供了增强备份效率的功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ZFS">ZFS - Wikipedia</a></li>
<li><a href="https://www.ituonline.com/blogs/btrfs-vs-zfs/">btrfs vs zfs : A Side-by-Side Linux File System Review – ITU Online IT...</a></li>

</ul>
</details>

**社区讨论**: 社区评论反映了个人在数据丢失和备份解决方案方面的不同经历，强调了恢复的重要性，并分享了关于 ZFS 快照和 3-2-1 备份的技术见解。

**标签**: `#backups`, `#data retention`, `#data loss`, `#restoration`, `#ZFS`

---

<a id="item-4"></a>
## [BITCOS 打破 1.58 位三元 LLM 障碍](https://arxiv.org/abs/2609.16338) ⭐️ 8.0/10

一种名为 BITCOS 的新方法将三元 LLM 的位障碍从 1.58 位降低到 1.48 位，提高了效率和硬件集成潜力。 这一突破意义重大，因为它提高了三元 LLM 的计算效率，使其更适合硬件集成，并可能带来更节能的 AI 系统。 BITCOS 利用三元 LLM 中实际权重的分布，其中零占所有权重的最高可达 51.5%，以最小的模型质量影响实现了降低的位障碍。

hackernews · matt\_d · 9月16日 20:59 · [社区讨论](https://news.ycombinator.com/item?id=49732931)

**背景**: 三元 LLM 的设计使其权重仅限于三个值：-1、0 和+1，与传统的二进制模型相比，显著减少了内存和计算需求。像 BITCOS 这样的量化技术旨在进一步优化这些模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/1.58-bit_large_language_model">1.58-bit large language model - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2406.07177">[2406.07177] TernaryLLM: Ternarized Large Language Model</a></li>
<li><a href="https://www.emergentmind.com/topics/ternaryllm">TernaryLLM: Low-Bit Language Models</a></li>

</ul>
</details>

**社区讨论**: 社区评论强调了三元 LLM 对硬件效率的潜在影响以及自适应权重编码的重要性。还有关于直接在内存中使用可变长度编码可行性的讨论，以及与其他量化方法的比较。

**标签**: `#ternary-LLMs`, `#quantization`, `#AI-efficiency`, `#hardware-optimization`

---

<a id="item-5"></a>
## [编码框架对 AI 代理的影响](https://harnesstax.github.io/) ⭐️ 8.0/10

文章探讨了不同的编码框架如何影响 AI 代理，社区评论强调了它们的重要性及差异。 这一主题在软件工程和 AI/ML 领域具有重要意义，因为框架可以极大地影响 AI 代理的性能和可靠性。 社区讨论指出，框架主要防止失败的工具调用和糟糕的编辑，新模型在原生框架工具调用方面表现更好。

hackernews · matt\_d · 9月16日 22:10 · [社区讨论](https://news.ycombinator.com/item?id=49733726)

**背景**: 编码框架是围绕语言模型的软件骨架，包括工具、内存、沙盒和反馈循环，将模型转换为代理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Agent_harness">Agent harness - Wikipedia</a></li>
<li><a href="https://martinfowler.com/articles/harness-engineering.html">Harness engineering for coding agent users</a></li>
<li><a href="https://www.databricks.com/blog/ai-harness">What is an AI Agent Harness? | Databricks Blog</a></li>

</ul>
</details>

**社区讨论**: 评论讨论了需要更好的框架基准测试，使用针对目标模型微调的工具的重要性，以及框架在 AI 代理中的关键作用。

**标签**: `#AI`, `#coding`, `#harnesses`, `#software engineering`, `#AI/ML`

---

<a id="item-6"></a>
## [纳德拉警告 AI 受控与安全](https://news.google.com/rss/articles/CBMiakFVX3lxTE81VzVkYWs0dEZxbGxfUE5zS0RZbXJVUVUtMUk4YkMyaVFyQXBJeUJIcXpqSmNhUDAxYzdXdzI4YTVEU01tcUktUG51X1VvLXhXcFI3T25TUEtJN3VUbTZNSVhtMlo1RmN2OUE?oc=5) ⭐️ 8.0/10

微软 CEO 纳德拉警告，AI 发展必须始终受人类控制，行业需投入充足时间保障安全。 这非常重要，因为它强调了在 AI 中实现人类监督的必要性，以防止潜在的滥用和有害后果。 纳德拉强调了在 AI 系统中实施安全措施和人类干预以降低风险的重要性。

google\_news · 世界互联网大会 · 9月17日 09:14

**背景**: AI 安全是一个跨学科领域，旨在防止 AI 系统发生事故、滥用或其他有害后果，随着 AI 变得越来越先进，这一点越来越相关。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_safety">AI safety - Wikipedia</a></li>
<li><a href="https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-ai-security/ai-agent-security/">AI Agent Security - How To Secure the Agents - Check Point Software</a></li>

</ul>
</details>

**标签**: `#AI`, `#Microsoft`, `#Safety in AI`, `#Human Control`, `#Technology`

---

<a id="item-7"></a>
## [军用 AI 风险升高](https://news.google.com/rss/articles/CBMipAJBVV95cUxOVEFtXzhwbjlXcXVqNTZxWjNCWWc1bFktN1pqd0F0bS1mcUtITko3MVBaV0ZqaW5XS09wWG1CR19zMm5qaWF5eU5UUllIbldwdm9PaHZxejQycXlGRjhSSTV0ZlFjb0VHd00ySHpQNXE0T2t1SE1iM0hhOE1iOWRHeVV1NFRXN1I3b0RBTlBQaVV1eXZTT3dZbjZFX2V2N1dENEdNMUF4RnllNlNqN2ZRREMxcE1jZmMwMHJSbXhvdUZ0T2RzcEJuOG1NMWdhenVTZWdnalJpdWNYRHJIelRuS2F5VGtqcjRtenFwTG5UeDhnNHFfbzlRUVQzelQzdXBGcmlhQ1A4eXRjTFFsS0x1aVNpaElUeFVaLUx0YV8wNUhNUEh60gGkAkFVX3lxTE4wQzlEWDhnVzZSQ0hOM3pJT0p0Q3VvTS15Rmp1YWpRVGtLeHpHM1hQak1GZlRrS0NpU1diYUNzX1M5UjFKOGhyaVZmYkFMN3VYZGotRUdUa0lTOXU2NnNTdTBZRkRXbGgzQmF5T01sYlNDUU52Xy1pdmJiVXVYOHJhSXFYcW43TE01YVlmdTFYXzlJLUdQUG13bzJLV3VxamxldFdvcUR2aWlvaGJCck83QloxSi05SWY3Q0w3alpjV3NmY1JqcG5fQi1hQXU2ejg1VnB1NDhzVUMwd1dlUzlXUlFYazlELTlKUVduU1BZWXc5Qk9EYUxNclVIcEgwWnkxdWg3OTBRUnV3VWxUREhqdVRCcGJxeHJwWHVxdzYxYi05OTU?oc=5) ⭐️ 8.0/10

香山论坛的多国代表因军用 AI 风险增加而呼吁建立秩序。 这具有重要意义，因为它关注了 AI 在战争中的日益增长的担忧，以及全球治理以减轻潜在风险的需要。 呼吁强调国际合作制定军用 AI 的道德准则和法规的必要性。

google\_news · DW.com · 9月17日 08:52

**背景**: 香山论坛是一个年度活动，汇集了来自世界各地的军事战略家和防御专家，讨论安全问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnas.org/publications/congressional-testimony/chinese-military-innovation-in-artificial-intelligence">Chinese Military Innovation in Artificial Intelligence | CNAS</a></li>
<li><a href="https://thestrategybridge.org/the-bridge/2017/6/8/-chinas-quest-for-an-ai-revolution-in-warfare">数字化 – 网络化 – 智能化: China&#x27;s Quest for an AI Revolution in Warfare</a></li>
<li><a href="https://zh.wikipedia.org/zh-hans/%E5%8C%97%E4%BA%AC%E9%A6%99%E5%B1%B1%E8%AE%BA%E5%9D%9B">北京香山论坛 - 维基百科，自由的百科全书</a></li>

</ul>
</details>

**标签**: `#Military AI`, `#Xiangshan Forum`, `#International Security`, `#AI Risks`, `#Order and Governance`

---

<a id="item-8"></a>
## [IDC 确认中国电信 AI 全栈能力](https://news.google.com/rss/articles/CBMiYEFVX3lxTE92aENkMV9haTRwSjdVcENjUXN2WDlpRmZsaFduWE5QdDBEcmpGamc2Zmk5U09vMHctNzFYdnF1MnlzNG1tdkJORTJMTkUxTk9DamtMQUJkSm5sRWhlTEZ5SA?oc=5) ⭐️ 8.0/10

IDC 发布了一份 Agent 评估报告，确认了中国电信先进的 AI 全栈能力。 这份报告具有重要意义，因为它验证了中国电信强大的 AI 能力，这可能影响行业趋势并为竞争对手树立标杆。 评估突出了中国电信全面的 AI 能力，涵盖了从硬件到用户界面的各个方面。

google\_news · 东方财富 · 9月17日 07:05

**背景**: AI 全栈能力是指将所有技术层（包括硬件、模型和用户界面）集成到一个统一系统中的能力。Agent 评估涉及评估执行复杂任务的自主 AI 系统。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/AI_Agent_Evaluation">AI Agent Evaluation</a></li>
<li><a href="https://awslabs.github.io/agent-evaluation/">Agent Evaluation</a></li>
<li><a href="https://www.getmaxim.ai/articles/top-5-ai-agent-evaluation-platforms-in-2026/">Top 5 AI Agent Evaluation Platforms in 2026</a></li>

</ul>
</details>

**标签**: `#AI`, `#Telecommunications`, `#IDC`, `#Agent Evaluation`, `#China Telecom`

---

<a id="item-9"></a>
## [中国启动 AI4S 专项赛](https://news.google.com/rss/articles/CBMiWkFVX3lxTE9SWl9wYlZPOW5iTkpVX2ctWHFRTzU2UXBjSVdRcjdjSjF0Nk9OUG1nMG1aVkMzME1HZVdreWhXUGNTMHhZSDVFR2U1NVNDZnhnRjhDNUZpcE5jQQ?oc=5) ⭐️ 8.0/10

“海聚英才”大赛首次设立 AI4S 专项赛，聚焦使用 AI 解码生命的源代码。 这一举措意义重大，因为它突出了 AI 在科学研究中的日益重要作用，特别是在理解复杂系统如生命科学方面。 该比赛旨在吸引能够将 AI 应用于解决生命科学领域挑战的参与者，展示 AI4S 的潜力。

google\_news · 上观新闻 · 9月17日 03:15

**背景**: AI4S（科学人工智能）是一个新兴领域，结合 AI 和计算方法以加速科学发现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ai4s.github.io/">AI4S 2026 | 8th Workshop on AI &amp; ML for Scientific Applications</a></li>
<li><a href="https://sustainability.ai.cornell.edu/">Cornell AI4S Initiative – Artificial Intelligence for Sustainability</a></li>

</ul>
</details>

**标签**: `#AI4S`, `#AI in Science`, `#Life Sciences`, `#Competition`, `#Innovation`

---