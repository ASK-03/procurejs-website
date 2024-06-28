<script>
	import Hero from './hero.svelte';
	import Service from './service.svelte';
	import Footer from './footer.svelte';
	import Products from './products.svelte';
	import About from './about.svelte';
	import Benefits from './benefits.svelte';
	// import Faq from './faq.svelte';
	import Contact from './contact.svelte';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		setTimeout(() => {
			const sections = gsap.utils.toArray('#main-body #section');

			sections.forEach((section, index) => {
				gsap.from(section, {
					opacity: 0,
					x: () => {
						return index % 2 === 0 ? 100 : -100;
					},
					duration: 0.7,
					delay: 0.3,
					ease: 'power1.inOut',
					scrollTrigger: {
						trigger: section,
						scroller: 'body',
						start: `top 90%`,
						end: `bottom 50%`
						// markers: true
					}
				});
			});
		}, 50);
	});
</script>

<main id="main-body" class="main flex flex-col">
	<div id="hero">
		<Hero />
	</div>
	<div id="section">
		<Service />
	</div>
	<div id="section">
		<Benefits />
	</div>
	<div id="section">
		<Products />
	</div>
	<div id="section">
		<About />
	</div>
	<!-- <Faq /> -->
	<div id="section">
		<Contact />
	</div>
	<div id="section">
		<Footer />
	</div>
</main>
