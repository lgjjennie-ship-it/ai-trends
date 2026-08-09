---
layout: default
title: "DeepMind's WeatherNext model achieves breakthrough forecasting cyclones"
date: 2026-08-08T09:18:50Z
slug: 2026-08-09-deepmind-s-weathernext-model-achieves-breakthrough-forecasting-cyclones
source: hackernews
category: ai-community
ai_score: 9.0
tags: "AI, weather forecasting, DeepMind, cyclones, Graph Neural Networks"
---

# DeepMind's WeatherNext model achieves breakthrough forecasting cyclones

**链接**: https://deepmind.google/blog/weathernext-ai-model-achieves-breakthrough-in-forecasting-cyclones/

**作者**: bhavansig

**发布时间**: 2026-08-08T09:18:50Z

**采集日期**: 2026-08-09


## AI 摘要

DeepMind's WeatherNext model achieves a breakthrough in forecasting cyclones using advanced AI techniques.

## AI 评价

The content discusses a groundbreaking AI model by DeepMind for cyclone forecasting, which is highly significant in the field of AI and weather science. The community comments are insightful and demonstrate high engagement with the topic.


## 原文内容


--- Top Comments ---

[tcumulus]: Everything in AI seems to be focused on LLMs lately. But in my opinion, powerful problem-specific models like this are even more interesting. The SOTA AI models used in weather forecasting are already outperforming the classic NWP models while being orders of magnitude more efficient (inference). Most are based on multi scale (hierarchical) Graph Neural Networks, an architecture which is not often talked about. The original Graphcast paper is worth a read if you think this is interesting:  ht...

[fcanesin]: Maybe was this that was the last drop for Sundar. Demis: &quot;I have a new amazing breakthrough&quot; Sundar: &quot;Great! We really need a answer to Sol and Fable&quot; Demis: &quot;They are completely owned in typhoon forecasting&quot;

[jen729w]: I just discovered typhoon&#x2F;cyclone predictions and they&#x27;re insane. I get mine via  https:&#x2F;&#x2F;zoom.earth  (whose iPhone app is terrific). Here&#x27;s a selection from Typhoon Dolphin, currently sitting off the east coast of China.       Dolphin continues its slow, trochoidal Z motion, generally heading westward deeper into the East China Sea. Over the past 12 hours, the system completed another cyclonic loop and has decelerated, exhibiting continued meandering prior to establi...

[dgellow]: This is really cool, please more of this from the AI folks! That’s way more impactful and interesting than another coding agent

[bhavansig]: From the tagline in the article: &quot;WeatherNext enables accurate cyclone forecasts that can give an extra day of warning. Now we are open sourcing the model.&quot;

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMijwJBVV95cUxPTXNual9lOGwwTjVTRENpbFN5UGZNZzVReG9qWjJvX1pFcGRfNTFPbmxmYWN1S3M1c1MyUXhtTXM3Y1FnWTBNRVluSHZNYjBZZTlqSmdyei1FWjd3YUFNdDBHSlJQVDJUcUR5Y1pRM0RpUlhXTHVMNmpLRnhvOTYwRmFEMjFrclRfcFZuQzBTUnlnalZqd0xPZkNiS2xyYkNORkhseDRZX1BZanNHenhEdGVWNWNUREwyYlVCTDRpblB2Wk5kNmNGenRUbU5hZ2FBbzdNUDAyYjdhZ0Npelhqb2Q0RzlTb1RaM2l3Q1NiMjVPbkw1MEszODNPSFIzNWVIU2t5TUdfTlFRNEI5ek0w?oc=5" target="_blank">首个全国产10万卡AI超集群投用！专家：每秒峰值算力相当于全人类持续计算200年</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From hackernews ---

--- Top Comments ---

[Narishma]: &gt; Hand-written real-mode 8086. No C, no linker, no runtime library. More like hand-prompted...

[LeoPanthera]: It&#x27;s funny how virtually everyone on HN is using AI to write code and simultaneously dismisses all interesting new software as written by AI.

[adrianmonk]: &gt;  The graphical operating system that could have been for the IBM XT  Visi On[1] was a graphical operating system for the IBM PC that actually existed as a commercial product, though definitely not a very successful one. It was made by VisiCorp, the same company that created VisiCalc (the first spreadsheet for a personal computer). It was demoed at COMDEX in 1982, before the Apple Lisa was released. It came out after the Lisa but slightly before the Macintosh. Here&#x27;s their promotiona...

[baud9600]: This is great - It’s almost as impressive as the “GOS” written for Atari 8-bit running on 6502 at 1.79 MHz. Visually it’s almost identical but has a nicer font. The specs are somewhat similar with 16 task slots, calculator app and task manager, serial mouse support (ST mouse) and Atari’s hardware sprites helping with some of the graphics. The XOR window frame is the same idea. Amazingly, Atari GOS runs in 128K of RAM! One has to admire the work and inventiveness in these projects. See descrip...

[orbital-decay]: Beveled-buttons Minesweeper (first appeared in Win 3.11 IIRC) running on a preemptive 8086 OS with a bootleg System 1&#x2F;2&#x2F;3 interface looks absolutely cursed.

--- From hackernews ---

--- Top Comments ---

[manbash]: &gt; Instead of one row per item with a quantity column, we use one row per sellable unit. An item with 10 units has 10 rows. &gt; But one row per unit for all inventory would break down at scale—an item with 50,000 units across 10 locations would mean 500,000 rows, and the reserve query would slow as it scans through them. Instead, we maintain a bounded pool of available rows, capped at 1,000 per item&#x2F;location combination. Reservations consume rows from this pool; a replenishment proces...

[isignal]: It seems there could be a simpler solution. 1. Deduct the reservation from the inventory when the user starts to order, but in the same txn also maintain a separate row for the in progress order flow.
2. If the order flow is aborted or times out have a background process that returns these to the inventory. That seems simpler than this approach and involves no locking. Though their presented approach is also reasonable, there must be some reason not to choose a simpler flow. It is not that di...

[mrloopex]: This is absolutely fascinating. I enjoy real life stories like this. I went to a Node meetup in 2013 when Target had just switched to Node from PHP and it was a similar experience to see their metrics and hear their strategy.

[bijowo1676]: not the best design to have 1000 rows for each shop*SKU combination. If a candidate proposed this solution during Shopify&#x27;s System Design interview, i doubt he would be vetted for Senior+ position. Instead of having 1000 rows per shop*SKU, why not just have one row per shopping cart*SKU? That way a single row would represent a single cart, and will hold info of multiple items of the same SKU. No need a cludge with 1000 rows limit and replenishment process. Instead of dealing with N rows,...

[firasd]: Makes sense... if you are counting something in MySQL and now your counter is in Redis that&#x27;s already strange But I guess the point is that even in the MySQL scenario the &#x27;reserved_quantities&#x27; is almost like a temporary table so either way is not the &#x27;Real&#x27; inventory

--- From hackernews ---

--- Top Comments ---

[OscarCunningham]: By the same author:  https:&#x2F;&#x2F;mathstodon.xyz&#x2F;@andrewt&#x2F;115056697540191327

[zahrevsky]: You can also run animations in QR codes:  https:&#x2F;&#x2F;cgv.cs.nthu.edu.tw&#x2F;Projects&#x2F;Recreational_Graphics&#x2F;Ha...  So, technically, you can run Doom inside a QR code?

[mentat]: This made me wonder if you could do it with color and apparently you can:  https:&#x2F;&#x2F;1mentat.github.io&#x2F;qr-code-shenanigans&#x2F;

[Zecc]: I recognize the domain name from playing some of his daily puzzles, namely Ronin and Cell Tower.  https:&#x2F;&#x2F;www.andrewt.net&#x2F;puzzles&#x2F;

[jmusall]: Coincidentally came across this after reading a comment [1] under the recent post on _for-sale DNS records, visiting milk.com and scrolling through the owner&#x27;s  Mastodon [1]  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49224882

--- From hackernews ---

--- Top Comments ---

[equinumerous]: Nice, I&#x27;ve been waiting for something like this for years. Meanwhile the gaming scene on linux has been getting better slowly thanks to Valve and friends... but being able to boot into a Windows VM with graphics acceleration was previously a pain on Linux machines that only have a single discrete GPU - I&#x27;d wonder whether a solution like this would work with VirtualBox, or only on QEMU.

[paulryanrogers]: Does this mean DX1-10 are also supported? I&#x27;ve been struggling to play some DX3-7 games because of VirtualBox and VMware limitations and Win10+ backward compatibility gaps. Article is quite long and technical, so it wasn&#x27;t clear to me. That said, still great to hear Windows guests are getting some attention, especially from a long lived project that&#x27;s proven it&#x27;s not going anywhere.

[mutkach]: That’s like (at least) third GPU-related project named Triton

[jamesu]: Pretty cool to finally have a decent open 3d solution for windows vms. Now if only someone made an opengl driver for older intel macosx vms...

[anonymousiam]: Also covered here:  https:&#x2F;&#x2F;www.phoronix.com&#x2F;news&#x2F;Triton-DirectX-11-QEMU-Driver

--- From hackernews ---

--- Top Comments ---

[eigenblake]: Like some others, I also built this myself. Overly simply, with tmux, a memory tree, and handoff files and an orchestrator. And yet for how simple it was, it was so effective at minimizing the amount of duplicate context. It&#x27;s like having shared specialist subagents who source and derive important shared knowledge from separate threads. It&#x27;s useful because some skills just take too much of a token penalty to invoke and a single shared persistent session just lets that issue melt awa...

[juanre]: I built a general version of this, with global addresses and messaging between any terminal-based agent + MCP for browser agents. OSS if you want to run your own server at  https:&#x2F;&#x2F;github.com&#x2F;awebai&#x2F;aweb  and hosted version at  https:&#x2F;&#x2F;aweb.ai

[andai]: I was reading about the HF hack and one of the first thing the GPT swarm did was build a messaging system for themselves. This reminded me of that. (Also of how weirded out I was by Moltbook when it came out. Time flies!) Unrelated: when my Claude&#x2F;Codex finishes cooking (or needs my attention), it pings a local HTTP endpoint that plays a frog sound on my laptop. I found this massively boosts quality of life.

[Alifatisk]: I wish there was a clean way to compact the conversation into a prompt with all necessary context for a new fresh conversation.

[Cyuonut]: I have built this with Claude as a script, but it can also message other models and get responses from them, and throughout my fleet of Linux machines via Tailscale. It&#x27;s been mostly very useful, although occasionally you have to step in and interrupt if they start going the wrong way.

--- From hackernews ---

--- Top Comments ---

[anticorporate]: Rather than the Hackaday article, which doesn&#x27;t add anything to the original, here&#x27;s Jeff&#x27;s actual video:  https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=A2B7oI0FYqo  and post:  https:&#x2F;&#x2F;www.jeffgeerling.com&#x2F;blog&#x2F;2026&#x2F;excited-for-intel-eff...

[3eb7988a1663]: &gt; no headphone jack
  
I am fully old man screaming at the clouds here, but what does this cost for Dell to include? I insist on a wired headset - telecommunications already barely works, I don&#x27;t want to add wireless+battery problems into the mix.

[bhouston]: The improved efficiency is great! The Apple Neo was still 2x faster for graphics and around 1.4x faster for single core cpu.  And remember the Apple Neo is running an iPhone CPU that is much slower than the M series. It is strange that this chip is so crazy efficient though. I would love to know the details of exactly why it is?  It seems like some new tech or process? I do want 1.5x battery life for free out of my next laptop. Who wouldn’t?

[therealmarv]: In Germany the Dell XPS 13 2026 is 56% more expensive (over 1000 Euros) than the MacBook Neo (below 700). So the claim does not hold World wide, maybe only in US on local prices.

[dimask]: Nice and organised work! My only reservation wrt the core of it is that it tests the cpus on a matrix operations task, and power efficiency in this case refers specifically to doing matrix operations. This is fine if that&#x27;s the kind of task one wants to optimise for, but it does not necessarily translate to general energy efficiency for a broader spectrum of tasks that most people may do most of the time. And thus, if one wants to optimise for matrix operations, wouldn&#x27;t it make sen...

--- From hackernews ---

--- Top Comments ---

[rahen]: The author has also published a Setun-70 emulator (a Soviet ternary computer rather than a binary one):  https:&#x2F;&#x2F;github.com&#x2F;Zaneham&#x2F;setun70-emulator

[brandonpelfrey]: I was just looking at this yesterday. Apparently Voyager 1 architecture, ISA, etc are well known but Voyager 2 is still denied via FOIA on grounds of copyright.

[tpoindex]: Are the distance and signal delay numbers supposed to be accurate?  NASA&#x27;s page has them substantially different.  Nice work, however!  https:&#x2F;&#x2F;science.nasa.gov&#x2F;mission&#x2F;voyager&#x2F;where-are-voyager-1...

[bennett_dev]: Next add realistic signal delay so you have to wait a day to get the result

[spicybright]: Is it possible to hook this up to some kind of satellite space simulator to control a virtual voyager?

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiWkFVX3lxTE1SZ2pRZ0FzaG5iMmJFbTBFSUxFSkdyaVlHWmhGSGtJNVhZbWUtY3NKLWNlS3RnWDZTUlN6dVdmOVlTYThhTVl3OEN5MEd1VDJxLTNPSkh4cDhYdw?oc=5" target="_blank">OpenAI 给 10 亿用户免费换上 GPT-5.6</a>&nbsp;&nbsp;<font color="#6f6f6f">Infoq.cn</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE14THpWb2JfS0JOdmlPNVRvNDNjSVNVX0ZJWHFaQTBSRFprSmNnX1lpZkMtR21PN1l1NGZlSkpvOV9XRWJhNm9iWEJYTkctU1NObGpfa1RRSGRSMzhWcG9fYWpBNEV2dGhWVXZUVmsxN3FLb1oySXpSdjhHLXB2MGM?oc=5" target="_blank">中国AI词元调用量两年暴涨千倍，谁在驱动？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE1TOUZfd0FoN1FGVHpfejRHT0J0VTNtc05tRDNaS28xWXhsYjhWek1BWnJPU1JRSlA3anhOZm5SalhPY01kNG9RZUloM1dETURiaUdGQkJfcFIwcThvc2tHbw?oc=5" target="_blank">信通电子拟1.6亿元投资物理AI视觉芯片“小巨人” AIoT战略加速落地</a>&nbsp;&nbsp;<font color="#6f6f6f">东方财富</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTFBzdXlsazVaVjExRlNlQUFEOVJjX25IRzFkX1JxQnlEQ3NyXzd0ZjAxaTJodFFKeGNjUjY3TXVXd1lPMHVEeDlVc09HbUVycjR6SDFN?oc=5" target="_blank">[前瞻洞察] 安世半导体AI高功率算力电源封装路线揭秘：从48V生态到800VDC，GaN、SiC和CCPAK如何分工？</a>&nbsp;&nbsp;<font color="#6f6f6f">电子工程专辑</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxPYUZJSDl6X3REYk9xM0VXaVJPZTNmY2JBaUZNSWJzUEJLUGQyOGZyNFdTNG1fMk80ZHpjcDd5STg0Q0o4NUpHNnpSYmNlVFJzbVFpWHk2S3ExVXh3LS04YmFSZl9BYXVKbFJHT1ltb3VkY0xrRzRFcmQtVkpRaEQwQ0NlUU9PcnlhSzNFR1FtRFZPdEZkNzdhXzQxODd5bWpUOWlZc0Zuaw?oc=5" target="_blank">研究：人们无法有效区分AI生成与人类原创短篇小说|ChatGPT|奥德赛|故事|参与者|研究人员_手机新浪网</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiSEFVX3lxTFBtX01qSWhVR1E5TG40WWlGaDZjNkJJR1J0ZUpucmtZSGthOXlleW8yaTJNQ05LX3lNSlFneEROdnRxUFV3d1RMSQ?oc=5" target="_blank">AI模型安全事件不断 网络安全行业的技术范式将迎来变革</a>&nbsp;&nbsp;<font color="#6f6f6f">财联社</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiggFBVV95cUxNeVB1b3F5SUJ0NmViUjJSNnVVUk9qel9kYV9vMGV5elU5M3ctajh5VTI0YUlTOXVXRVd5blpHOWI4cFE2SVZUQ2w5d2luSXBQNm9zeEg4dGJFRjRsLUFSVE1KQ1BtQWt6cVhfT0xFbDdXdjgtUmFGZENaRzBmbGt2dkZB?oc=5" target="_blank">北京海淀发布“智谷中试港”规划 将建设AI全栈式中试平台集群</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiTEFVX3lxTFBPWXFqREhKX3l3bHNBeE9IeEp5Zms2VmtMeUJEYWd6cDZOelh6cHNiLW9iMkdEdEhXYXJkNE9sSERkOVhVc2txcnpod0M?oc=5" target="_blank">黑帽大会热议AI攻击潮：企业最大的风险，是不知道自己已被盯上</a>&nbsp;&nbsp;<font color="#6f6f6f">凤凰网科技</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTFBid2tLcHF0LUQzNDl1MUhST0dXU2Jtc1MtX0VMT2R6aVU3S3RCZlVMMm1iTndaVW9sV0h4aHB5bmZXQ1ZlZFI0SlplZkZ5dXhQWXI5Z3YzMnRiU01XVkE?oc=5" target="_blank">消息称 WorkBuddy 已成腾讯 AI 应用战略优先级最高产品之一</a>&nbsp;&nbsp;<font color="#6f6f6f">DoNews</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMicEFVX3lxTE9aVm14R1VFeEZfR253ejE1ZHhueThieUdkREluVFdNMlplRkxISVRaZzh2b0J6Q3dVSjZxQVZUV0JoUmZfaHdHakl5b01rRk9HR1Itc011V1N3c1BOQ3poV0psSjhubndjMDFZcXFrSTI?oc=5" target="_blank">电冷耦合重构算力底座 筑牢AI算力新底座</a>&nbsp;&nbsp;<font color="#6f6f6f">中国科技网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMifEFVX3lxTFBkb3JYbjBVTjQxRjZrRGJzUzlWVXJsT0JCRWVUZXlDV0ZoRmoyY204aWhab0NweGpkX1FfUThkYl9vTmU3dXdPUEJ6UW1fdm9wSG5NUFFVX0hfUFREbVlfa1g2V1ZPMWxzYi1pX2FQc1JxUGV5eWtXa1FNZDg?oc=5" target="_blank">研究：人们无法有效区分AI生成与人类原创短篇小说</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTFBGdlo5VlkyRnVEV1ZsTFVEZHpoMDRmM1pFSzZlcXZ4Y0c2Q05YTVZZVW82eURFaHlmcFBmTURkZ25HUjEyNlRqNHpGUXRSTF9rS2xzMzhDUEJNcnZFaDR3dnJXR1dvZw?oc=5" target="_blank">福兮祸兮？美国科学家首次用AI设计出新病毒- 世相</a>&nbsp;&nbsp;<font color="#6f6f6f">新湖南</font>

--- From hackernews ---

--- Top Comments ---

[jacquesm]: EU data regions are a reflexive action by companies that try to hold on to their EU customers (and more and more are leaving, surprisingly the larger ones seem to be leading here). Realize that as long as you are still hosted on US owned infrastructure or that if there are US (or: five-eyes) owned companies anywhere in the stack your data can still be forcibly pulled and often without you being aware that this happened. There are only very few such stacks that are 100% owned by EU entities.

[altairprime]: EU folks, note the warnings threaded throughout this post: this is not currently any sort of panacea against US or AU data hosting risks, but it will make your data noticeably closer to home. Fastmail (Australia) merged with Pobox (Philadelphia) resulting in a complex tri-national law&#x2F;risk surface when the EU is involved, so go in eyes wide open having read this in full. That everyone will overinterpret “EU data region” to mean “for privacy” here until reading the article is completely u...

[robin_reala]: Posted on the previous submission for this: it’s a good start, but from the article:  If what you need is a guarantee that your data remains only in the EU, we don’t have that, and we’d rather tell you directly than let you assume otherwise.

[tumdum_]: Or you can just use any of the actual European companies (I’m using Tuta).  https:&#x2F;&#x2F;european-alternatives.eu&#x2F;category&#x2F;email-providers

[cube2222]: Nice, as a European customer, I appreciate this. Side note, I moved to Fastmail a couple years ago, and so far I’ve been very happy with it! The Gmail migrator works great, too.

--- From hackernews ---

--- Top Comments ---

[glimshe]: Very cool! Just remember the one truth about solar eclipses:  total or nothing . While I don&#x27;t want to dismiss partial eclipses entirely, please don&#x27;t think that partial eclipses are &quot;almost the same&quot; as total eclipses. One is a curiosity, the other is a memorable life event.

[alkyon]: In Spain it&#x27;s a trio of consecutive eclipses from 2026 to 2028 (the last one annular). To view the second one I don&#x27;t even need travel anywhere. Will be in Saragossa on Wednesday and gonna use Canon binos with image stabilization, the partial phase with filter and then some precious seconds without (a scary moment, I&#x27;ll rely on an alarm to prevent my eyes to get damaged when the totality is over). Some people generally advised to skip any instruments and just enjoy it with your...

[frankensteins]: Very detailed site. It said open source. where is the source?

[dizzant]: A real treat for all the pilgrims on the Camino this year

--- From hackernews ---

--- Top Comments ---

[ogou]: And that is how you handle things like this. He ponied up and took the hit. More importantly, he gave the back story. After years of reading so many circular psuedo-responsibility posts (by others) trying to squirm out of awkward situations, it&#x27;s refreshing to see his thoroughness.

[1123581321]: Good retraction. The plagiarism part further down in the article shouldn&#x27;t be missed. The developer has significant character issues.

[decimalenough]: Discussion of the original blog post:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49214863

[ventana]: This is the right way to handle the situation like that, and kudos to the author for writing the second post. This is also a reminder that people lie or just hide some part of the story all the time, and we as readers should question every story if it only presents an opinion of one side, and not the other&#x27;s. That being said, hearing Apple&#x27;s own opinion is probably not what we could reasonably expect.

--- From hackernews ---

--- Top Comments ---

[prinny_]: I believe there are some programming jobs in which the code is absolutely the easier part. Not all of us work in signal processing, integrated systems or have to push upstream to Linux kernel because the company we work for really needs a memory allocation optimization for its data centers. Navigating customer requirements and building something that satisfies both market&#x27;s needs and company strategy can be an incredibly difficult and frustrating problem to solve. Especially if you need ...

[bob1029]: &gt; If coding is easy, how come programmers were in high demand, and have demanded large salaries for years (even before ZIRP)? Because programmers have generally been forced to wear additional, invisible hats that are essential to making the code happen in the first place. Writing code is not hard. Writing correct code is. Knowing what is correct in a setting with paying customers generally involves interacting with those customers. Either directly or worse. The gigantic salaries paid to th...

[tunesmith]: All of our developers are now using agents. We&#x27;re not hand-writing code at all anymore. And yet, some of our developers deliver stories in an hour, others deliver similar complexity stories in a week. Executives are surprised to discover they cannot simply turn over a product-authored jira story and have it yield a single agent-written PR. There is still significant  work  that happens between the point at which a story is written, and the point at which correct prompts are input that ge...

[agentultra]: The author might be missing the intent of the observation. Maybe they’re misinterpreting it. What I, and many people who’ve said, “code was never the hard part,” aren’t referring to the skill of an individual. It’s not the hard part of the engineering process of developing software. Programming languages have manuals. Many data structures are well documented. There are frameworks for damn near everything. While the difficulty of producing code varies by the skill of the programmer and the com...

[tikhonj]: Everybody saying &quot;coding was never the hard part&quot; is really telling on themselves. Coding was never &quot;hard&quot; because most organizations were absolutely unwilling to take on any technical work that  was  hard. That tells us about business strategy and culture rather than anything about the fundamentals of programming or technical work. The real conclusion is that programming is such a  high-leverage  activity that even technically trivial, low-quality programming is immensely...

--- From hackernews ---

--- Top Comments ---

[azalemeth]: This is already the case for Master&#x27;s degrees and above in Denmark. I&#x27;ve been the opponent examining students. We ask Master&#x27;s students to give US instruction on a topic (drawn randomly on a card in front of them, from a list they know a few days in advance). They do a chalk and talk on a topic for about fifteen minutes with three to five professors being &quot;dumb students&quot;. It works fantastically and at the end it&#x27;s very apparent to both student and teachers how we...

[datahack]: This is how higher education was done for literal centuries before moving to the written word. So it’s not exactly innovative to return to oral arguments. But what it does threaten to do is effectively abandon all the efficiencies of the written word. When higher education evolved into a mass system in the 1800s and into the 1900s, pure oral examination was looked at as super inefficient. A written paper could be handed in and graded without lining everyone up in front of a panel. The oral sy...

[thoughtpeddler]: As an educator myself, this quarter for the first time for my course&#x27;s final project, I&#x27;ve switched to actually asking my students to provide an &quot;AI Authenticity Audit&quot; of their (project-relevant) chats in the construction of said projects. All my students&#x27; output over the last two years went from pre-AI level quality to boardroom-ready polish, and I&#x27;m actually more interested to see  how  they arrive at an outcome rather than the final output itself - focusing o...

[millicentricism]: Oral Defences have a long established tradition in Denmark, but recently there’s been real cut back on this as a money saving exercise. So both teachers and Students are familiar with this form of examination. So for a dane this reads like “back to the old way”, rather than anything new or novel.

[Daviey]: I&#x27;m quite impressed with the Hungarian system, for 18-19 year old school leavers, where every subject is split 50&#x2F;50 between:     - Írásbeli (written) - standardised written exam, centrally set and marked
  - Szóbeli (oral) - the panel interview
  
The oral (szóbeli) has:     - A committee of 2-3 teachers sits as a panel
  - The student draws a topic at random from a list
  - They get prep time (usually 15-20 mins)
  - They present their answer to the panel
  - The panel asks follow...

--- From hackernews ---

--- Top Comments ---

[RGS1811]: Norbert Wiener in 1960: &quot;As is now generally admitted, over a limited range of operation, machines act far more rapidly than human beings and are far more precise in performing the details of their operations. This being the case, even when machines do not in any way transcend man&#x27;s intelligence, they very well may, and often do, transcend man in the performance of tasks. An intelligent understanding of their mode of performance may be delayed until long after the task which they ha...

[stingraycharles]: Ok so this is a bit of a side note, but when reading this, did anyone else have the feeling that, for all their messaging around “we are so afraid that our models will be used for hacking”, they sure as hell are trying their best to make their models razor focused on precisely that purpose? If anything, I want these models to be less persistent at their focus of completing their goal, and instead just call defeat and say “I’m not sure how to proceed next”. What purpose could this behavior ser...

[simonw]: I think one of the most interesting details here might be tucked away in that first bulletin point: &gt; May 7: OpenAI starts a new training run for an experimental, unreleased model.  (Do they mean an evaluation run? They say training run in the video, and later mention a “reward signal to judge how well they’re doing”, so I guess this really was about training a model, not evaluating one that was already trained.)  The more I think about this the more I suspect that the fact this happened w...

[thadk]: Simon&#x27;s retelling is more compact but it also invites anthropomorphization of the sharing of the familiarity with the message board which re-emerged a few times. Zvi&#x27;s retelling handles this better. Zvi speculates that the secret message board familiarity was carried because it had been trained into the May-and-subsequent models:  https:&#x2F;&#x2F;thezvi.substack.com&#x2F;p&#x2F;openai-trained-its-models-for-...

[frays]: This feels straight out of sci-fi. We&#x27;re talking about AI agent swarms emergently coordinating over the span of weeks and pulling off sophisticated strategies under adversity in an environment where that behavior was never even intended. Anyone brushing this off as just a &quot;bad prompt&quot; is completely missing the scale of what actually happened.

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1YUHFudnhlZUY5RE5mODMwd2FsLTJEMWRMOUlaMnJlai1LNEt4RDAzWTh2VGczT2FTb2JmTmlKUmRsbXFHN3BhX2lwcEtuOV9HMWhDUm5YdjJHQUxyd3FnT05XYlNnRmtHLWg5RnBjQ0ZlZlh6RlE4UGNjUGMxc2c?oc=5" target="_blank">AI智能体是如何拉动词元消耗量暴涨的？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxQTDRwU2FvbUxKZlo1TUNESEhORFFLejJDQ3NfU19Pdk41aU1SeTg0MGdIbTY4Q1FJbGl6M0tqU3l6Q0R5ZHhCbVVpOFdvTjgtb29tSWYzTmh1aGVMM0JfNFNjcDQzUE9TYmkxY1VGVV9hWk1VUFZLRmRRaEVnb3dwc3NnME45UWI4bkIwM2pBS29jdVBaMlJxbHJWczlQTzk1bjRJbzlvSQ?oc=5" target="_blank">对话S级AI漫剧制作人黄楚杰：AI短剧已是红海，如何走向精品化</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE8wVlBNNzhUWkxiNHdtckdVN0h5bHNhSXpNUEpJM1U0OGkyazVCb1FHU3hab3B5WG1hM1o4SUMwSlNWTXQyM2NZMG1PQlhpclYzSDRlUHptUzVxUXh4LUhIQ0dOaEQtRmYwLVh1QUQ0MUM4aVVfby03clFnMkRpblU?oc=5" target="_blank">美国AI攻击真人事件对普通用户有何安全警示？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBiUG4xbkxnRDlyM1Foay1pb0Excmk3T01GUWxpMDVKX0NvVzBxZDFxZzlwMmhIeHM1MU9nU3VheDc5YXNZVjBOUmJFSDRaQ256bklUcnh6N0hfYzR1bFpwcDRsekJ2b1JlOGpaSnZfTHVlZGhrM19WZUNPVGxqVU0?oc=5" target="_blank">美国AI攻击真人事件中AI采用了哪些欺骗手段？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9yYzRaRDRGaGVVMWpJbU94eXp0MjJ2WGlfZWRUNGNjc1ZheW5wdk1uY2ZWblFwUW9VMFhxMzA4bUYxT0daVF9nSzYyZlpTaHBiRXFiRHpnaWI4WHFaQ3ZwTkJwZ2RxWGhKVjdFNzduOFM0V3EwdGU2d2pySVpDVTg?oc=5" target="_blank">美国AI攻击真人细节曝光：伪造身份骗审核员</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9rU2VMZHVHVGc3ZHh6UTJ1U2hlOXpSNVFDaGF2S0h5THBnMkZ6NXA2OE01YUROUnBZVk4ycWtaZkhfN0R2Vkh6UWZCMFNKdW5XYmZlY0ctRWF2SXlMeUZ6YlZaZnlmVzhDTXNubXJYUzZtU0FZZjZRV2VXUElPcFk?oc=5" target="_blank">如何防范AI自主攻击真人行为？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9pR2hQdkY0NlFxN1hEeE9GRmpVdnllQ3BVSlFLQjRDWjk5TlFtVUxxQzFYVGYwSUJRUnJQcFFvZzRmRDQ5SFVXNW1uT0w2NURhb09KZWRhZ2djWER2Nk4tSFlkdUEySTJfNHV4WTIydl9OUnFjQk0tMVlkSUZidFU?oc=5" target="_blank">Anthropic CEO急了：新人都是冲钱来的！AI巨头最大危机不是算力，是留人</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMic0FVX3lxTFAyTmFySlVPRVZydlJ6eXNFd0JETE1fLTBUMWVaUkp3YmlKZ05nOG50WHNaaTkxTW1aT29WQUM5VUk0NW5EZ3BwZzJsSVpxMTdRVTRWLUIyRmRYRkViMVpoZkhmbjRLTWFoQnZhamZNZnl0YUk?oc=5" target="_blank">杭州星地创新港：从CBD到CID，打造AI高地的“热带雨林”生态</a>&nbsp;&nbsp;<font color="#6f6f6f">潮新闻客户端</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTE94endWTUZaYndMNXRWSGk0bGRvaThBTExmRzBNSk1CZ3NnSGlNaUtJSVlQQ05xV3pBdDAzdUFxMG5hS2oycEhITW8wT0l5TFhFZS13?oc=5" target="_blank">AI推理前瞻——从基础设施建设到商业化变现</a>&nbsp;&nbsp;<font color="#6f6f6f">华尔街见闻</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE9INmk4ZGE0eE1OT3ZvdFFmOGt0T0ZrT0hSSDFyY1ZtYXFZTk9vRnZXUGlqMUhQZHVIOVQ1eHMyalU3QWZkam1hTUdqSGJEQlpIVDdxTVBIa0xPVHprTTNiU0NGWVh3c0lZTWpMSQ?oc=5" target="_blank">和平精英AI落地全业务链条</a>&nbsp;&nbsp;<font color="#6f6f6f">大洋网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMidkFVX3lxTE0yS0NhWGlwenMyd09GblQ5a3Vac3BsX0UtOUVlX3NTdlJLVDIyaC1aYndHSVRjWk5NdzNYZFBUVU0xZ3YwYmdoWlB0VUJYWDl4ZTM2V1kzRVBSZzZ1MEFLcVMweEE2RDN1bHQza0JQT3NsM0ZnMnc?oc=5" target="_blank">林毅夫：中美在AI领域的竞争要看新技术如何应用到生产</a>&nbsp;&nbsp;<font color="#6f6f6f">chinanews.com.cn</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTE9XWC1FMVdrN2JIU3NCQ2k3OU5QVkptdWxrSzlXUDlDMjNQQ1dkU2lOcnRKd0o5dVEwQWtMVFM1YWhuUjJNMFNfOE91VzJhSzNnZmZJ?oc=5" target="_blank">12家具身智能产业链企业分享Physical AI 如何走向产业闭环？</a>&nbsp;&nbsp;<font color="#6f6f6f">电子工程专辑</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMijAFBVV95cUxOVVNuX2V3a0RxTzJLeTFEd0hOZlB3VXVab1Z1ZnptZE9aRXhtS0RPSHA0YVlrQTU4QVhua28tM3FmZTIydHdpZjhMWE1Ba19NOHNCOS1VaUlBRFlWYS1GVmdXamxZSkZBYmgyemZJUlJBenFvakk4TXdHXzlULV9ZRmljR0FFVTRjbC1KNQ?oc=5" target="_blank">浙江跨境电商迎“智”变 AI成全链条搭档</a>&nbsp;&nbsp;<font color="#6f6f6f">搜狐网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxOcFFJYUtrVFpSX3h5VklCQW53N0tKb3JJa1JwMkVNRl9IajZwcnVubzVjbWFVdU02SEE1ZFU1LTJYamFxUmVWdGQ4cUlMSWM4eFhUWnE1ekU1MkpjTUtSemtTc0tGUE1aSGN0VWI1NWxzbVNKR2dlMWFGcTFtenFza01tNnV0WU9pQnRTQkhORVhqWjhEOTBHcFB5dkR2MkRTYk9odFNrVQ?oc=5" target="_blank">AI全球治理：“中国真的在朝这个方向努力，是有希望的”_手机新浪网</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMieEFVX3lxTE5UNkgwLWVFbUNlWDVVejNvUjhBaFpfQnBVdkYxUkZzSXdhUGR4d2M5NGNwVklJb0Q5TEh0SDFJWDIwNHVqNDlLTXY1ZzMzajNXa0tXcndEWmNfdzctQzFjZGNTeVF1OGpmV0lYM19KN05BMG02RVV6SQ?oc=5" target="_blank">Anthropic升级AI编程工具，免去开发者手动复制上下文</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTFByQXZNLWswNjRqNmFwdEVPMURBTTlRdnZKU012NFE4OVV0eGJYUDlYek1UQk9iUmZUT3l1cHh5UW13aEFUTG1VTjZaM1RxVGJxN29KaHE4MkRsZk81Wnc?oc=5" target="_blank">智赋千企·数拓全球 | 天扬AI新品发布会广州启幕，AI 赋能外贸企业全域出海</a>&nbsp;&nbsp;<font color="#6f6f6f">中华网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMijAFBVV95cUxOWmNQQm50X2VENW9DbDB0ZHRRNENPdTFVN0hCZ2xyblB4bjVTYXVlRHdzcjA2WUdkNjNReFZ5ZlF5RTNYbElWUjB6SWM2cU5Oa2tpWGdia0VMdjNUR2o2RXp4S2llZE80ZTZpeENaTktoSTc2M3MzNTg0cDliMkwtVXhDM0tKT0JoY2ZwcA?oc=5" target="_blank">AI硬件涨价潮传导，3C租赁需求翻倍</a>&nbsp;&nbsp;<font color="#6f6f6f">21财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9xSktxWW5DUDgxaDhJN3lKTkRfNnF3QUF1VVhiWHgwYXZIdXJpaFNDZlJneEcyZVkwVWV3aTY1MGVTNVlSNDc3NFVCZlJjTWxyaGp0YUtFdmRDX2NpOGNyUFZNeDlmajN5cTZwb0c0ZDZLbXFRUndyM283TU9ibkU?oc=5" target="_blank">模型权重如何成为AI的下一个「训练语料」？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFB0LUVJelZpWjlTU3dYaVc1MDFlSmNOOFgyb1BCWlFIVWpKeTdENzFOWFdsU1drOWx5a3BvazZZOURrRkFsRkRuMldEUXJkajgyWjdROFIzQkVtZHFWWjZNSlJEUi1OaEcxRW5fWC03T1Jpb0x2T2RyTUNtSDgyRWM?oc=5" target="_blank">美国AI攻击真人事件是否会引发全球范围内的AI安全担忧？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1UNWhnb3pBRzdEemdMVEJyenRSdTA3Z25fSFZYUHQxNzdMSjBNcUc4WmVBaGN0dlJNNE5sazlrRXBWdHpSaDRJdHVMRXBoZUU4VXh6WVltR3BaeVRjU2ZoUENEZFhtWDVvYzhrS0JyUXJiU3lWX2czWWdUSk54NFE?oc=5" target="_blank">谷歌AI部门的招聘委员会是如何对候选人进行定级评审的？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1FLUVwQVZCblkzYlIzTFRQRmNHTUxVM1RKTHhuNDNfa0NRMzl4My14b2pVSTNLMEZiS1FjazF6ZXhUQ24xYlo4TzdLdUxRVUZHTHk2TUc0OWFkVDM5Nk1TMnRCMzNjdVptSUdLcHRjN2w0aHB6RGE5bXg2cDQ2VmM?oc=5" target="_blank">如何避免AI生成错误农业信息误导农民？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMibEFVX3lxTE05aGprTGlrZEd6R0IxenV3ZFNPVWNzSks3RUV6b292Yy1pRXdiV0FnRmJZSkQ5SVlaUmlIVW1JU1psMHQyRXQ5WmFXU3dUVXNIWWVIRUFhS2lBNWhSQ3dVcnMtYU1idVlWc0dxdA?oc=5" target="_blank">AI时代就业新观察丨大山里的AI新岗位</a>&nbsp;&nbsp;<font color="#6f6f6f">中国之声</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMifkFVX3lxTE9heVVvT3ZXR2xmSmZ5Nlk2c245ekJ4WDUteG10UGt2emxDUENjc0FDVHdYY2g1ajl3WUtNczlMNXItc0FkUFZoTFRVQVNGOTZ4Rnp2N0FpUmZVVkRXbUhOQmQ2Q1hIUU1VeU9iU1pWWXpJMDdOb2NBWFp2YlBvZw?oc=5" target="_blank">AI参与长剧制作在版权和肖像权上有哪些风险？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE11RkFzTWhnY3NfQWw1Z0RDTE96aFVocmRFbXZwWGowZzlyS0x1TGpudmVXemNjbU9ZSlZ3bnVHelBuTnptQjN5U3pXM1hjSXFfN0E4Z2lkazlyb21Tcml3OFl4UWVqaHFmRTExdjdDUXhDWU5WWEFhZThGVG95c3c?oc=5" target="_blank">苹果AI国行定档！iOS 27秋季推送，阿里千问加持</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMigAFBVV95cUxPVkJLdHFjYTRGSkJZNk5EVEFuTFVvWWR5cGZLRVRZSXVpaUxGWVpsZXNmSzNQMi01VFA2UVpZQ3h2ekNlUm5OM0NmN2pJUG11VlVvYi1nZ2F2Y1g5SzV4UzJsSWNKc2pIdGs2WEhEX2FvM0VWc09BTUFtMzRmS3gzTw?oc=5" target="_blank">为什么AI服务器会挤占消费级存储芯片产能？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBBTzB2c3dZci1Bd2dJcTl3QzhHUUNSTDJjaGYxQlBEU0tYenJieC1YVEdWMTZGRGhNYUdjcklVUHVSeXdYNWJ0eDFUaUJaSlc1dXdKcnhCT2VLMkhUdnJlUjlmOGdpY0NrZXBjV1h2RTZ0MEVkVThKMnREWFdsODg?oc=5" target="_blank">词元经济崛起后，AI服务会像水电一样按量收费吗？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBza3FuazRCeHduM2hxaVhQRW5HZXo5VEtJcmgyc193ZVZFT2ctbk8wZ0dlMzJDV24wZWZSS2hBVk5lYjg5N0h3Qkk3OEw2b1dYcnBIdjEzN2ZBTW5XdndoRnUzSV9tNWZmeHlQU2xRQTJFQkVQdWtEU3RmbWl2Mk0?oc=5" target="_blank">不会代码也能开发App？AI把成本打下来了</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMia0FVX3lxTFBqR3hGdVZHTDA2TmhaZ0phRGJIYnludm5hd0VRdjZ2R1pZRnBzUjJFSENRZVFxUjN6djhZeDdDajNHN1BWVUFQLUlBbVRwaEN1eEsyWXlIVGlkckNwTUIzanRzeUpubTk5b0Fj?oc=5" target="_blank">支持多模型接入，2026全栈式AI智能体解决方案提供商推荐</a>&nbsp;&nbsp;<font color="#6f6f6f">财富号</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMifkFVX3lxTE1FdTVlVjA4ZHNJVzFJWGhJNlp2czdLM2o0QjBCR2xUd0g1eHlTNXpBM3hESUNsNFBNXzBjX21UekFLM1BReFdoeGVfeXhSVUVBdUJFWGNoMnEzWXp1S01lWmtWTjhXbHBhakZoQXB5SVdhS25KbldLRld3dXVJQQ?oc=5" target="_blank">观众为什么觉得AI短剧“假”而更偏好真人剧？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From hackernews ---

--- Top Comments ---

[thehamkercat]: &quot;My phone is a server now&quot; would&#x27;ve been better -- &gt; built in battery backup Isn&#x27;t it always recommended to remove battery if you plan to use a phone or a laptop as a server? ( Fire hazard ) or is it fine to just limit the charging to 80%?

[SturgeonsLaw]: I still think the best bang for your buck is an old desktop PC. Something like an i5 with 8GB RAM and an SSD will suit 99% of home server uses with capacity to spare. Even in this environment of inflated hardware prices, you can get one for a reasonable price. Although I do see the appeal in getting unconventional hardware to do what you want, just for the love of the game.

[alightsoul]: FYI you can&#x27;t do this on phones with locked bootloaders as well as the author did. you could use termux but if termux runs on anything lower than android 8 termux will be significantly limited and you will need postmarketos and maybe fix support for it. with termux, at best things will be slow without root, as the author mentioned rooting resulted in a speed increase. without root, you also can&#x27;t bind to ports on any android phone, and rooting often requires an unlocked bootloader a...

[firasd]: Yeah ‘old phones’ are pretty capable devices. I’ve wondered for a while if they could be used as an extension to your laptop like the old 80s PCs where you would plug in hardware. So ‘make it a server’ is the obvious way I guess, and then you could do things like render webpages on there and then stream them as images to your actual computer (like the now shutdown Mighty app), or run ffmpeg on there to convert a video, etc

[craftkiller]: Cool project, but slightly better: before the rampocalypse I bought one of those aliexpress fanless linux boxes designed to be a router. I put a 32GB stick of ram in it and a 250GB SSD. I run opnsense in a virtual machine to serve as my home router and then I put the rest of my home server stuff on other virtual machines on that same box. It&#x27;s still fanless&#x2F;silent. It takes up zero additional space because it is my router. It would already be running 24&#x2F;7 because it is my route...

--- From hackernews ---

--- Top Comments ---

[comrade1234]: Something I&#x27;ve wondered... if you publicly say that a domain is for sale and someone has a trademark for it would you automatically lose in arbitration? Around 1998 I registered a domain. Sony registered a trademark with the same name a few years after that. Someone on a Gmail account asked if he could buy it - I later found out he worked for Sony. I told him no - it&#x27;s for a game I&#x27;ve been working on. I went on a vacation for a month and when I got back there was a fedex packag...

[Tiberium]: RFC:  https:&#x2F;&#x2F;www.rfc-editor.org&#x2F;rfc&#x2F;rfc10023.html

[asdfman123]: They need Georgism for DNS names. You set your own price for your domain. But you have to pay 2-5% of that price annually to keep it. That way, squatters are incentived to sell it to someone who&#x27;s going to use it.

[kmoser]: &gt; Remove it when the domain is no longer for sale. The convention has no “not for sale” value; absence is the only way to say no. Since most domains that are for sale don&#x27;t currently have such a record, it would be wrong to assume they are not for sale. Therefore, absence of such a record does not explicitly mean &quot;not for sale.&quot; It&#x27;s no different from a house: a &quot;for sale&quot; sign in the front yard means it&#x27;s for sale, but lack of a sign doesn&#x27;t mean it...

[layer8]: It’s interesting that domains apparently are still such a big business, despite how browsers have been deemphasizing URLs and domain names, and given the prevalence of apps.

--- From hackernews ---

--- Top Comments ---

[sgarland]: &gt; And you won’t get to brag that you own a computer from Iowa. South Dakota. Gateway was HQ’d in North Sioux City, SD. There is also a South Sioux City, NE, though to my knowledge no computer manufacturers have had a presence there. My dad worked at Gateway in the mid-late ‘90s and early ‘00s. Employee perks were pretty decent for the time; for example, he could borrow a laptop to play with and learn on at home — we used this almost entirely to play games, since we had a hand-me-down 486 a...

[ecliptik]: The hippie copy mentioned was the ad my dad bought our first PC from. He was coming back from a business trip and asked the company computer guy to help him choose one for our family. We ended up with the 486DX2-50MHz &quot;Integrated VESA System&quot; [1]. Calling the Gateway 2000 customer support 800 number was my introduction to understanding computers and I am grateful to their staff for being patient with a 12 year old. We got rid of it in the early aughts, but I kept the CPU all these y...

[incanus77]: I worked at a mall Radio Shack in ‘98-‘99. A Gateway store opened up at the other end of the mall. This being the times they were, Radio Shack had partnered with Compaq to sell P2 &amp; (I think) P3 desktops, the beginning of its downfall of selling other companies’ stuff and losing out to places like Best Buy. We used to emphasize that you could buy a computer with us and go home with it today, whereas down the hall, you could buy it but it would come in the mail later. Their store had demos...

[gammarator]: As a young Midwestern nerd in the 90s, getting one of those cow boxes delivered to our home was better than Christmas.  (Christmas happens every year!). Somehow I can still remember the new computer smell…

[VCFundedGenYer]: What exactly was &quot;bad&quot; about these ads? They&#x27;re eye catching, and it definitely interested me as a reader. Poor choice of title.

--- From hackernews ---

--- Top Comments ---

[Sembiance]: Related, play Solitaire over gopher  https:&#x2F;&#x2F;cosmicrealms.com&#x2F;blog&#x2F;2019&#x2F;06&#x2F;14&#x2F;solitaire-over-goph...

[omoikane]: Related, Oscar Toledo also made a tiny Klondike Solitaire program for IOCCC, I wonder if it was inspired by this one:  https:&#x2F;&#x2F;nanochess.org&#x2F;klondike_in_c.html   https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48450024  - Klondike Solitaire game for curses in 5k of C (2026-06-08, 17 comments)

[bananaboy]: Hey very nice! I made a 386+VGA Solitaire game a while back for a game jam  https:&#x2F;&#x2F;horsedrawngames.itch.io&#x2F;solitaire  I always meant to go back and optimise it more because it shouldn’t require a Pentium!

[inatreecrown2]: That gas-plasma display looks gorgeous, it looks more &quot;analogue&quot; than lcd to me.
Are these still produced or is this &quot;dead&quot; technology?

[ctippett]: Late (late.sh) has solitaire available to play over SSH (along with minesweeper, tetris, battleships, chess... and many more). You&#x27;d be surprised at how well a lot of games translate just fine to being rendered on a simple interface.

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1kZ3hVaUpQMVRWQl9xbzFHNG5OZ2U5WTVmaXRPT1Jmcm5rOWdheUJHQ2gxbmFNcW9IbGdpZjVXVkVLREZWN3ZpMVlnYVMyaGJJSUd1eWZvZ1R2bFNBYU1Qa3BnQlMzRWdPVThHTFpQdmFJSXhYOHMxTEh1VmVlS1k?oc=5" target="_blank">OpenAI 用 1 年时间证明，你并不用为 AI 换浏览器</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiqgFBVV95cUxPV3gtMjNVZ3hCQmpkRnV6X2czbUZYWU9iWG93ZUx5anN3T25HV2NkUnhROHVjSnAwRjhQVGdVQlZ5OXZRbXBLUkVrdTUwZmpfZlR1ZDl0S2lLOFNzV0s5a3VLRW9aczZZZ3IwWkRBOUtpN3B1bzdBTmFIY09zVEhiNXF1TC1qMlpDYUhSM0dQM0lqdnNhcUE2LU45TEFweXhqUi1VWnJlVldyZw?oc=5" target="_blank">奉贤实现教师AI培训全覆盖</a>&nbsp;&nbsp;<font color="#6f6f6f">shobserver.com</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiU0FVX3lxTFBQUE9uMk1WelY3MWloZ0t0TzBwWnV4bnFzUm9seWJ4UUNMYVVpenlyR1BaUmRibGRXMXl5T2RrLUM1V05CTTdmOE0xWk9LcnlmZjhz?oc=5" target="_blank">欢迎来ICDIA 2026 “AI机器人展区”看具身智能机器人的“应用门道”！</a>&nbsp;&nbsp;<font color="#6f6f6f">电子工程专辑</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBWRnl5VDFvUGh2MlR5T1Q4S2Z6Q2RJNUpQZTVFXzJlcmJyMVVFQ19hT243NHoycnFtQ0MtQXpUZ190MERjRk9NX2V0RElscFFwaXFiandRRnY3b0ZqWFhMWTdkVm11RWFrOXJrUV83dFNDUGVQWFVSdGxzNTR0ZmM?oc=5" target="_blank">普通人日常使用AI会消耗多少词元？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE13WGVtVWVkem1EUXUwRGFxdmF3a2h3NVhOWmdCSE94N0V1MU00cGZ4ZUk1RTZGQXVNRTZUS043WTN1R21JMC0xVlNtb1RkQlk5Nm5kSHBTdHlFOHJXWmVIRVFPTkItTlBPLXZOQW9HM2RHbEt3c3FNSnkxc1R0ZjA?oc=5" target="_blank">自媒体红利见顶？真人IP+AI才是新出路</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFBHVW9WaDdZTU1RNDJKS1FEUkF1cHlSMjhPclZPbUctWjdBczJ4QnpLQkJ5bXRDdEhoSVk4cHNuUjEzaTJjdkZ4N2hmYXJNUEsyb3lxMS1ncHJESU4wc1I3YVllcEdSS2tvUktFWGFISldSWEMzNFQ2MEtuVndYdUE?oc=5" target="_blank">没技术背景的人如何用AI开发App？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1nY2ZmNkdBNjZrOWNCV2prcUZ6d3RuM011dllXRzdkbnktbzBCNk1wcS1FekZaeEpWQThrU1RrMnlVMXJmZHBXWV9LamV2ajBkcU9kb0dBeUZnVFZkNXZiNnB3V0x0bmUyZ1FvbFIzM3Bsd05najg5TU5VNHJ6a00?oc=5" target="_blank">用AI开发App的付费用户主要来自哪些地区？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMijAFBVV95cUxPdVBvTHR2UFZxSWQ4M0dtd1BiTWpGSVJPVThvZDkyNm01Sy1JbjRYR2M0RkJKR2dBZ21jMy15R1cyMFYybDNUam42cFp2R2w1VHI0bExNSVlHUW5rUUJUMFU3M3dQVi1ycG9RLURlT1VvVVkwZUhiWFBZRk12YkhhdEJTRi1ZdVljTjFrdg?oc=5" target="_blank">AI时代，我们还需要学语文吗？</a>&nbsp;&nbsp;<font color="#6f6f6f">21财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMi-AFBVV95cUxQMmNpN2xKZUNIbVZjNTVkcWFiejNoOVFnQlRyTmpkaXdJeEptNHM4Z1FCWC1JVWo1VG1RMFdnUmpXMmVIRVJ4bDJma3NVTUZGd29WdmlucGJTcUJGMzFJWDNuRUtmeGxZaVJPMUVqaXNHRUpxNXh4YkhVTGVBV1dxY0RBRGVWOWdqdTc3dmtyU1ZiTU5LbmdhalphYTBRd3ZpY0trWExFbnJpMUttZVRiRmE4SXY3NjJLcHMzNlZkNWFKSkRtaEk0WFo0UTBIeEtyOS04ckhVcWRfTmd5b2dGRkNtbzY5a2VkWEhXYndPS0ozWkF4YmhpRw?oc=5" target="_blank">净利增长近29%！环旭电子吃到AI红利，CPO产能加速释放</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMickFVX3lxTE9aQmhxQlliVmlrUUZpSC1rSnJlTW9rLVFVRHZEbGtidzhlc3VPSWlZUm5VLW5YVlRFbDNWLTJiOG1taHhscTNQLVR2VzdfbktvZm1kdEU2OHZhMGtYa1hSRENOQTRuV29jcDJxRDQwNUFaUQ?oc=5" target="_blank">AI时代就业新观察丨大山里的AI新岗位</a>&nbsp;&nbsp;<font color="#6f6f6f">央广网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMipwFBVV95cUxONk1fNTdOWXBmNEVfOWNtWkItV282VXdkc1Jzck1VREpBbjgyanhqSWtHcXRXNnIydllWeTdfR1J5UXFUbG1qaklOb0lJa05uVjFwcEE2SUNtNUdab0VYVDVjQVoyNWluZ2g1YVhySGRHelVDQ2ZiVk1jczk1ZUdLYUZMSmxoVU9vMHdST3lEeEdXaGozdjgyaGl3T29SLWRrUFJwZzRaaw?oc=5" target="_blank">20期、130多个产品后，我们把「每周AI项目推荐」做成了「Builder Hub」</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪财经</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFB3UjJFZkFJOVgwcFRFZHFyV3lxbUowaUVmV3MzNlg5VHhaTExvSTlJc0xiTHRXUldhMTd2VU1YNWo2bFU4cHRSdXpSR2hONTMzRnU4SWNJdlZ2SXFWbEY0czB6VDhIZzAxdU1uX2dWWmoyRWdVdGtkRHFJbkozaGc?oc=5" target="_blank">纯AI内容为何会被平台限流封号？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE5wR0xSY0ZJTW45OGU5Wk1VUEwxSUpuWmNKOGVqRXB2N0J0SmtoNkpkYU84LUNUd3FKVmk1NXVac3pDVEN3cnlfQ1BEYVhiRDdWbk1QT040TVRHZU1iVnM5UlhRbEZiOUZqUkw4TUNTMmJBMVoxVU05Q09NZFA0Zk0?oc=5" target="_blank">虚拟人广告如何合规标注AI生成内容？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiugFBVV95cUxQa1VRdkdicWg1Rm1aZlVNMWJ1alU1QWw5WFdlam9ROEFqaEJlREhFOWpnRVZNOXlvNDdDRFFNTHhOZFBHemhaMnV4SW5IeE5VaWFabTNHVUUzRldCRW5zVDBEbE9lLUxkbTlSYXlreE0tVG1wdU9tbm5MTS01d2tTWHU3dkR5Zjd5Y1c0Mml5eEcxTy1QcmtDUGJNNDkzWlRxR3lDYlduUlJwNGNrMzVDNE1WelFDVzh3V3c?oc=5" target="_blank">SpaceX 财报后多空博弈白热化！用 moomoo AI 拆解巨额资本开支与资金流向</a>&nbsp;&nbsp;<font color="#6f6f6f">Moomoo</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMickFVX3lxTE9ZQ2I3NmNmOWV0SkJBWU0wMHBnMFNJa2FQMHVrand2VzRsX25YYk44QXAzaVdrdEZuaUliMFluMmZOLWljdFUwNk1fUDl1VzBLdXpmQWxxVTljSllteEJxNENnWkVfbm5vMUF4TDU4WXFTdw?oc=5" target="_blank">AI冲击下会计学专业毕业生就业前景如何？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE1rd0VUMmNseGJRLUZOS1dScVR3czY0bTk1OWkteFM5OGJIbzU1NWhoa3VxbGgzRzlGQU1jV212Z2VVNzJNVVVKek9HNGQ2OW5USW5uSDladVRiTUlmaWpneGhHSWMzYVl0djl1RURILWNZXzFMVEFvNkZwYXNRbTg?oc=5" target="_blank">荣威7款新车+AI上车，家越07能否领跑15万级家庭SUV？+FAQ</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMigAFBVV95cUxNbFdEMUYwQzRqUkxJQS1PbWg5NDR2S0FVb0J6dk9DTXZLOV9UbGU4M291blIyc3F0RzZmWVVaNl9LaGRTSnZFNkh0NVExakwyRWR2N00xSFdfRVUxeE1iMkpqSVN3YTlZRXRtUENma1VDdmdjUVJ4cHNOclU3ZGVvRQ?oc=5" target="_blank">苹果AI国行版何时随iOS 27正式上线？</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiTEFVX3lxTE8xa2UyazZmSmZsbXloNndPaHBEbDR6TTIza0Y0T3ZoZmF5RU43MFh2aXFBcXQ2RGJ1SEgwa0lHdnptVXFSZGM2RGlEV24?oc=5" target="_blank">美媒：中国在AI竞赛中有独特优势</a>&nbsp;&nbsp;<font color="#6f6f6f">凤凰网科技</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTE9zV3VqemZNZDgtSUUyc1M3SUVPanBTczRUcDNJNl92Nzg5Q1ppajlTMnM3dWhvVDJSNzM5Nk1PUnBIWFNWNVJ1Qms3cGEwRklpVVhYTG1CdzZiR2d6V1h6cmw5MzJpTXdJZ2EySXZMNmtMVHczYXZ3T2R4NThORVE?oc=5" target="_blank">AI虚拟人代言美瞳翻车，广告全线下架</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiW0FVX3lxTE5kT3RYa2tYNzdsT1BuNFR2Y3FESnRLUjVEX0lfT3RmbUt6cUNub1ZaZXZreDFnQlMyWG11MWh1MHhENzRUMlNyTlJHYXdCRDJrM09UUGlkTEpzdE0?oc=5" target="_blank">两年时间，陆川谈AI焦虑的态度几乎完全调转，怎么看这两种心态？</a>&nbsp;&nbsp;<font color="#6f6f6f">风闻</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMif0FVX3lxTFB6QXB6V2FMZTl2WnJCZFlHWVBqTHdYcE1TeXlMOGFRUWU0RmE1TkF3SHpsUFhYUFJnOVU4UTRWS3ZLb2hNaGExSkJiZVlLMXBzaFBrbXR3bVVuWC1GcnV4NWZlMHl4aFFMMjlKSDYzYXRyakZDNHMtRTZ4YTFKblU?oc=5" target="_blank">7万级小车敢配高速NOA+AI绘画？全新QQ3 AI智趣功能深度解析+FAQ</a>&nbsp;&nbsp;<font color="#6f6f6f">新浪网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMia0FVX3lxTE9QcEx4QU81OVhzTDgzb250Znk4X3N3WWd5WF9jMnN4RGtFb3lpTzNFR0hkeURzR2lhenI5elRYZ29QTXdSSmdpZDZ5QS1aQ0tYbHdhNGhYaThYS0xJdXJYWTRfVy1PbEwwRUIw?oc=5" target="_blank">国内全栈式AI智能体解决方案提供商盘点，2026企业选型必读</a>&nbsp;&nbsp;<font color="#6f6f6f">财富号</font>