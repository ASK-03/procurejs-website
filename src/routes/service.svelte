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
			badge: '',
			image: PrePlacementImage
		},
		{
			title: 'Placement',
			description: `
        <p>
			At ProcureJs, we optimize COGS using proxy benchmarking, tailoring solutions to meet client needs while tracking placement costs for competitiveness. Focused on medium-sized suppliers and a consolidated vendor base, we drive strategic placements in key regions. Our regional supply chain perspective offers a holistic market view. Objective evaluations and ongoing supplier relationship monitoring enhance efficiency.
        </p>
    `,
			badge: '',
			image: PlacementImage
		},
		{
			title: 'Pre-Production',
			description: `
        <p>
          At ProcureJs, we prioritize thorough communication to ensure all production personnel comprehend product requirements and expected quality standards. Prior to confirming start and shipment dates, we verify suppliers' readiness for production, confirming the availability and accuracy of all required materials. Throughout bulk production, we maintain vigilant monitoring to promptly address any potential quality issues and minimize waste.
        </p>
    `,
			badge: '',
			image: PreProductionImage
		},
		{
			title: 'Production',
			description: `
        <p>
          ProcureJs takes charge of quality control and product sampling inspections throughout production. In case of any required corrective actions, we promptly address them either at our office or directly at the suppliers' premises. Our local technical support teams offer additional services, including assessments of fabric, finish, and trims to ensure superior quality standards.
        </p>
    `,
			badge: '',
			image: ProductionImage
		},
		{
			title: 'Final Inspection',
			description: `
        <p>
          At ProcureJs, we conduct a comprehensive Final Inspection to guarantee the excellent quality of products ready for shipment. This inspection encompasses measurement checks, quality assessments to identify any defects in the sample, and packing checks. Each individual load or contract undergoes a pre-shipment inspection following standard procedures for Acceptable Quality Level (AQL), in accordance with ISO Standards.
        </p>
    `,
			badge: '',
			image: InspectionImage
		},
		{
			title: 'Shipment',
			description: `
        <p>
          Our clients have the final word on pre-shipment quality inspections. Once the brand confirms that the quality fulfils their requirements, the finished goods are authorised for shipment to their final destination.
        </p>
    `,
			badge: '',
			image: ShipmentImage
		}
	];
</script>

<section
	class="service h-fit md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[162px] pt-[48px] pb-[32px]"
	id="services"
>
	<Heading display="left" heading="Service" subHeading="Served with Love" />
	<div class="mt-[6rem] flex flex-col align-middle items-center justify-center">
		{#each dummyContent as item, index (`content-${index}`)}
			<div class="mb-[6vh] flex flex-col align-middle items-center justify-center">
				<h2 class="mb-4 w-fit rounded-full bg-white/80 px-4 py-1 text-sm">
					{item.badge}
				</h2>
				<h1 class={twMerge('mb-4 text-[32px] text-white')}>
					{item.title}
				</h1>
				{#if item?.image}
					<div class="md:h-[50vh] md:w-[40vw]">
						<DirectionAwareHover imageUrl={item.image}>
							{@html item.description}
						</DirectionAwareHover>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
