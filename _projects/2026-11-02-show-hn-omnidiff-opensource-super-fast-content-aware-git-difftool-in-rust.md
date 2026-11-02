---
layout: default
title: "Show HN: OmniDiff – Opensource, super fast, content aware Git difftool, in Rust"
date: 2026-11-01T13:02:30Z
slug: 2026-11-02-show-hn-omnidiff-opensource-super-fast-content-aware-git-difftool-in-rust
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Git, diff tool, open source, Rust, programming utilities"
---

# Show HN: OmniDiff – Opensource, super fast, content aware Git difftool, in Rust

**链接**: https://github.com/ivankovic/omnidiff

**作者**: FabCH

**发布时间**: 2026-11-01T13:02:30Z

**采集日期**: 2026-11-02


## AI 摘要

OmniDiff is a new open-source Git difftool that supports a wide range of file types and is designed to be fast and accurate.

## AI 评价

The content introduces OmniDiff, a highly innovative and fast open-source Git difftool with broad support for various file types, indicating significant potential impact on the field. The community discussion is insightful, with diverse viewpoints on performance, comparison with existing tools, and practical usage scenarios.


## 原文内容

I have been researching what the ultimate diff tool would look like, based on actual diffs in open source repositories.<p>OmniDiff can diff: code (25 languages), config, images, PDFs, archives, cursors, fonts...<p>It&#x27;s fast. It can diff C++ files of tens of thousands of lines in under 100ms, on a 2023 ThinkPad T14s.<p>It&#x27;s open source. AGPLv3.<p>It&#x27;s based on real diffs. I looked at the 7400 repositories that are listed in Gentoo packages, sampled 2000 diffs and solved them manually to get a good understanding of what is needed, before putting together the diff pipelines for each content type. Incidentally, this also forms the basis of the CI pipeline, so the robustness of the codebase is quite high.<p>I&#x27;m still developing it. It&#x27;s v0.3.0 at this time. But I have been using it daily as my git difftool for months now, and it works well.<p>AI Disclosure: Yes, I do use AI. No, I do not vibecode.


--- Top Comments ---

[blahgeek]: &gt; can diff 99.95% of code changes I’m not sure if I’m understanding this correctly : so for the remaining 0.05% of code changes, this tool would just… miss it? That seems horrible for a diff tool :O

[z0al]: How does it compare to Difftastic[1]? Both built on top of TreeSitter and solve similar problems. [1]  https:&#x2F;&#x2F;difftastic.wilfred.me.uk&#x2F;

[BobbyTables2]: For me the biggest issue is “git rebase” merge conflicts because the surrounding context was modified (especially near beginning&#x2F;end of functions where the context includes unrelated stuff), or similar in a markdown document. (If commit A adds a line to the end of a bullet list in markdown and commit B does the same, they will conflict even though resolution is trivial for a human)

[gabagoolagonist]: I tried using this as configured with `omnidiff git configure`, but when I use `git difftool` it shows me the entire file in the TUI and I have to scroll down to where diff is. Is this intended behavior? Setting `--context` seems to have no effect.

[gslepak]: Is there a way to use it with git without having to change your global git config? I.e. `git diff | omnidiff` or something? You can do this with delta: `git diff | delta --side-by-side`