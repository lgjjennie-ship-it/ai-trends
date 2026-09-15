---
layout: default
title: "Dropping eBPF CPU Cost by About 90% with Memoization (Not AI Gen)"
date: 2026-09-14T14:29:23Z
slug: 2026-09-15-dropping-ebpf-cpu-cost-by-about-90-with-memoization-not-ai-gen
source: hackernews
category: ai-community
ai_score: 8.0
tags: "eBPF, performance optimization, memoization, Linux, systems research"
---

# Dropping eBPF CPU Cost by About 90% with Memoization (Not AI Gen)

**链接**: https://nathannaveen.dev/posts/dropping-ebpf-cpu-cost-by-90/

**作者**: nathannaveen

**发布时间**: 2026-09-14T14:29:23Z

**采集日期**: 2026-09-15


## AI 摘要

A new technique reduces eBPF CPU cost by 90% through memoization, with community discussion focusing on the trade-offs and use cases.

## AI 评价

The content discusses a significant optimization in eBPF that reduces CPU cost by 90% using memoization. The community comments provide insightful discussions on the trade-offs and implications of this optimization, enhancing the value of the post.


## 原文内容


--- Top Comments ---

[salviati]: Memoization trades compute time for memory: you reduce CPU cost by 90% _at the cost_ of some memory. The author measured one, but it doesn&#x27;t look like they measured the other. It&#x27;s an important detail to take into account. I&#x27;m sure this optimization makes sense, and the size of additional memory is not that big, but I believe it&#x27;s good to &quot;measure, not assume&quot; as some load bearing model might say.

[danudey]: Very confused by the article. Is memoization new to the eBPF world? Did the author only just learn about it and wanted to use it? In reality, the article is about correctly caching a path:policy mapping while working within the limitations of eBPF and Linux filesystem semantics. If you read the article in that context rather than wondering &#x27;what is new and interesting about memoization in eBPF?&#x27; it&#x27;s a lot more interesting. I probably would have titled this &#x27;Calculating ca...

[Allybag]: Seems like the 90% faster case is opening the same exact file every single time, which seems like a not super standard use case that will benefit the most from this caching. On an example where you never open the same file twice this will presumably be slightly slower than before, as you’re doing the same thing but writing to a cache.
 So you can make the headline “Drop performance cost by 90%!” or “Modestly increase performance cost” and be correct but I don’t think either is really a reason...

[brookman64k]: How is the cache invalidated when:
- The permissions change?
- Directories are moved?
- Hard-links are added?
- Things are deleted?
Also: Is the cache limited in size?

[ComputerGuru]: How do your path-only rules handle the many approaches for loading a file but making it appear to have a different path, such as bind mounts for one example?