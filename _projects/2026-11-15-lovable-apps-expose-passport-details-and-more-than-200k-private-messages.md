---
layout: default
title: "Lovable apps expose passport details and more than 200K private messages"
date: 2026-11-14T17:43:10Z
slug: 2026-11-15-lovable-apps-expose-passport-details-and-more-than-200k-private-messages
source: hackernews
category: ai-community
ai_score: 8.0
tags: "security, privacy, app-vulnerabilities"
---

# Lovable apps expose passport details and more than 200K private messages

**链接**: https://www.crissyfield.de/research/lovable-en/

**作者**: armcat

**发布时间**: 2026-11-14T17:43:10Z

**采集日期**: 2026-11-15


## AI 摘要

A study reveals that popular 'lovable' apps expose passport details and over 200K private messages due to security flaws.

## AI 评价

The content discusses a significant security vulnerability in popular apps, with insightful community comments on the roles of Lovable and Supabase, indicating high relevance and discussion quality.


## 原文内容


--- Top Comments ---

[neathack]: Hi, I’m the author of this blog post. I submitted it to HN two weeks ago, but it didn’t gain much traction, so I’m glad to see it resubmitted. Happy to answer any questions, though I think the situation is fairly self-explanatory.

[SOLAR_FIELDS]: The part people are ignoring is Supabase&#x27;s culpability in this matter:  https:&#x2F;&#x2F;github.com&#x2F;orgs&#x2F;supabase&#x2F;discussions&#x2F;4547  This was supposedly fixed on October 30, but there are reports floating around that for existing projects, the defaults still apply. Lovable deserves some heat for using this, but this was a choice that was made by Supabase many years ago to support making it easier to onboard potential customers, a deliberate tradeoff of less onboarding...

[igorandri]: Igor here, Head of Security at Lovable. Thanks to the Crissy Field team for their work.
The root cause in these apps was insufficent Row-Level Security, which is exactly what our scanning is built to catch. We scan every app automatically before publish and offer a deeper SAST scan, both free for all users. When we flag findings, users can select “Fix” and Lovable will help resolve them. They can also enable auto-fix, which resolves security findings in the background, and block publishing en...

[Oras]: One might argue that data breaches been there way before AI, the difference with these AI generated apps is: - They are an easy target, they don’t need any sophisticated hacking knowledge (article mentions inspecting network calls in browsers). - There tons of those, and more created everyday. For the average user, they don’t know what they are using, or how risky it can be.

[liquid_thyme]: These are canaries in the colemines. Platforms need better defaults, deny-by-default DBs, least-priviledge API, automated auth tests, etc. Basically make insecure deployments difficult with AI generated code.

--- From hackernews ---

--- Top Comments ---

[blinkingled]: Total KDE fan and that&#x27;s all I run at home. It&#x27;s an interesting study also in desktop environment and software written in C++ and just how hard it is to get something that works for most people. Mistakes, corrections, building the basic blocks like Qt in the early days and keeping a bunch of people with differing cultures &#x2F; tastes &#x2F; backgrounds&#x2F;needs motivated to make it better every day - fascinating achievement. Thank you KDE folks - I contribute in terms of bug rep...

[esFran]: KDE is amazing. Outstanding performance, outstanding design, and endlessly configurable. But the most amazing thing of all is that you&#x27;ve achieved this while competing against teams like Microsoft&#x27;s or Apple&#x27;s, which spend millions of euros and are made up of thousands of people. Congratulations, team. Here&#x27;s to 30 more years.

[mrinf1nity]: KDE is how desktops should be. &#x27;The Year of the Linux&#x27; is NOW, a few years ago. Linux and KDE have given me not only freedom over my own hardware, but freedom over how I interact with my desktops. Once you know the shortcuts, things become so much more fun. Much love to the KDE team. Linux life, yo.

[mongol]: I am a bit prod of having seen the original post looking for volunteers to build a Kool Desktop Environment. I was obsessively reading Usenet groups at the time. And I remember there were quite early betas published, I did not run them at first, but I remember much enthusiasm about it. So I feel familiar with the beginnings although I never participated in the project development-wise. All the way up to KDE 4 I was quite close to the project as a user. But since KDE 4 was so unstable and bugg...

[ddtaylor]: Big shout out to Harald Sitter at KDE. I&#x27;m a long-time contributor to KDE, but my contributions are small and often times required jumping into a completely different project each time. Combine that with some of it being Qt related and how those libraries are linked and it can be a bit painful sometimes. Herald helps with this kind of stuff and provides a lot of very useful amplification where a minute of his time ripples out into many fixes and merges.