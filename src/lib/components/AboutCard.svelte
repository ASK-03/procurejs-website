<script>
	import { Img } from 'flowbite-svelte';
	export let spec;
	export let reverse = false;

	import { inview } from 'svelte-inview';
	// import { Motion } from 'svelte-motion';

	let src = spec.src || '';
	let designation = spec.designation || '';
	let subHeading = spec.subHeading || '';
	let content = spec.content || '';

	let style = reverse
		? 'flex flex-row-reverse gap-40 mb-[4rem] items-center align-middle'
		: 'flex flex-row gap-40 mb-[4rem] items-center align-middle';
	let alignment = reverse
		? 'left flex flex-col gap-3 text-right items-end'
		: 'left flex flex-col gap-3';

	let isInView;
	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	};

	// const variants = {
	// 	visible: {
	// 		scale: 1,
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 5,
	// 			delay: 5
	// 		}
	// 	},
	// 	hidden: { opacity: 0, scale: 0.5 }
	// };

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<!-- <Motion let:motion {variants} inital="hidden" animate="visible"> -->
		<div
			class={`${style} px-20 py-10 bg-white/15 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/20`}
		>
			<Img {src} alt="Picture" class="rounded-[50%] h-[15rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
			<div class={alignment}>
				<div class="heading text-white/70 text-[2rem] font-semibold flex flex-col">
					<span class="mb-[-1rem]">Meet Our</span>
					<span class="text-[#133541]/90 text-[3rem] font-bold">{designation}</span>
				</div>
				<div class="subheading text-white/70 text-[20px] font-semibold">
					{subHeading}
				</div>
				<div class="content w-[80%] text-white/70">
					{content}
				</div>
			</div>
		</div>
		<!-- </Motion> -->
	{/if}
</div>
