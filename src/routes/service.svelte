<script>
	import Heading from '@/components/Heading.svelte';

	import { twMerge } from 'tailwind-merge';
	import DirectionAwareHover from '@/components/ui/DirectionAwareHover/DirectionAwareHover.svelte';

	import ShipmentImage from '@/static/shipment.jpg';
	import InspectionImage from '@/static/inspection.jpg';
	import ProductionImage from '@/static/production.jpg';
	import PrePlacementImage from '@/static/pre-placement.jpg';
	import PlacementImage from '@/static/placement.jpg';
	import PreProductionImage from '@/static/pre-production.jpg';

	const dummyContent = [
		{
			title: 'Pre-Placement',
			description: `
        <p>
			Leveraging our years of robust market insights, ProcureJs offers strategic guidance to brands seeking optimal placements and cost-effective solutions tailored to their innovation, quality, and budgetary requirements. With an extensive network of trusted brands and suppliers, we remain abreast of the latest market trends, delivering unparalleled value to our clients.
        </p>
    `,
			badge: '1',
			image: PrePlacementImage
		},
		{
			title: 'Placement',
			description: `
        <p>
			At ProcureJs, we optimize COGS using proxy benchmarking, tailoring solutions to meet client needs while tracking placement costs for competitiveness. Focused on medium-sized suppliers and a consolidated vendor base, we drive strategic placements in key regions. Our regional supply chain perspective offers a holistic market view. Objective evaluations and ongoing supplier relationship monitoring enhance efficiency.
        </p>
    `,
			badge: '2',
			image: PlacementImage
		},
		{
			title: 'Pre-Production',
			description: `
        <p>
          At ProcureJs, we prioritize thorough communication to ensure all production personnel comprehend product requirements and expected quality standards. Prior to confirming start and shipment dates, we verify suppliers' readiness for production, confirming the availability and accuracy of all required materials. Throughout bulk production, we maintain vigilant monitoring to promptly address any potential quality issues and minimize waste.
        </p>
    `,
			badge: '3',
			image: PreProductionImage
		},
		{
			title: 'Production',
			description: `
        <p>
          ProcureJs takes charge of quality control and product sampling inspections throughout production. In case of any required corrective actions, we promptly address them either at our office or directly at the suppliers' premises. Our local technical support teams offer additional services, including assessments of fabric, finish, and trims to ensure superior quality standards.
        </p>
    `,
			badge: '4',
			image: ProductionImage
		},
		{
			title: 'Final Inspection',
			description: `
        <p>
          At ProcureJs, we conduct a comprehensive Final Inspection to guarantee the excellent quality of products ready for shipment. This inspection encompasses measurement checks, quality assessments to identify any defects in the sample, and packing checks. Each individual load or contract undergoes a pre-shipment inspection following standard procedures for Acceptable Quality Level (AQL), in accordance with ISO Standards.
        </p>
    `,
			badge: '5',
			image: InspectionImage
		},
		{
			title: 'Shipment',
			description: `
        <p>
          Our clients have the final word on pre-shipment quality inspections. Once the brand confirms that the quality fulfils their requirements, the finished goods are authorised for shipment to their final destination.
        </p>
    `,
			badge: '6',
			image: ShipmentImage
		}
	];
</script>

<section
	class="service h-fit md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[80px] lg:px-[162px] pt-[48px] pb-[32px]"
	id="services"
>
	<Heading display="left" heading="Service" subHeading="Served with Love" />
	<div class="mt-[6rem] flex flex-col align-middle items-center justify-center">
		{#each dummyContent as item, index (`content-${index}`)}
			<div class="mb-[6vh] max-mb-[3rem] flex flex-col align-middle items-center justify-center">
				<h2
					class="mb-4 w-fit rounded-full bg-white/10 backdrop-blur-xl px-6 py-1 text-2xl font-montserrat text-white shadow-2xl shadow-blue-500/20"
				>
					{item.badge}
				</h2>
				<h1 class={twMerge('mb-4 text-[32px] text-white')}>
					{item.title}
				</h1>
				{#if item?.image}
					<!-- show when on tablet or mobile -->
					<div
						class="flex flex-col align-middle w-full items-center justify-between gap-4 bg-white/15 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/20 xl:hidden"
					>
						<img
							class="z-0 rounded-tl-xl rounded-tr-xl w-full max-h-[400px] object-cover"
							src={item.image}
							alt={item.description}
						/>
						<div
							class="flex z-10 items-center align-middle justify-center text-white/90 text-[16px] sm:text-[20px] p-[2rem] sm:px-[2rem]"
						>
							{@html item.description}
						</div>
					</div>
					<!-- show when on desktop -->
					<div class="hidden xl:block xl:max-w-[900px] xl:max-h-[700px]">
						<DirectionAwareHover imageUrl={item.image}>
							<div class="text-[20px]">
								{@html item.description}
							</div>
						</DirectionAwareHover>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
