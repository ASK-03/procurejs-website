<script>
	import { Img } from 'flowbite-svelte';
	export let spec;
	export let reverse = false;

	import { inview } from 'svelte-inview';

	let src = spec.src || '';
	let designation = spec.designation || '';
	let subHeading = spec.subHeading || '';
	let content = spec.content || '';

	let style = reverse
		? 'card flex flex-col lg:flex-row-reverse gap-10 md:gap-16 xl:gap-40 mb-[4rem] items-center align-middle'
		: 'card flex flex-col lg:flex-row gap-10 md:gap-16 xl:gap-40 mb-[4rem] items-center align-middle';
	let alignment = reverse
		? 'left flex flex-col gap-3 text-center md:text-right md:items-end'
		: 'left flex flex-col text-center md:text-left gap-3';

	let contentStyle = reverse ? 'md:text-right' : 'md:text-left';

	let isInView;
	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div
			class={`${style} px-12 md:px-20 py-12 bg-white/15 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/20 `}
		>
			<Img
				{src}
				alt="Picture"
				class="card-image rounded-[50%] h-[15rem] w-[15rem] object-cover shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
			/>
			<div class={alignment}>
				<div class="heading text-white/70 text-[2rem] font-semibold flex flex-col">
					<span class="mb-[-1rem]">Meet Our</span>
					<span class="text-[#133541]/90 text-[3rem] font-bold mt-[1rem] leading-[3rem]"
						>{designation}</span
					>
				</div>
				<div class="subheading text-white/70 text-[20px] font-semibold">
					{subHeading}
				</div>
				<div class="content md:w-[80%] text-white/70 text-center {contentStyle}">
					{content}
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.card,
	.card-image {
		transition: transform 0.5s ease-in-out;
	}
</style>
