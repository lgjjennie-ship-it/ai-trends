---
layout: default
title: "Malleable Computing, Emacs, and You"
date: 2026-07-22T21:15:26Z
slug: 2026-07-23-malleable-computing-emacs-and-you
source: hackernews
category: ai-community
ai_score: 8.0
tags: "malleable computing, Emacs, interpreted lisp, web development, customization"
---

# Malleable Computing, Emacs, and You

**链接**: http://yummymelon.com/devnull/malleable-computing-emacs-and-you.html

**作者**: kickingvegas

**发布时间**: 2026-07-22T21:15:26Z

**采集日期**: 2026-07-23


## AI 摘要

An exploration of malleable computing inspired by Emacs, with community comments sharing related projects and insights.

## AI 评价

The content discusses malleable computing with a strong connection to Emacs, sparking a high-quality discussion with diverse viewpoints and practical implementations mentioned in the comments.


## 原文内容


--- Top Comments ---

[sroerick]: This is a good discussion of these principles. Largely inspired by Emacs, I built an interpreted lisp which runs in a web server and stores the AST Postgres. It gives me this kind of malleable computing and a Lispy feel with very little overhead. Instead of calling an API, agents can just use functions in a REPL. They can also write new views and improve the program if they run into an issue. Honestly, pretty amazing stuff. Being able to design a program specifically for the workflow I want i...

[gritzko]: JavaScript did this for the Web back in the day. I work on a malleable git-compatible SCM right now. First I put all the performance-critical parts into a native lib, then happily built my own git(hub) in JavaScript. Tastes differ, someone else may build it completely differently. I believe this is the right architecture for the LLM age.  https:&#x2F;&#x2F;github.com&#x2F;gritzko&#x2F;beagle

[__d]: There’s an interesting middle ground: not fully malleable software, where the end user has full customisation ability but requires full programming skill, but eg the Unix tool model where prebuilt utilities can be composed with a simple syntax. Pre-existing (or importable) ELisp functions are kinda similar, just a slightly higher level of user skill.

[cfiggers]: AutoHotkey adds a malleable computing layer to Windows.

[kickingvegas]: OP here. Happy to answer any questions about my post in this thread.