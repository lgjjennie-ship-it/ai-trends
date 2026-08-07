---
layout: default
title: "Launch HN: ProvenMetal (YC S26) delivers circuit boards in days instead of weeks"
date: 2026-08-06T15:59:15Z
slug: 2026-08-07-launch-hn-provenmetal-yc-s26-delivers-circuit-boards-in-days-instead-of-weeks
source: hackernews
category: ai-community
ai_score: 8.0
tags: "PCB manufacturing, hardware startup, domestic supply chain, Y Combinator"
---

# Launch HN: ProvenMetal (YC S26) delivers circuit boards in days instead of weeks

**链接**: https://provenmetal.com/

**作者**: willcarkner

**发布时间**: 2026-08-06T15:59:15Z

**采集日期**: 2026-08-07


## AI 摘要

ProvenMetal, a YC S26 startup, offers rapid domestic PCB assembly in days, addressing the decline in US PCB production.

## AI 评价

The content discusses a significant development in the PCB manufacturing industry with potential high impact on the field. The community comments are insightful and relevant, indicating strong engagement and validation of the content's importance.


## 原文内容

Hey HN, we’re Will &amp; Johnny from ProvenMetal (<a href="https:&#x2F;&#x2F;provenmetal.com">https:&#x2F;&#x2F;provenmetal.com</a>). You send us design files or specs and we give you assembled boards domestically in days.<p>The US produced 30% of PCBs globally in 2000, now they produce 4%. Chinese manufacturers have completely dominated this space at 55% of global production.<p>Now, the need for a domestic PCB supply chain is higher than ever before, yet the infrastructure has been dissolving over the last 2 decades. What is left is mostly small family run manufacturers (CMs) that have been operating in largely the same, labor intensive way since the early 2000’s.<p>When you place an order through a CM it typically takes several days to receive a quote and complete design for manufacture review, and then you have to source all of the components (the hardest part) and bare boards yourself, then wait anywhere from a few days to several weeks for the assembly and testing of those boards.<p>We started off assembling circuit boards out of a garage with prosumer grade equipment (NeoDen YY1, Glenbrook X-ray, solder paste stencils, and manual rework stations). We believed that by owning the manufacturing process, we could turn all the front of house automations inwards. But here’s the thing… manufacturing circuit boards with prosumer grade equipment out of a garage takes a huge amount of time. Suddenly we were spending 90% of our time assembling circuit boards instead of growing the business. We were completely capacity constrained, with fancy software automations that are not the binding constraint at low volumes.<p>Then we got our heads out of the weeds, took a step back, and realized that we were trying to solve the wrong bottlenecks.<p>These manufacturers are good at manufacturing and terrible at the front of house (quoting, DFM review, and part procurement). When you look at the full process, you realize that assembly is not the bottleneck. So we stopped trying to solve the problem that we can’t solve at this stage.<p>We measured the bottlenecks and nailed down the ones that we are best positioned to solve right now.<p>When a customer wants a domestically manufactured circuit board, it is not a straight forward process. We are making that process easy through front of house automation. A customer gives us their design files, and we automatically procure components, and co-ordinate bare board fabs and assembly houses to get quotes, design review, and manufacturing completed in a very tight loop.<p>How we solve part procurement (you can’t assemble boards with no parts!): When a user places an order with us, our system automatically sources their bill of materials across US and overseas distributors. However, when we work with customers during the design process, our plug-ins interact with KiCAD and Altium, sending the BOM to our ordering platform, which allows us to automatically procure components before layout is finalized.<p>KiCAD plugin: (<a href="https:&#x2F;&#x2F;github.com&#x2F;proven-metal&#x2F;provenmetal-kicad" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;proven-metal&#x2F;provenmetal-kicad</a>)<p>Altium plugin: (<a href="https:&#x2F;&#x2F;github.com&#x2F;proven-metal&#x2F;provenmetal-altium" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;proven-metal&#x2F;provenmetal-altium</a>)<p>This enables us to order long lead time parts in advance, suggest alternatives if parts are out of stock, and solve the biggest bottleneck in the process. We store parts in our hq in SF, and then kit the boards and route them through our network. We also do long term storage of parts for long lead time items.<p>How we solve endless emails: Every manufacturer wants the same information in a different shape. There’s usually a few days of back and forth emailing to achieve clarity. We’re building a profile per manufacturer and sending the order to fit their requirements. This may sound trivial but it removes a multi-day round trip on most orders, which on a quick-turn build is a meaningful share of the time.<p>How to solve design review: Each manufacturer has individual capability sheets, and so we have a heuristic harness that Fable 5 uses to check the board for DFM issues. We’re building a streamlined process for end-to-end pcb manufacturing, but is that enough to solve the supply chain? Not a chance. Capacity is the problem, and no amount of smart software will solve it. We’re extracting real slack from the system today, that slack is finite, and at some volume the only remaining move is adding physical capacity. We think that’s where this goes.<p>We charge a simple margin on the order value depending on order complexity with fully transparent quote breakdowns. We took our first paying order in less than a week and we’ve done roughly $70k across 11 orders in 6 weeks.<p>We are very interested in your opinion. We’re working in a problem space that has problems everywhere, we’re constantly pulled in wild directions regarding which problems we solve and how we go about solving them. What do you know that we can learn from?


--- Top Comments ---

[amirhirsch]: Good luck! One valuable differentiation you could provide is a line of credit. If you can’t win on price, you can help your customers win on cash-conversion cycle. I’ve been making hardware for 20 years. My highest-volume product was Flybrix, a LEGO drone kit manufactured by Seeed and UniPrecision in China and by Sparqtron in Fremont, California. I’d be happy to work with you on a v2 reboot: Flybrix Swarmz, because every American high school needs a drone swarm. Beyond that, I’ve worked with ...

[ac29]: Any idea what pricing will be like? The fact that you call out Drone and Defense industries on your page suggests to me this is extremely expensive. I recently priced out getting a PCB done in China and its insanely cheap. My design isnt complicated, a few ICs, a few connectors, an a dozen or so passives. PCB manufacturing, parts, and soldering&#x2F;assembly is on the order of $10-20 total per board and that is with zero volume discounts. The parts alone would cost that much in the US, and I ...

[gumby]: Last autumn we sourced boards (both fab and assembly) in the US.  The vendors I’d used in the past in MV and Sunnyvale are gone but some folks are still around. Getting the boards made was slow for the reasons you said but the real problem was the parts: by mid summer 2025 the supply chains had become so disrupted that getting parts from mouser and digi-key was difficult. Design in a part with 6000 in inventory only to find by the time you ordered there were none because someone had scooped t...

[seizethecheese]: I ran a hardware startup for about a decade. We ended up doing all PCB assembly in China. We did try to find this in the USA, but it was indeed too slow and expensive. The bottleneck in assembling a PCB is usually component sourcing. My product was not the most complicated, and even then, to assemble in Shenzhen, China, it often took a few weeks to get all the components. The core issue here is that latency is determined by the outliers. Assembly can&#x27;t start until you have all units, and...

[codehero]: Love the energy, but I can hardly believe the title &quot;Proven Metals&quot; because your website does not stand up to basic scrutiny: 1) First issue: I do not know what your manufacturing constraints are for PCBs...the number of layers is not documented. I don&#x27;t even know if you support FlexPCBs. 2) I suppose I could figure out if you could make my boards in seven days if I played your upload game...but I should have to do that. Even the following site, with its clunky UI, makes it mor...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiRkFVX3lxTFBLTTFxNWtjMWs5MmxHSEhBUEZuX1ZMekx5OFpLWFZpXzVySWZLTDRCYnctRkF0dVJRSkx6RHkzQVdWRlFDbHc?oc=5" target="_blank">刚刚，AMD收购一家AI芯片公司！24人打造6nm推理芯片刷屏硅谷</a>&nbsp;&nbsp;<font color="#6f6f6f">智东西</font>