<script>
	import { Img } from 'flowbite-svelte';
	export let spec;
	export let reverse = false;

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
</script>

<div class={`${style}`}>
	<Img {src} alt="Picture" class="rounded-[50%] h-[15rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
	<div class={alignment}>
		<div class="heading text-black text-[2rem] font-semibold flex flex-col">
			<span class="mb-[-1rem]">Meet Our</span>
			<span class="text-[#346474] text-[3rem] font-bold">{designation}</span>
		</div>
		<div class="subheading">
			{subHeading}
		</div>
		<div class="content w-[80%]">
			{content}
		</div>
	</div>
</div>
