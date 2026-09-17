---
layout: default
title: "Keys Not Included: recovering the signing keys for US driver's license barcodes"
date: 2026-09-17T03:03:23Z
slug: 2026-09-17-keys-not-included-recovering-the-signing-keys-for-us-driver-s-license-barcodes
source: hackernews
category: ai-community
ai_score: 8.0
tags: "cryptography, driver's licenses, security, public keys, technical deep-dive"
---

# Keys Not Included: recovering the signing keys for US driver's license barcodes

**链接**: https://ryan.science/blog/keys-not-included

**作者**: Ryan5453

**发布时间**: 2026-09-17T03:03:23Z

**采集日期**: 2026-09-17


## AI 摘要

An investigation into recovering signing keys from US driver's license barcodes, with community discussion on the implications and potential uses.

## AI 评价

The content is highly relevant to software engineering and systems research, with insightful community comments that add significant value. The discussion around the technical implications and potential industry impacts of the disclosed keys is engaging and thought-provoking.


## 原文内容


--- Top Comments ---

[bob1029]: I think mDL is going to be a pretty big deal in some industries (e.g. banking). Apple announced an ecosystem around this at WWDC25. Very soon we are going to be in a world where you walk into a bank to open&#x2F;maintain an account and the following occurs: 1. The bank emails&#x2F;SMSes the customer a link 2. The customer takes out their iPhone, opens whatever email&#x2F;messaging software &amp; taps the link 3. The link takes the customer to a specially crafted page owned by the bank that tr...

[dmurray]: This is a great investigation but I have two small nits: &gt; the ZNB field is not empty and not garbage: it contains a well-formed 71-byte DER ECDSA signature, correctly Ascii85-encoded, with the right prefix and a plausible length. But it fails the cryptographic check instantly, because it was signed with somebody else&#x27;s key. Seems doubtful! I expect the forgers used a real signature from another card instead, so it has the right key but the wrong data. Reverse engineering the process ...

[bzmrgonz]: It baffles that people think it&#x27;s a bad thing to disclose a public key.  That&#x27;s their purpose actually.  Sure we now have the post quantum computer threat, and some state actors are harvesting keys, but quantum computer is going to disrupt so much, that Id verification won&#x27;t even matter really.

[KingMachiavelli]: All of this is nearly pointless unless the photo itself is in the barcode and also signed. You only need a leak of a few hundred real IDs to cover all of the identifiable characteristics (hair, eye, skin color, approx height and weight). Leak a few hundred thousand a year and now you can’t even flag leaked IDs without some false positives. A fake photo plus a valid barcode will pass any current check right? Unless you still do a secondary proprietary photo lookup that I don’t think exists.

[RockRobotRock]: I had a fake ID, and it being scannable was a huge selling point. Convenience stores all scan, and don&#x27;t seem to care if you look underage. I was only turned down two or three times, usually at bars and restaurants.