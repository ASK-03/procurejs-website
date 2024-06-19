<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import petSuppliesPageDetails from './pet_supplies.js';

	const metaDetails = petSuppliesPageDetails.metaDetails;
	const pageDetails = petSuppliesPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
