<script>
	import Navbar from '@/components/Navbar.svelte';
	import HeroSectionLeftComponent from '@/components/HeroSectionLeftComponent.svelte';
	import HeroSectionRightComponent from '@/components/HeroSectionRightComponent.svelte';
	import logo from '@/static/procurejs-logo.png';
	import Button from '@/components/Button.svelte';
</script>

<section
	class="hero-section h-fit md:h-screen md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[120px] lg:px-[162px] pb-[32px]"
>
	<div class="relative md:mt-[3rem] flex align-middle items-center justify-between">
		<div class="">
			<img
				src={logo}
				alt="India's Best Sourcing and Procurement Company. ProcureJs"
				class="h-[4.5rem] sm:h-100"
			/>
		</div>
		<div class="hidden xl:block">
			<Button text="Contact" link="#contact" />
		</div>
	</div>
	<div class="navbar mt-[32px]">
		<Navbar />
	</div>
	<div
		class="content mt-[5vh] md:mt-[10vh] md:flex md:gap-4 sm:flex-row md:align-middle md:items-center md:justify-between"
	>
		<div class="left">
			<HeroSectionLeftComponent />
		</div>
		<div class="right hidden h-0 w-0 md:block md:h-fit md:w-fit">
			<HeroSectionRightComponent />
		</div>
	</div>
</section>
