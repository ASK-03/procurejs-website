<script>
	import Heading from '@/components/Heading.svelte';
	import AboutCard from '@/components/AboutCard.svelte';
	import founder from '@/static/founder.jpeg';

	let spec = {
		src: founder,
		designation: 'Founder & CEO',
		subHeading: 'Lorem Ipsum is simply',
		content:
			"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	};
</script>

<!-- bg-[#E5E5E5] -->
<section class="about h-[100vh] w-[100%] px-[162px] py-[48px]" id="about">
	<Heading display="left" heading="About" subHeading="Know Us Better!" />
	<div class="about-card mt-[6rem] flex flex-col">
		<AboutCard {spec} />
		<AboutCard {spec} reverse={true} />
	</div>
</section>

<style>
	/* .about {
		background-image: linear-gradient(to top, #658f9d, #8da6b6, #b3becb, #d6d8e0, #f4f4f4);
	} */
</style>
