<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import '../app.css';

	setMode('dark');

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<ModeWatcher />
<div
	class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24"
>
	<slot></slot>
	<Navbar />
</div>
