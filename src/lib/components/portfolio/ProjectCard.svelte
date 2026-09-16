<script lang="ts">
	import { marked } from 'marked';
	import { ArrowUpRightIcon } from 'lucide-svelte';
	import Badge from '../ui/badge/badge.svelte';

	let _class = '';
	export { _class as class };
	export let title: string;
	export let href: string = '';
	export let description: string;
	export let dates: string;
	export let tags: readonly string[];
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

<!-- Card -->
<div
	class="flex h-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-all duration-300 ease-out hover:shadow-lg"
>
	<a href={href || '#'} class="block cursor-pointer" class:hidden={!video && !image}>
		{#if video}
			<video
				class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
				src={video}
				autoplay
				loop
				muted
			></video>
		{:else}
			<img class="h-40 w-full overflow-hidden object-cover object-top" src={image} alt={title} />
		{/if}
	</a>
	<!-- Card Header -->
	<div class="flex flex-col px-2">
		<div class="space-y-1">
			<!-- Card Title -->
			<div class="mt-1 text-base">{title}</div>
			<time class="font-sans text-xs">{dates}</time>
			<div class="hidden font-sans text-xs underline print:visible">
				{link?.replace('https://', '').replace('www.', '').replace('/', '')}
			</div>
			<div
				class="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"
			>
				{@html marked(description)}
			</div>
		</div>
	</div>
	<!-- Card Content -->
	<div class="mt-auto flex flex-col text-pretty px-2 font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>
	<!-- Card Footer -->
	<div class="flex items-center px-2 pb-2 pt-2">
		{#if links && links.length > 0}
			<div class="flex flex-row flex-wrap items-center gap-1">
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
	</div>
</div>
