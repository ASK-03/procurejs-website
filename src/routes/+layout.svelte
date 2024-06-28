<script>
	import { onMount } from 'svelte';
	import Loader from '@/components/Loader.svelte';
	import HOC from '@/components/hoc.svelte';
	import '../app.css';

	// web-analytics vercel
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	//

	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1000);
	});
</script>

{#if isLoading}
	<Loader />
{:else}
	<HOC page={$$props.page}>
		<slot />
	</HOC>
{/if}
