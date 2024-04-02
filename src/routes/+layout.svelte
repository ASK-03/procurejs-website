<script>
	import { onMount } from 'svelte';
	import Loader from '@/components/Loader.svelte';
	import '../app.css';

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
