<script>
	import Navbar from '@/components/Navbar.svelte';
	import HeroSectionLeftComponent from '@/components/HeroSectionLeftComponent.svelte';
	import HeroSectionRightComponent from '@/components/HeroSectionRightComponent.svelte';
</script>

<section class="hero-section pt-[16px] pb-[32px]">
	<div class="mt-6 z-10">
		<Navbar />
	</div>

	<div
		class="content mt-[5vh] md:mt-[10vh] md:flex md:gap-4 sm:flex-row md:align-middle md:items-center md:justify-between"
	>
		<div class="left">
			<HeroSectionLeftComponent />
		</div>
	</div>
	<div class="right">
		<HeroSectionRightComponent />
	</div>
</section>
