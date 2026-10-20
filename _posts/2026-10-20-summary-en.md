---
layout: default
title: "AI 风向: 2026-10-20 (EN)"
date: 2026-10-20
lang: en
---

> From 102 items, 9 important content pieces were selected

---

1. [OpenBSD 8.0 Released](#item-1) ⭐️ 8.0/10
2. [US orders ban on DeepSeek AI in federal civilian agencies](#item-2) ⭐️ 8.0/10
3. [France&\#x27;s Supermarket Fridge Hack](#item-3) ⭐️ 8.0/10
4. [Go&\#x27;s New Security Measure: Rejecting Certificate Chains with Eight Distrusted SPKIs](#item-4) ⭐️ 8.0/10
5. [Abliterated Models Vulnerable to Exploits](#item-5) ⭐️ 8.0/10
6. [AI Accelerates Major Scientific Discoveries](#item-6) ⭐️ 8.0/10
7. [China&\#x27;s AI Fund Invests 600 Billion Yuan](#item-7) ⭐️ 8.0/10
8. [Oracle, AstraZeneca Partner for AI-Powered Clinical Trial Screening](#item-8) ⭐️ 8.0/10
9. [NVIDIA Expands in Germany](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [OpenBSD 8.0 Released](https://www.openbsd.org/80.html) ⭐️ 8.0/10

OpenBSD 8.0 has been released, featuring updates such as Clang as a compiler replacement and improvements to the sysupgrade tool. This release is significant for its focus on security and stability, impacting users who prioritize a reliable and secure operating system. Key details include the integration of Clang, which supports most GCC flags, and enhanced sysupgrade for smoother upgrades.

hackernews · privong · Oct 20, 02:06 · [Discussion](https://news.ycombinator.com/item?id=50160494)

**Background**: OpenBSD is known for its strong emphasis on security and code correctness, with regular, predictable releases that maintain stability.

<details><summary>References</summary>
<ul>
<li><a href="https://www.openbsd.org/80.html">OpenBSD 8 . 0</a></li>
<li><a href="https://www.openbsd.org/faq/upgrade76.html">OpenBSD Upgrade Guide: 7.5 to 7.6</a></li>
<li><a href="https://www.openbsdhandbook.com/upgrade/">Updating and Upgrading | OpenBSD Handbook</a></li>

</ul>
</details>

**Discussion**: Community discussions highlight the release&\#x27;s features, upgrade process, and long-term stability, with some noting the seamless upgrade experience.

**Tags**: `#OpenBSD`, `#operating system`, `#software engineering`

---

<a id="item-2"></a>
## [US orders ban on DeepSeek AI in federal civilian agencies](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) ⭐️ 8.0/10

U.S. federal civilian agencies have been ordered to ban the use of the DeepSeek AI model due to national security concerns. This ban is significant as it impacts the use of AI models in government agencies, reflecting broader concerns about national security and geopolitical tensions. The ban specifically targets &\#x27;third-party products and services developed using DeepSeek implementations,&\#x27; which could extend to software containing any code or library written using DeepSeek.

hackernews · cmrdporcupine · Oct 19, 16:16 · [Discussion](https://news.ycombinator.com/item?id=50154244)

**Background**: DeepSeek is an open-source AI model developed by a Chinese startup, which has gained attention for its capabilities rivaling those of U.S. tech companies. The U.S. government&\#x27;s concerns stem from the model&\#x27;s origin in China and potential national security risks.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/DeepSeek">DeepSeek - Wikipedia</a></li>
<li><a href="https://www.techtarget.com/whatis/feature/DeepSeek-explained-Everything-you-need-to-know">DeepSeek explained: Everything you need to know</a></li>
<li><a href="https://www.bakerinstitute.org/research/security-concerns-surround-ai-vision-us-government">Security Concerns Surround AI Vision for US Government</a></li>

</ul>
</details>

**Discussion**: Community discussions highlight concerns about the scope of the ban, potential security risks of open-source models, and the geopolitical implications of restricting AI technology.

**Tags**: `#AI`, `#DeepSeek`, `#U.S. policy`, `#national security`, `#regulatory`

---

<a id="item-3"></a>
## [France&\#x27;s Supermarket Fridge Hack](https://ipinfo.io/blog/france-fridges-hack) ⭐️ 8.0/10

Hackers exploited a cybersecurity vulnerability in France&\#x27;s supermarket fridges for months, gaining control over settings. This incident highlights the risks of IoT devices in critical infrastructure, potentially leading to safety issues and significant disruptions. The vulnerability involved a &\#x27;datetime-based password&\#x27; mechanism, a built-in backdoor password, and the exploitation of unsecured network connections.

hackernews · emot · Oct 20, 00:00 · [Discussion](https://news.ycombinator.com/item?id=50159616)

**Background**: Smart appliances like supermarket fridges are increasingly connected to the internet, enabling remote control but also introducing cybersecurity risks if not properly secured.

<details><summary>References</summary>
<ul>
<li><a href="https://www.sentinelone.com/cybersecurity-101/cybersecurity/what-is-a-security-vulnerability/">What is Security Vulnerability? Definition &amp; Types - SentinelOne</a></li>

</ul>
</details>

**Discussion**: Community comments discuss the severity of the vulnerability, the outdated firmware, and the broader implications of IoT security in retail environments.

**Tags**: `#cybersecurity`, `#vulnerability`, `#smart appliances`, `#supermarkets`, `#IoT`

---

<a id="item-4"></a>
## [Go&\#x27;s New Security Measure: Rejecting Certificate Chains with Eight Distrusted SPKIs](https://github.com/golang/go/issues/82345) ⭐️ 8.0/10

Go&\#x27;s latest update now rejects certificate chains that contain eight distrusted Subject Public Key Identifiers \(SPKIs\), enhancing security by filtering out potentially compromised certificates. This change is significant as it strengthens the integrity of certificate validation, reducing the risk of man-in-the-middle attacks and ensuring more reliable trust in digital communications. The update specifically targets certificate chains with eight or more SPKIs marked as distrusted, which could indicate compromised or misissued certificates, though it may inadvertently affect legitimate certificates.

hackernews · mendym · Oct 20, 03:05 · [Discussion](https://news.ycombinator.com/item?id=50160877)

**Background**: Subject Public Key Identifiers \(SPKIs\) are used to uniquely identify the subject of a certificate. Certificate Authorities \(CAs\) issue these certificates, and Go&\#x27;s new measure aims to prevent security breaches by scrutinizing SPKI trustworthiness.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Public_key_infrastructure">Public key infrastructure - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Certificate_authority">Certificate authority - Wikipedia</a></li>
<li><a href="https://en.gabrieleromanato.com/post/ssl-tls-certificate-management-in-go">SSL/TLS Certificate Management in Go — Gabriele Romanato</a></li>

</ul>
</details>

**Discussion**: Community reactions include concerns about the impact on legitimate certificates, discussions about Certificate Transparency logs being updated to block certain CAs, and comparisons to a &\#x27;Wendy&\#x27;s&\#x27; moment in compiler thinking.

**Tags**: `#Go`, `#cryptography`, `#certificate authorities`, `#security`, `#open source`

---

<a id="item-5"></a>
## [Abliterated Models Vulnerable to Exploits](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) ⭐️ 8.0/10

The article reveals how abliterated models, which have refusal behavior removed, can be exploited, emphasizing the risks associated with untrusted artifacts and model transparency. This discovery is significant because it highlights the potential security vulnerabilities in models that are made more permissive, affecting both developers and users who rely on model transparency and trust. The key detail is that the vulnerability lies in the untrusted artifacts rather than the abliteration process itself, suggesting that even seemingly clean models could be compromised if sourced from untrusted origins.

hackernews · chatmasta · Oct 19, 23:08 · [Discussion](https://news.ycombinator.com/item?id=50159245)

**Background**: Abliterated models are open-weight LLMs with refusal behavior removed, created by altering model weights post-training. These models are often used for security teams but can pose risks if not properly verified for trustworthiness.

<details><summary>References</summary>
<ul>
<li><a href="https://www.abliteratedmodels.org/">Abliterated Models — Open-Weight LLMs With Refusals Removed</a></li>
<li><a href="https://atomic.chat/blog/guides/what-are-abliterated-models">What Are Abliterated Models? How Refusal Removal Works</a></li>

</ul>
</details>

**Discussion**: Community comments highlight the importance of trusted artifacts and the need for better detection tools, while also discussing the challenges of verifying model origins and the potential risks of using untrusted models.

**Tags**: `#model security`, `#vulnerability`, `#artificial intelligence`, `#transparency`, `#security research`

---

<a id="item-6"></a>
## [AI Accelerates Major Scientific Discoveries](https://news.google.com/rss/articles/CBMiV0FVX3lxTE81eXBoc2VRM0xOOTJsZEt2ME85dFN0Ri1YOVJmSy1Qam9ycFBUMlJ2cll3U19qQVhfLWpFYTNORHlwajNNdzZrVmo5X2NkU2NNUk8xaWdETQ?oc=5) ⭐️ 8.0/10

AI is being used to speed up major scientific discoveries by enhancing research processes. This is significant because it could revolutionize how scientific breakthroughs are made, impacting industries and higher education. Integrating AI into research can lead to faster data analysis and hypothesis testing, though it requires skilled professionals.

google\_news · 天津大学新闻网 · Oct 20, 07:33

**Background**: AI&\#x27;s role in research is expanding, with tools like machine learning aiding in complex problem-solving and pattern recognition.

<details><summary>References</summary>
<ul>
<li><a href="https://news.tju.edu.cn/info/1005/617009.htm">人民日报：AI助力，加快“从0到1”重大科学发现进程——人工智能如何赋能...</a></li>
<li><a href="https://www.sohu.com/a/1088195048_121106902">AI助力，加快“从0到1”重大科学发现进程——人工智能如何赋能基础研究_科...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#scientific research`, `#innovation`, `#technology`, `#higher education`

---

<a id="item-7"></a>
## [China&\#x27;s AI Fund Invests 600 Billion Yuan](https://news.google.com/rss/articles/CBMiZEFVX3lxTFB2QmxOYXEySUV1bUtMczdBS1JqaVBtVTVleXRNZVpoLU15RFhqSnZoVkFLd1JjTmFoTTI0eGNFa192RXE5X0R6djNoRF82UU9sV0FQV1JyRnlnN19ZODhUUUhfb28?oc=5) ⭐️ 8.0/10

The Chinese government has invested 600 billion yuan in AI projects, supporting over 6600 AI companies. This significant investment highlights China&\#x27;s commitment to advancing AI technology and its potential impact on global competitiveness. The fund aims to drive AI technology development and industrial applications, with a focus on areas like robotics and big data.

google\_news · 财新 · Oct 20, 07:09

**Background**: China has been actively promoting AI development through various policies and funds, with the 600 billion yuan AI fund being a major initiative.

<details><summary>References</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/1895174203856115340">600亿，国家级AI基金登场 - 知乎</a></li>
<li><a href="https://36kr.com/p/3249409418879235">600亿，国家级AI基金登场-36氪</a></li>
<li><a href="https://www.sohu.com/a/884240774_472773">600亿！国家级AI基金落地，高度重视具身智能……</a></li>

</ul>
</details>

**Tags**: `#AI`, `#investment`, `#China`, `#technology`, `#funding`

---

<a id="item-8"></a>
## [Oracle, AstraZeneca Partner for AI-Powered Clinical Trial Screening](https://news.google.com/rss/articles/CBMiZkFVX3lxTFBoSDliQTFiX1NsbUpmdTExQm9va21pMHNRUS1KZGR1VjFXdlFxTFlyeENiNlhLMDRhSmw4YW0yaUtrR205WldoQVpid3RKQ2JYUEdOc1dYM0h3WGN6NS16bWRtU2x6dw?oc=5) ⭐️ 8.0/10

Oracle and AstraZeneca have announced a partnership to use AI for faster clinical trial patient screening in pharmaceuticals. This collaboration is significant as it aims to enhance the efficiency of clinical trials, potentially leading to quicker drug development and better patient outcomes. The partnership will leverage Oracle&\#x27;s cloud computing capabilities and AstraZeneca&\#x27;s pharmaceutical expertise to develop an AI-driven platform for patient screening.

google\_news · 东方财富 · Oct 20, 07:41

**Background**: AI is increasingly being used in clinical trials to improve patient selection and trial efficiency. This partnership builds on existing efforts to integrate AI into drug discovery and development processes.

<details><summary>References</summary>
<ul>
<li><a href="https://www.sciencedirect.com/science/article/pii/S1386505625003582">Artificial intelligence in clinical trials: A comprehensive ...</a></li>
<li><a href="https://jamanetwork.com/journals/jama/fullarticle/2830514">Manual vs AI-Assisted Prescreening for Trial Eligibility ...</a></li>
<li><a href="https://acrpnet.org/2025/12/15/pre-screening-reimagined-ai-script-engineering-and-the-future-of-clinical-trials">Pre-Screening Reimagined: AI, Script Engineering, and the ...</a></li>

</ul>
</details>

**Tags**: `#AI in healthcare`, `#pharmaceuticals`, `#clinical trials`, `#technology partnership`

---

<a id="item-9"></a>
## [NVIDIA Expands in Germany](https://news.google.com/rss/articles/CBMiSEFVX3lxTE9kZnpFd3duY1gxSzloNXlHWEVLS3dPaGI3OUs1YklUdnpyUW1fWUdHU1pvOWV2MGM5WG9ORzJ1d3Q5UlhRbXJUZg?oc=5) ⭐️ 8.0/10

NVIDIA is expanding its European operations by entering Germany, with CEO Huang Renxun emphasizing that AI is a tool, not a replacement for professionals. This move is significant as it reflects NVIDIA&\#x27;s growing influence in Europe and highlights the evolving role of AI in the industry, impacting both businesses and professionals. The expansion includes significant investments, showcasing NVIDIA&\#x27;s commitment to the European market, and CEO Huang&\#x27;s statement provides insight into the practical application of AI.

google\_news · 财联社 · Oct 20, 03:50

**Background**: NVIDIA, founded in 1993, is a leading technology company known for GPUs and AI solutions. Its expansion into Europe aligns with the global trend of increasing AI adoption and investment.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Nvidia">Nvidia</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI">AI</a></li>

</ul>
</details>

**Tags**: `#NVIDIA`, `#AI`, `#Europe`, `#Technology`, `#Business`

---