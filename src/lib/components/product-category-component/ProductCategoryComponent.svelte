<script>
	import Navbar from '@/components/Navbar.svelte';
	export let metaDetails = {};
	export let pageDetails = {};

	// gsap imports
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	//

	const products = pageDetails?.products || [];

	let navbarComponent;
	let headingComponent;
	let subHeadingComponent;
	let buttonDivComponenet;
	onMount(() => {
		setTimeout(() => {
			const tl = gsap.timeline();

			// tl.fromTo(
			// 	navbarComponent,
			// 	{
			// 		opacity: 0,
			// 		y: -100,
			// 		duration: 0.5,
			// 		ease: 'power1.inOut'
			// 	},
			// 	{
			// 		opacity: 1,
			// 		y: 0,
			// 		z: 10,
			// 		duration: 0.5,
			// 		ease: 'power1.inOut'
			// 	}
			// );

			// TODO: fix the animation of navbar

			tl.fromTo(
				headingComponent,
				{
					opacity: 0,
					y: 50,
					duration: 0.5,
					ease: 'power1.inOut'
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power1.inOut'
				},
				'-=0.2'
			);

			tl.fromTo(
				subHeadingComponent,
				{
					opacity: 0,
					y: 50,
					duration: 0.5,
					ease: 'power1.inOut'
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: 'power1.inOut'
				},
				'-=0.2'
			);

			tl.fromTo(
				buttonDivComponenet,
				{
					opacity: 0,
					x: -50,
					duration: 0.5,
					ease: 'power1.inOut'
				},
				{
					opacity: 1,
					x: 0,
					duration: 0.5,
					ease: 'power1.inOut'
				}
			);

			const gridItems = gsap.utils.toArray('.bento-grid-item');

			gridItems.forEach((item, index) => {
				tl.fromTo(
					item,
					{
						opacity: 0,
						x: -50,
						duration: 0.5,
						ease: 'power1.inOut'
					},
					{
						opacity: 1,
						x: 0,
						duration: 0.5,
						ease: 'power1.inOut'
					},
					'-=0.2'
				);
			});

			tl.play();
		}, 100);
	});
</script>

<svelte:head>
	<title>{metaDetails?.pageTitle}</title>
	<meta name="description" content={metaDetails?.pageDescription} />
	<meta name="keywords" content={metaDetails?.pageKeywords} />
</svelte:head>

<section class="pt-[16px] pb-[32px]">
	<!-- <div bind:this={navbarComponent} class="mt-6 z-10">
		<Navbar />
	</div> -->
	<div class="mt-6 z-10">
		<Navbar />
	</div>

	<div
		class="container mx-auto w-full mt-[5vh] flex-col gap-10 lg:gap-16 md:flex items-center align-middle"
	>
		<div
			class="left__section mx-auto w-full h-full flex-col items-center align-middle justify-center"
		>
			<h2
				bind:this={headingComponent}
				class="opacity-0 text-4xl font-bold text-center md:text-6xl text-light-textColor md:text-nowrap"
			>
				{pageDetails?.pageHeading}
			</h2>
			<p
				bind:this={subHeadingComponent}
				class="opacity-0 mt-4 w-full md:w-[70%] mx-auto text-xl text-center text-light-textColor/85"
			>
				{pageDetails?.pageSubHeading}
			</p>
			<div
				bind:this={buttonDivComponenet}
				class="cta mt-10 flex-col w-[50%] xs:w-fit mx-auto"
			>
				<a id="get-quotes" href="/#contact">
					<button
						class="left-cta btn w-full xs:w-fit mx-auto md:mx-2 px-10 py-4 bg-light-cardBgColor text-light-background rounded-lg transition duration-300 ease-in-out hover:bg-transparent hover:border hover:border-light-purple/80 hover:text-light-purple/80 hover:scale-105"
						>Get Quotes</button
					>
				</a>
				<a id="see-products" href="/#products">
					<button
						class="right-cta btn my-2 w-full xs:w-fit md:mx-2 px-5 xs:px-10 py-4 bg-transparent border border-light-cardBgColor text-light-cardBgColor rounded-lg transition duration-300 ease-in-out hover:bg-light-purple/80 hover:scale-105 hover:text-light-background hover:border-transparent"
						>See more products</button
					>
				</a>
			</div>
		</div>
		<div
			class="right__section bento-grid md:w-[70%] max-h-[90vh] gap-[0.5rem] md:gap-[1rem] mt-10 mx-auto"
		>
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
