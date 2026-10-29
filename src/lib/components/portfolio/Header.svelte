<script lang="ts">
	import { DATA } from "$lib/data/resume";
	import ModeToggle from "./ModeToggle.svelte";
</script>

<header class="text-sm">
	<nav class="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Header">
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
