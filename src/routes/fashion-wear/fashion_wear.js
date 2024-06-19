import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';

const fashionWearPageDetails = {
	metaDetails: {
		pageTitle: 'ProcureJs | Fashion Wear',
		description: 'Long-lasting, quality essentials.',
		pageKeywords:
			'fashion wear, clothing sourcing, apparel procurement, fashion textiles, garment suppliers, wholesale fashion, clothing manufacturers, textile sourcing agency, designer wear, trendy fashion, fabric import export, fashion brands, clothing wholesale, apparel manufacturing'
	},

	pageDetails: {
		pageHeading: 'Fashion Wear',
		pageSubHeading:
			'Stay stylish with our latest clothing collection for all occasions. From casual wear to chic office outfits, find high-quality pieces that reflect your personal style.',
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

export default fashionWearPageDetails;
