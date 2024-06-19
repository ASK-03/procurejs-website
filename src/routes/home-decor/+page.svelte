<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import homeDecorPageDetails from './home_decor.js';

	const metaDetails = homeDecorPageDetails.metaDetails;
	const pageDetails = homeDecorPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
