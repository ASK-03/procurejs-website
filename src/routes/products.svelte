<script>
	import Heading from '../components/Heading.svelte';
	import { Gallery } from 'flowbite-svelte';
	const images1 = [
		{ alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg' },
		{ alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg' }
	];
	const images2 = [
		{ alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg' },
		{ alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg' },
		{ alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg' }
	];
	const images3 = [
		{ alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg' },
		{ alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg' },
		{ alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg' }
	];
	const images4 = [
		{ alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg' },
		{
			alt: 'playstation',
			src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
		},
		{ alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg' }
	];
</script>

<section class="products h-fit w-[100%] px-[162px] py-[48px] bg-[#2A4064]" id="prodcuts">
	<Heading
		display="left"
		heading="Products"
		subHeading="Some Catchy Line"
		headingColor="#e5e5e5"
		subHeadingColor="#e5e5e5"
	/>
	<div class="mt-16">
		<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
			<!-- TODO: make it in rows and add animation of moving when scroll -->
			<Gallery items={images1} />
			<Gallery items={images2} />
			<Gallery items={images3} />
			<Gallery items={images4} />
		</Gallery>
	</div>
</section>
