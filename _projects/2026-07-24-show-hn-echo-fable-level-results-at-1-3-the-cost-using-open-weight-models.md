---
layout: default
title: "Show HN: Echo – Fable-level results at 1/3 the cost using open-weight models"
date: 2026-07-23T19:26:01Z
slug: 2026-07-24-show-hn-echo-fable-level-results-at-1-3-the-cost-using-open-weight-models
source: hackernews
category: ai-community
ai_score: 8.0
tags: "AI, Machine Learning, Open-Weight Models"
---

# Show HN: Echo – Fable-level results at 1/3 the cost using open-weight models

**链接**: https://news.ycombinator.com/item?id=49026810

**作者**: adam_rida

**发布时间**: 2026-07-23T19:26:01Z

**采集日期**: 2026-07-24


## AI 摘要

Echo is an AI system that combines multiple open-weight models to achieve superior performance at a reduced cost.

## AI 评价

The content discusses a significant innovation in AI systems by combining multiple open-weight models to achieve better results at a lower cost, which is highly relevant to the field. The community discussion is insightful and diverse, adding to the content's value.


## 原文内容

I’ve been building Echo (<a href="https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;" rel="nofollow">https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;</a>), an experiment in making one AI system out of a pool of open-weight models rather than choosing a single model and using it for every task.<p>It started with a simple experiment. I took a group of models, including GLM-5.2, Kimi K2.7 and others, and ran them on the same evaluations. Then I measured what would happen if, for each problem, you somehow knew in advance which models would be useful and how their outputs should be combined.<p>That hypothetical system performed substantially better than any individual model in the pool. Of course, it is not something you can actually deploy because it relies on knowing which decisions were good after seeing the result. Echo is my attempt to recover some of that advantage without having that information in advance.<p>For each request, Echo decides how much computation to allocate, which models should participate, and how their work should be combined. Some prompts may only need a relatively small amount of inference, while others benefit from multiple models working on different parts of the problem.<p>One thing that surprised me while building it was how complementary the models are. A model that is clearly weaker overall can still be extremely useful on particular problems or as part of a combination.<p>On my first evaluation mix, Echo consistently performed better than the best individual model in its pool. It also reached roughly the same aggregate result as Fable, which I used as one of the stronger comparison systems, at around one third of the inference cost.<p>There are still some cases where Echo makes the wrong allocation or combination decision. I’m currently spending a lot of time understanding those failures, as well as testing whether the same approach holds up on coding and agentic tasks where measuring the quality of each decision becomes much harder.<p>I built a chat interface (echo.tracerml.ai) and an OpenAI-compatible API (<a href="https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;docs&#x2F;api" rel="nofollow">https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;docs&#x2F;api</a>) so the system can be tested outside the evaluation setup.<p>Here is a short&#x2F;high level video on how it works: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=lJFJSvOdXhg" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=lJFJSvOdXhg</a><p>I wrote up the evaluation methodology, individual model results, costs and current limitations here: <a href="https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;eval" rel="nofollow">https:&#x2F;&#x2F;echo.tracerml.ai&#x2F;eval</a><p>I would love for you to try it! Especially if you hit any weird failure cases or places where the allocation looks unintuitive.


--- Top Comments ---

[runtime_lens]: I wouldn&#x27;t be surprised if &quot;the best model&quot; becomes a niche concept over the next few years.
For most production systems the winning architecture may end up being an orchestrator that knows when to call a cheap model when to escalate to a stronger one and when to combine multiple outputs.

[adam_rida]: thanks to everyone for taking the time to try Echo and share feedback, this is precisely why i wanted to launch early. i am going to try to address a couple of topics that came up often: -  i&#x27;ll keep publishing stronger evals, including more difficult coding and agentic benchmarks, to map out more precisely the differences with sota - the public eval dashboard will keep expanding and be updated (very open to more benchmark suggestions as well!) - some people found issues in the eval dash...

[jdthedisciple]: Grandiose claims that are hardly backed up at all. I find that very off-turning!

[cheema33]: &gt; Fable-level results at 1&#x2F;3 the cost I am guessing this is not targeting those of us on the heavily subsidized $200&#x2F;mo plans. Sure, these plans may be temporary, but none of us really know how temporary they are. Until then, 1&#x2F;3rd of the published API pricing is not very appealing.

--- From hackernews ---
<a href="https:&#x2F;&#x2F;littletech.org&#x2F;" rel="nofollow">https:&#x2F;&#x2F;littletech.org&#x2F;</a><p><a href="https:&#x2F;&#x2F;static.politico.com&#x2F;4a&#x2F;bf&#x2F;9c4021d8404386b0a311dcccf0e5&#x2F;lta-open-weight-ai-letter-7-22-26.pdf" rel="nofollow">https:&#x2F;&#x2F;static.politico.com&#x2F;4a&#x2F;bf&#x2F;9c4021d8404386b0a311dcccf0...</a>


--- Top Comments ---

[capevace]: I‘m not even sure what the argument for banning Chinese models&#x2F;open weights even is supposed to be? 1. if it’s to stop hackers doing hacking things with „uncontrollable models“ then, well… they’re already doing something illegal to begin with, why would they care about breaking another law running these models? 2. if it’s to stop foreign actors, then that ban would not apply to them anyway 3. it’s not stopping distillation either, Chinese labs are already banned from using US frontier mo...

[blacksoil]: They argue that the Chinese models  distill US models as one of the basis of the potential ban. I think it&#x27;s quite ironic considering even the US models themselves are using data out there on the internet without asking for permissions and in many cases even infringing copyrights...

[GodelNumbering]: Proprietary model weights are IP, their outputs are not IP and I can&#x27;t imagine a court decision that would rule otherwise because that would set an extremely far reaching and dangerous precedent, even for American businesses. I don&#x27;t think distillation as &#x27;stealing IP&#x27; has any legal legs. They can probably claim violation of ToS at best because the terms of use do prohibit use for training rival models.

[vkaku]: Read this thread when you get the time:  https:&#x2F;&#x2F;x.com&#x2F;_vkaku&#x2F;status&#x2F;2080352797606744209  Open Data+Open Models gives everyone else an advantage and bringing regulatory capture here should be appealed and brought to the FTC and the courts to challenge such regulations. Startups need better than this whole lock down into four overvalued frontier models in the US sort of thing

[nullbio]: You guys need to wake up and realize that Anthropic are the enemy. They just increased their political spending as well... Stop giving them your money or this never ends.