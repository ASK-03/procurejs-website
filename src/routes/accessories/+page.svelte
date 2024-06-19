<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import accessoriesPageDetails from './accessories.js';

	const metaDetails = accessoriesPageDetails.metaDetails;
	const pageDetails = accessoriesPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
