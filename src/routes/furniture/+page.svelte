<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import furniturePageDetails from './furniture.js';

	const metaDetails = furniturePageDetails.metaDetails;
	const pageDetails = furniturePageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
