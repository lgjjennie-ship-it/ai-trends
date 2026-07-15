---
layout: default
title: Home
---

# AI掘金

<div id="lang-zh" class="lang-section" markdown="1">

AI 驱动的热门项目挖掘系统。每日午间更新，挖掘 GitHub、Hacker News、媒体与搜索引擎中的 AI 热门项目。

## 每日速递 <a class="rss-icon" href="{{ '/feed-zh.xml' | relative_url }}" aria-label="订阅中文"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg></a>

<ul>
  {% assign zh_posts = site.posts | where: "lang", "zh" %}
  {% for post in zh_posts limit:20 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.date | date: "%Y-%m-%d" }} · {{ post.title }}</a>
    </li>
  {% else %}
    <li><em>暂无内容</em></li>
  {% endfor %}
</ul>

## 项目档案库

以下为按日采集沉淀的单项目档案，每个项目独立一页，包含原文、AI 摘要与评价。

<ul>
  {% assign zh_projects = site.projects | where: "lang", "zh" | sort: "date" | reverse %}
  {% for project in zh_projects limit:50 %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.date | date: "%Y-%m-%d" }} · {{ project.title }}</a>
    </li>
  {% else %}
    <li><em>暂无项目档案</em></li>
  {% endfor %}
</ul>

</div>

<div id="lang-en" class="lang-section" markdown="1">

AI-driven hot project mining system. Updated daily at noon Beijing time, mining AI projects from GitHub, Hacker News, media and search engines.

## Daily Digest <a class="rss-icon" href="{{ '/feed-en.xml' | relative_url }}" aria-label="Subscribe English"><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"/></svg></a>

<ul>
  {% assign en_posts = site.posts | where: "lang", "en" %}
  {% for post in en_posts limit:20 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.date | date: "%Y-%m-%d" }} · {{ post.title }}</a>
    </li>
  {% else %}
    <li><em>No posts yet</em></li>
  {% endfor %}
</ul>

## Project Archive

Individual project archive pages, one per project, including original content, AI summary and assessment.

<ul>
  {% assign en_projects = site.projects | where: "lang", "en" | sort: "date" | reverse %}
  {% for project in en_projects limit:50 %}
    <li>
      <a href="{{ project.url | relative_url }}">{{ project.date | date: "%Y-%m-%d" }} · {{ project.title }}</a>
    </li>
  {% else %}
    <li><em>No project archives yet</em></li>
  {% endfor %}
</ul>

</div>
