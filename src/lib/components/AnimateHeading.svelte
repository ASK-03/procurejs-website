<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	export let lines;

	onMount(() => {
		gsap.from('#line', {
			opacity: 0,
			y: 30,
			duration: 0.5,
			stagger: 0.1,
			ease: 'power3.inOut'
		});
	});
</script>

<h1
	class="main-heading text-[48px] md:text-[64px] text-light-textColor leading-[48px] md:leading-[64px] font-semibold"
>
	{#each lines as line, i}
		{#if i % 2 == 1}
			<span id="line" class="text-[#6557f1] absolute">{line}</span><br />
		{:else}
			<span id="line" class="absolute">{line}</span> <br />
		{/if}
	{/each}
</h1>
