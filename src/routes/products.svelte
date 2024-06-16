<script>
	import Heading from '@/components/Heading.svelte';
	import ProductCard from '../lib/components/ProductCard.svelte';
	import products from '@/data/products.js';
</script>

<!-- bg-[#2A4064] -->
<section
	class="products h-fit md:w-[100%] sm:w-[calc(100dvh)] pt-[48px] pb-[32px] px-[20px] md:px-[80px] lg:px-[100px] xl:px-[162px]"
	id="products"
>
	<Heading
		display="left"
		heading="Products"
		subHeading="Our Premium Selections!"
		headingColor="#e5e5e5"
		subHeadingColor="#e5e5e5"
		className=""
	/>

	<ProductCard {products} />
</section>
