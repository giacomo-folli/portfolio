---
title: 'reflectiv: building a self-hosted journal generator, and archiving it'
description: A Svelte + AdonisJS app that turns ChatGPT conversations into monthly reflection PDFs — the architecture, the scope creep, and why I stopped.
date: '2026-07-05'
categories:
  - svelte
  - adonisjs
published: true
ai_assisted: true
---

## The premise

[reflectiv](https://github.com/giacomo-folli/reflectiv) came from noticing that I talk to an LLM
more honestly than I write in a journal. The conversations are already there — scattered, unshaped,
but there. The app takes shared ChatGPT conversation links, runs them through a model, and produces
a personal monthly reflection diary as a PDF you can actually keep.

It is self-hosted by design: Docker image, works against a cloud API or a local model via Ollama,
your text stays wherever you decide to run it. That was non-negotiable for me. A journaling app that
ships your interior life to my server is not a journaling app I would use.

## The architecture

A monorepo with two halves. The backend is AdonisJS with controllers for sessions, users and links,
proper auth middleware and a silent-auth path for pages that behave differently when you're logged
in. The frontend is SvelteKit with a service layer — `api.service.ts` as a base, then auth, link,
user and pdf services on top of it — plus i18n in English and Italian.

The service layer is the part I would keep in every project since. One `base.service.ts` that owns
fetch, headers, error shape and credentials; everything else is a thin typed wrapper. When I
changed the auth scheme, I changed one file.

## Mistake #1: the monorepo arrived last

Look at the commit history and the story is plain. There is one enormous initial commit — registration
page, dashboard, links management, settings, layout, localization, auth, favicon, Tailwind — and
then, later, a commit that *initializes the monorepo with a workspace setup for frontend and
backend*.

That ordering is the mistake. I built two applications side by side in one folder and only
afterwards imposed the structure that should have defined how they talk to each other. Everything I
had to refactor in the following weeks — the "improve readability and maintainability" commit is
literally that bill coming due — came from boundaries drawn after the fact instead of before.

## Mistake #2: I built the whole app before the core

The core of reflectiv is one uncertain thing: does an LLM produce a reflection worth reading from a
month of scattered chat logs? That is the risky question. Everything else — auth, settings pages,
toasts, page transitions, language switching, a select component — is known work.

I did the known work first. By the time I was seriously tuning generation quality, I had a login
system, a settings page and two locales to keep working while I experimented. Building the safe
parts first feels productive because you ship visible progress every evening, but it means you
answer the question that decides the project's fate last, with the most sunk cost behind you.

## Mistake #3: PDFs are not a rendering detail

`pdfGenerator.ts` sits in utils like a small helper. It is not a small helper. Page breaks,
typography, long text that has to look intentional rather than dumped, and the fact that the PDF is
the entire product the user actually holds — this deserved to be a first-class concern with its own
design pass. I treated the deliverable as an export step.

## Why I archived it

Not because it broke. It works: there is a CI pipeline building and pushing the image, a Docker Hub
release, a wiki, a contributing guide, a code of conduct. Everything you would set up if you thought
people were coming.

I archived it because I stopped being its user. The thing I wanted was a monthly artefact I would
reread, and I did not reread mine. The disclaimer I wrote in the README — that this is a personal
tool, not a substitute for professional help — was honest, and it also marked exactly how narrow
the space between "cute generator" and "something that matters" turned out to be. I could not close
that gap with better prompts.

The useful lesson from an archived project is not "don't build things nobody uses". It is: put the
open source scaffolding in *after* the idea has proven itself to at least one person, and make sure
that person is you. I set up the CI, the wiki and the code of conduct for a community that had no
reason to exist yet, and that effort would have paid for two or three real experiments on the
question the project actually hinged on.
