<script>
	import { Img } from 'flowbite-svelte';
	export let spec;
	export let reverse = false;

	import { inview } from 'svelte-inview';

	let src;
	let designation;
	let subHeading;
	let content;
	if (spec.src !== undefined) {
		src = spec.src;
	}
	if (spec.designation !== undefined) {
		designation = spec.designation;
	}
	if (spec.subHeading !== undefined) {
		subHeading = spec.subHeading;
	}
	if (spec.content !== undefined) {
		content = spec.content;
	}

	let style = reverse
		? 'flex flex-row-reverse gap-40 mb-[4rem] items-center align-middle'
		: 'flex flex-row gap-40 mb-[4rem] items-center align-middle';
	let alignment = reverse
		? 'left flex flex-col gap-3 text-right items-end'
		: 'left flex flex-col gap-3';

	let isInView;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div class={`${style} px-20 py-10 bg-white/20 backdrop-blur-3xl rounded-3xl`}>
			<Img {src} alt="Picture" class="rounded-[50%] h-[15rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
			<div class={alignment}>
				<div class="heading text-white/70 text-[2rem] font-semibold flex flex-col">
					<span class="mb-[-1rem]">Meet Our</span>
					<span class="text-[#133541]/90 text-[3rem] font-bold">{designation}</span>
				</div>
				<div class="subheading text-white/70">
					{subHeading}
				</div>
				<div class="content w-[80%] text-white/70">
					{content}
				</div>
			</div>
		</div>
	{/if}
</div>
