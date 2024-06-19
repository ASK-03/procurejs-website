<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import kitchenEssentialsPageDetails from './kitchen_essentials.js';

	const metaDetails = kitchenEssentialsPageDetails.metaDetails;
	const pageDetails = kitchenEssentialsPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
