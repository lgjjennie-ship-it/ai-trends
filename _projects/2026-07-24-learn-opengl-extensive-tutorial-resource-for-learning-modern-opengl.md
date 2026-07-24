---
layout: default
title: "Learn OpenGL, extensive tutorial resource for learning Modern OpenGL"
date: 2026-07-23T14:53:34Z
slug: 2026-07-24-learn-opengl-extensive-tutorial-resource-for-learning-modern-opengl
source: hackernews
category: ai-community
ai_score: 8.0
tags: "OpenGL, Graphics Programming, Computer Vision, Tutorials, Web Development"
---

# Learn OpenGL, extensive tutorial resource for learning Modern OpenGL

**链接**: https://learnopengl.com/

**作者**: ibobev

**发布时间**: 2026-07-23T14:53:34Z

**采集日期**: 2026-07-24


## AI 摘要

A comprehensive tutorial resource for learning Modern OpenGL with engaging community discussions.

## AI 评价

Highly relevant and valuable resource for learning Modern OpenGL with insightful community comments that enhance the content's value.


## 原文内容


--- Top Comments ---

[cyber_kinetist]: The one and only Holy Bible of Graphics Programming. If you&#x27;re starting to learn computer graphics, just study through the entire site and do the examples one by one. It doesn&#x27;t matter one bit that it uses a slightly outdated API called OpenGL - you&#x27;re supposed to learn how to render things first, not about some weird obscure hardware &#x2F; driver details! After you&#x27;ve learned it, you can start learning CUDA if you want to do some more low-level compute stuff on the GPU (...

[mawadev]: I cannot imagine a field more rewarding than programming with opengl when you grew up playing games. I&#x27;m talking about hobbyist engine type of development. It is almost like therapy for any dev that does web&#x2F;cloud stuff during a day job.

[AyanamiKaine]: If you want to use the learned knowledge I would recommend to use something like Sokol [0] or use the SDL-GPU API [1]. While Sokol is more higher level both can be used. Otherwise learn opengl is a really good introduction. [0]  https:&#x2F;&#x2F;github.com&#x2F;floooh&#x2F;sokol 
[1]  https:&#x2F;&#x2F;wiki.libsdl.org&#x2F;SDL3&#x2F;CategoryGPU

[BraveOPotato]: Shaders used to not make any sense to me. The tutorial writes a simple expression and boom the screen is displaying all kinds of funky things. Then I realized you&#x27;re just writing code that executes on all pixels sequentially. That made it easier to understand

--- From hackernews ---
Hi HN, we are Marcos and Harrison, cofounders of Palmier (<a href="https:&#x2F;&#x2F;palmier.io">https:&#x2F;&#x2F;palmier.io</a>). We are building Palmier Pro, an open source macOS video editor, with built-in AI generation and a local MCP server that connects to your agent. Here are a few demos:<p>- Making some AI transitions: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=hbM_-eR1GX4" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=hbM_-eR1GX4</a><p>- Multicam editing with Codex: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=SjS2q2LT1q8" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=SjS2q2LT1q8</a><p>- Cutting long form clips into shorts: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=PR66eN2ouuQ" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=PR66eN2ouuQ</a><p>We built Palmier Pro as an internal tool when we were making AI launch videos for other startups. The main problem it solved in the beginning was the back-and-forth between AI generation platform and video editor. The iteration loop was awkward: AI videos → download → import to editor → edit → realize we need to change the AI video → repeat. So we built a minimal video editor where we could let Claude generate AI videos inside the editor.<p>As we gave more and more tools to the agent, we wanted to push to see what else agents can do in the video editing space. So today, your Claude&#x2F;Codex can:<p>- Manage projects inside Palmier Pro<p>- Import media from a public URL or filesystem to the project, and organize them in folders<p>- Search media (by embedding footages using SigLIP2 running locally)<p>- Edit the timeline (tracks&#x2F;clips&#x2F;keyframes operations)<p>- Generate images, videos, sound effects, captions, music<p>- Export videos<p>There are two ways for LLMs to interact with the editor: by connecting to the local MCP server, or using the in-app chat. Both use the same tools and APIs exposed by the video editor.<p>We have seen people using MCP server to connect to their own workflow to automate massive-scale video editing (e.g. given this same podcast style, replicate it with other footages that I have). We have also seen people using the in-app chat where it lives closer to the editor UI, with lower latency for faster iteration.<p>We don&#x27;t believe that AI is going to replace human creativity (nor should it), but where it can really help is in automating the gruntwork in video editing. Most work in the editing workflow is more mechanical than creative. Our vision is to build a video editor where AI can enable more individuals to create.<p>Throughout our experiments, AI is not very good at creative editing, but given a pattern (transcription-based, beat-based), it can do a decent job at rough cut.<p>We built Palmier Pro in Swift as an MVP because we wanted better performance and minimal dependencies (no nodejs&#x2F;webview), with some native macOS APIs like SpeechAnalyzer and CoreML for us to run some models locally. We use SpeechAnalyzer for local transcriber, SigLip2 to embed video frames, beat_this for beat detection, Silero VAD for silence detection, all running locally. The tradeoff is that we don&#x27;t support Linux or Windows at the moment.<p>Palmier Pro is open source and free to try out (macOS 26 only at the moment, though - we&#x27;ll support more platforms over time, but for now are focusing on iterating the core product).<p>No login required except for the AI generation features, which route requests to our backend. We are offering free credits on sign up so you can try out the AI generation as well.<p>We&#x27;d love to hear your feedback!


--- Top Comments ---

[Marciplan]: This looks great! Have you thought about dropping the &#x27;subscription&#x27;-part and &#x27;just&#x27; selling credits instead? Here&#x27;s my thinking as a SaaS founder: when I launch a product, I don&#x27;t need a video every month. So a monthly pricing makes me do this little calculation every time: &quot;do I need a video this month? nah. Then I&#x27;ll wait. I lose the early-bird price, but I still net out cheaper.&quot; And since there&#x27;s no yearly option, there&#x27;s nothing pul...

[nsbk]: This is what I have been waiting for in order to process my massive action camera library, I will definitely give it a try! I will start with older standard GoPro videos, and hope that by the time I make it to the Insta360 videos the editor supports 360 video (unless it does already!)

[dthedavid]: Nice project. I’m building a similar project. It’s open source too.  https:&#x2F;&#x2F;github.com&#x2F;DonkeyUseCorp&#x2F;Donkey  It’s mostly a web app with a native swift companion app to access local resources like TTS, file storage and video rendering. I arrived at the same conclusion as you; every app should have AI chat. Just give it full access to the app like a real user. I found that users prefer talking to the AI when editing vs clicking around.

[misterchocolat]: I&#x27;ve been following Marcos&#x27;s youtube channel and it&#x27;s so great to see that they&#x27;ve  finally found their thing. Looks like an awesome product that people actually want. Well done.