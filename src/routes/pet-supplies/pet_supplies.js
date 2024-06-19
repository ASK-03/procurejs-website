import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

const petSuppliesPageDetails = {
	metaDetails: {
		pageTitle: 'ProcureJs | Pet Supplies',
		description: 'Quality products for happy pets.',
		pageKeywords:
			'pet supplies, pet care sourcing, animal essentials procurement, pet textiles, pet product suppliers, wholesale pet supplies, pet care manufacturing, pet accessories, pet clothing, pet care import export, pet essentials, pet gear, textile sourcing agency'
	},

	pageDetails: {
		pageHeading: 'Pet Supplies',
		pageSubHeading:
			'Pamper your pets with our selection of supplies. Find nutritious food, fun toys, comfortable bedding, and grooming essentials to keep your pets happy and healthy.',
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

export default petSuppliesPageDetails;
