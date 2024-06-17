<script>
	import Navbar from '@/components/Navbar.svelte';
	import UnderConstruction from '@/static/work-in-progress.png';
	export let pageDetails = {};
</script>

<svelte:head>
	<title>{pageDetails?.pageTitle}</title>
	<meta name="description" content={pageDetails?.pageDescription} />
	<meta name="keywords" content={pageDetails?.pageKeywords} />
</svelte:head>

<section class="{pageDetails?.pageTitle} pt-[16px] pb-[32px]">
	<div class="mt-6 z-10">
		<Navbar />
	</div>

	<div class="relative h-full w-full top-10">
		<h1 class="absolute mx-auto w-full text-3xl md:text-7xl font-bold text-center">
			Under Construction
		</h1>
		<p
			class="absolute mx-auto w-full top-20 md:top-40 lg:top-20 text-xl md:text-4xl italic text-center"
		>
			Coming Soon
		</p>
		<img
			src={UnderConstruction}
			alt="under construction"
			class="absolute w-full mx-auto top-40 md:top-60 lg:top-30 h-[10rem] object-contain"
		/>
	</div>
</section>
