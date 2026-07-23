---
layout: default
title: "AI 风向: 2026-07-23 (EN)"
date: 2026-07-23
lang: en
---

> From 53 items, 9 important content pieces were selected

---

1. [Tao&\#x27;s ChatGPT reveals Jacobian Conjecture counterexample](#item-1) ⭐️ 8.0/10
2. [GigaToken speeds up language model tokenization](#item-2) ⭐️ 8.0/10
3. [Bento: Single HTML File Presentation Tool](#item-3) ⭐️ 8.0/10
4. [Teaching AI Models to Assess Their Confidence](#item-4) ⭐️ 8.0/10
5. [Exploring Malleable Computing via Emacs](#item-5) ⭐️ 8.0/10
6. [AI Reshaping Entrepreneurial Landscape](#item-6) ⭐️ 8.0/10
7. [AI-Powered Underwater Mirror System Secures Funding](#item-7) ⭐️ 8.0/10
8. [Ant Group Launches Commercial Intelligence Body Super Factory](#item-8) ⭐️ 8.0/10
9. [LumiBot raises angel funding for dexterous robot hands](#item-9) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Tao&\#x27;s ChatGPT reveals Jacobian Conjecture counterexample](https://chatgpt.com/share/6a5fdc7a-d6f8-83e8-bbea-8deb42cfed56) ⭐️ 8.0/10

Terence Tao used ChatGPT to discover a counterexample to the Jacobian Conjecture, demonstrating AI&\#x27;s potential in mathematical research. This breakthrough is significant as it challenges a long-standing mathematical conjecture and highlights AI&\#x27;s role in advancing complex scientific problems. The counterexample involves a structured polynomial in three dimensions, showing that not all polynomial maps with a constant Jacobian determinant have inverses.

hackernews · gmays · Jul 22, 17:30 · [Discussion](https://news.ycombinator.com/item?id=49010345)

**Background**: The Jacobian Conjecture is a mathematical problem stating that if a polynomial function from an n-dimensional space to itself has a non-zero constant Jacobian determinant, it must have a polynomial inverse. The conjecture was disproven with a counterexample in dimension three.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jacobian_conjecture">Jacobian conjecture - Wikipedia</a></li>
<li><a href="https://jacobianfun.org/jacobian-explained">The Jacobian counterexample, explained</a></li>
<li><a href="https://www.explainx.ai/blog/what-is-jacobian-conjecture-fable-5-counterexample-explained-2026">Jacobian Conjecture &amp; Fable 5 Counterexample - explainx.ai</a></li>

</ul>
</details>

**Discussion**: Community comments highlight the fascinating use of AI in mathematical research, with users impressed by Terence Tao&\#x27;s ability to guide ChatGPT effectively and the potential of AI in solving complex problems.

**Tags**: `#mathematics`, `#AI`, `#Jacobian Conjecture`, `#ChatGPT`, `#Terence Tao`

---

<a id="item-2"></a>
## [GigaToken speeds up language model tokenization](https://github.com/marcelroed/gigatoken/) ⭐️ 8.0/10

GigaToken is a new tool that significantly accelerates language model tokenization, showcasing innovative optimization techniques. This is significant because it greatly improves the performance of language models, which could lead to faster and more efficient AI applications. GigaToken achieves its speed by optimizing pretokenization using SIMD and minimizing branching, making it faster across various CPUs and tokenizers.

hackernews · syrusakbary · Jul 22, 17:20 · [Discussion](https://news.ycombinator.com/item?id=49010167)

**Background**: Language model tokenization is a critical step in processing text for AI models, where converting text into tokens traditionally relies on slower methods like regex engines.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/marcelroed/gigatoken">GitHub - marcelroed/gigatoken: Language model tokenization at ...</a></li>
<li><a href="https://www.nitin-rachabathuni.com/blog/gigatoken-llm-tokenization-performance-rust">Scaling LLM Infrastructure: Why GigaToken is Solving the ...</a></li>

</ul>
</details>

**Discussion**: Community comments highlight the technical depth of GigaToken, its potential to save energy, and the desire for more widespread adoption.

**Tags**: `#language model`, `#tokenization`, `#optimization`, `#performance`, `#AI`

---

<a id="item-3"></a>
## [Bento: Single HTML File Presentation Tool](https://bento.page/slides/) ⭐️ 8.0/10

Bento is a single HTML file that allows users to edit, present, print, and collaborate on slide decks without installation or cloud login, featuring offline functionality and shared editing. This tool is significant as it introduces a novel approach to web-based presentation tools, reducing dependency on cloud services and offering a more localized and efficient workflow for creators and collaborators. Bento uses reveal.js and other libraries to enable animations and shared editing, with no external data fetching once the file is loaded, and all editing is done locally with an encrypted blind relay for secure collaboration.

hackernews · starfallg · Jul 22, 15:19 · [Discussion](https://news.ycombinator.com/item?id=49008211)

**Background**: Bento is designed to address the limitations of traditional presentation tools that require installation or cloud login, offering a more seamless and accessible solution for creating and sharing presentations directly from a browser.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bento">Bento - Wikipedia</a></li>
<li><a href="https://groups.google.com/g/bitcoindev/c/GTIO4xDX5MU">[BIP Draft] Blind Relay: Stateless Encrypted WebSocket ...</a></li>
<li><a href="https://github.com/previousdolphin/blind-edge">GitHub - previousdolphin/blind-edge: B.E.Chat — End-to-end ...</a></li>

</ul>
</details>

**Discussion**: Community comments highlight the potential of single-file web applications, discuss the benefits of local state management, and explore comparisons with other presentation tools like Slidev.

**Tags**: `#web-technology`, `#presentation-tools`, `#local-state`, `#innovative-software`, `#html5`

---

<a id="item-4"></a>
## [Teaching AI Models to Assess Their Confidence](https://github.com/cactus-compute/cactus-hybrid) ⭐️ 8.0/10

A new method post-trains Gemma 4 E2B to evaluate its confidence in responses, enabling developers to route queries more effectively between on-device and cloud models. This innovation is significant as it enhances the reliability of AI responses, particularly in hybrid AI systems, and offers a more nuanced approach to model confidence scoring. The method uses a 68k parameter probe layer to predict the probability of a response being wrong, with confidence scores ranging from 0 to 1, helping developers decide when to use on-device or cloud models.

hackernews · HenryNdubuaku · Jul 22, 17:56 · [Discussion](https://news.ycombinator.com/item?id=49010782)

**Background**: Gemma 4 E2B is a part of Google&\#x27;s Gemma model family designed for edge device deployments, and the technique builds on post-training methods for model confidence assessment.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/collections/unsloth/gemma-4">Gemma 4 - a unsloth Collection</a></li>

</ul>
</details>

**Discussion**: Community comments explore the technical details of the confidence scoring method, raise questions about the model&\#x27;s ability to assess its own uncertainty, and discuss potential for extracting signals from hidden states.

**Tags**: `#AI/ML`, `#Natural Language Processing`, `#Model Evaluation`, `#On-Device AI`, `#Hybrid AI`

---

<a id="item-5"></a>
## [Exploring Malleable Computing via Emacs](http://yummymelon.com/devnull/malleable-computing-emacs-and-you.html) ⭐️ 8.0/10

The article explores malleable computing, inspired by Emacs, discussing its principles and how it can be implemented in various environments. This concept is significant as it allows for highly customizable and adaptable systems, impacting fields like web development and interpreted languages. The key detail is the use of Emacs Lisp, a dynamic programming language, to enable real-time modifications and evaluations within a running system.

hackernews · kickingvegas · Jul 22, 21:15 · [Discussion](https://news.ycombinator.com/item?id=49013538)

**Background**: Malleable computing refers to systems designed for arbitrary recombination and modification, often seen in dynamic languages like Lisp. Emacs, using Emacs Lisp, exemplifies this by allowing users to extend its functionality on-the-fly.

<details><summary>References</summary>
<ul>
<li><a href="http://yummymelon.com/devnull/malleable-computing-emacs-and-you.html">nfdn: Malleable Computing, Emacs, and You - yummymelon.com</a></li>
<li><a href="https://wiki.xxiivv.com/site/malleable_computing">XXIIVV — malleable computing</a></li>
<li><a href="https://en.wikipedia.org/wiki/Malleability_%28cryptography%29">Malleability (cryptography) - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community comments highlight related projects, such as a web-based interpreted Lisp running in a server with PostgreSQL, and discuss the architecture of malleable systems, comparing them to JavaScript and Git.

**Tags**: `#malleable computing`, `#Emacs`, `#interpreted lisp`, `#web development`, `#customization`

---

<a id="item-6"></a>
## [AI Reshaping Entrepreneurial Landscape](https://36kr.com/p/3907639172027522?f=rss) ⭐️ 8.0/10

AI is transforming entrepreneurship by enabling value creation through AI applications in business processes. This trend is significant as it shifts the focus from technical competition to practical application and commercial value, impacting how startups operate and compete. The FutureTech platform highlights the rise of &\#x27;super individuals&\#x27; using AI, emphasizing the importance of industry-specific knowledge and scenario understanding.

rss · 36氪 · Jul 23, 02:57

**Background**: AI is increasingly entering business processes, requiring companies to integrate AI tools and focus on application value rather than just technical capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnblogs.com/OpenCSG/p/19696217">2026 AI 创业新风口：OPC 独立先锋挑战赛全解析，一人公司如何撬动十亿美元市场 - OpenCSG - 博客园</a></li>
<li><a href="https://opencsg.com/opc-challenge">OPC 独立先锋挑战赛 | OpenCSG</a></li>

</ul>
</details>

**Tags**: `#AI创业`, `#创业范式`, `#AI应用`, `#商业价值`, `#技术创新`

---

<a id="item-7"></a>
## [AI-Powered Underwater Mirror System Secures Funding](https://36kr.com/p/3906474040153220?f=rss) ⭐️ 8.0/10

Deeplore, an AI-driven underwater exploration company, raises seed funding to develop its AI-powered underwater mirror system. This investment highlights the growing potential of AI in underwater exploration, addressing significant gaps in traditional equipment and opening new possibilities for high-value blue ocean markets. Deeplore&\#x27;s system features a native underwater optical design, HUD抬头显示, and on-device AI for marine life recognition, setting new standards for underwater imaging and safety.

rss · 36氪 · Jul 23, 02:30

**Background**: Underwater exploration has traditionally relied on bulky, non-intelligent equipment, limiting user experience. Deeplore aims to change this with AI-driven solutions tailored to潜水爱好者的需求.

<details><summary>References</summary>
<ul>
<li><a href="https://www.163.com/dy/article/L2H1C7UM05118DFD.html">硬氪首发 | 大疆系AI自然探索公司获五源、顺为投资，首创水下光学系统...</a></li>
<li><a href="https://eu.36kr.com/zh/p/3906474040153220">硬氪首发 | 大疆系AI自然探索公司获五源、顺为投资，首创水下光学系统</a></li>

</ul>
</details>

**Tags**: `#AI`, `#underwater exploration`, `#deep tech`, `#innovation`, `#investment`

---

<a id="item-8"></a>
## [Ant Group Launches Commercial Intelligence Body Super Factory](https://36kr.com/p/3907590205085056?f=rss) ⭐️ 8.0/10

Ant Group&\#x27;s digital division introduces a &\#x27;commercial intelligence body super factory&\#x27; with Agentar2.0, integrating AI into business processes and enhancing organizational efficiency. This initiative is significant as it addresses the growing need for AI integration in businesses, offering a scalable solution that can be tailored to various industries. Agentar2.0 comes with nearly 200 pre-installed digital expert templates and hundreds of subscribable, ready-to-use intelligent agent tools.

rss · 36氪 · Jul 23, 02:09

**Background**: The news follows the trend of AI moving from generic applications to specialized, industry-specific solutions, highlighting the importance of vertical AI models.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/ai-code-journal/ai-agents-2-0-how-next-gen-models-are-redefining-development-workflows-2fea84a19046">AI Agents 2.0: How Next-Gen Models Are Redefining Development Workflows | by SemanticEd.Online | AI &amp; Code Journal | Medium</a></li>
<li><a href="https://arxiv.org/abs/2603.04241">[2603.04241] Agentics 2.0: Logical Transduction Algebra for Agentic Data Workflows</a></li>

</ul>
</details>

**Tags**: `#AI`, `#business intelligence`, `#Ant Group`, `#Agentar2.0`, `#WAIC`

---

<a id="item-9"></a>
## [LumiBot raises angel funding for dexterous robot hands](https://36kr.com/p/3907536767833473?f=rss) ⭐️ 8.0/10

LumiBot, a robotics company specializing in dexterous operation solutions, has completed a multi-million yuan angel round, focusing on industrial manufacturing and precision assembly. This funding highlights the growing importance of dexterous robot hands in automating complex tasks and improving precision in industries. LumiBot&\#x27;s Lumi-Tac tactile sensor offers high spatial resolution and force control precision, while its Lumi-Mod motor modules feature active cooling for industrial continuous operation.

rss · 36氪 · Jul 23, 01:12

**Background**: Dexterous robot hands are crucial for robots to perform fine tasks, and LumiBot aims to address the data and engineering challenges in this field.

<details><summary>References</summary>
<ul>
<li><a href="https://www.bilibili.com/video/BV12SLG6HE76/">让机器人指尖“长眼睛”？Lumi-Tac视触觉传感器展示灵巧手指尖上的“黑科... 视触觉+主动散热：拾玥科技如何破解灵巧手量产与数据困局 浙江拾玥科技有限公司 Infrared &amp; UV Sensors (Visualizers) – Lumitek International, Inc. 以“手”驭智，拾玥科技亮相2026杭州人形机器人展，指尖黑科技破局精细... 【LUMIBOTLumi-Tac1】LUMIBOT拾玥科技Lumi-Tac视触觉传感器【行情 报...</a></li>
<li><a href="https://item.jd.com/100325485760.html">【LUMIBOTLumi-Tac1】LUMIBOT拾玥科技Lumi-Tac视触觉传感器【行情 报...</a></li>
<li><a href="http://lumirobot.net/index.php?catid=38">Lumi-Tac视触觉传感器 - 产品技术 - 浙江拾玥科技有限公司</a></li>

</ul>
</details>

**Tags**: `#机器人`, `#灵巧操作`, `#天使轮融资`, `#技术创新`, `#工业自动化`

---