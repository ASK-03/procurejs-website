<script>
	import { onMount } from 'svelte';
	import Loading from './loading.svelte';
	import '../app.css';

	let isLoading = true;

	onMount(() => {
		isLoading = false;
	});
</script>

{#if isLoading}
	<Loading />
{:else}
	<slot />
{/if}
