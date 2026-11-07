---
layout: default
title: "Asahi Linux Progress Linux 7.3"
date: 2026-11-07T05:20:18Z
slug: 2026-11-07-asahi-linux-progress-linux-7-3
source: hackernews
category: ai-community
ai_score: 8.0
tags: "Asahi Linux, Apple Silicon, Linux on Mac, Community Feedback"
---

# Asahi Linux Progress Linux 7.3

**链接**: https://asahilinux.org/2026/11/progress-report-7-3/

**作者**: ackyshake

**发布时间**: 2026-11-07T05:20:18Z

**采集日期**: 2026-11-07


## AI 摘要

Asahi Linux releases progress report for version 7.3, highlighting community discussions on various features and challenges.

## AI 评价

The content is a progress report on Asahi Linux 7.3, which is important for the Apple Silicon community. The discussion quality is high with diverse and insightful comments, indicating significant community engagement and relevance.


## 原文内容


--- Top Comments ---

[ADevWithAnIdea]: Shameless plug for my own project:  https:&#x2F;&#x2F;gravitylinux.org  Spoiler: We have Vulkan 1.4 working, all of M4 and most of M5 working, are making significant progress towards full suspend to ram (no version of Asahi supports this) and this will all be shipped to users very soon!

[aroman]: &gt;  Some time ago, we were made aware of multiple attempts to exploit our permissive licensing to hijack our work, with a direct view to replacing the project and aggressively monetising Linux on Apple Silicon.  Is this referring to Omarchy? Anyone have context? TBH I&#x27;m surprised their work was ever MIT-licensed instead of GPL.

[alentred]: The only blocking point for me before I would use Asahi Linux is the support of the USB-C displays. I was considering and reconsidering to install Asahi so many times, but I just cannot give up the ability to plug an external display into my MacBook Air. I am just surprised that other features like support of the newer CPUs still get a higher priority than this one. I am not complaining or anything, I am not even related to the project in any way, so not in the right place to ask for anything...

[amelius]: Why doesn&#x27;t the Asahi team just design their own silicon? With AI it is easier than ever. And no this is not a joke. How to get it fabbed? That&#x27;s even easier as there are lots of companies with $$$ who&#x27;d like to commoditize Apple.

[gspr]: &gt; It may surprise some to learn that WINE was originally made available under the MIT licence. The 90s and 2000s were a very different time in the Free Software ecosystem, and permissively licenced projects were viewed by tech companies as free real estate to pilfer and exploit. WINE was not immune to this, and many monetised proprietary forks of WINE were marketed and sold by various bad actors. The WINE development team grew increasingly concerned that these proprietary forks, while well...

--- From hackernews ---

--- Top Comments ---

[skrellm]: A simple solution for the lack of a C standard library:  https:&#x2F;&#x2F;gitlab.com&#x2F;bztsrc&#x2F;posix-uefi  Features: - works on POSIX systems, with native tools (no special build env needed) - provides a (limited) POSIX interface for your UEFI app - transparently converts UTF-8 and UCS-16 strings between your app and the firmware - unlike GNU-EFI, no &quot;uefi_call_wrapper&quot; trickery needed - has a tool to create a bootable disk image (with GPT, ESP) - example codes from a &quot;...

[the_panopticon]: For &quot;Get used to the lack of a C standard library&quot; mentioned in  https:&#x2F;&#x2F;kevinboone.me&#x2F;efitest4.html  there&#x27;s always  https:&#x2F;&#x2F;github.com&#x2F;tianocore&#x2F;edk2-libc . And on &quot;Be aware of the Windows-ness of EFI&quot; commentary the resemblance to Windows coding style  https:&#x2F;&#x2F;computernewb.com&#x2F;~lily&#x2F;files&#x2F;Documents&#x2F;NTDesignWorkb...  is no accident. We leveraged this coding methodology as we evolved the original Intel ...

[kevin_thibedeau]: &gt; The linker won’t complain if your code calls functions that don’t exist – it will just mark them as external, expecting them to be provided by some other code. But they won’t be, and the program will just crash when it calls one of these missing functions. You can verify no external symbols remain after linkage with: nm -D --undefined-only. This can be incorporated into a build script to verify the binary is valid.

[JdeBP]: Rod Smith and the OSDev Wiki went here, sometimes word for word, years before: *  https:&#x2F;&#x2F;rodsbooks.com&#x2F;efi-programming&#x2F;  *  https:&#x2F;&#x2F;wiki.osdev.org&#x2F;GNU-EFI  Of course, they both assume GCC on Linux.  Change either one of those, and it is a wholly different kettle of fish.  Both NetBSD and FreeBSD, for examples, come with an EFI development environment in base, squirreled away in &#x2F;usr&#x2F;src&#x2F;boot in the case of FreeBSD.  They have to, because they...

[edoceo]: This guide is fantastic for getting rolling in the UEFI space. I used this as one of the references when building a bootloader with Zig. Has its own set of issue, especially that 16bit character situation. Once you dig into those there are a bunch of sharp edges, or maybe it&#x27;s just that that EFI environment is so weird compared to typical Linux system or application development.