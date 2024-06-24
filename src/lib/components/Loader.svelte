<script>
	// import { Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	onMount(() => {
		let loaderText = document.getElementById('loader-text');

		const spanTheText = new Promise((resolve, reject) => {
			let textContent = 'ProcureJs';
			loaderText.textContent = '';
			textContent = textContent
				.split('')
				.map((letter) => {
					return `<span id="letter" class="inline-block text-[8vh] text-light-textColor font-bold font-sanss">${letter}</span>`;
				})
				.join('');
			resolve(textContent);
		});

		spanTheText.then((textContent) => {
			loaderText.innerHTML = textContent;

			const tl = gsap.timeline();

			tl.from('#letter', {
				opacity: 0,
				duration: 0.2,
				y: 100,
				stagger: 0.04,
				ease: 'power1.Out'
			});

			tl.to('#loader-text', {
				opacity: 0,
				scale: 20,
				duration: 1,
				ease: 'power3.inOut'
			});
		});
	});
</script>

<div class="loader h-screen w-full flex items-center align-middle justify-center">
	<h1 id="loader-text"></h1>
</div>
