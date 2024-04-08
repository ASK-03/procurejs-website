<script>
	import { onMount } from 'svelte';
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let lines;
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<h1
		class="main-heading text-[48px] md:text-[64px] text-[#fff] leading-[48px] md:leading-[64px] font-semibold"
		transition:fly={{ y: 50, duration: 2000, easing: backOut }}
	>
		{#each lines as line, i}
			{#if i % 2 == 1}
				<span class="text-[#6557f1]">{line}</span><br />
			{:else}
				<span>{line}</span> <br />
			{/if}
		{/each}
	</h1>
{/if}
