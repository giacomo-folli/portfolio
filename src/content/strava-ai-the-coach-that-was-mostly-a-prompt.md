---
title: 'strava-ai: the running coach that turned out to be a prompt'
description: An AI coach built on the Strava API, three prompt rewrites, an OAuth flow I got wrong four times, and what "AI feature" really means in practice.
date: '2026-07-20'
categories:
  - ai
  - sveltekit
published: true
ai_assisted: true
---

## The idea

I run slowly and consistently, which means I generate a lot of Strava data and almost no insight
from it. [strava-ai](https://github.com/giacomo-folli/strava-ai) started as a simple question: if I
hand an LLM my last few weeks of activities — distance, pace, heart rate, elevation, cadence — can
it say something more useful than "nice run"?

The shape ended up being small on purpose: a SvelteKit app that runs the Strava OAuth2 flow, hands
the authorization code to an n8n workflow, and gets back an analysis that lands in the user's inbox
as a formatted email.

## What the project really was

Here is the honest architecture diagram: **the product is the prompt**. The SvelteKit app is a
consent screen and a mailbox. Everything that makes the output good or bad lives in a text file.

The repo has three of them — `prompts/v1.md`, `v2.md`, `v3.md` — and reading them back is the
clearest record of what I learned all year.

`v1` is prose. "You are a Running Coach specializing in guiding the athlete on his running
journey", followed by numbered sections about analysing data, giving feedback, creating plans,
setting goals, motivating. It reads well. It produced answers that also read well and said nothing:
generic encouragement wrapped around whatever number happened to be biggest.

`v3` is XML. Explicit `<role-definition>`, `<core-principles>`, an enumerated `<key-metrics>` list
naming the exact fields — `distance`, `moving_time`, `elapsed_time` and so on. It is uglier and far
less pleasant to read, and it is dramatically more reliable, because structure removes the model's
freedom to decide what to talk about. Naming the metrics explicitly was the single change with the
biggest effect: the coach stopped cherry-picking and started covering the same ground every time.

The mistake underneath v1 was treating the prompt as a description of a persona rather than a
specification of an output. Those are different documents.

## The OAuth comedy

If you read the commit history you can watch me fail at OAuth in real time. There is a run of
commits that goes roughly: correct the redirect URI formatting, then construct the redirect URI
correctly, then encode the redirect URI in the authorization query, then fix the scopes formatting,
then update the scopes definition, then update the scopes definition again.

Six commits, one root cause: I was debugging by editing and redeploying instead of printing the URL
I was actually generating and comparing it, character by character, against the Strava docs. Every
one of those commits was a guess. The whole thing would have been one commit if I had spent five
minutes reading the string I was sending.

The scopes had the same flavour of bug — Strava wants a comma-separated list, and it is very easy
to build something that looks right, gets accepted by the authorize endpoint, and then quietly
denies you the activity data later. Failures that show up one step after the mistake are the
expensive kind.

## Mistake: the email templates outlived their welcome

There are HTML email templates in `src/`, and copies in `static/`. That duplication is not a
design, it is what happens when you need a file served statically, copy it, and never reconcile the
two. I edited the wrong one at least once and spent a while convinced the deploy was cached.

Email itself was also more work than the AI part. Formatting, a confirmation flow, a resend button
I had to conditionally render only outside production so I wouldn't spam myself while testing.
"Deliver the result to the user" is never the small step at the end.

## Where it left me

The useful conclusion is uncomfortable for anyone building an "AI product": my hard problems were
OAuth, email deliverability and template hygiene. The model did its job from day one. What changed
between a demo and something I would actually read on a Monday morning was not the model, it was
how precisely I specified the output.

If I rebuilt it now I would version the prompts the same way — keeping v1 next to v3 is the best
documentation in the repo — but I would write evaluation cases first: three real weeks of my own
runs, and a checklist of what a good answer must mention. I judged prompt quality by vibes, and
vibes are how you end up with a coach that is very encouraging and completely unspecific.
