---
layout: default
title: "Portal by Spotify cut my Claude Code token usage by 90%"
date: 2026-09-04T23:38:50Z
slug: 2026-09-05-portal-by-spotify-cut-my-claude-code-token-usage-by-90
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI/ML, Spotify, Token Efficiency, Claude Code, Natural Language Processing"
---

# Portal by Spotify cut my Claude Code token usage by 90%

**链接**: https://engineering.atspotify.com/2026/9/portal-by-spotify-cut-my-claude-code-token-usage-by-90

**作者**: cebert

**发布时间**: 2026-09-04T23:38:50Z

**采集日期**: 2026-09-05


## AI 摘要

A Spotify-developed tool, Portal, significantly reduces Claude Code token usage by 90%.

## AI 评价

The content discusses a significant improvement in token usage reduction for Claude Code, which is valuable for the AI/ML community. The discussion quality is high with insightful comments on the technical aspects and potential implications.


## 原文内容


--- Top Comments ---

[pmdr]: I wish websites would stop messing with the scrolling behavior.

[sognetic]: There are a bunch of approaches that do this kind of thing to reduce token usage (&quot;semble&quot; came to mind, technically different but functionally similar) but their performance is usually mixed because the models haven&#x27;t been RL tuned to use them as they have the default tool suite. Combine that with the incentive by Anthropic et al. to make you actually burn through as many tokens as possible and I don&#x27;t see these kind of things becoming mainstream yet. Maybe once we reach ...

[solenoid0937]: So this is just delegating certain work to dumber models? I certainly wouldn&#x27;t use Gemini 2.5 Flash (!!?) for code writing as suggested. I&#x27;ve never had an issue with Codex or Claude reading massive files, they&#x27;re really good at precise greps.

[jnwatson]: It cuts token usage because they are using a different service with a different token budget for the reader&#x2F;code writer tasks. You can also just delegate this to subagents with Claude Code (though you have a more limited choice of models unless you swap the cheaper models via OpenRouter). I&#x27;m OK using a dumb model as a smart grep, but the whole point of using the frontier models is using their intelligence for the hard stuff like coding.

[faangguyindia]: It doesn&#x27;t work well in practice. Try it yourself, use a big model like Opus or Sol to implement everything by first making a plan using plan mode. Then try distributing the task to a cheaper models like Luna Max or Gemini Flash 3.8. During planning, the big model already reads the relevant files in context, while giving a smaller model a slice of work itself requires the big model to reason about the task distribution, review, etc. So do you really save on tokens?