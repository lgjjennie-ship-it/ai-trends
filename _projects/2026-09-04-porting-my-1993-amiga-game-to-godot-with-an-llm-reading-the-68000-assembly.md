---
layout: default
title: "Porting my 1993 Amiga game to Godot, with an LLM reading the 68000 assembly"
date: 2026-09-03T14:28:18Z
slug: 2026-09-04-porting-my-1993-amiga-game-to-godot-with-an-llm-reading-the-68000-assembly
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Retro Gaming, AI, Game Development, Godot, Assembly Language"
---

# Porting my 1993 Amiga game to Godot, with an LLM reading the 68000 assembly

**链接**: https://babyloniantwins.com/blog/porting-a-1993-amiga-game-to-godot/

**作者**: rabahs

**发布时间**: 2026-09-03T14:28:18Z

**采集日期**: 2026-09-04


## AI 摘要

A developer ports a 1993 Amiga game to Godot using an LLM to read 68000 assembly, with community comments highlighting similar projects and the historical significance of retro game development.

## AI 评价

The content is highly relevant to software engineering and AI/ML, showcasing a unique application of an LLM to port a retro game and the author's detailed experience. The community comments provide insightful discussions on retro game development and AI capabilities.


## 原文内容

These are my notes from porting my Amiga game, which I originally built in Baghdad in 1993 in MC68000 assembly, to Godot, using Claude Fable 5 during last July holiday.  It took an evening! Getting the feel right and shipping it took a few more weekends and evenings.<p>I spent the last few weeks analyzing what Claude did, feeding it my 33 years of memory of how I built the game, my notes and the git repos. It wrote the first draft of the article, and I edited line by line over a week. The screenshots of my 1993 map editor is the first I have run it since then. The one thing I never verified myself is the 108-byte explanation.<p>&quot;Before starting everything, the model assembled the code using vasm on my Mac, and kept going till the binary is byte-identical to the binaries I had in my original game. Even after that, the there was mismatch of about 108 bytes. I originally used AsmOne  which assembles into memory, and the game saved into the disk by saving that memory after running the game. So the original shipped files are a snapshot of the game that had already been running, not clean asm-one output.&quot;<p>Please post any questions. I am also releasing the original game for free.


--- Top Comments ---

[gmerc]: It&#x27;s a completely new world. Random retro games I ported to modern webgl&#x2F;webgpu  in the last few months: - The Adventures of Robin Hood - Opus 4.7&#x2F;Sonnet - Syndicate - Sol&#x2F;Luna 5.6&#x2F;Opus (  https:&#x2F;&#x2F;this.os.isfine.org&#x2F;blog&#x2F;posts&#x2F;modern-game-port-syndi...  ) - Kaiser 2 - Populous Plus - Sol&#x2F;Luna 5.6&#x2F;Opus - Dragon Strike - (Fable 5.1 almost one shot) - War of the Lance - Qwnen-3.7-27B-dense (got stuck, finished with) Qwen-3.8-Flash-Next ...

[mattjoyce]: A few weeks ago I downloaded a memory dump of a zx81 game, and ask Claude to build it in Go.
It nailed it.  Converted the binary back to basic and then to go.   My idea was that the game would be unknown to llm training and perhaps a nice bench. What a crazy thing it is to be first at the advent of personal computing, and then in the inflection point where AI treats that first experience as archeology.

[btbuildem]: &gt; one copy of the Amiga Hardware Reference Manual aka The Book... my, this brings back dusty memories Babylonian Twins has such strong &quot;Gods: Into the Wonderful&quot; vibes, I wonder if that game was an inspiration for you  https:&#x2F;&#x2F;www.lemonamiga.com&#x2F;game&#x2F;gods-into-the-wonderful   https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=1kAXGjUwHyA

[dannyobrien]: I just wanted to add how much in awe I am at you creating this game in &#x27;93 in assembly. Around the same time I was trying to write a game on the Atari ST, and the dedication to the project -- especially when documentation was so thin on the ground, pre-Internet -- is extraordinary. Do you have any stories from debugging the game? I always found that the most dispiriting part, after the endless hope of handcrafting the code that I was  sure  would work first time...

[Gamemaster1379]: Neat project.I&#x27;ve been experimenting with making reusable console porting frameworks since last October. Opus 4.6 was my first success with the NES 6502. Since then I&#x27;ve done static&#x2F;native ecosystems for the Super NES, GBA. Nintendo DS, Playstation (most popular) and even Sega Genesis, such also uses the 68k.  https:&#x2F;&#x2F;github.com&#x2F;mstan&#x2F;segagenesisrecomp  I even extracted the 68k decoder to its own repo because I wanted to reuse it for the Phillips CDI. Sega d...