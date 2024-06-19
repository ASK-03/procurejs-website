<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import homeFabricsPageDetails from './home_fabrics.js';

	const metaDetails = homeFabricsPageDetails.metaDetails;
	const pageDetails = homeFabricsPageDetails.pageDetails;
</script>

<main>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</main>
