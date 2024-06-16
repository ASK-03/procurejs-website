<script>
	import Navbar from '@/components/Navbar.svelte';
	import HeroSectionLeftComponent from '@/components/HeroSectionLeftComponent.svelte';
	import HeroSectionRightComponent from '@/components/HeroSectionRightComponent.svelte';
</script>

<section class="hero-section pt-[16px] pb-[32px]">
	<div class="mt-6 z-10">
		<Navbar />
	</div>
	<!-- <div class="w-[100%] md:mt-[3rem] md:flex md:align-middle md:items-center md:justify-between">
		<div class="">
			<img
				src={logo}
				alt="India's Best Sourcing and Procurement Company. ProcureJs"
				class="h-[4.5rem] sm:h-100"
			/>
		</div>
		<div class="navbar mt-[5rem] md:mt-0">
			<Navbar />
		</div>
		<div class="invisible lg:visible">
			<Button text="Contact" link="#contact" />
		</div>
	</div> -->

	<div
		class="content mt-[5vh] md:mt-[10vh] md:flex md:gap-4 sm:flex-row md:align-middle md:items-center md:justify-between"
	>
		<div class="left">
			<HeroSectionLeftComponent />
		</div>
		<div class="right">
			<HeroSectionRightComponent />
		</div>
	</div>
</section>
