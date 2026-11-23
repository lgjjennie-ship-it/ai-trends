---
layout: default
title: "A Partial Evaluator for C"
date: 2026-11-23T04:51:48Z
slug: 2026-11-23-a-partial-evaluator-for-c
source: hackernews
category: ai-community
ai_score: 8.0
tags: "C, partial evaluator, software engineering, systems research, community discussion"
---

# A Partial Evaluator for C

**链接**: https://phoenix.labri.fr/software/tempo/

**作者**: measurablefunc

**发布时间**: 2026-11-23T04:51:48Z

**采集日期**: 2026-11-23


## AI 摘要

A partial evaluator for C is announced, sparking community interest and discussion about its features and potential applications.

## AI 评价

The content discusses a partial evaluator for C, which is a significant tool for software engineering. The community comments show engagement and discussion around the tool's functionality, potential improvements, and its relevance to different languages and systems.


## 原文内容


--- Top Comments ---

[looperhacks]: I know this has nothing to do with TFA, just want to check my understanding of C. Doesn&#x27;t the code example have a bug?     miniprintf(char fmt[], int val[])
  {
    int i = 0;
    while( *fmt != &#x27;\0&#x27; ) {
      if( *fmt != &#x27;%&#x27; )
         putchar(*fmt);
      else
        switch(*++fmt) {
          case &#x27;d&#x27; : putint(val[i++]); break;             
          case &#x27;%&#x27; : putchar(&#x27;%&#x27;);     break;
          default  : prterror(*fmt);   break;
   ...

[RossBencina]: While unsuccessfully searching for the Tempo source code I found LLPE, a partial evaluator for LLVM bitcode:  https:&#x2F;&#x2F;www.llpe.org&#x2F;

[MiroslavPokorny]: &gt; The Tempo specializer has been made publicly available under a licence in April 1998. At of March 99, it was being used by about thirty people around the world. The binary version of Tempo has just (July 2000) been made available without any restrictions, and we expect a full unrestricted source release under GPL to follow soon.

[alex7o]: We need a partial evaluator for llvm bytecode imo so it works with all languages

[hizlikovboy27]: Does anyone know if there&#x27;s a modern build of it? the download on the page is an i386 Linux binary tested on RedHat 6.1

--- From hackernews ---

--- Top Comments ---

[dmos62]: What are peoples&#x27; takes on why LLMs struggle to write things in a human-readable way? I&#x27;ve watched Astra and the like write PR descriptions that are middle-school level: as if it struggles to distinguish what it knows (having read the code, having done the debugging) and what someone who hasn&#x27;t read the code and hasn&#x27;t participated in the debugging (his target audience) knows. It&#x27;ll make references to parts of the solution, or of the problem being solved, without cont...

[adgjlsfhk1]: It&#x27;s down to 13m  https:&#x2F;&#x2F;rh-shrink.github.io&#x2F; . Decent chance it hits 11m by tomorrow

[lukaslalinsky]: When I read about the proof over the weekend, I had a strange feeling afterwards. Having LLM write millions and millions line of any code feels... alien. No human is ever going to review that. It&#x27;s easy to hide secondary information in that amount of text. I could imagine many sci-fi scenarios how things could go bad, if this was executable code, not a proof.

[laser]: If you were to print it out it’s hundreds of thousands of pages or hundreds of thick textbooks. If Masullo’s proof works the fact it’s hundreds of times less verbose will really capture the current state of affairs more generally with these models. They can get the job done but have yet to fully understand elegance.

[ltononro]: It doesn&#x27;t help at all to release such thing.
No one cares about a 17M lines of Lean that no one would be able to verify.
It is equivalent to keep believing that it is true but we don&#x27;t know how to prove it.
Literally token waste