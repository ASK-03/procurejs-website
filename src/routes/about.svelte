<script>
	import Heading from '@/components/Heading.svelte';
	import AboutCard from '@/components/AboutCard.svelte';
	import founder from '@/static/founder.jpeg';
	import cto from '@/static/cto.jpg';

	let FounderInfo = {
		src: founder,
		designation: 'Founder & CEO',
		subHeading: 'Jaishree Kushwaha',
		content:
			'A seasoned leader in global supply chain management and deal optimization. With expertise in product development, logistics, and warehouse planning, Jaishree excels in making supply chains more efficient to achieve outstanding results. Known for securing the best deals, building high-performing teams, and ensuring smooth operations worldwide. Partner with Jaishree to drive success for your business.'
	};

	let CTOInfo = {
		src: cto,
		designation: 'CTO',
		subHeading: 'Abhishek Singh Kushwaha',
		content:
			'Meet Abhishek, our seasoned CTO and IIT alumnus. With a passion for innovation and meticulous attention to detail, he specializes in developing cutting-edge software solutions that elevate business growth and operational efficiency. With a proven track record of delivering top-notch products and services, Abhishek is your go-to expert for all technology needs. Collaborate with him to revolutionize your business with the latest tech solutions.'
	};

	const benefits = [
		{
			title: 'Network of Trusted Suppliers',
			description:
				'We have a network of <strong>300+</strong> trusted suppliers and partners to ensure quality. Trust is our top priority.'
			// image: CustomerServiceImage
		},
		{
			title: 'Seasoned Professionals',
			description:
				'We have a team of seasoned professionals who have extensive experience in the field. They are well-trained and equipped with the latest technologies.'
			// image: PricesImage
		},
		{
			title: 'Mission-driven',
			description:
				'We aim to provide value to our clients by providing the best quality products and services. Our mission is to deliver exceptional customer service.'
			// image: QualityControlImage
		},
		{
			title: 'Specially Curated Products',
			description:
				'We make sourcing a breeze with specially curated presentations, cutting down on selection time and hassle for our clients.'
			// image: NativeEnglishImage
		}
	];
	// our commitment to customization means that every client receives tailored solutions that meet their exact needs with precision and care.
</script>

<section class="about h-fit w-[100%] px-[20px] md:px-[162px] pt-[48px] pb-[32px]" id="about">
	<Heading display="left" heading="About" subHeading="Know Us Better!" />
	<div class="about-card mt-[6rem] flex flex-col">
		<AboutCard spec={FounderInfo} />
		<AboutCard spec={CTOInfo} reverse={true} />
	</div>

	<div class="grid md:grid-cols-4 gap-4 md:gap-10">
		{#each benefits as benefit, index (`benefit-${index}`)}
			<div
				class="card h-auto w-auto p-12 rounded-lg bg-white/15 backdrop-blur-md shadow-2xl shadow-blue-500/20"
			>
				<!-- <img class="w-auto h-[20vh] object-contain" src={benefit.image} alt={benefit.title} /> -->
				<h1 class="text-white font-semibold text-[21px] pt-8 pb-2">
					{benefit.title}
				</h1>
				<p class="text-white/80 text-[16px]">{@html benefit.description}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	/* .about {
		background-image: linear-gradient(to top, #658f9d, #8da6b6, #b3becb, #d6d8e0, #f4f4f4);
	} */
</style>
