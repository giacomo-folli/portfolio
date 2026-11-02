<script lang="ts">
	import { page } from "$app/stores";
	import { DATA } from "$lib/data/resume";
	import ModeToggle from "./ModeToggle.svelte";
	import Button from "$lib/components/ui/button/button.svelte";

	$: notHome = $page.url.pathname.startsWith("/blog/");
</script>

<header class="text-sm">
	<nav class="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Header">
		{#if notHome}
			<Button
				href="/blog"
				class="border-none p-0 bg-transparent text-muted-foreground outline-none hover:bg-inherit"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-left mb-px mr-1"
					><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
				>
				Back</Button
			>
		{/if}

		{#each DATA.navbar as item}
			<a
				href={item.href}
				class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
			>
				<svelte:component this={item.icon} class="size-4" strokeWidth={1.5} />
				{item.label}
			</a>
		{/each}

		<div class="ml-auto">
			<ModeToggle />
		</div>
	</nav>
</header>
