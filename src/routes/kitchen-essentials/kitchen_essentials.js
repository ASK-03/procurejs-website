import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

const homeFabricsPageDetails = {
	metaDetails: {
		pageTitle: 'ProcureJs | Kitchen Essentials',
		description: 'Must-have items for every kitchen',
		pageKeywords:
			'kitchen essentials, kitchenware sourcing, kitchen tools procurement, kitchen textiles, cutlery suppliers, wholesale kitchen supplies, cookware manufacturing, kitchen accessories, kitchen utensils import export, Indian kitchenware, kitchen linen fabrics, cooking tools, kitchen equipment, kitchen supplies India, kitchen gadgets'
	},

	pageDetails: {
		pageHeading: 'Kitchen Essentials',
		pageSubHeading:
			'Outfit your kitchen with our premium essentials. From high-quality cutlery and cookware to stylish kitchen towels and gadgets, our collection ensures functionality and style in every meal preparation.',
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

export default homeFabricsPageDetails;
