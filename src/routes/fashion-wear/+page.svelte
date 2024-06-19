<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import fashionWearPageDetails from './fashion_wear.js';

	const metaDetails = fashionWearPageDetails.metaDetails;
	const pageDetails = fashionWearPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
