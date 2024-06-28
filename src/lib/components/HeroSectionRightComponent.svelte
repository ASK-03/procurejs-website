<script>
	import { Img } from 'flowbite-svelte';
	// import heroSectionImage from '@/static/hero-section-image-min.jpeg';
	import heroSectionImage from '@/static/world.svg';
</script>

<div class="img-container absolute top-0 left-0 w-full h-full -z-10">
	<Img
		src={heroSectionImage}
		alt="A hand with a magnifying glass looking at India in globe"
		class="img relative -top-20 left-0 md:top-0 md:left-10 h-full w-full opacity-10 -z-10 md:-translate-y-20 mx-auto"
	/>
</div>
