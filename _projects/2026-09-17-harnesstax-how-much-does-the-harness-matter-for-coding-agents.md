---
layout: default
title: "HarnessTax: How Much Does the Harness Matter for Coding Agents?"
date: 2026-09-16T22:10:13Z
slug: 2026-09-17-harnesstax-how-much-does-the-harness-matter-for-coding-agents
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, coding, harnesses, software engineering, AI/ML"
---

# HarnessTax: How Much Does the Harness Matter for Coding Agents?

**链接**: https://harnesstax.github.io/

**作者**: matt_d

**发布时间**: 2026-09-16T22:10:13Z

**采集日期**: 2026-09-17


## AI 摘要

The article explores the impact of different coding harnesses on AI agents, with community comments highlighting their importance and differences.

## AI 评价

The content discusses the importance of coding harnesses in AI, which is a significant topic in software engineering and AI/ML. The community comments provide diverse insights and discussions, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[nojs]: We really need better harness benchmarks. It seems there&#x27;s no reliable source that benchmarks the main harnesses against all open source models. I also wish the discussion around Pi did not always use cost&#x2F;token count as the metric. It&#x27;s amazingly token efficient, but how does it stack up again opencode and others if you don&#x27;t care about token count? My experience is that the harness is mainly polish preventing failed tool calls, bad edits, stuff like that, but doesn&#x27;...

[lukax]: What matters more is that you use the tools that the target model was fine-tuned on. E.g. for editing files with Claude models you should use Edit(file_path, old_string, new_string, replace_all) but with GPT models you should use apply_patch_call(patch) (where patch is a custom patch string with custom grammar). It appears newer models are better at narive harness tool calls and worse at custom tools that look similar to default tools.  https:&#x2F;&#x2F;lucumr.pocoo.org&#x2F;2026&#x2F;7&#x2F...

[corv]: My own findings are in line with this research: Having a coding harness is critical but the differences between them are overstated. Personally, I’ve replaced OpenCode with a thin wrapper around Pydantic-AI as the pythonic analogue to Pi-Agent for headless use via Hermes They’d all do the job - I just prefer to compartmentalize for access control. Keeping the harness’ surface area tiny had the added benefit of preserving my understanding and being able to adapt it to my preferred workflow eff...

[Yashjain413]: I think it’s really important, especially when you look at everything the tool does, from the execution loop and context management to feedback. The harness is basically the underlying source of truth. With coding agents, what I’ve noticed is that a simple task can often be handled with a fairly simple harness. But the hidden cost is really around context. One of the more interesting things I’ve seen is that two different harnesses can make a similar number of model calls while consuming a ve...

[Supermancho]: The term &quot;harness&quot; here is being overloaded for the term &quot;agent&quot;, which is worrying. Putting that aside, there are many factors that matter. The &quot;harness&quot; context, the execution pattern (parallel vs sequential), the ability to delegate to other models, etc. Optimal harnesses use concurrent execution + subagents and are not stuck on one model. Cost and performance are impacted GREATLY by these tactics, regardless of the native agent context (instruction). This kin...