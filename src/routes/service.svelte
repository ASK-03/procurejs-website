<script>
	import Heading from '@/components/Heading.svelte';

	import { twMerge } from 'tailwind-merge';
	import DirectionAwareHover from '@/components/ui/DirectionAwareHover/DirectionAwareHover.svelte';

	// data
	import services from '@/data/services.js';

	// gsap
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	//

	// gsap
	onMount(() => {
		setTimeout(() => {
			const cards = gsap.utils.toArray('#service-card');
			cards.forEach((card, index) => {
				gsap.from(card, {
					opacity: 0,
					duration: 1,
					x: () => (index % 2 === 0 ? 100 : -100),
					delay: 0.2,
					ease: 'power1.inOut',
					scrollTrigger: {
						trigger: card,
						scroller: 'body',
						start: `top-=20% 90%`,
						end: `bottom 50%`
						// markers: true
					}
				});
			});
		}, 100);
	});
</script>

<section class="service pt-[48px] pb-[32px]" id="services">
	<Heading display="left" heading="Service" subHeading="Served with Love" />
	<div class="mt-[6rem] flex flex-col align-middle items-center justify-center">
		{#each services as item, index (`content-${index}`)}
			<div
				id="service-card"
				class="mb-[6vh] max-mb-[3rem] flex flex-col align-middle items-center justify-center opacity-1"
			>
				<h2
					class="mb-4 w-fit rounded-full bg-light-purple backdrop-blur-xl px-6 py-1 text-2xl font-montserrat text-white shadow-2xl shadow-light-cardBgColor/20"
				>
					{item.badge}
				</h2>
				<h1 class={twMerge('mb-4 text-[32px] text-light-textColor')}>
					{item.title}
				</h1>
				{#if item?.image}
					<!-- show when on tablet or mobile -->
					<div
						class="flex flex-col align-middle w-full items-center justify-between gap-4 rounded-xl bg-light-cardBgColor/15 backdrop-blur-md shadow-2xl shadow-light-cardBgColor/10 xl:hidden"
					>
						<img
							class="z-0 rounded-tl-xl rounded-tr-xl w-full max-h-[400px] object-cover"
							src={item.image}
							alt={item.description}
						/>
						<div
							class="flex z-10 items-center align-middle justify-center text-light-textColor/90 text-[16px] sm:text-[20px] p-[2rem] sm:px-[2rem]"
						>
							{@html item.description}
						</div>
					</div>
					<!-- show when on desktop -->
					<div class="hidden xl:block xl:max-w-[900px] xl:max-h-[700px]">
						<DirectionAwareHover imageUrl={item.image}>
							<div class="text-[20px]">
								{@html item.description}
							</div>
						</DirectionAwareHover>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
