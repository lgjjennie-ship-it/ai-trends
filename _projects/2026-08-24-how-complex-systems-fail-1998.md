---
layout: default
title: "How Complex Systems Fail (1998)"
date: 2026-08-23T15:13:31Z
slug: 2026-08-24-how-complex-systems-fail-1998
source: hackernews
category: ai-community
ai_score: 8.0
tags: "complex systems, root cause analysis, system failures, Chaos Engineering, systemantics"
---

# How Complex Systems Fail (1998)

**链接**: https://how.complexsystems.fail/

**作者**: shortcrct

**发布时间**: 2026-08-23T15:13:31Z

**采集日期**: 2026-08-24


## AI 摘要

A discussion on how complex systems fail, emphasizing the limitations of root cause analysis and the importance of understanding system dynamics.

## AI 评价

The content is highly relevant and important for understanding complex systems, and the community discussion is insightful with diverse viewpoints.


## 原文内容


--- Top Comments ---

[tptacek]: I&#x27;m a broken record on how important I think this document is, and that it&#x27;s hard to appreciate it until you&#x27;ve had extended experience with complex systems actually failing. The most commonly cited subtext or thrust of it is that &quot;root cause analysis&quot;, at least on complex systems, is a fools errand. Something goes wrong, say, in a distributed lock system, and your whole deployment system enters a metastable failure state. Naturally, the &quot;root cause&quot; seems l...

[anonymars]: &quot;The system continues to function because it contains so many redundancies and because people can make it function, despite the presence of many flaws. After accident reviews nearly always note that the system has a history of prior ‘proto-accidents’ that nearly generated catastrophe. Arguments that these degraded conditions should have been recognized before the overt accident are usually predicated on naïve notions of system performance. System operations are dynamic, with components (...

[jedberg]: &gt; Failure free operations require experience with failure. This is why we created Chaos Engineering.  By constantly forcing failure, it made us always create systems in defense of that failure, and gave us great data on where the tipping point is for different systems within a particular failure mode.

[feyman_r]: I may have shared this before on a different submission: John Gall’s books are really good on this topic: General Systemantics [ https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Systemantics ]

[stAInley]: The operators know complex systems work. Words I&#x27;ve spoken, heard, or both: 
&quot;Just rerun it, works the second time.&quot;
&quot;That&#x27;s been failing for a while now. Just ignore the alert.&quot;
&quot;This procedure is old. We&#x27;ve added a step 64b in pencil. I can&#x27;t remember why.&quot;
&quot;Is it meant to sound like that?&quot;
&quot;What&#x27;s the tape for?&quot;
&quot;Careful you don&#x27;t bump this button.&quot;
&quot;The database name has changed, the post-it has...