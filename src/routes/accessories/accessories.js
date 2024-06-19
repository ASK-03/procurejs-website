import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

const accessoriesPageDetails = {
	metaDetails: {
		pageTitle: 'ProcureJs | Accessories',
		description: 'Perfect accessories to complement your style',
		pageKeywords:
			'fashion accessories, accessory sourcing, jewelry procurement, fashion adornments, accessory suppliers, wholesale accessories, designer accessories, fashion jewelry, luxury accessories, accessory manufacturing, trendy accessories, fashion embellishments, textile sourcing agency, accessory import export'
	},

	pageDetails: {
		pageHeading: 'Accessories',
		pageSubHeading:
			'Complete your look with our curated selection of accessories. From elegant jewelry to trendy handbags, our collection offers the perfect finishing touches for any outfit.',
		products: [
			{
				thumbnail: FurnitureImage,
				description: 'Home Fabrics 1'
			},
			{
				thumbnail: DecorImage,
				description: 'Home Fabrics 1'
			},
			{
				thumbnail: JeweleryImage,
				description: 'Home Fabrics 1'
			},
			{
				thumbnail: ApparelsAndSportsWearImage,
				description: 'Home Fabrics 1'
			},
			{
				thumbnail: DecorImage,
				description: 'Home Fabrics 1'
			},
			{
				thumbnail: FurnitureImage,
				description: 'Home Fabrics 1'
			}
		]
	}
};

export default accessoriesPageDetails;
