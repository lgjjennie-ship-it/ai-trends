---
layout: default
title: "Tell HN: Gemini trains on chat history, even for subscribers (personal accounts)"
date: 2026-11-04T10:10:27Z
slug: 2026-11-04-tell-hn-gemini-trains-on-chat-history-even-for-subscribers-personal-accounts
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, privacy, Google, chat history, AI training"
---

# Tell HN: Gemini trains on chat history, even for subscribers (personal accounts)

**链接**: https://news.ycombinator.com/item?id=50363461

**作者**: jameslk

**发布时间**: 2026-11-04T10:10:27Z

**采集日期**: 2026-11-04


## AI 摘要

Google's AI chatbot Gemini uses user chat history for training, with no opt-out option unless chat history is disabled.

## AI 评价

The content discusses a significant privacy concern regarding Google's use of user chat history for training AI models, which is highly relevant to software engineering and AI/ML communities. The community comments provide diverse viewpoints and insightful discussions, enhancing the content's value.


## 原文内容

If you have a personal Google AI subscription, all your saved chat history in Gemini can be used for training and there is no way to opt out unless you turn off chat history or use temporary chat sessions. These chat transcripts may even be read by human reviewers. Although Google claims to disconnect them from your account when human-reviewed, they explicitly warn <i>not to enter confidential information</i>.<p>https:&#x2F;&#x2F;support.google.com&#x2F;gemini&#x2F;answer&#x2F;16836988<p><i>“[Gemini app activity] is used to improve Google services for everyone, including by training generative AI models, if your Keep Activity setting is on.“</i><p>https:&#x2F;&#x2F;support.google.com&#x2F;gemini&#x2F;answer&#x2F;13594961?hl=en#human_review<p><i>“A subset of chats are reviewed by human reviewers”</i><p>https:&#x2F;&#x2F;support.google.com&#x2F;gemini&#x2F;answer&#x2F;13594961?hl=en#pn_retain_data<p><i>“Chats reviewed by human reviewers [...] are not deleted when you delete your activity. Instead, they are retained for up to three years.”</i><p>https:&#x2F;&#x2F;support.google.com&#x2F;gemini&#x2F;answer&#x2F;13594961?hl=en#pn_data_usage<p><i>“Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies.”</i><p>To disable their training on your chat sessions, you need to turn off “Keep Activity” in Gemini’s settings. Turning that off means you’ll lose any chat sessions after 72 hours.<p>I learned this too late, thinking that having a paid subscription = not being turned into the product. Apparently paying is not enough.<p>Thank you to this user on HN for mentioning in another thread: https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50355424


--- Top Comments ---

[richrichardsson]: What&#x27;s worse is if you have a Pixel phone then Gemini is completely useless without enabling this setting. I had it switched off: &quot;Hey Google, remind me at 7pm &lt;something&gt;&quot; &quot;OK, your reminder is set for 7pm&quot; Next day: &quot;Hey Google, why didn&#x27;t you remind me at 7pm&quot; &quot;I can&#x27;t do anything with your phone unless you enable chat history.&quot; WTAF!

[viraptor]: I don&#x27;t trust any of the providers, but at the same time I think you&#x27;re reading into the terms too much for wrong reasons. Yes, you have to opt out. But: &gt; A subset of chats are reviewed by human reviewers This is expected these days for threads which may make the provider liable. Just look at the recent death case due to bad GPT medication recommendation. &gt; Chats reviewed by human reviewers [...] are not deleted when you delete your activity. Instead, they are retained for up...

[fweimer]: Even if they don&#x27;t train on your content, Google reserves the right to use it for improving their services in other ways: “
This license is for the limited purpose of operating the services, which means allowing the services to work as designed and creating new features and functionalities.
”  https:&#x2F;&#x2F;policies.google.com&#x2F;terms?hl=en-US#toc-permission  The training exclusion has always been a distraction. These service providers have plenty of other uses for your data.

[233mhz]: imho you should act as if everything you type, not even send, is stored forever and might be used for training whenever they decide to retro actively change their TOS, no matter how much money you pay

[frevib]: If a company can do something that benefits them, and there is no way the customer can find out or prove that, the company will do it.