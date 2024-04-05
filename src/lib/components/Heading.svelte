<script>
	import TextGenerateEffect from '@/components/ui/TextGenerateEffect/TextGenerateEffect.svelte';

	export let display = 'left';
	export let heading = 'Hello World';
	export let subHeading = 'sub';
	export let headingColor = '#E5E5E5';
	export let subHeadingColor = '#E5E5E5';
	export let className = '';

	let headingStyle;
	let subHeadingStyle;
	let divStyle;
	let wrapperStyle;
	let headingWrapperStyle;
	if (display == 'left') {
		headingStyle = `text-[48px] text-[${headingColor}] leading-[48px] font-semibold font-montserrat`;
		subHeadingStyle = `text-[18px] text-[${subHeadingColor}] leading-[18px] -mt-2`;
		headingWrapperStyle = `flex flex-col mx-4 justify-between items-start`;
		divStyle = 'w-[16px] h-[75px] bg-[#346474]';
		wrapperStyle = `flex flex-row ${className}`;
	} else if (display == 'middle') {
		headingStyle = `text-[48px] text-[${headingColor}] leading-[48px] font-semibold font-montserrat`;
		subHeadingStyle = `text-[18px] text-[${subHeadingColor}] leading-[18px]`;
		divStyle = `display-none`;
		headingWrapperStyle = `flex flex-col mx-4 justify-between items-center align-middle`;
		wrapperStyle = `flex flex-col mx-4 justify-between items-center align-middle ${className}`;
	} else {
		headingStyle = `text-[48px] text-[${headingColor}] leading-[48px] font-semibold font-montserrat`;
		subHeadingStyle = `text-[18px] text-[${subHeadingColor}] leading-[18px] -mt-2`;
		headingWrapperStyle = `flex flex-col mx-4 justify-between items-end`;
		divStyle = `w-[16px] h-[75px] bg-[#346474]`;
		wrapperStyle = `flex flex-row-reverse ${className}`;
		divStyle = `w-[16px] h-[75px] bg-[#346474]`;
	}
</script>

<!-- TODO: Add responsiveness to the heading for small screens -->

<div class={wrapperStyle}>
	<div class={divStyle}></div>
	<div class={headingWrapperStyle}>
		<h1 class={headingStyle}>
			<TextGenerateEffect words={heading} />
		</h1>
		<p class={subHeadingStyle}>
			&nbsp;<TextGenerateEffect words={subHeading} />
		</p>
	</div>
</div>
