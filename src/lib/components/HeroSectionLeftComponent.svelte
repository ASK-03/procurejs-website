<script>
	import AnimateHeading from './AnimateHeading.svelte';
	import Button from '@/components/Button.svelte';
	let lines = ['Beyond', 'Sourcing.', 'Beyond', 'Expectations'];
</script>

<div class="flex flex-col gap-4 md:w-[454px]">
	<div class="mb-[16px] md:mb-[24px] sm:mb-[32px]">
		<AnimateHeading {lines} />
	</div>
	<p class="text-light-textColor/80 text-[18px] sm:text-[24px] tracking-normal">
		Unleash India's Power. Source Smarter, Save More with Procure.
	</p>
	<div class="mx-auto z-0 sm:mx-0 mt-10 md:mt-[115px]">
		<Button text="Contact" link="#contact" />
	</div>
	<div class="text-light-textColor/75 text-[18px] md:text-[24px] md:text-nowrap tracking-tight">
		Let’s talk about what works for you the best!
	</div>
</div>
