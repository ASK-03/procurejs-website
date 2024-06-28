<script>
	import { Img } from 'flowbite-svelte';
	export let spec;
	export let reverse = false;

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
</script>

<div
	class={`${style} px-12 md:px-20 py-12 rounded-xl bg-light-cardBgColor/15 hover:bg-light-cardBgColor/25 backdrop-blur-md shadow-2xl shadow-light-accent/10 hover:shadow-light-accent/20 hover:shadow-3xl transition duration-500 ease-in-out`}
>
	<Img
		{src}
		alt="Picture"
		class={`card-image rounded-[50%] h-[15rem] w-[15rem] object-cover shadow-2xl shadow-light-accent/30 hover:shadow-light-accent/50 hover:shadow-3xl 
				${reverse == true ? 'hover:rotate-12' : 'hover:-rotate-12'} 
				hover:scale-105 transition duration-500 ease-in-out`}
	/>
	<div class={alignment}>
		<div class="heading text-light-textColor/75 text-[2rem] font-semibold flex flex-col">
			<span class="mb-[-1rem]">Meet Our</span>
			<span class="text-light-accent/80 text-[3rem] font-bold mt-[1rem] leading-[3rem]"
				>{designation}</span
			>
		</div>
		<div class="subheading text-light-textColor/90 text-[20px] font-semibold">
			{subHeading}
		</div>
		<div class="content md:w-[80%] text-light-textColor/80 text-center {contentStyle}">
			{content}
		</div>
	</div>
</div>
