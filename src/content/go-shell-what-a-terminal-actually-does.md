---
title: 'go-shell: writing a Unix shell in Go to find out what the terminal really does'
description: A POSIX-ish shell built from scratch in Go — quoting, redirection, autocompletion, and a commit history that reads like a diary of guesses.
date: '2026-06-15'
categories:
  - go
  - systems
published: true
ai_assisted: true
---

## The premise

I use a shell every day and, before this project, I could not have told you what happens between
pressing enter and seeing output. [go-shell](https://github.com/giacomo-folli/go-shell) is a
Unix-like shell written from scratch in Go, following the "Build Your Own Shell" challenge: a REPL,
builtins (`echo`, `exit`, `pwd`, `cd`, `type`), execution of external programs found on `PATH`,
output and error redirection (`>`, `>>`, `2>`, `2>>`), argument parsing with quotes and escapes, and
tab completion for both builtins and binaries on disk.

Roughly two hundred lines of it are the interesting part. The rest is discovering that things you
assumed were one thing are actually three.

## The lesson that reframed everything: `cd` cannot be a program

`echo` could plausibly be an external binary. `cd` cannot. A child process changing its own working
directory does nothing to the parent, and the shell *is* the parent. That is why `cd` must be a
builtin — not as a performance optimisation, but because the semantics are impossible otherwise.

Once that clicked, `type` stopped being a toy command and became the thing that explains the whole
model: some names are resolved by the shell itself, some are resolved by walking `PATH`. Every
confusing shell behaviour I had ever hit lives on one side or the other of that line.

## Mistake #1: parsing arguments with `strings.Split`

Splitting the input on spaces works until someone types `echo "hello world"`. Then it works until
someone types `echo 'it'\''s'`. Then escapes. Then a quote containing the other kind of quote.

I rebuilt the argument parser more than once, each time by patching the previous version's failure,
and the versions kept getting worse. The correct move — which I arrived at late — is a character-by-character
scanner with explicit state: normal, in single quotes, in double quotes, escaped. Quoting rules are
a small state machine, and any attempt to express a state machine as a pile of string operations
produces exactly the code I was writing.

## Mistake #2: redirection is not a suffix

I first treated `>` as something to strip off the end of the command line before running it. That
model breaks immediately: redirection can name the stream (`2>`), it can append (`>>`), and it has
to be applied to the process's file descriptors *before* execution, not applied to output
afterwards. The moment I stopped thinking "post-process the output" and started thinking "configure
the child's stdout and stderr before it starts", the four operators collapsed into one small piece
of logic instead of four special cases.

## Mistake #3: my commit history

I want to be honest about this one because it is visible to anyone who clicks the repo. My commit
messages for this project include `try`, `maybe`, `har`, `you know me`, `i promise`, `final`,
`swoosh`, `is it now`, and — my favourite — `sounD?`.

That is not a style quirk. It is an accurate record of how I was working: making a change,
committing, pushing, seeing if the remote test suite went green, and repeating. I was using the CI
as a debugger. Every one of those commits is a guess I could have resolved locally by reading the
code or printing one variable.

The cost is not aesthetic. It is that I now have no way to find *when* something broke, because
none of the messages say what changed. A project this size doesn't need ceremony, but a message
that names the change turns history into a tool. Mine is just noise with timestamps.

## Mistake #4: leftovers

The repo still contains `legacy.go` — commented-out old code "for reference" — and, for a while,
an `error.mp3` from an evening when I thought the shell should make a sound on failure. The sound
was fun. Keeping dead code as a comment block was not: it is a file that git already remembers
perfectly and that I kept paying for on every read.

## What stayed with me

Writing a shell is the cheapest way I know to stop treating the terminal as magic. Quoting is a
state machine, redirection is file-descriptor setup, and builtins exist because some operations must
mutate the shell's own process. Three sentences that cost me a few weekends and that I will never
have to look up again.

If I did it again, I would write the tokenizer first and properly, and I would commit like the
history is going to be read — because it is.
