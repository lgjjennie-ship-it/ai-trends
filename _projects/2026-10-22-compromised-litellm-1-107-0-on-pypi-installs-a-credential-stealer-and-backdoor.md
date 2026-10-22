---
layout: default
title: "Compromised LiteLLM 1.107.0 on PyPI Installs a Credential Stealer and Backdoor"
date: 2026-10-21T14:00:26Z
slug: 2026-10-22-compromised-litellm-1-107-0-on-pypi-installs-a-credential-stealer-and-backdoor
source: hackernews
category: ai-community
ai_score: 9.0
tags: "security, Python, software engineering"
---

# Compromised LiteLLM 1.107.0 on PyPI Installs a Credential Stealer and Backdoor

**链接**: https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/

**作者**: abhisek

**发布时间**: 2026-10-21T14:00:26Z

**采集日期**: 2026-10-22


## AI 摘要

A major security vulnerability was discovered in LiteLLM 1.107.0 on PyPI, which installs a credential stealer and backdoor.

## AI 评价

The content details a significant security breach in a widely-used Python package, which is highly relevant to software engineering and cybersecurity. The community discussion is insightful and diverse, further increasing the content's importance.


## 原文内容


--- Top Comments ---

[linsomniac]: Just going to remind you all that  https:&#x2F;&#x2F;canarytokens.org&#x2F;  exists.

[crossroadsguy]: All the sandbox-exec and all the Lulu rules are not going to protect against something like this. At one point permission pop-up fatigue sets in we start giving any permission as if it&#x27;s normal. We also become desensitised to isntalling tools: brew, npm, it becomes second nature. &quot;Oh, those 367 tools installed by package X? Yeah yeah, must be normal, that&#x27;s how all these work now&quot;. &quot;Brew shows 59 packages outdated?&quot;. &quot;Must upgrade&quot;. &quot;Yeah, done. Pe...

[rsanheim]: This is the second significant exploit against LiteLLM in what, a year or two ? Just last night I came across notes and a script from an older claude session to help audit all project dependencies and verify nothing used litellm. Okay, checked, it was March of  this  year:  https:&#x2F;&#x2F;futuresearch.ai&#x2F;blog&#x2F;litellm-pypi-supply-chain-attac... . What even is time anymore in the llm age?

[pkulak]: How could this happen to a project with 55k commits in three years?

[threecheese]: &quot;Attackers compromised 3 unique developer github credentials&quot; is a little scary; this seems systemic - if three developers had their keys stolen, it implies the real problem is elsewhere. They revoked all but one developers, which is probably the right approach, but I&#x27;d pin LiteLLM to &quot;something before this version&quot; and keep it there until further notice!

--- From hackernews ---

--- Top Comments ---

[molf]: This seems super light on details and I had to dig to find more information. We don&#x27;t use Gitlab, but we do use Ruby, so I was worried we might be impacted. This is the best overview I found:
 https:&#x2F;&#x2F;lilting.ch&#x2F;en&#x2F;articles&#x2F;gitlab-cve-2026-110264-org-mo...  The bottom line: this is an issue in Ruby&#x27;s regex engine, which was fixed in April and backported recently. [1] Everyone running applications where attacker-controlled input might find its way (unescaped)...

[jimmyl02]: Awesome find by  https:&#x2F;&#x2F;hackerone.com&#x2F;joaxcar  and it&#x27;s a little bit frightening that this severe of a bug isn&#x27;t the biggest security vulnerability of today

[jeffybefffy519]: Gitlab has such a high rate of vulns, this release ahas 13 fixed and in a week there will probs be another 10

[miduil]: At least second regex related CVE in GitLab in the past few weeks. Awful to see that the endpoint is reachable unauthenticated, but I&#x27;m glad that they provide guidance in how to check the logs for attempts of exploitation

[ezekg]: Is this a bug in GitLab or in Ruby? It&#x27;s hard to tell from the report and the patch...