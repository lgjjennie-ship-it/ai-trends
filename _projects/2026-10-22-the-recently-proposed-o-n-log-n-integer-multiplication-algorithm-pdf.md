---
layout: default
title: "The recently proposed o(n log n) integer multiplication algorithm [pdf]"
date: 2026-10-22T02:30:52Z
slug: 2026-10-22-the-recently-proposed-o-n-log-n-integer-multiplication-algorithm-pdf
source: hackernews
category: ai-community
ai_score: 8.0
tags: "integer multiplication, algorithm, complexity theory, AI in mathematics, technical breakthrough"
---

# The recently proposed o(n log n) integer multiplication algorithm [pdf]

**链接**: https://web.maths.unsw.edu.au/~davidharvey/research/subnlogn.pdf

**作者**: craigcitro

**发布时间**: 2026-10-22T02:30:52Z

**采集日期**: 2026-10-22


## AI 摘要

A new o(n log n) integer multiplication algorithm is proposed, sparking discussions on its implications and the role of AI in mathematics.

## AI 评价

The content discusses a significant technical breakthrough in integer multiplication with an o(n log n) complexity, and the community comments provide insightful discussions on the paper's implications and the role of AI in understanding complex mathematics, indicating high relevance and value.


## 原文内容


--- Top Comments ---

[jdb1729]: &gt; It would be good to have a formalised proof of the o(n log n) result, for example in Lean. As far as I can tell, one does not yet exist. The result is fully formalized in Lean by @platypii and myself (on Mathlib&#x27;s TM2 machine), with ongoing improvements to the exponent (currently at 1-2^-14.38):  https:&#x2F;&#x2F;github.com&#x2F;platypii&#x2F;integer-mult-bounds-lean  Contributions are welcome!

[Kapura]: &gt; I have not actually read the paper. In fact, there are three closely related papers [TC26a], [TC26b], [TC26c], and I have not read any of them. I tried, but soon gave up. The math(s) dump does not appear to be strong on exposition. Instead, I asked Fable to explain [TC26a] to me. Fable seems to understand the argument and thinks that it is correct. this does not feel like a healthy place to be

[kenferry]: &gt; There is one other aspect of the situation that I would like to emphasise. After two weeks of very
hard work, I have managed to understand only a small fraction of [TC26a]. When I ask Fable about
the paper, it seems to read and understand the whole thing in just a few minutes, even starting
from a fresh context. I know that some readers may be uncomfortable with my anthropomorphic
terminology, but I believe that “understand” is accurate, in the sense that the LLM seems to be able
to corr...

[jdb1729]: &gt;  The new result does not directly imply new complexity bounds for polynomial multiplication over a fixed finite field, say multiplication in F2[x]. The state of the art for this problem is an algorithm that multiplies polynomials of degree n in time O(n log n 4^log*(n)) [HvdH19]. @platypii and I obtained a Lean proof of the same improvement for DFT over prime-order finite fields (yielding polynomial multiplication via the convolution theorem):  https:&#x2F;&#x2F;github.com&#x2F;platypii&...

[flebron]: Note in this case the title says &quot;O(n log n)&quot;, but the important part is this is &quot;o(n log n)&quot;, not just &quot;O(n log n)&#x27;. The former is a strict subset of the latter. We already knew how to multiply two n-bit integers in O(n log n) time, via the FFT.

--- From hackernews ---
<a href="https:&#x2F;&#x2F;patchtheplanet.org&#x2F;" rel="nofollow">https:&#x2F;&#x2F;patchtheplanet.org&#x2F;</a>


--- Top Comments ---

[ptmkenny]: The first sentence of &quot;Coordinating a global response&quot; is &quot;Getting a fix into use can mean adapting it for older releases&quot;... but I guess they mean &quot;only supported releases&quot;, as the fixes only go back as far as 8.2, which still has security support until the end of the year, but nothing for 8.1 or 8.0, and in the case of PHP there are still plenty of PHP sites on 7.x and even 5.6. I wouldn&#x27;t expect the PHP team to provide patches for versions for which secur...

[nr378]: It seems like OpenAI are trying to frame this as if AI did all the work here, but it&#x27;s not really true given what Calif say ( https:&#x2F;&#x2F;calif.io&#x2F;php2shell&#x2F; ): &gt; How did we find this? &gt; No special harness, or access to models that weren&#x27;t generally available to everyone were used in the initial bug discovery. I focused on something I had a background in, knew its vulnerability history well, and held a theory that specific bugs lurk within the codebase. This sh...

[12837615]: The commit $1 billion in tokens to &quot;defenders&quot;. $1 billion directly to QA for open source projects [1] which would write 100% code coverage, run ASAN and fuzzers would be more effective. But of course there would be no marketing. [1] From whom you stole everything in the first place.

[alper]: &gt; How can we help identify and fix vulnerabilities in downstream packages while upstream fixes are pending, or backport fixes to older versions that no longer receive security updates? Is the company selling a magical code generation machine really asking how it can backport a fix to an older version of the same software? Is this for real?

[wildmXranat]: So much fluff and marketing from every group. Just give us the damn code to verify things are working since so many have to use stopgap solutions and want to verify them