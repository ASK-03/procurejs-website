<script>
	import Navbar from '@/components/Navbar.svelte';
	import UnderConstruction from '@/static/work-in-progress.png';
	export let metaDetails = {};
	export let pageDetails = {};

	// filler images
	// import FurnitureImage from '@/static/couch.jpg';
	// import DecorImage from '@/static/decor.jpg';
	// import JeweleryImage from '@/static/jewelery.jpg';
	// import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

	const products = pageDetails?.products || [];
</script>

<svelte:head>
	<title>{metaDetails?.pageTitle}</title>
	<meta name="description" content={metaDetails?.pageDescription} />
	<meta name="keywords" content={metaDetails?.pageKeywords} />
</svelte:head>

<section class="pt-[16px] pb-[32px]">
	<div class="mt-6 z-10">
		<Navbar />
	</div>

	<div
		class="container mx-auto w-full mt-[5vh] flex-col gap-10 lg:gap-16 md:flex items-center align-middle"
	>
		<div
			class="left__section mx-auto w-full h-full flex-col items-center align-middle justify-center"
		>
			<h2 class="text-4xl font-bold text-center md:text-6xl text-light-textColor md:text-nowrap">
				{pageDetails?.pageHeading}
			</h2>
			<p class="mt-4 w-full md:w-[70%] mx-auto text-xl text-center text-light-textColor/85">
				{pageDetails?.pageSubHeading}
			</p>
			<div class="cta mt-10 flex-col w-[50%] xs:w-fit mx-auto">
				<button
					class="left-cta btn w-full xs:w-fit mx-auto md:mx-2 px-10 py-4 bg-light-cardBgColor text-light-background rounded-lg transition duration-300 ease-in-out hover:bg-transparent hover:border hover:border-light-purple/80 hover:text-light-purple/80 hover:scale-105"
					>Get Quotes</button
				>
				<button
					class="right-cta btn my-2 w-full xs:w-fit md:mx-2 px-5 xs:px-10 py-4 bg-transparent border border-light-cardBgColor text-light-cardBgColor rounded-lg transition duration-300 ease-in-out hover:bg-light-purple/80 hover:scale-105 hover:text-light-background hover:border-transparent"
					>See more products</button
				>
			</div>
		</div>
		<div class="right__section bento-grid md:w-[70%] mx-auto">
			<div class="bento-grid-item item-a">
				<img src={products[0]?.thumbnail} alt={products[0]?.description} />
			</div>
			<div class="bento-grid-item item-b">
				<img src={products[1]?.thumbnail} alt={products[1]?.description} />
			</div>
			<div class="bento-grid-item item-c">
				<img src={products[2]?.thumbnail} alt={products[2]?.description} />
			</div>
			<div class="bento-grid-item item-d">
				<img src={products[3]?.thumbnail} alt={products[3]?.description} />
			</div>
			<div class="bento-grid-item item-e">
				<img src={products[4]?.thumbnail} alt={products[4]?.description} />
			</div>
			<div class="bento-grid-item item-f">
				<img src={products[5]?.thumbnail} alt={products[5]?.description} />
			</div>
		</div>
	</div>
</section>

<style>
	.bento-grid {
		display: grid;
		grid-template-areas:
			'a a b b'
			'a a c d'
			'e f f d';
		gap: 1rem;
	}
	.bento-grid-item {
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
		box-shadow: 0.5rem 1rem 1.5rem rgba(63, 61, 86, 0.1);
		transition: transform 0.3s ease;
	}

	.bento-grid-item:hover {
		box-shadow: 0.8rem 1.2rem 1rem rgba(63, 61, 86, 0.1);
		transform: skew(-1deg);
	}

	.bento-grid-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}
	.bento-grid-item:hover img {
		transform: scale(1.1);
	}
	.item-a {
		grid-area: a;
	}
	.item-b {
		grid-area: b;
	}
	.item-c {
		grid-area: c;
	}
	.item-d {
		grid-area: d;
	}
	.item-e {
		grid-area: e;
	}
	.item-f {
		grid-area: f;
	}
</style>
