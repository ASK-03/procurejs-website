<script>
	import Heading from '@/components/Heading.svelte';
	import ProductCard from '../lib/components/ProductCard.svelte';
	import products from '@/data/products.js';
</script>

<!-- bg-[#2A4064] -->
<section class="products pt-[48px] pb-[32px]" id="products">
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
