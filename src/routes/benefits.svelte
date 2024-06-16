<script>
	import Heading from '@/components/Heading.svelte';
	import benefits from '@/data/benefits.js';

	import { inview } from 'svelte-inview';

	let isInView;
	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<section
	class="benefits h-fit md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[80px] lg:px-[100px] xl:px-[162px] pt-[48px] pb-[32px] snap-start"
>
	<Heading display="right" heading="Benefits" subHeading="Why Choose Us?" />

	<div use:inview={options} on:inview_change={handleChange}>
		{#if isInView}
			<div class="mt-[6rem]">
				<div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-10">
					{#each benefits as benefit, index (`benefit-${index}`)}
						<div
							class="card h-auto lg:mx-auto w-auto p-12 rounded-lg bg-white/15 backdrop-blur-md shadow-2xl shadow-blue-500/20"
						>
							<img class="w-auto h-[20vh] object-contain" src={benefit.image} alt={benefit.title} />
							<h1 class="text-white font-semibold text-[21px] pt-8 pb-2">
								{benefit.title}
							</h1>
							<p class="text-white/80 text-[16px]">{benefit.description}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
