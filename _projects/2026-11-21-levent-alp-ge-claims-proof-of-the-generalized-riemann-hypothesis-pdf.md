---
layout: default
title: "Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]"
date: 2026-11-20T14:16:21Z
slug: 2026-11-21-levent-alp-ge-claims-proof-of-the-generalized-riemann-hypothesis-pdf
source: hackernews
category: ai-community
ai_score: 9.0
tags: "mathematics, riemann-hypothesis, proof, ai, science"
---

# Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]

**链接**: https://alpo.ge/remark.pdf

**作者**: iamronaldo

**发布时间**: 2026-11-20T14:16:21Z

**采集日期**: 2026-11-21


## AI 摘要

Levent Alpöge claims to have proven the Generalized Riemann Hypothesis, sparking significant community interest and discussion.

## AI 评价

The content discusses a potential proof of the Generalized Riemann Hypothesis, which is a highly significant mathematical problem. The community comments show substantial engagement and discussion, indicating the importance of the topic.


## 原文内容

Related: <i>Hurried Announcement: Alessandro Masullo GRH</i> - <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50579568">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50579568</a>


--- Top Comments ---

[amai]: „Dijkstra described a fictional company of which he served as chairman. The company was called Mathematics, Inc., a company that he imagined having commercialized the production of mathematical theorems in the same way that software companies had commercialized the production of computer programs. He invented a number of activities and challenges of Mathematics Inc. and documented them in several papers in the EWD series. The imaginary company had produced a proof of the Riemann Hypothesis bu...

[dawdler-purge]: I was  when saw this in the morning. I thought I could no longer be surprised by AI progress. Yet I had not truly believed that Claude could prove a conjecture as challenging as the Riemann Hypothesis. In fact, just this summer, I tried to write a short science fiction story, The Last Conjecture, about AI working on the Riemann Hypothesis — a bad, unpublished story that I wrote with the help of AI itself. The irony is that even the AI helping me write it could not believe that AI would solve ...

[djoldman]: These proofs really are quite huge. The proof is 1.3GB, ~15M lines of code:     mkdir -p riemann_proof &amp;&amp; cd riemann_proof

  # fetch parts 01–14
  for i in {01..14}; do
    curl -fSL -o lean.tar.gz.part$i https:&#x2F;&#x2F;alpo.ge&#x2F;lean.tar.gz.part$i || { echo &quot;failed: part$i&quot;; break; }
  done

  # join and decompress (creates .&#x2F;lean)
  cat lean.tar.gz.part{01..14} &gt; lean.tar.gz
  tar xzf lean.tar.gz

  # size, file count, line counts
  du -sh lean | cut -f1 | x...

[huseyinkeles]: Shared it in the other thread too. Here’s a link to an interview with Levent Alpöge (in Turkish) from 2014, when he just graduated from Harvard at the top of his class. He mentions solving the Riemann hypothesis is his life goal and he wants to work on it, but he’s not sure if it can be done in his lifetime. Way to go :)  https:&#x2F;&#x2F;videonuz.ensonhaber.com&#x2F;izle&#x2F;harvard-birincisi-leven...

[synapsomorphy]: That was fast. I thought we’d have more time. I wonder if we’ll have room temp superconductors and fusion this time next year. If this holds up it seems as good a day as any to call the end of one time and beginning of another. I wish I could be fully happy about this new era instead of worrying if I’ll be alive in 5 years or not. If there was any time for Anthropic to try to coordinate a pause, it feels like now or never, they seem to have a pretty strong lead at the moment. But probably the...

--- From hackernews ---

--- Top Comments ---

[Mikhail_Edoshin]: There&#x27;s a book, &quot;Impro&quot;, about a theatric studio that practiced improvised sketches. One thing they struggled with was a normal conversation. People have them all the time yet somehow artists could not find the right approach. One day the head of the studio (the book author) had an insight. She asked the actors to drive the conversation so that they always bump the status of themselves or the other party in any direction, but only a little. This did the magic. Not only the acto...

[esjeon]: Lean + Stochastic predictor = Brute-force theorem solver P.S: AlphaGo was pretty much the same in the spirit btw.

[sc077y]: If this isn&#x27;t intelligence, then I don&#x27;t know what is

[hoppp]: Thats a lot of lean. Can anyone comprehend how it works in it&#x27;s entirety?

[alterom]: &quot;We should still fix the leak&quot;  I think this approach and conclusion applies to a lot more than the immediate context of that conversation.

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZEFVX3lxTE1fMkZNU1hOcU85eHhvaXg5czloY2tyemdzMzVlMnNmbHI1d09Xa1VLM2g0aHk4VWMyanlJeUd1ajNqdnRseDdxc19oeGV3QjNwYVJyT2JZbW93SlR6dm41NWVmeXA?oc=5" target="_blank">AI证明黎曼猜想，数学家该恐慌吗？</a>&nbsp;&nbsp;<font color="#6f6f6f">科学网—新闻</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE1IZFBid0w4WnlySjJjVTJpRGVENmItS0lLS2VTWVlXUUFrMG83eFY4WnhhSWljRzFpZnpBeFh4WUk0SlppV2t6TUlPM2l4MkJFRGJUYg?oc=5" target="_blank">Anthropic数学家Alpöge称与Claude合作证明黎曼猜想，代码规模超Mathlib4八倍</a>&nbsp;&nbsp;<font color="#6f6f6f">虎嗅网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE5uRmtxc2pOY2c5dnFkMERlRmlMM040V0prUzdZSUEwTUlzaGxnRkVUVHdGdUxDNjVuWjdxUUFiNUxtYjJBZUxuZGxEV0JhdkhMc29zeA?oc=5" target="_blank">Anthropic称Claude证明黎曼猜想，25万页证明引发人类理解争议</a>&nbsp;&nbsp;<font color="#6f6f6f">虎嗅网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiYEFVX3lxTE1sRDh0R1NZa2VwSnd5RlpsNW9MbVhjTW1RMkNUaFJyTU5Lel9pc0tKejFpR1VPQ2RsZXZBNG1ERWRKTVU1NkNPMkUySEtQRmFDRGJaeHEtTEo1eUtISVktQw?oc=5" target="_blank">Anthropic数学家宣称：在AI帮助下已解决数学界最著名难题</a>&nbsp;&nbsp;<font color="#6f6f6f">ThePaper.cn</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMijAFBVV95cUxQekdGakZtYTJjdFNMZkVGQW1SLWJfOWZhQUVjbTlhbFNRYU9keGZRbGZPV0R2cGFFYjM2N1FkYWdrWGRtaFctVXQ0ZnZGUVd4eDZVQ2VMblgxNlg3LVd3LTV2c0lObDBWUTh5Vm1MZzZiYlJpUjB3cUZjOVVwRFBVMERSVmFablJqc3I4aQ?oc=5" target="_blank">Anthropic数学家称与Claude合作证明黎曼猜想，并公开了相关证明代码，供外界下载核查</a>&nbsp;&nbsp;<font color="#6f6f6f">Sohu</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE4xYUE1VWxDYnptVVlqbDJqdklET0M5SlFzYkJyOWhhaEJGSWQyS1M2bUZjMDBzaFFtQWo0RlgzbkFMX2NscTNGUjFRRE1TYS0yejIwVA?oc=5" target="_blank">数学家称借助Anthropic的Claude完成黎曼猜想证明，代码达1700万行待同行核验</a>&nbsp;&nbsp;<font color="#6f6f6f">虎嗅网</font>

--- From hackernews ---
Related: <i>Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]</i> - <a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50574968">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50574968</a>


--- Top Comments ---

[Aurornis]: The manuscript claims he has been working on this problem for 12 years. I can only imagine the feelings that must have hit him when he saw the Anthropic announcement. Though if he believed he had solved it, he must have known it was only a matter of time until one of the AI companies found it, too. A hurried announcement with the draft published within hours is the only way to claim a tie to the discovery. Time will tell if either holds up under further analysis, but at least he has shown his...

[opendomain]: I can’t help but this that AI copied the original work at least in part. Maybe he had some files in the cloud.  Or worse - was listening in. Is there a way to find out if the human proof was at copied in any way?

[prometheus1992]: Is it possible that brian conrad somehow uploaded the proof to anthropic to cross check something and then the anthropic guys got the proof? - it doesn&#x27;t have to be the full proof - even if portions were uploaded, that should also be enough or at least calls for a thorough check on ants side. the human proof has been in the works for 12 years, who knows when something was uploaded somewhere or some info just stayed on a google drive which was later sold.

[kyykky]: While ago, there used to be a world where a person, with large enough brain capacity, could earn a living simply by being smart. That is no more the case. Earning your living by intellectual endeavour will require an access to a machine which is not controlled by you, not controlled by the government representing you, but rather a group of very rich individuals who may just decide to bar your access. Perhaps you attempted something they do not approve, perhaps it was just a mistake. In any ca...

[jc_811]: Hey can someone familiar here explain the  why  the GRH is such a big deal to mathematics? What will this allow us to unlock? Will it have any effect on the general population?

--- From hackernews ---

--- Top Comments ---

[wtarreau]: Strange to see that the guy is having issues with terminals. The terminal is actually what gives all the power to these harnesses. I run them over SSH, I permanently have between 30 and 50 xterms on my machines, each more or less dedicated to some tasks in progress or just with some history where I can instantly press up-arrow enter and try something again. Why on earth would I lose all this convenience, remove one hand from the keyboard to grab a mouse that drags more energy and requires the...

[everforward]: It&#x27;s interesting (and probably correct) how much this focuses on the UI. I also looked (&#x2F;am looking) at Lisp and AI, but I went with Clojure and zero-ed in on the REPL driven development.  The high level idea is that a session maps to a namespace in Clojure.  When you create a new session, it makes a new namespace, injects tools that are bound to that session into it, and then swaps you into that namespace.  So I can do something like:       (new!)
    (prompt! &quot;Write me a scri...

[spockz]: I just read the whole announcement and boy I wish more text was written like this. Full of history, facts, and reasoning. Beautifully written. (I recognise it is a  tad  long of you just want to get cracking with it.) A very nice refresher in this age. I’ll be trying it out soon. Hopefully it does sandboxing and dealing with antigravity and codex well.

[unj]: I really wanted to love this. I had so high hopes... For context, I am a long time emacs user. I am pi (eventually ohmypi) user. I feel like with each of these, you can start fast, on a very entry level, gradually extend it to your needs while you learn. They feel similar to what you&#x27;re used to, until you customize the heck out of them, and they no longer do... DreamCoder unfortunately made me feel dumb from the get go. Like I landed on another planet. Maybe I am old and too used to the ...

[FailMore]: I built  https:&#x2F;&#x2F;smalldocs.org  &#x2F;  https:&#x2F;&#x2F;github.com&#x2F;espressoplease&#x2F;smalldocs  to handle some of the problems Mickey is trying to solve. It&#x27;s a cli your agent can call to open up a markdown file in the browser with richer-than-normal formatting options. Here&#x27;s an example SmallDoc that has a few formatting examples (mermaid diagrams, charts, etc.):  https:&#x2F;&#x2F;smalldocs.org&#x2F;s&#x2F;bLV9Fe2RemM7ipvCy01NXo#k=U9yFaCKp1on...  I&#x27;m a so-s...

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMic0FVX3lxTE1vV1pwUHF1NzNVQW9IQTAxZloyZURGZ0RKZV81N1BfdGtOZWhtWUtDNHdVUnpOdDMxNlY0WHhSODRyNVNKdWNic05LY1RtOERkaVRId196cmUtSnlCVXlyTEdNbkpLa19qZjNyeEh5akktRVE?oc=5" target="_blank">Anthropic数学家宣称借助AI证明黎曼猜想，菲尔兹奖得主：验证仍需要时间</a>&nbsp;&nbsp;<font color="#6f6f6f">观察者网</font>

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiXkFVX3lxTE9GNXJvR3gtRS0wZzMzRF9DaFdiNjFpTnVIbi1SdkNzMzl3NVM4WUNIbjRWLUlaZXFNVWNsbFcwUzFSWG9hOE1YTGFZcWNJZnNwQUc5ZUR4dXpHVG43Unc?oc=5" target="_blank">智能体 AI 架构：当前挑战与未来机遇</a>&nbsp;&nbsp;<font color="#6f6f6f">InfoQ.cn</font>

--- From hackernews ---

--- Top Comments ---

[whycombinetor]: Am I an outlier in that every SWE job I&#x27;ve had has expected you to push back on requirements and design the data model for tickets you are handed? Even when the org was large to have an architect, they just were just a figurehead and designed the original system, and ongoing decisions were made by the dev who picks up the ticket. From that perspective, engineers are still engineers, just without the hands-on-keyboard coding. If that&#x27;s all your job was, hands-on-keyboard coding with ...

[nixpulvis]: I strongly believe good software teams (very rare) require members to play many roles. Sometimes you&#x27;re a PM, sometimes you&#x27;re an architect, sometimes you&#x27;re the systems engineer. Enough people have enough context on the bigger picture that it&#x27;s stable and there&#x27;s a shared vision. More often than not, one person does the majority of this, and does their best to break up the responsibilities. A good CTO does that at the top, and it flows down through the ranks dependin...

[ChrisMarshallNY]: &gt; But AI will never make that call for you, because it doesn’t know your users and it won’t push back on your requirements.  In my case, I have been able to mitigate this. I have an LLM (ChatGPT, but I don&#x27;t think it matters that much, anymore), that I load with vast amounts of information about the end-users of my apps. It generally makes excellent decisions, and often pushes back on my requests, if they may not deliver a good result. I sometimes think it knows more about my users th...

[bikeshaving]: I’ve found that the “job” of using AI is mainly foible management. What the author describes here is a habit of coding agents to excessively use and create logging infrastructure, and sloppily leave it in production code even when unnecessary. For instance, I created an IPA IME keyboard ( https:&#x2F;&#x2F;ipabet.org&#x2F; ), and I found in review that Claude would leave the debugging tooling around unflagged, which essentially made the program a key-logger. These foibles come and go: early C...

[lerouxb]: This is gatekeeping. Everywhere I&#x27;ve worked every candidate goes through systems design interviews and it is expected that every employee pushes back on and considers architecture and system design. The market for dedicated architects has always been vanishingly small.

--- From google_news ---
<a href="https://news.google.com/rss/articles/CBMiZkFVX3lxTE9aVzhmUVNTcjA0V0ZNM2ZubnpaN0k4eTBRSFBuRW9Zc2tTam13d1ktaXpaV24zd3dHLTVDYVE3NXduRVZ1VHRUSWZjYklsMnlNM3llREQzQ2k0TFZrNmU0WExRS3Rrdw?oc=5" target="_blank">每经热评 | 黎曼猜想25万页的证明谁来证明？数学的终点从来不是AI</a>&nbsp;&nbsp;<font color="#6f6f6f">https://www.mrjjxw.com/</font>