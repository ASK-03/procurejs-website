import FurnitureImage from '@/static/couch.jpg';
import DecorImage from '@/static/decor.jpg';
import JeweleryImage from '@/static/jewelery.jpg';
import ApparelsAndSportsWearImage from '@/static/apparels.jpg';
// import TextilesImage from '@/static/textiles.jpg';
import BabyProductsImage from '@/static/baby-products.jpg';
import RugsAndCarpetsImage from '@/static/rugs-and-carpets.jpg';
// import GardenProductsImage from '@/static/garden-products.jpg';
import SelfcareProductsImage from '@/static/selfcare-products.jpg';
import PetSuppliesImage from '@/static/pet-supplies.jpg';
import HardGoodsImage from '@/static/hard-goods.jpg';
// import ArtAndStationaryImage from '@/static/art-and-stationary.jpg';
// import LampsImage from '@/static/lamps.jpg';

const products = [
	{
		name: 'Home Fabrics',
		help: 'Cozy and stylish home textiles',
		link: '/home-fabrics',
		thumbnail: RugsAndCarpetsImage
	},
	{
		name: 'Kitchen Essentials',
		help: 'Must-have items for every kitchen',
		link: '/kitchen-essentials',
		thumbnail: HardGoodsImage
	},
	{
		name: 'Fashion Wear',
		help: 'Trendy outfits for every occasion.',
		link: '/fashion-wear',
		thumbnail: ApparelsAndSportsWearImage
	},

	{
		name: 'Accessories',
		help: 'Perfect accessories to complement your style.',
		link: '/accessories',
		thumbnail: JeweleryImage
	},
	{
		name: 'Home Decor',
		help: 'Elevate your space with chic decor.',
		link: '/home-decor',
		thumbnail: DecorImage
	},
	{
		name: 'Self-Care Essentials',
		help: 'Nourish and pamper your body.',
		link: '/self-care-essentials',
		thumbnail: SelfcareProductsImage
	},
	{
		name: 'Elegant Furniture',
		help: 'Stylish and functional furniture pieces.',
		link: '/furniture',
		thumbnail: FurnitureImage
	},
	{
		name: 'Baby Essentials',
		help: 'Must-haves for your little ones.',
		link: '/baby-essentials',
		thumbnail: BabyProductsImage
	},
	{
		name: 'Pet Supplies',
		help: 'Quality products for happy pets.',
		link: '/pet-supplies',
		thumbnail: PetSuppliesImage
	}
];

export default products;
