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

<!-- <div class="img hidden xl:block -z-50">
	<Img
		src={heroSectionImage}
		alt="A hand with a magnifying glass looking at India in globe"
		class="rounded-lg min-h-[370px] min-w-[370px] sm:h-[50vh] md:h-[60vh] md:-translate-y-20 mx-auto opacity-5 md:opacity-100"
	/>
</div> -->

<style>
	@keyframes slideInFromLeft {
		0% {
			transform: translateY(-8%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.img-container {
		animation: slideInFromLeft 1s;
		animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.img-container,
	.img {
		transition:
			opacity 0.5s ease-in-out,
			transform 0.5s ease-in-out;
	}
</style>
