<script>
	import Heading from '@/components/Heading.svelte';
	import AboutCard from '@/components/AboutCard.svelte';
	import aboutDetails from '@/data/about.js';
	import perks from '@/data/perks.js';

	// gsap imports
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	let aboutComponent;

	onMount(() => {
		setTimeout(() => {
			gsap.from('#about-card', {
				opacity: 0,
				duration: 0.5,
				delay: 0.2,
				x: -100,
				ease: 'power1.inOut',

				scrollTrigger: {
					trigger: aboutComponent,
					start: 'top bottom-=40%',
					end: 'bottom-=50%'
					// markers: true
				}
			});

			const cards = gsap.utils.toArray('#perk-grid #perk-card');

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

<section bind:this={aboutComponent} class="about pt-[48px] pb-[32px]" id="about">
	<div id="about-heading">
		<Heading display="left" heading="About" subHeading="Know Us Better!" />
	</div>
	<div id="about-card" class="w-full flex align-middle items-center">
		<div class="mt-[6rem] flex flex-col">
			<AboutCard spec={aboutDetails?.FounderInfo} />
			<!-- <AboutCard spec={aboutDetails?.CTOInfo} reverse={true} /> -->
		</div>
	</div>

	<div id="perk-grid" class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10 mx-auto">
		{#each perks as benefit, index (`benefit-${index}`)}
			<div
				id="perk-card"
				class="perk-card opacity-1 mx-auto h-auto min-w-[18rem] max-w-[20rem] w-auto p-12 rounded-xl bg-light-cardBgColor/15 hover:bg-light-cardBgColor/30 backdrop-blur-md shadow-2xl shadow-light-accent/10 hover:shadow-light-accent/20 hover:shadow-3xl transition duration-500 ease-in-out"
			>
				<!-- <img class="w-auto h-[20vh] object-contain" src={benefit.image} alt={benefit.title} /> -->
				<h1 class="text-light-textColor font-semibold text-[21px] pt-8 pb-2">
					{benefit.title}
				</h1>
				<p class="text-light-textColor/80 text-[16px]">{@html benefit.description}</p>
			</div>
		{/each}
	</div>
</section>
