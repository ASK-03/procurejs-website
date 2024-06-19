import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

const homeFabricsPageDetails = {
	metaDetails: {
		pageTitle: 'ProcureJs | Home Decor',
		description: 'Elevate your space with chic decor.',
		pageKeywords:
			'home decor, decor sourcing, interior decor procurement, decor textiles, home decor suppliers, wholesale home decor, decor manufacturing, interior design fabrics, decor import export, luxury home decor, decor accessories, stylish home decor, designer home decor, textile sourcing agency'
	},

	pageDetails: {
		pageHeading: 'Home Decor',
		pageSubHeading:
			'Transform your space with our home decor items, including wall art, throws, vases, and lighting. Add personality and charm to every room with our stylish decor pieces.',
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
