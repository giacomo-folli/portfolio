<script>
	import { page } from "$app/stores";
	import Footer from "$lib/components/portfolio/Footer.svelte";
	import Header from "$lib/components/portfolio/Header.svelte";

	import { ModeWatcher, setMode } from "mode-watcher";
	import { injectAnalytics } from "@vercel/analytics/sveltekit";
	import { dev } from "$app/environment";
	import "../app.css";

	setMode("dark");

	injectAnalytics({ mode: dev ? "development" : "production" });

	$: locale = $page.data.locale;
</script>

<ModeWatcher />

<div class="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
	<div class="mx-auto max-w-2xl px-6 font-sans antialiased">
		<Header {locale} />
	</div>
</div>

<div
	class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 pt-4 pb-12 font-sans antialiased sm:pt-12 sm:pb-24"
>
	<slot></slot>
	<Footer />
</div>
