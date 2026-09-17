---
layout: default
title: "AI 风向: 2026-09-17 (EN)"
date: 2026-09-17
lang: en
---

> From 99 items, 9 important content pieces were selected

---

1. [Nvidia introduces native GPU programming in Rust](#item-1) ⭐️ 8.0/10
2. [Recovering Signing Keys from US Driver&\#x27;s Licenses](#item-2) ⭐️ 8.0/10
3. [The Complexity of Data Backups](#item-3) ⭐️ 8.0/10
4. [BITCOS Breaks 1.58-bit Barrier for Ternary LLMs](#item-4) ⭐️ 8.0/10
5. [Impact of Coding Harnesses on AI Agents](#item-5) ⭐️ 8.0/10
6. [Nadella warns on AI control and safety](#item-6) ⭐️ 8.0/10
7. [Rising Risks of Military AI](#item-7) ⭐️ 8.0/10
8. [IDC Confirms China Telecom&\#x27;s AI Full-Stack Capabilities](#item-8) ⭐️ 8.0/10
9. [AI4S Competition Launches in China](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Nvidia introduces native GPU programming in Rust](https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/) ⭐️ 8.0/10

Nvidia has announced native GPU programming support in Rust, allowing developers to write GPU kernels directly in Rust and compile them natively to PTX. This development is significant as it provides an alternative to CUDA, potentially reducing vendor lock-in and offering better performance and safety guarantees for GPU programming. The new feature includes two tracks for writing GPU kernels in Rust, similar to the two tracks available in CUDA, and leverages Rust&\#x27;s ownership model and borrow checker for safety.

hackernews · nonmaskable · Sep 16, 11:15 · [Discussion](https://news.ycombinator.com/item?id=49724881)

**Background**: Rust is a systems programming language known for its performance, type safety, and memory safety features. CUDA, developed by Nvidia, is a parallel computing platform and programming model that enables CUDA-enabled GPUs to solve complex computational problems faster than traditional CPUs.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/">Introducing CUDA Rust: Two Tracks for Writing GPU Kernels | NVIDIA Technical Blog</a></li>
<li><a href="https://dasroot.net/posts/2025/12/rust-cuda-gpu-programming-ml-applications/">Rust + CUDA: GPU Programming for ML Applications · Technical news about AI, coding and all</a></li>

</ul>
</details>

**Discussion**: Community reactions are mixed, with some expressing dislike for CUDA and others highlighting the potential benefits of native Rust kernels. Views range from concerns about Rust&\#x27;s safety guarantees conflicting with GPU programming requirements to optimism about future developments.

**Tags**: `#Nvidia`, `#Rust`, `#GPU Programming`, `#CUDA`, `#Tech`

---

<a id="item-2"></a>
## [Recovering Signing Keys from US Driver&\#x27;s Licenses](https://ryan.science/blog/keys-not-included) ⭐️ 8.0/10

An investigation revealed that signing keys from US driver&\#x27;s license barcodes can be recovered, allowing anyone to verify signatures but not forge them. This discovery highlights significant security vulnerabilities in digital driver&\#x27;s licenses, potentially enabling identity fraud and raising concerns about data privacy and public safety. The recovered keys are public and are meant to verify signatures, not to create them. However, the vulnerability lies in the potential misuse of these keys by malicious actors.

hackernews · Ryan5453 · Sep 17, 03:03 · [Discussion](https://news.ycombinator.com/item?id=49735930)

**Background**: Driver&\#x27;s license barcodes often contain digital signatures secured by public keys. These keys are public and are intended to verify the authenticity of the license, not to alter it.

<details><summary>References</summary>
<ul>
<li><a href="https://ryan.science/blog/keys-not-included">Keys Not Included - Ryan Fahey</a></li>
<li><a href="https://www.gemini.com/cryptopedia/public-private-keys-cryptography">Public and Private Keys : What Are They? | Gemini</a></li>
<li><a href="https://www.aamva.org/identity/mobile-driver-license-digital-trust-service">Mobile Driver License Digital Trust Service - AAMVA</a></li>

</ul>
</details>

**Discussion**: Community discussions highlight the potential impact on industries like banking and the need for enhanced security measures. Some argue that public keys should not be disclosed, while others believe it is a necessary step for transparency.

**Tags**: `#cryptography`, `#driver&\#x27;s licenses`, `#security`, `#public keys`, `#technical deep-dive`

---

<a id="item-3"></a>
## [The Complexity of Data Backups](https://filipovski.net/2026/09/16/backups-arent-simple.html) ⭐️ 8.0/10

The article emphasizes the challenges in data backups, highlighting the need for robust restoration strategies to prevent data loss. This is significant because data loss can have severe consequences for individuals and organizations, making robust backup solutions essential in today&\#x27;s digital age. The discussion covers specific backup methods like ZFS snapshots and 3-2-1 backup strategies, noting that restoration is often more critical than the backup process itself.

hackernews · afilipovski · Sep 16, 20:27 · [Discussion](https://news.ycombinator.com/item?id=49732513)

**Background**: Data backups are essential for protecting against data loss, which can result from hardware failures, cyberattacks, or human error. Advanced file systems like ZFS offer features to enhance backup efficiency.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ZFS">ZFS - Wikipedia</a></li>
<li><a href="https://www.ituonline.com/blogs/btrfs-vs-zfs/">btrfs vs zfs : A Side-by-Side Linux File System Review – ITU Online IT...</a></li>

</ul>
</details>

**Discussion**: Community comments reflect diverse experiences with data loss and backup solutions, emphasizing the importance of restoration and sharing technical insights like ZFS snapshots and 3-2-1 backups.

**Tags**: `#backups`, `#data retention`, `#data loss`, `#restoration`, `#ZFS`

---

<a id="item-4"></a>
## [BITCOS Breaks 1.58-bit Barrier for Ternary LLMs](https://arxiv.org/abs/2609.16338) ⭐️ 8.0/10

A new method called BITCOS reduces the bit barrier for ternary LLMs from 1.58 to 1.48 bits per weight, enhancing efficiency and hardware integration potential. This breakthrough is significant as it improves the computational efficiency of ternary LLMs, making them more viable for hardware integration and potentially leading to more energy-efficient AI systems. BITCOS leverages the actual weight distribution in ternary LLMs, where zeros account for up to 51.5% of all weights, to achieve the reduced bit barrier with minimal impact on model quality.

hackernews · matt\_d · Sep 16, 20:59 · [Discussion](https://news.ycombinator.com/item?id=49732931)

**Background**: Ternary LLMs are designed to use weights restricted to three values: -1, 0, and +1, significantly reducing memory and computational requirements compared to traditional binary models. Quantization techniques like BITCOS aim to further optimize these models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/1.58-bit_large_language_model">1.58-bit large language model - Wikipedia</a></li>
<li><a href="https://arxiv.org/abs/2406.07177">[2406.07177] TernaryLLM: Ternarized Large Language Model</a></li>
<li><a href="https://www.emergentmind.com/topics/ternaryllm">TernaryLLM: Low-Bit Language Models</a></li>

</ul>
</details>

**Discussion**: Community comments highlight the potential impact of ternary LLMs on hardware efficiency and the importance of adaptive weight encoding. There is also discussion about the feasibility of using variable-length encoding directly in memory and the comparison with other quantization methods.

**Tags**: `#ternary-LLMs`, `#quantization`, `#AI-efficiency`, `#hardware-optimization`

---

<a id="item-5"></a>
## [Impact of Coding Harnesses on AI Agents](https://harnesstax.github.io/) ⭐️ 8.0/10

The article explores how different coding harnesses affect AI agents, with community comments emphasizing their importance and differences. This topic is significant in software engineering and AI/ML, as harnesses can greatly influence the performance and reliability of AI agents. Community discussions highlight that harnesses mainly prevent failed tool calls and bad edits, with newer models better at native harness tool calls.

hackernews · matt\_d · Sep 16, 22:10 · [Discussion](https://news.ycombinator.com/item?id=49733726)

**Background**: A coding harness is the software scaffolding around a language model, including tools, memory, sandboxes, and feedback loops, that turns a model into an agent.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Agent_harness">Agent harness - Wikipedia</a></li>
<li><a href="https://martinfowler.com/articles/harness-engineering.html">Harness engineering for coding agent users</a></li>
<li><a href="https://www.databricks.com/blog/ai-harness">What is an AI Agent Harness? | Databricks Blog</a></li>

</ul>
</details>

**Discussion**: Comments discuss the need for better harness benchmarks, the importance of using tools fine-tuned on the target model, and the critical role of harnesses in AI agents.

**Tags**: `#AI`, `#coding`, `#harnesses`, `#software engineering`, `#AI/ML`

---

<a id="item-6"></a>
## [Nadella warns on AI control and safety](https://news.google.com/rss/articles/CBMiakFVX3lxTE81VzVkYWs0dEZxbGxfUE5zS0RZbXJVUVUtMUk4YkMyaVFyQXBJeUJIcXpqSmNhUDAxYzdXdzI4YTVEU01tcUktUG51X1VvLXhXcFI3T25TUEtJN3VUbTZNSVhtMlo1RmN2OUE?oc=5) ⭐️ 8.0/10

Microsoft CEO Nadella warned that AI development must remain under human control and the industry needs to invest sufficient time in ensuring safety. This is significant as it addresses the critical need for human oversight in AI to prevent potential misuse and harmful consequences. Nadella emphasized the importance of safety measures and human intervention in AI systems to mitigate risks.

google\_news · 世界互联网大会 · Sep 17, 09:14

**Background**: AI safety is an interdisciplinary field focused on preventing accidents, misuse, or other harmful consequences from AI systems, which is increasingly relevant as AI becomes more advanced.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_safety">AI safety - Wikipedia</a></li>
<li><a href="https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-ai-security/ai-agent-security/">AI Agent Security - How To Secure the Agents - Check Point Software</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Microsoft`, `#Safety in AI`, `#Human Control`, `#Technology`

---

<a id="item-7"></a>
## [Rising Risks of Military AI](https://news.google.com/rss/articles/CBMipAJBVV95cUxOVEFtXzhwbjlXcXVqNTZxWjNCWWc1bFktN1pqd0F0bS1mcUtITko3MVBaV0ZqaW5XS09wWG1CR19zMm5qaWF5eU5UUllIbldwdm9PaHZxejQycXlGRjhSSTV0ZlFjb0VHd00ySHpQNXE0T2t1SE1iM0hhOE1iOWRHeVV1NFRXN1I3b0RBTlBQaVV1eXZTT3dZbjZFX2V2N1dENEdNMUF4RnllNlNqN2ZRREMxcE1jZmMwMHJSbXhvdUZ0T2RzcEJuOG1NMWdhenVTZWdnalJpdWNYRHJIelRuS2F5VGtqcjRtenFwTG5UeDhnNHFfbzlRUVQzelQzdXBGcmlhQ1A4eXRjTFFsS0x1aVNpaElUeFVaLUx0YV8wNUhNUEh60gGkAkFVX3lxTE4wQzlEWDhnVzZSQ0hOM3pJT0p0Q3VvTS15Rmp1YWpRVGtLeHpHM1hQak1GZlRrS0NpU1diYUNzX1M5UjFKOGhyaVZmYkFMN3VYZGotRUdUa0lTOXU2NnNTdTBZRkRXbGgzQmF5T01sYlNDUU52Xy1pdmJiVXVYOHJhSXFYcW43TE01YVlmdTFYXzlJLUdQUG13bzJLV3VxamxldFdvcUR2aWlvaGJCck83QloxSi05SWY3Q0w3alpjV3NmY1JqcG5fQi1hQXU2ejg1VnB1NDhzVUMwd1dlUzlXUlFYazlELTlKUVduU1BZWXc5Qk9EYUxNclVIcEgwWnkxdWg3OTBRUnV3VWxUREhqdVRCcGJxeHJwWHVxdzYxYi05OTU?oc=5) ⭐️ 8.0/10

International representatives at the Xiangshan Forum have called for establishing order due to the increasing risks associated with military AI. This is significant as it addresses the growing concerns about AI in warfare and the need for global governance to mitigate potential risks. The call emphasizes the need for international cooperation to develop ethical guidelines and regulations for military AI.

google\_news · DW.com · Sep 17, 08:52

**Background**: The Xiangshan Forum is an annual event that brings together military strategists and defense experts from around the world to discuss security issues.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnas.org/publications/congressional-testimony/chinese-military-innovation-in-artificial-intelligence">Chinese Military Innovation in Artificial Intelligence | CNAS</a></li>
<li><a href="https://thestrategybridge.org/the-bridge/2017/6/8/-chinas-quest-for-an-ai-revolution-in-warfare">数字化 – 网络化 – 智能化: China&#x27;s Quest for an AI Revolution in Warfare</a></li>
<li><a href="https://zh.wikipedia.org/zh-hans/%E5%8C%97%E4%BA%AC%E9%A6%99%E5%B1%B1%E8%AE%BA%E5%9D%9B">北京香山论坛 - 维基百科，自由的百科全书</a></li>

</ul>
</details>

**Tags**: `#Military AI`, `#Xiangshan Forum`, `#International Security`, `#AI Risks`, `#Order and Governance`

---

<a id="item-8"></a>
## [IDC Confirms China Telecom&\#x27;s AI Full-Stack Capabilities](https://news.google.com/rss/articles/CBMiYEFVX3lxTE92aENkMV9haTRwSjdVcENjUXN2WDlpRmZsaFduWE5QdDBEcmpGamc2Zmk5U09vMHctNzFYdnF1MnlzNG1tdkJORTJMTkUxTk9DamtMQUJkSm5sRWhlTEZ5SA?oc=5) ⭐️ 8.0/10

IDC released an Agent evaluation report, confirming China Telecom&\#x27;s advanced AI full-stack capabilities. This report is significant as it validates China Telecom&\#x27;s strong AI capabilities, which could influence industry trends and set a benchmark for competitors. The evaluation highlights China Telecom&\#x27;s comprehensive AI capabilities, covering everything from hardware to user interfaces.

google\_news · 东方财富 · Sep 17, 07:05

**Background**: AI full-stack capabilities refer to the integration of all layers of technology, including hardware, models, and user interfaces, into a unified system. Agent evaluation involves assessing autonomous AI systems that perform complex tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/AI_Agent_Evaluation">AI Agent Evaluation</a></li>
<li><a href="https://awslabs.github.io/agent-evaluation/">Agent Evaluation</a></li>
<li><a href="https://www.getmaxim.ai/articles/top-5-ai-agent-evaluation-platforms-in-2026/">Top 5 AI Agent Evaluation Platforms in 2026</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Telecommunications`, `#IDC`, `#Agent Evaluation`, `#China Telecom`

---

<a id="item-9"></a>
## [AI4S Competition Launches in China](https://news.google.com/rss/articles/CBMiWkFVX3lxTE9SWl9wYlZPOW5iTkpVX2ctWHFRTzU2UXBjSVdRcjdjSjF0Nk9OUG1nMG1aVkMzME1HZVdreWhXUGNTMHhZSDVFR2U1NVNDZnhnRjhDNUZpcE5jQQ?oc=5) ⭐️ 8.0/10

The &\#x27;海聚英才&\#x27; competition has introduced an AI4S专项赛, focusing on using AI to decode the source code of life. This initiative is significant as it highlights the growing role of AI in scientific research, particularly in understanding complex systems like life sciences. The competition aims to attract participants who can apply AI to solve challenges in life sciences, showcasing the potential of AI4S.

google\_news · 上观新闻 · Sep 17, 03:15

**Background**: AI4S \(Artificial Intelligence for Science\) is an emerging field that combines AI and computational methods to accelerate scientific discovery.

<details><summary>References</summary>
<ul>
<li><a href="https://ai4s.github.io/">AI4S 2026 | 8th Workshop on AI &amp; ML for Scientific Applications</a></li>
<li><a href="https://sustainability.ai.cornell.edu/">Cornell AI4S Initiative – Artificial Intelligence for Sustainability</a></li>

</ul>
</details>

**Tags**: `#AI4S`, `#AI in Science`, `#Life Sciences`, `#Competition`, `#Innovation`

---