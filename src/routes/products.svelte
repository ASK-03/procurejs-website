<script>
	import HeroParallax from '@/components/ui/HeroParallax/HeroParallax.svelte';
	import Heading from '@/components/Heading.svelte';

	import { inview } from 'svelte-inview';

	import FurnitureImage from '@/static/couch.jpg';
	import FashionAcessoriesImage from '@/static/fashion-acessories.jpg';
	import DecorImage from '@/static/decor.jpg';
	import JeweleryImage from '@/static/jewelery.jpg';
	import ApparelsAndSportsWearImage from '@/static/apparels.jpg';
	import TextilesImage from '@/static/textiles.jpg';
	import BabyProductsImage from '@/static/baby-products.jpg';
	import RugsAndCarpetsImage from '@/static/rugs-and-carpets.jpg';
	import GardenProductsImage from '@/static/garden-products.jpg';
	import SelfcareProductsImage from '@/static/selfcare-products.jpg';
	import ArtAndStationaryImage from '@/static/art-and-stationary.jpg';
	import LampsImage from '@/static/lamps.jpg';

	const products = [
		{
			title: 'Rouge',
			link: '/',
			thumbnail: FurnitureImage
		},
		{
			title: 'Fashion Acessories',
			link: '/',
			thumbnail: FashionAcessoriesImage
		},
		{
			title: 'Furnitures',
			link: 'https://userogue.com',
			thumbnail: FurnitureImage
		},

		{
			title: 'Decor and Utility',
			link: '/',
			thumbnail: DecorImage
		},
		{
			title: 'Jewelery',
			link: '/',
			thumbnail: JeweleryImage
		},
		{
			title: 'Apparels',
			link: '/',
			thumbnail: ApparelsAndSportsWearImage
		},
		{
			title: 'Apparels & Sports Wear',
			link: '/',
			thumbnail: ApparelsAndSportsWearImage
		},
		{
			title: 'Textiles',
			link: '/',
			thumbnail: TextilesImage
		},
		{
			title: 'Baby Products',
			link: '/',
			thumbnail: BabyProductsImage
		},
		{
			title: 'Rugs & Carpets',
			link: '/',
			thumbnail: RugsAndCarpetsImage
		},
		{
			title: 'Renderwork Studio',
			link: 'https://renderwork.studio',
			thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png'
		},

		{
			title: 'Lighting',
			link: '/',
			thumbnail: LampsImage
		},
		{
			title: 'Art and Stationary',
			link: '/',
			thumbnail: ArtAndStationaryImage
		},
		{
			title: 'Health Care & Self Care Products',
			link: '/',
			thumbnail: SelfcareProductsImage
		},
		{
			title: 'Garden Products',
			link: '/',
			thumbnail: GardenProductsImage
		}
	];

	let isInView;
	const options = {
		rootMargin: '190px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<!-- bg-[#2A4064] -->
<section class="products h-fit md:w-[100%] sm:w-[calc(100dvh)] pt-[48px] pb-[32px]" id="products">
	<Heading
		display="left"
		heading="Products"
		subHeading="Some Catchy Line"
		headingColor="#e5e5e5"
		subHeadingColor="#e5e5e5"
		className="px-[20px] md:px-[162px]"
	/>
	<div use:inview={options} on:inview_change={handleChange}>
		{#if isInView}
			<div class="mt-32 w-[100vw] overflow-hidden">
				<HeroParallax {products} />
			</div>
		{/if}
	</div>
</section>
