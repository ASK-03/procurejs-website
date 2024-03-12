<script>
	import Heading from '../components/Heading.svelte';
	import ServiceCard from '../components/ServiceCard.svelte';
</script>

<section class="service bg-[#DDDDDD] h-[100vh] w-[100%] px-[162px] py-[48px]" id="services">
	<Heading display="left" heading="Service" subHeading="Served with Love" />
	<div class="mt-10">
		<ServiceCard />
		<!-- TODO: Make responsive -->
		<!-- TODO: explore different options too. Not liking how it came out -->
	</div>
</section>
