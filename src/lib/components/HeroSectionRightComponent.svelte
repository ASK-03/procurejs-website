<script>
	import { Img } from 'flowbite-svelte';
	// import heroSectionImage from '@/static/hero-section-image-min.jpeg';
	import heroSectionImage from '@/static/world.svg';
</script>

<div class="img">
	<Img
		src={heroSectionImage}
		alt="A hand with a magnifying glass looking at India in globe"
		class="rounded-lg h-[60vh] -translate-y-20"
	/>
</div>
