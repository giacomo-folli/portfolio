---
title: TDD
slug: tdd
published_date: 2025-01-13T10:58:00+00:00
tags: coding
publish: true
discoverable: true
is_page: false
---

These days I'm trying to build a shell similar to *bash*. For now I've managed to add very basic commands: `exit`, `type`, `pwd`, `cd` and `echo`. 

Now, it's true that they're basic commands, but that doesn't mean their operating logic is obvious.
I struggled a bit with `echo`. Its problem is that it's not simply a method for printing strings to the console. `echo` first of all does a fairly complex parsing of arguments, with different rules and different *escape characters*.

However, a very useful approach I found is Test Driven Development. My process was as follows:
1. write various strings of increasing complexity in ubuntu's bash
2. save the output along with the input
3. insert both into a testing database
4. test until failure
5. fix the code to pass just one test
6. back to point 4

Definitely not a fast approach, but it proved to be the best in many cases where I had no clue how to proceed: in that case, I just needed to move on to the next test and return a few cycles later.

That said, I'm not a big fan of writing code without understanding it just because it passes a test, this must be said. However, I think it can be a good strategy in moments when you really don't know where to go. 

The good thing, additionally, is that by writing the test, maybe, you better understand the problem you're facing and therefore have an additional opportunity to understand it.

---

oook as for the rest everything's fine, today I finally managed to configure `tailscale serve` and the sidecar for one of the services I host on my home server, so from today I have free https that's automatically renewed. not bad eh?

---

links:
- [2025 predictions by scott galloway](https://www.profgalloway.com/2025-predictions/)
- [learn go with tests](https://quii.gitbook.io/learn-go-with-tests)
---

*Translated by Claude AI*