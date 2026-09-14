---
layout: default
title: "The case against JPEG XL"
date: 2026-09-14T01:02:37Z
slug: 2026-09-14-the-case-against-jpeg-xl
source: hackernews
category: ai-community
ai_score: 8.0
tags: "JPEG XL, AVIF, Image Compression, Web Technologies, Digital Imaging"
---

# The case against JPEG XL

**链接**: https://giannirosato.com/blog/post/case-against-jxl/

**作者**: contact9879

**发布时间**: 2026-09-14T01:02:37Z

**采集日期**: 2026-09-14


## AI 摘要

The article argues against the widespread adoption of JPEG XL, suggesting that AVIF might be a better alternative for web use cases due to its superior compression and quality for certain image types.

## AI 评价

The content is highly relevant and generates substantial community discussion with insightful comments, indicating its importance in the field. The discussion touches on technical aspects and practical implications of JPEG XL and AVIF.


## 原文内容


--- Top Comments ---

[Daiz]: A potentially major issue I have with AVIF is that because it is based on a video format, any hardware decoding support AVIF will get is likely to be restrained to common video scenarios. This can result in eg. only 4:2:0 YUV being supported by hardware decoders, as that&#x27;s the upper limit of AV1 Main Profile (and thus the limit of AVIF Baseline Profile). And 4:2:0 is just a poor fit for certain categories of images (like various kinds of illustrations, screenshots, etc). I would not be v...

[cbolton]: The article makes a good point: JPEG XL is amazing but not specifically for the typical Web use cases, compared to AVIF. But the conclusion doesn&#x27;t follow. Having an excellent and versatile format supported by browsers is very useful! Maybe a lossless re-encoding of my website JPEGs to gain 20% size is not worth the 33% longer decode, and maybe the website doesn&#x27;t need very high resolution images or more than 12 bits per channel. But my personal archives can definitely use that and ...

[Feathercrown]: &quot;For non-photographic images, the argument that “they should be vector images” doesn&#x27;t hold up because many images could be vector images but aren&#x27;t, and they can&#x27;t be vectorized perfectly. “The world should be different” is not a justifiable defense against optimizing for the way the world actually is.&quot; This is a good paragraph. I see people forget to apply that last sentence all the time.

[meinersbur]: &gt; I believe Web codecs should be purpose-built, efficient, and narrowly scoped to the needs of the Web. The post downplays the usefulness of versatility. I disagree. I&#x27;d prefer not to play the &quot;which image format is best for this image and this use case&quot; game and having to transcode between them. For instance, it would be great if I could have an HTML gallery showing pictures of my files as I store them on harddisk. Today these are JPEG, because it&#x27;s the lowest common d...

[nneonneo]: That JPEG XL prime computation is a pretty ugly DoS. Just selecting it in Finder, with the preview pane open, maxed out every core on my Mac inside a QuickLookSatellite that also ate 4GB of RAM while doing so - for a good 15 seconds. Not bad for a 2KB picture. It seems like Apple did not set sane limits on their JXL previewer. It is, however, an incredibly cool demo of what the format is capable of. I&#x27;m not completely sure if an image format  should  be that flexible, but I&#x27;m impres...