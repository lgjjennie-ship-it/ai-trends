---
layout: default
title: "A spectre is haunting Unicode"
date: 2026-08-15T14:34:04Z
slug: 2026-08-16-a-spectre-is-haunting-unicode
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Unicode, Character Encoding, Software Engineering"
---

# A spectre is haunting Unicode

**链接**: https://www.dampfkraft.com/ghost-characters.html

**作者**: sensanaty

**发布时间**: 2026-08-15T14:34:04Z

**采集日期**: 2026-08-16


## AI 摘要

The article explores the issue of 'ghost' characters in Unicode and their impact on character representation.

## AI 评价

The content discusses a significant issue in Unicode, the 'ghost' characters, which is important for software engineering and systems research. The discussion quality is high with insightful comments from the community.


## 原文内容


--- Top Comments ---

[joshdavham]: The author Paul McCann (polm) is one of my favourite programmers out there! He’s done awesome work in the Japanese NLP space over the last decade which has really helped me in my language learning projects. He maintains a mecab (Japanese tokenizer) wrapper for Python [0], has a book on Japanese NLP written for English speakers [1] and also worked on Spacy at one point [2]. [0]  https:&#x2F;&#x2F;github.com&#x2F;polm&#x2F;fugashi 
[1]  https:&#x2F;&#x2F;www.japanesenlp.com&#x2F; 
[2]  https:&#...

[erjiang]: I think there’s evidence found for the origin of “彁” as the result of a poor scan of a newspaper article. Look up “彁 新聞” to find some japanese sources about this.

[gweinberg]: It occurs to me that we can use 彊 to mean &quot;a completely unknown concept that cannot be named&quot;.  For example if you ask, &quot;when Cthulhu rises from its slumber, what is thefirst thing it will do? Probably it will 彊.

[hnfong]: Well, vast swaths of the Kangxi dictionary (which serves as &quot;sources&quot; for probably most of the CJK characters) are such &quot;ghost&quot; characters as described in the article... The peculiar properties of CJK characters and the philosophy (apparently the Japanese did not like Unicode&#x27;s tendencies towards Aristotelian essentialism) under which they were implemented in Unicode probably singlehandedly forced unicode to expand beyond the BMP....

[tengwar2]: Before that, there was the case of ÿ and Ÿ in the base IBM character set (see  https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Ÿ ). The former exists in a handful of proper nouns in French and Hungarian (as in about five proper nouns), but only as a y with a diæresis, which would normally be handled with a Unicode modifier symbol. It is also used in a couple of endangered languages in South America, which would not have influenced the character getting in to a PC character set. It is though...