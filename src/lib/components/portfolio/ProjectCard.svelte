<script lang="ts">
	import { marked } from 'marked';
	import { ArrowUpRightIcon } from 'lucide-svelte';
	import Badge from '../ui/badge/badge.svelte';

	export let title: string;
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let tags: readonly string[] = [];
	export let link: string = '';
	export let image: string = '';
	export let video: string = '';
	export let links: {
		icon: any;
		type: string;
		href: string;
		internal?: boolean;
		class?: string;
	}[] = [];

	const isPostLink = (entry: (typeof links)[number]) => entry.href?.startsWith('/blog/');

	// The write-up gets the lead position and the only filled treatment in the footer.
	$: postLink = links.find(isPostLink);
	$: otherLinks = links.filter((entry) => !isPostLink(entry));
</script>

<!-- Timeline entry -->
<article class="group">
	<time class="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{dates}</time>
	<h3 class="mt-2 text-xl font-semibold tracking-tight">
		<a {href} class="inline-flex items-center gap-1.5">
			{title}
			<ArrowUpRightIcon
				class="size-4 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
				strokeWidth={1.6}
			/>
		</a>
	</h3>
	<div
		class="prose prose-sm mt-2 max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert"
	>
		{@html marked(description)}
	</div>

	{#if video || image}
		<a {href} class="mt-4 block overflow-hidden rounded-lg border bg-muted">
			{#if video}
				<video
					class="aspect-video w-full object-cover"
					src={video}
					autoplay
					loop
					muted
					playsinline
				></video>
			{:else}
				<img class="aspect-video w-full object-cover" src={image} alt={title} loading="lazy" />
			{/if}
		</a>
	{/if}

	{#if tags && tags.length > 0}
		<div class="mt-3 flex flex-wrap gap-1">
			{#each tags as tag}
				<Badge class="rounded-[4px] px-1.5 py-0 text-[10px]" variant="secondary">
					{tag}
				</Badge>
			{/each}
		</div>
	{/if}

	<div class="hidden font-sans text-xs underline print:visible">
		{link?.replace('https://', '').replace('www.', '').replace('/', '')}
	</div>

	{#if links && links.length > 0}
		<div class="mt-4 flex flex-row flex-wrap items-center gap-1.5">
			{#if postLink}
				<a
					href={postLink.href}
					target={postLink.internal ? undefined : '_blank'}
					class="group/post inline-flex items-center gap-1 rounded-full bg-primary px-2 py-1 text-[10px] font-medium text-primary-foreground ring-1 ring-inset ring-white/10 transition-colors hover:bg-primary/90"
				>
					<svelte:component this={postLink.icon} class="mb-px size-3" strokeWidth={1.6} />
					{postLink.type}
					<ArrowUpRightIcon
						class="size-2.5 opacity-70 transition-transform duration-200 ease-out group-hover/post:-translate-y-px group-hover/post:translate-x-px"
						strokeWidth={2}
					/>
				</a>
			{/if}
			{#each otherLinks as link}
				<a href={link?.href} target={link?.internal ? undefined : '_blank'}>
					<Badge
						variant="outline"
						class="flex items-center justify-center gap-1 border-border px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground {link.class}"
					>
						<svelte:component this={link.icon} class="mb-px size-3" strokeWidth={1.6} />
						{link.type}
					</Badge>
				</a>
			{/each}
		</div>
	{/if}
</article>
