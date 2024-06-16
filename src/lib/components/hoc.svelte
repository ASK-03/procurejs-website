<script>
	export let page;
</script>

<!-- <svelte:head>
	<title>{page.$$.component.name}</title>
</svelte:head> -->

<div
	class="h-fit md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[80px] lg:px-[100px] xl:px-[162px]"
>
	<slot />
</div>
