<script lang="ts">
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { getProjectForPost } from "$lib/relations";
	import { formatDate } from "$lib/utils";
	import { CodeIcon, SparklesIcon } from "lucide-svelte";

	export let data;

	$: aiAssisted = data.meta["ai_assisted"] === true;
	$: relatedProject = getProjectForPost(data.meta["project"]);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="-mt-10">
	<Button
		href="/blog"
		style="padding: 0 0px !important; background:transparent; border:none;"
		class=" mb-2 h-6 border-none bg-transparent text-xs text-muted-foreground outline-none"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-arrow-left mb-px mr-1"
			><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
		>
		Back</Button
	>
</div>
<article>
	<!-- Title -->
	<hgroup class="mb-1">
		<h1
			class="title max-w-[650px] text-3xl font-medium capitalize tracking-tighter"
		>
			{data.meta.title}
		</h1>
		<div
			class="mb-3 mt-2 flex max-w-[650px] items-center justify-between text-sm"
		>
			<p class="text-sm text-neutral-600 dark:text-neutral-400">
				{formatDate(data.meta.date)}
			</p>
			{#if aiAssisted}
				<Badge
					variant="outline"
					class="gap-1 rounded-[4px] font-normal text-muted-foreground"
					title="This post was drafted and edited with the help of AI tools"
				>
					<SparklesIcon class="size-3" strokeWidth={1.5} />
					Written with AI help
				</Badge>
			{/if}
		</div>
	</hgroup>

	<!-- Tags -->
	<div class="tags mb-2 flex space-x-2">
		{#each data.meta.categories as category}
			<Badge variant="outline" class="rounded-[4px]">{category}</Badge>
		{/each}
	</div>

	<!-- Related project -->
	{#if relatedProject}
		<p class="mb-2 flex items-center gap-1 text-xs text-muted-foreground">
			<CodeIcon class="size-3" strokeWidth={1.5} />
			Related project:
			<a
				href="/#projects"
				class="underline underline-offset-2 hover:text-foreground"
			>
				{relatedProject.title}
			</a>
		</p>
	{/if}

	<Separator class="mb-4" />

	<!-- Post -->
	<div
		class="post-body prose-video prose-ol:my2 prose dark:prose-invert
				prose-h1:my-1 prose-h2:mb-2 prose-h2:mt-6 prose-h2:font-medium prose-h3:my-1 prose-p:mb-0.5 prose-a:my-3
				prose-blockquote:my-3 prose-figcaption:my-3 prose-pre:my-3 prose-ul:my-3
				prose-table:border-b last:prose-table:border-b prose-thead:border
				prose-thead:bg-zinc-100 prose-th:border prose-td:border-x prose-td:text-center
				prose-img:mx-auto prose-img:my-3 prose-img:text-center prose-hr:my-3
				dark:prose-thead:bg-zinc-900"
	>
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="postcss">
	/* Inline code (`like this`) — mdsvex only highlights fenced blocks, so style
	   inline <code> ourselves and drop the backticks typography adds. */
	.post-body :global(:not(pre) > code) {
		@apply rounded-[4px] border bg-muted px-1 py-0.5 font-mono text-[0.85em] font-normal text-foreground;
	}

	.post-body :global(:not(pre) > code::before),
	.post-body :global(:not(pre) > code::after) {
		content: none;
	}
</style>
