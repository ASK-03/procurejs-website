<script>
	import Heading from '@/components/Heading.svelte';
	import benefits from '@/data/benefits.js';

	//gsap imports
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		setTimeout(() => {
			const cards = gsap.utils.toArray('#benefit-card');
			cards.forEach((card, index) => {
				gsap.from(card, {
					opacity: 0,
					duration: 0.5,
					delay: 0.15 * index,
					x: -100,
					ease: 'power1.inOut',

					scrollTrigger: {
						trigger: card,
						start: 'top-=50% 90%',
						end: 'bottom 50%'
						// markers: true
					}
				});
			});
		}, 100);
	});
</script>

<section class="benefits pt-[48px] pb-[32px]">
	<Heading display="right" heading="Benefits" subHeading="Why Choose Us?" />
	<div class="mt-[6rem]">
		<div
			id="benefit-card-grid"
			class="card-grid opacity-1 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-10"
		>
			{#each benefits as benefit, index (`benefit-${index}`)}
				<div
					id="benefit-card"
					class="opactity-1 h-auto lg:mx-auto w-auto p-12 rounded-lg bg-light-cardBgColor/15 backdrop-blur-md shadow-2xl shadow-light-cardBgColor/10 transition duration-500 ease-in-out hover:backdrop-blur-0 hover:bg-light-cardBgColor/30 hover:shadow-light-accent/20 hover:shadow-3xl"
				>
					<img class="w-auto h-[20vh] object-contain" src={benefit.image} alt={benefit.title} />
					<h1 class="text-[#3f3d56] font-semibold text-[21px] pt-8 pb-2">
						{benefit.title}
					</h1>
					<p class="text-[#3f3d56]/80 text-[16px]">{benefit.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
