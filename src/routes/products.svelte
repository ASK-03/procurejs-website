<script>
	import Heading from '@/components/Heading.svelte';
	import ProductCard from '@/components/ProductCard.svelte';
</script>

<!-- bg-[#2A4064] -->
<section id="products" class="products pt-[48px] pb-[32px]">
	<Heading
		display="left"
		heading="Products"
		subHeading="Our Premium Selections!"
		headingColor="light-textColor"
		subHeadingColor="light-textColor/80"
		className=""
	/>

	<ProductCard />
</section>
