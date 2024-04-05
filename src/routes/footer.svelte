<script>
	import Footer from '@/components/Footer.svelte';
	import { inview } from 'svelte-inview';

	let isInView;
	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<Footer />
	{/if}
</div>
<!-- Make it like the figma design -->
