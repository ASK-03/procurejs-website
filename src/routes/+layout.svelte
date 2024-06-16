<script>
	import { onMount } from 'svelte';
	import Loader from '@/components/Loader.svelte';
	import '../app.css';

	// web-analytics vercel
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	//

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});
</script>

{#if isLoading}
	<Loader />
{:else}
	<slot />
{/if}
