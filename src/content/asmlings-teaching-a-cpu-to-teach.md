---
title: 'asmlings: writing an 8086 emulator to make assembly less lonely'
description: Building a rustlings-style sandbox for Intel 8086 assembly, and what an emulator taught me about testing, feedback loops and scope.
date: '2026-08-10'
categories:
  - rust
  - systems
published: true
ai_assisted: true
---

## Why I built it

Learning assembly is not hard because the instructions are hard. `mov`, `add`, `xor` are simpler
than most things I write in a normal workday. It is hard because the feedback loop is terrible:
write code, assemble it, run it, then squint at a segfault and guess which of the four things you
just changed was the wrong one.

[asmlings](https://github.com/giacomo-folli/asmlings) is my attempt to shorten that loop. It is
shamelessly inspired by `rustlings`: a set of small exercises you edit in your own editor, with a
watcher that re-runs the exercise the moment you hit save. The difference is what sits underneath —
your code is assembled with NASM and then executed inside a 16-bit x86 emulator written from
scratch in Rust, so the "test" can look directly at registers, memory and flags instead of parsing
stdout.

## The part I got right by accident

The single best decision was making assertions run against emulator state rather than program
output. An exercise doesn't check that you printed `7`; it checks that `AX` contains `7` after your
instructions ran. That means exercises can be about one concept only — the stack, a shift, a
comparison — without dragging in the whole ceremony of syscalls and string formatting just to prove
you did it.

I did not plan this as a pedagogical insight. I picked it because writing an emulator sounded more
fun than writing an output parser. It happened to be the thing that made the whole project work.

## Mistake #1: exercises you can cheat

Early exercises had a single test case each. Which means an exercise that asks you to compute a
value can be passed with `mov ax, 0x1337`. The suite has no way to tell a computation from a
hardcoded constant, and — being honest — that is exactly what a tired learner will do at 1am.

The fix, which I only landed later and still haven't backported everywhere, is running each
exercise against several generated setups: different starting register values, same expected
relationship. Suddenly a constant fails and only actual arithmetic passes. I keep a list of the
exercises still exposed to this in `IMPROVEMENTS.md`, because writing the weakness down publicly is
the only thing that reliably makes me go back and fix it.

## Mistake #2: testing the side effect instead of the lesson

Some of the most important exercises are about flags — `cmp`, the carry flag, sign comparison.
Flags are the whole reason branching works. And for a long time those exercises asserted on a
register that happened to change as a side effect, not on the flag itself.

The reason is embarrassing and completely ordinary: my harness had a `check_flag` helper sitting
there with an `#[allow(dead_code)]` attribute on it. The attribute silenced the compiler warning,
the warning was the only thing that would have nagged me, and so a half-finished feature quietly
became permanent. `#[allow(dead_code)]` is a promise to your future self, and I broke it for
months.

## Mistake #3: assuming a file save is one event

The watcher had a debounce built on a single `last_run` timestamp. Works fine in my editor. Does
not work fine in editors that write a temp file, rename it, and touch the original — you get three
write events in a few milliseconds and the exercise runs three times, printing three verdicts.

I found this the way you always find it: someone else's setup. The single-timestamp guard was me
modelling "a save" as an atomic thing because on my machine it looked atomic. A trailing debounce
that coalesces a burst of events is maybe six lines different, and it is the correct model.

## Mistake #4: shipping is a feature, and I shipped it late

For a while asmlings only existed as "clone the repo and `cargo run`". That is not a learning tool,
that is a repo. Publishing to crates.io, adding `cargo-binstall` support and cutting real GitHub
releases changed the project more than any single feature I wrote.

It also surfaced problems I had no way to see locally: a Linux linker error about
`__atomic_compare_exchange_16` (the emulator needs `libatomic` on some systems), and a Windows
screen-flush bug that made the UI look frozen. Both are now in the README's troubleshooting
section. Neither would exist as knowledge if I had kept the project on my own machine.

## What I actually took away

Two things. First: if you're building something educational, decide early what the test is allowed
to look at, because that decision defines what you're able to teach. Second: keep a scruffy,
honest file of known weaknesses in the repo. Mine reads like a list of my own bad habits, and it is
the most useful document in the project.
