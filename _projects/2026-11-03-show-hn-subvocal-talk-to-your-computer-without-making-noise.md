---
layout: default
title: "Show HN: Subvocal – Talk to your computer without making noise"
date: 2026-11-02T17:16:17Z
slug: 2026-11-03-show-hn-subvocal-talk-to-your-computer-without-making-noise
source: hackernews
category: ai-community
ai_score: 8.0
tags: "smart glasses, silent speech, accessibility, computing, innovation"
---

# Show HN: Subvocal – Talk to your computer without making noise

**链接**: https://news.ycombinator.com/item?id=50340088

**作者**: aarushyadav

**发布时间**: 2026-11-02T17:16:17Z

**采集日期**: 2026-11-03


## AI 摘要

Subvocal is developing smart glasses that decode silent speech to text, offering a novel way to interact with computers discreetly.

## AI 评价

The content is highly innovative and has potential significant impact on accessibility and hands-free computing, with insightful community discussion.


## 原文内容

Hi HN, we&#x27;re Aarush and Arnav from The Subvocal Company (YC F26) (<a href="https:&#x2F;&#x2F;subvocal.company&#x2F;">https:&#x2F;&#x2F;subvocal.company&#x2F;</a>). We’re building smart glasses that let you talk to your computer without talking out loud. You can mouth words silently and discreetly and the glasses decode them to text at the speed of speech.<p>Here&#x27;s a video of Dave from YC trying it out: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI</a><p>(Edit: you don&#x27;t actually have to move your lips or even open your mouth for this to work! Since the RF can see inside your mouth the system can be fine tuned on &quot;internal speech&quot;. This isn&#x27;t the automatic tongue movements that occur when &quot;thinking&quot; words to yourself, but more like mouthing with your lips closed. It&#x27;s a bit weird to do, but with practice, we have been able to get it down pretty well.)<p>Arnav and I were studying CS at Georgia Tech at the beginning of the year, with no experience in silent speech or sensing. We were both AI-native builders and power users of Wispr Flow. What bugged us was not being able to use these tools in the library (or an office) or in public. At Stanford’s TreeHacks in February, we decided to build the most technically ridiculous thing we could think of. We’d read about AlterEgo, a silent speech system out of MIT’s Media Lab, and wanted to recreate it in 36 hours. We built a crude prototype, sticking EMG electrodes onto my face:<p><a href="https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV0K9r2&#x2F;view?usp=sharing" rel="nofollow">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV...</a><p>We got it to kind of work at a letter level in a very janky way. It wasn’t good enough to win the hackathon, but convinced us to go all in. The first time I typed a sentence without anyone noticing, I felt the magic of the technology.<p>We quickly realized EMG (reading muscle electrical signals) wouldn’t work:<p>- Signal changes due to sweat<p>- Electrical interference<p>- Placement variability<p>- Most importantly, no one wants to stick electrodes onto their face!!<p>So we switched to RF and built the glasses you see now. They emit radio waves, similar to Bluetooth, that pass through your face. As they cross the tongue, lips and soft palate, they’re modulated by silent mouthing. We train foundation models on this data to decode these perturbations to text.<p>Despite prior academic research, getting this to work was a huge engineering challenge. First we built an extremely low noise RF sensing stack. Then we had to place antennas so their fields overlapped maximally with the articulators. Our first attempt on glasses failed completely, so we reverted to old habits and taped antennas on our face:<p><a href="https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpcBAfX-&#x2F;view?usp=sharing" rel="nofollow">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpc...</a><p>Since taping antennas consistently in the same spot and angle was hard, we created this weird but effective head rig to hold them in place:<p><a href="https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4CAF1pT&#x2F;view?usp=sharing" rel="nofollow">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4C...</a><p>This worked, but obviously wasn’t a product yet. So we worked deep in simulations to design glasses that could hold the antennas.<p>That evolved into our design now, with antennas embedded within the frames. Once we established there was a signal, the next hurdle was cross-user generalization. Everyone’s facial anatomy, and hence RF signal patterns, are vastly different. We tried algorithmic workarounds but realized the only lever was to massively scale pretraining data.<p>So that’s what we did. We set up booths in our office and paid people to read prompts wearing our glasses, to pretrain our models on. This produced a beautiful scaling curve, with errors falling quickly as we scaled our dataset and cross-user performance becoming genuinely compelling (as you see in the video above; Dave only had a short 20-sentence calibration).<p>We always heard about building things from first principles but never understood it before this. We tried tackling it top down but completely failed. Only when we broke each component (the antenna, electronics, ML) down to its fundamentals to understand and optimize it did we get it to work really well.<p>Over the next few months we’re continuing R&amp;D to turn our prototype glasses into the slick product on our website and ship in Q1 2027. We’re also scaling up our dataset to improve performance on edge cases.<p>For anyone who loves voice dictation but hates using it around people, we’ve opened preorders for our first batch of 500 units, with a $200 discount off the final price. Allocation is running out quickly, so get yours at <a href="https:&#x2F;&#x2F;subvocal.co&#x2F;preorder" rel="nofollow">https:&#x2F;&#x2F;subvocal.co&#x2F;preorder</a>!


--- Top Comments ---

[mobilejdral]: Rather than glasses which have a history of creepy camera behavior I do like how this guy used the AirPods Pro 3 to build an imitation of this.  https:&#x2F;&#x2F;x.com&#x2F;AGTPinsights&#x2F;status&#x2F;2116835440107856366

[vessenes]: Just preordered -- glasses request: there&#x27;s no way to say it nicely, I have a big nose. With a high bridge. Many glasses are really tough to get properly placed; may I request you not give up on the pads w&#x2F;metal adjusters that you have in the product photos? Don&#x27;t let a designer take them away from you, us folks not one standard deviation from &#x27;normal&#x27; noses will thank you. Second, how tough is this signal processing? Will it be done on-glasses, or through an app? Thi...

[ghusbands]: The announcement says &quot;and the glasses decode them to text at the speed of speech.&quot; From your other comments, the glasses do not decode them (that&#x27;s done in the cloud) and there&#x27;s noticeable delay that would prevent conversational use. Could you clarify what you meant?

[sourpanda]: I think this is incredibly cool and straight out of a sci-fi novel! I think this is phenomenal for accessibility and for hands-free computing in general. I also agree with other comments that the website should have more detail on how it works, such as what you included in the post body. Amazing work guys!

[growt]: If the tech is mostly in the glasses temples, I would prefer to have something that attaches to my existing glasses. I have prescription glasses and a big head, tried the Even G2 smart glasses and the available frames set just too small for me