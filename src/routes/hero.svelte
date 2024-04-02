<script>
	import Navbar from '@/components/Navbar.svelte';
	import HeroSectionLeftComponent from '@/components/HeroSectionLeftComponent.svelte';
	import HeroSectionRightComponent from '@/components/HeroSectionRightComponent.svelte';
	import logo from '@/static/procurejs-logo.png';
	import Button from '@/components/Button.svelte';
</script>

<section class="hero-section h-[100vh] w-[100%]">
	<div class="absolute inset-x-[162px] top-[3rem]">
		<img src={logo} alt="" class="h-[4.5rem] sm:h-100" />
	</div>
	<div class="absolute right-[162px] top-[3rem]">
		<Button text="Contact" link="#contact" />
	</div>
	<div class="navbar pt-[32px]">
		<Navbar />
	</div>
	<div class="content mx-[162px] mt-[25vh] flex flex-row align-middle items-center justify-between">
		<!-- TODO: This is component is not responsive -->
		<div class="left">
			<HeroSectionLeftComponent />
		</div>
		<div class="right">
			<HeroSectionRightComponent />
		</div>
	</div>
</section>

<style>
	section {
		scroll-snap-align: start;
	}
	/* .hero-section {
		background-image: radial-gradient(
			circle at 75% 50%,
			#2158b1,
			#2154a2,
			#234f94,
			#254b85,
			#274677,
			#26426f,
			#263f67,
			#253b5f,
			#21375b,
			#1d3358,
			#193054,
			#152c51
		);
	} */
</style>
