<script>
	import { Card } from 'flowbite-svelte';
	import globe from '@/static/globe.svg';
	import puzzle from '@/static/puzzle.svg';
	import network from '@/static/network.svg';
	import shield from '@/static/shield.svg';

	const headingText = {
		globe: 'Expertise Across Industries',
		puzzle: 'Tailored Solutions',
		network: 'Reliable Network',
		shield: 'Quality You Can Trust'
	};

	const text = {
		globe:
			'We source a vast range of hard goods across various sectors, from automotive and construction to medical and electronics.',
		puzzle:
			'We tailor our sourcing strategies to your specific needs, from product customization to logistics management.',
		network:
			'Leverage our established relationships with trusted manufacturers across India, ensuring quality and ethical sourcing.',
		shield:
			'Leverage our established relationships with trusted manufacturers across India, ensuring quality and ethical sourcing.'
	};

	const heading = 'text-[2rem] text-[#000] font-montserrat font-bold dark:text-white text-center';
	const subHeading = 'mt-3 space-y-0.5 w-[70%] dark:text-white text-center';
	const figureStyle =
		'flex flex-col justify-center items-center h-[38vh] px-8 py-16 text-center rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800 dark:border-gray-700';
	const imgStyle = 'w-[10vw] h-[10vw] rounded-full';
</script>

<Card padding="none" size="xxl" class="grid md:grid-cols-2 bg-[#e5e5e5]">
	<figure class={figureStyle}>
		<figcaption class="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
			<img class={imgStyle} src={globe} alt="Globe" />
			<div class={subHeading}>
				<div class={heading}>{headingText.globe}</div>
				<div>{text.globe}</div>
			</div>
		</figcaption>
	</figure>
	<figure class="{figureStyle} border-b border-black">
		<figcaption class="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
			<img class={imgStyle} src={puzzle} alt="Robert profile" />
			<div class={subHeading}>
				<div class={heading}>{headingText.puzzle}</div>
				<div>{text.puzzle}</div>
			</div>
		</figcaption>
	</figure>
	<figure class={figureStyle}>
		<figcaption class="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
			<img class={imgStyle} src={network} alt="Jese profile" />
			<div class={subHeading}>
				<div class={heading}>{headingText.network}</div>
				<div>{text.network}</div>
			</div>
		</figcaption>
	</figure>
	<figure class={figureStyle}>
		<figcaption class="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
			<img class={imgStyle} src={shield} alt="joseph profile" />
			<div class={subHeading}>
				<div class={heading}>{headingText.shield}</div>
				<div>{text.shield}</div>
			</div>
		</figcaption>
	</figure>
</Card>
