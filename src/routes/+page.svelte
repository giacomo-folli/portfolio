<script lang="ts">
	import BlurFade from "$lib/components/magic/BlurFade.svelte";
	import ProjectCard from "$lib/components/portfolio/ProjectCard.svelte";
	import ResumeCard from "$lib/components/portfolio/ResumeCard.svelte";
	import * as Avatar from "$lib/components/ui/avatar";
	// import Badge from '$lib/components/ui/badge/badge.svelte';
	import { DATA } from "$lib/data/resume";
	import { buildPostByProject, relatedPostLink } from "$lib/relations";
	import { marked } from "marked";

	export let data: any;

	let BLUR_FADE_DELAY = 0.04;
	const age = new Date().getFullYear() - DATA.birth_year;

	$: postByProject = buildPostByProject(data.posts);
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />

	<meta
		name="google-site-verification"
		content="your-google-verification-code"
	/>
	<meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>
<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, Giacomo here</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>{age} year old something guy.</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>

	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">About</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>

	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Work Experience</h2>
			</BlurFade>
			{#each DATA.work as work, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>

	<!-- <section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Education</h2>
			</BlurFade>
			{#each DATA.education as edu, id}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.degree}
						title={edu.school}
						subtitle={edu.degree}
						start={edu.start}
						end={edu.end}
					/>
				</BlurFade>
			{/each}
		</div>
	</section> -->

	<!-- <section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">Skills</h2>
			</BlurFade>
			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<Badge class={skill.class}>{skill.title}</Badge>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section> -->

	<section id="projects">
		<div class="w-full">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col space-y-2">
					<!-- <div
						class="inline-flex w-fit rounded-lg bg-foreground px-3 py-1 text-sm text-background"
					>
						My Projects
					</div> -->
					<!-- <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
						Things I build and keep alive
					</h2> -->

					<h2 class="text-xl font-bold">My Projects</h2>

					<!-- <p class="max-w-[600px] text-pretty text-muted-foreground text-sm">
						A walk through the open source projects I've built and maintained,
						from system programming to web apps.
					</p> -->
				</div>
			</BlurFade>

			<ol
				class="relative mt-10 space-y-10 before:absolute before:bottom-4 before:left-0 before:top-2 before:w-px before:bg-gradient-to-b before:from-border before:via-border before:to-transparent"
			>
				{#each DATA.projects as project, id}
					<li class="relative pl-8">
						<span
							aria-hidden="true"
							class="absolute left-0 top-[5px] size-2.5 -translate-x-1/2 rounded-full border-2 border-background bg-foreground"
						></span>
						<BlurFade delay={id * 0.06} yOffset={12}>
							<ProjectCard
								href={project.href}
								title={project.title}
								description={project.description}
								dates={project.dates}
								tags={project.technologies}
								image={project.image}
								video={project.video}
								links={[
									...project.links,
									...relatedPostLink(postByProject[project.title]),
								]}
							/>
						</BlurFade>
					</li>
				{/each}
			</ol>
		</div>
	</section>

	<!-- <section id="hackathons">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							Hackathons
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">I like building things</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							During my time in university, I attended{' '}
							{DATA.hackathons.length}+ hackathons. People from around the country would come
							together and build incredible things in 2-3 days. It was eye-opening to see the
							endless possibilities brought to life by a group of motivated and passionate
							individuals.
						</p>
					</div>
				</div>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
					{#each DATA.hackathons as project}
						<BlurFade delay={BLUR_FADE_DELAY}>
							<HackathonCard {...project} />
						</BlurFade>
					{/each}
				</ul>
			</BlurFade>
		</div>
	</section> -->

	<!-- <section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div
						class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background"
					></div>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						say hello on <a href={DATA.contact.social.X.url}>𝕏</a>
					</p>
				</div>
			</BlurFade>
		</div>
	</section> -->
</main>
