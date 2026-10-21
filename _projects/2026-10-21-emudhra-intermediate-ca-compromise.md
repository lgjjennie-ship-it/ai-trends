---
layout: default
title: "eMudhra intermediate CA compromise"
date: 2026-10-20T13:58:33Z
slug: 2026-10-21-emudhra-intermediate-ca-compromise
source: hackernews
category: ai-community
ai_score: 9.0
tags: "security breach, certificate compromise, Mozilla, eMudhra, browser security"
---

# eMudhra intermediate CA compromise

**链接**: https://emudhra.we-have-a-problem.com/

**作者**: galadran

**发布时间**: 2026-10-20T13:58:33Z

**采集日期**: 2026-10-21


## AI 摘要

A security breach involving compromised intermediate certificates by eMudhra affects major browsers, with detailed community discussions and Mozilla's response.

## AI 评价

The content discusses a significant security breach involving compromised intermediate certificates by eMudhra, affecting major browsers. The high engagement and detailed community comments add to its importance.


## 原文内容

<a href="https:&#x2F;&#x2F;blog.mozilla.org&#x2F;security&#x2F;2026&#x2F;10&#x2F;20&#x2F;protecting-firefox-users-following-the-compromise-of-emudhra-intermediate-certificates&#x2F;" rel="nofollow">https:&#x2F;&#x2F;blog.mozilla.org&#x2F;security&#x2F;2026&#x2F;10&#x2F;20&#x2F;protecting-fire...</a><p><a href="https:&#x2F;&#x2F;bugzilla.mozilla.org&#x2F;show_bug.cgi?id=2083449" rel="nofollow">https:&#x2F;&#x2F;bugzilla.mozilla.org&#x2F;show_bug.cgi?id=2083449</a>


--- Top Comments ---

[eqvinox]: Since I haven&#x27;t seen this mentioned enough yet: The private key for all 8 &quot;compromised&quot; CAs is a single byte:  https:&#x2F;&#x2F;mastodon.catgirl.cloud&#x2F;@49016&#x2F;117474217042191790  One of the private keys is literally &quot;4&quot;. I&#x27;m putting &quot;compromised&quot; in quotes here, because I can&#x27;t call it that without cringing and cursing. [cf. also:  https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50169109 ]

[galadran]: The impact of this incident is very unevenly spread. Over 10 years ago, Mozilla shipped OneCRL [1]. We remediated this incident in a couple of hours for Firefox users who were protected automatically without the need for updates. Chrome, Apple and Microsoft have similar tooling. Since then, we&#x27;ve built more advanced tooling to handle revocation at scale for leaf certs (CRLite [2]). However, for the rest of the ecosystem, there has been little to no investment in revocation and for those ...

[tech234a]: Explanation from eMudhra in the Mozilla bug report  https:&#x2F;&#x2F;bugzilla.mozilla.org&#x2F;show_bug.cgi?id=2083449 : &gt;  We have done some preliminary assessment, there appears to be a flaw in the KGC script that was used on that specific day to create these ECC issuers. As for these ECC keys, our review of the KGC, assessment of the code and view of HSM keys so far indicate that a) a set of original ECC keys were created onboard as expected b) an approved deviation to our usual KGC to...

[xucheng]: This incident somehow exposes another previously overlooked issue. I just notice that so many softwares vendor their own version of CA store for no particular reason [1][2]. It is relatively easy to patch system CA bundles. It would be quite challenging to patch every binary that embedded their own CA. As such, many systems will remain vulnerable for quite some times. [1]  https:&#x2F;&#x2F;github.com&#x2F;NixOS&#x2F;nixpkgs&#x2F;issues&#x2F;576475  [2]  https:&#x2F;&#x2F;github.com&#x2F;zimb...

[hypfer]: From what the internet is telling me, the keys were allegedly found on https:&#x2F;&#x2F;repository.emsign.com&#x2F;certs&#x2F;&lt;redacted&gt;.crt Which, if true, is definitely a lot of fun. Hope you people are ready for lots and lots of suddenly hackable IoT. __ Edit: I might also be misinterpreting what I am seeing and it&#x27;s actually weak logic that created the keys, in the sense that one could guess the private key? Someone actually qualified please give credible answers.
I&#x27;m jus...