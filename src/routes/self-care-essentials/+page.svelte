<script>
	import ProductCategoryComponent from '@/components/product-category-component/ProductCategoryComponent.svelte';

	// Page Details
	let pageTitle = 'ProcureJs | Home Fabrics';
	let pageDescription = 'Cozy and stylish home fabrics';
	let pageKeywords =
		'home fabrics, fabric sourcing, textile procurement, home textiles, fabric suppliers India, textile sourcing agency, home decor fabrics, wholesale fabrics, fabric import export, Indian fabrics, upholstery fabrics, curtain fabrics, bed linen fabrics, fabric manufacturing, textile sourcing India';
	let pageDetails = { pageTitle, pageDescription, pageKeywords };
</script>

<section>
	<ProductCategoryComponent {pageDetails} />
</section>
