<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';
	import babyEssentialsPageDetails from './baby_essentials.js';

	const metaDetails = babyEssentialsPageDetails.metaDetails;
	const pageDetails = babyEssentialsPageDetails.pageDetails;
</script>

<section>
	<ProductCategoryComponent {metaDetails} {pageDetails} />
</section>
