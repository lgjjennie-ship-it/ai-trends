---
layout: default
title: "Show HN: OzBrain, a shared brain for knowledge between agents and your team"
date: 2026-08-21T23:09:06Z
slug: 2026-08-22-show-hn-ozbrain-a-shared-brain-for-knowledge-between-agents-and-your-team
source: hackernews
category: ai-community
ai_score: 8.0
tags: "agent-based systems, knowledge management, AI collaboration, team productivity, agent interfaces"
---

# Show HN: OzBrain, a shared brain for knowledge between agents and your team

**链接**: https://ozbrain.com/

**作者**: dariusmonsef

**发布时间**: 2026-08-21T23:09:06Z

**采集日期**: 2026-08-22


## AI 摘要

OzBrain is a platform designed to centralize and share knowledge between agents and teams, aiming to improve knowledge management and agent collaboration.

## AI 评价

The content discusses a significant topic with insightful community comments that delve into the challenges and implications of agent-based knowledge systems, indicating high relevance and engagement.


## 原文内容

I think agent-first chat interfaces will be a primary software modality and busy dashboard&#x2F;UI will go away. I’m not sure who exactly wins it, but I want my knowledge to grow&#x2F;go with me.<p>A lot of the “knowledge” ie research, analysis, reasoning will be done by agents as the primary user. Our current notes tools &amp; tasks management systems were built for humans… I don’t care what the 17th thing on my bug backlog is. I want to conduct agents that can execute for me and do great work.<p>What I built OzBrain to do:
+ Create a central place for agent reasoned knowledge to live
+ Be agnostic about what apps&#x2F;agents connect to it
+ Capture everything and track it so I can audit it
+ Enable teams, collaborators or partners to share brains
+ Handle conflicts so many agents in the same article doesn’t blow up
+ Refactor knowledge into more token friendly chunks and map the index well
+ Close the knowledge loop so new thinking supersedes old thinking across the corpus. Don’t erase, depreciate and link
+ Keep user data safe and secure
++ Be easy enough to use that you don’t have to have any technical knowledge<p>Some among us will always build their own custom solutions, but there are millions of tech professionals and small business owners that will use agents heavily and need a solution. So I’m trying to build that.<p>Isn’t this like gBrain? Yes, similar. I think it’s like AWS vs Vercel. AWS is very powerful, configurable, and useful if you’re technical and want to invest the time into really fine tuning your system… but if you just want your web deploy&#x2F;hosting to just work and be easy to deal with you use Vercel.<p>&#x2F;&#x2F; WHY I MADE IT<p>I’ve been enjoying getting back to my technical roots, as I lost my coding skills more than a decade ago, but with AI I can focus on the system and the product in partnership with agent coding workflows.<p>I recently built a Voice AI for older people. To build it I created an agentic engineering workflow (feel free to rip that up as I’m always looking to improve systems: <a href="https:&#x2F;&#x2F;ozbrain.com&#x2F;resources&#x2F;eng-flow" rel="nofollow">https:&#x2F;&#x2F;ozbrain.com&#x2F;resources&#x2F;eng-flow</a>) My approach with coding agents is trust but verify, and I’m trying to replace the parts where a human would review with an adversarial or specialized agent who would give a better answer&#x2F;review.<p>I have workflows that will go high level task to shipped PR running in Claude cloud sessions. I use Claude Code locally and Cursor when I want a tighter loop on doing visual work like UI or layout. And Codex to either load balance usage for TokenThriffting or when I want a different llm to think thru something.<p>It was a pain in the ass passing .md files around and keep track of which version was the most recent, so I built a hosted .md storage right in Supabase and any of my agents already have Supabase access. This let me build a solid, scalable, secure voice AI from my phone at the gym. All my agents have access to our knowledge, can write to it, update and refer to it as we build and improve the product and the systems we use.<p>Out of 75 founder friends I asked about how they manage shared knowledge, 26 built their own custom knowledge systems… Obsidian vaults with 7k files synced through a VPS, markdown repos behind their own MCP servers, cron jobs stitching Supabase to a skills file… each a different Frankenstein they have to maintain. 32 said they felt the pain of moving static files around but didn’t have any solution for it.<p>So I rebuilt my brain better and used it to build it.<p>&#x2F;&#x2F; HOW YOU CAN HELP<p>Would love to have you try it out. The maintenance loop is still in alpha so not running it on customer data yet.<p>If you built your own brain I’d love to hear how you did it. What criteria was most important for you in its design &amp; function.<p>If you are tired of shuffling .md files around I’d love to have you try out OzBrain and to give feedback, just ask your agent to put it in the shared bugs &amp; features brain!<p>Cheers!
Bubs.co


--- Top Comments ---

[sinuhe69]: I think the central question for a such memory system is whether we or the agents can find the relevant information and how to organize these data as changes continues to come in. Would we miss something in the retrieval  process? How do we organize the information so they stay actual and correct without piling up the garbage? Of course we can continue to concatenate the data and tag them with version and date, but then we have to face the problem of extracting the relevant information in a s...

[gavinboston]: Do you have a solution for degradation in accuracy when compiling larger amounts of llm-produced text? I am also building LLM knowledge&#x2F;memory systems and I&#x27;ve been surprised how bad LLMs are, even SOTA models, at summarizing non-trivial input batches of text. They get things wrong, distort the underlying meaning or data, etc.

[indigodaddy]: This is interesting. Would you consider this a different type product&#x2F;benefit than all the &quot;memory&quot; things we have seen popping up everywhere?.  Is it different just because it lives in the cloud?  To me it feels like a different thing than memory.

[rendonroman]: It’s very encouraging to see serious attempts at addressing continuity between agents’ outputs. Right now, everyone seems to be figuring out their own way of maintaining consistency across sessions without endlessly over-contextualizing each new one. This feels like an important layer of the emerging agent stack, and I think this Show HN will be useful to a lot of people working through exactly that problem.

[gosolozero]: I’m not sure I get the value over Obsidian, can you explain the static file issue? Only happens at 7K+ individual files? What happens if you always conjoin files?