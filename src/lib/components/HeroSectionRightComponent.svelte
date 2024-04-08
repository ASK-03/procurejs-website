<script>
	import { Img } from 'flowbite-svelte';
	// import heroSectionImage from '@/static/hero-section-image-min.jpeg';
	import heroSectionImage from '@/static/world.svg';
</script>

<div class="img">
	<Img
		src={heroSectionImage}
		alt="A hand with a magnifying glass looking at India in globe"
		class="rounded-lg min-h-[370px] min-w-[370px] sm:h-[50vh] md:h-[60vh] md:-translate-y-20 mx-auto opacity-5 md:opacity-100"
	/>
</div>
