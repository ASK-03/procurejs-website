<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import selfCareEssentialPageDetails from './selfcare_essentials.js';

	const metaDetails = selfCareEssentialPageDetails.metaDetails;
	const pageDetails = selfCareEssentialPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
