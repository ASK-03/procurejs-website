<script>
	import AnimateHeading from './AnimateHeading.svelte';
	import Button from './Button.svelte';
	let lines = ['Beyond', 'Sourcing.', 'Beyond', 'Expectations'];
</script>

<div class="flex flex-col gap-4 w-[454px] mr-[50px]">
	<AnimateHeading {lines} />
	<p class="text-[#E5E5E5] text-[24px] tracking-normal">
		Unleash India's Power. Source Smarter, Save More with <span class="text-[#6557F1]">Procure</span
		>.
	</p>
	<div class="mt-[115px]">
		<Button text="Contact" link="#contact" />
	</div>
	<div class="text-[#E5E5E5] text-[24px] text-nowrap tracking-tight">
		Let’s talk about what works for you the best!
	</div>
</div>
