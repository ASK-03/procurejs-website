<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let svgHeight = 0;
	let velo = 0;
	let y1 = tweened(50, { duration: 500, easing: cubicOut });
	let y2 = tweened(50, { duration: 500, easing: cubicOut });
	let scrollYProgress = 0;
	let scrollYProgressVelocity = 0;
	let ref: HTMLDivElement;
	let contentRef: HTMLDivElement;

	onMount(() => {
		if (typeof window !== 'undefined') {
			svgHeight = contentRef.offsetHeight;
			window.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	});

	$: {
		if (typeof window !== 'undefined') {
			scrollYProgress = window.scrollY / document.body.offsetHeight;
			scrollYProgressVelocity = scrollYProgress - scrollYProgressVelocity;
			velo = scrollYProgressVelocity;
			y1.set(scrollYProgress * (svgHeight - velo * 500));
			y2.set(scrollYProgress * (svgHeight - velo * 2000));
		}
	}

	let ticking = false;
	function handleScroll() {
		if (!ticking) {
			if (typeof window !== 'undefined') {
				window.requestAnimationFrame(() => {
					scrollYProgress = window.scrollY / document.body.offsetHeight;
					ticking = false;
				});
				ticking = true;
			}
		}
	}
</script>

<div bind:this={ref} class="relative mx-auto h-full w-full max-w-xl">
	<div class="absolute -left-20 top-3">
		<div
			class="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
			style="box-shadow: {scrollYProgress > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}"
		>
			<div
				class="h-2 w-2 rounded-full border border-neutral-300 bg-white"
				style="background-color: {scrollYProgress > 0
					? 'white'
					: 'var(--emerald-500)'}; border-color: {scrollYProgress > 0
					? 'white'
					: 'var(--emerald-600)'}"
			/>
		</div>
		<svg
			viewBox={`0 0 20 ${svgHeight}`}
			width="20"
			height={svgHeight}
			class=" ml-4 hidden lg:block"
			aria-hidden="true"
		>
			<path
				d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
				fill="none"
				stroke="#9091A0"
				stroke-opacity="0.16"
			/>
			<path
				d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
				fill="none"
				stroke="url(#gradient)"
				stroke-width="4"
				class="motion-reduce:hidden"
			/>
			<defs>
				<linearGradient
					id="gradient"
					gradientUnits="userSpaceOnUse"
					x1="0"
					x2="0"
					y1={$y1}
					y2={$y2}
				>
					<stop stop-color="#18CCFC" stop-opacity="0"></stop>
					<stop stop-color="#18CCFC"></stop>
					<stop offset="0.325" stop-color="#6344F5"></stop>
					<stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div bind:this={contentRef}>
		<slot />
	</div>
</div>
