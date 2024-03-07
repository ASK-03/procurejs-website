<script>
	import Navbar from '../components/Navbar.svelte';
	import HeroSectionLeftComponent from '../components/HeroSectionLeftComponent.svelte';
	import HeroSectionRightComponent from '../components/HeroSectionRightComponent.svelte';
</script>

<section class="hero-section bg-[#2A4064] h-[100vh] w-[100%]">
	<div class="navbar pt-[32px]">
		<Navbar />
	</div>
	<div class="content">
		<div class="left">
			<HeroSectionLeftComponent />
		</div>
		<div class="right">
			<HeroSectionRightComponent />
		</div>
	</div>
</section>

<style>
</style>
