<!-- <script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Img } from 'flowbite-svelte';
	import Button from '@/components/Button.svelte';
	import logo from '@/static/procurejs-logo.png';

	let navLiStyle = 'text-[#e5e5e5] font-montserrat text-[18px] hover:text-[#6557f1]';
</script> -->

<script lang="ts">
	// @ts-ignore
	import { NavbarMenu, HoveredLink, MenuItem, ProductItem } from '@/components/ui/NavbarMenu';

	let active: string | null = null;
</script>

<!-- TODO: Hamburger icon problems in dropdown menu too -->
<!-- <Navbar class="bg-transparent">
	<NavBrand href="/">
		<Img src={logo} alt="Procure J S Logo" class="me-3 h-[4.5rem] sm:h-100 rounded-lg" />
	</NavBrand>
	<div class="flex md:order-2">
		<Button text="Contact" link="#contact" />
		<NavHamburger class="text-[#fff]" />
	</div>
	<NavUl class="order-1">
		<NavLi class={navLiStyle} href="/" active={true}>Home</NavLi>
		<NavLi class={navLiStyle} href="#services">Service</NavLi>
		<NavLi class={navLiStyle} href="#about">About</NavLi>
	</NavUl>
</Navbar> -->
<!-- TODO: Think if we have to add more like product and all -->
<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 top-12 z-50 mx-auto max-w-2xl'}>
		<NavbarMenu>
			<MenuItem {active} item="Services">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Web Development</HoveredLink>
					<HoveredLink href="#">Interface Design</HoveredLink>
					<HoveredLink href="#">Search Engine Optimization</HoveredLink>
					<HoveredLink href="#">Branding</HoveredLink>
				</div>
			</MenuItem>
			<MenuItem {active} item="Products">
				<div class="  grid grid-cols-2 gap-10 p-4 text-sm">
					<ProductItem
						title="Algochurn"
						href="#"
						src="https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Prepare for tech interviews like never before."
					/>
					<ProductItem
						title="Tailwind Master Kit"
						href="#"
						src="https://images.pexels.com/photos/733071/pexels-photo-733071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Production ready Tailwind css components for your next project"
					/>
					<ProductItem
						title="Moonbeam"
						href="#"
						src="https://images.pexels.com/photos/730424/pexels-photo-730424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Never write from scratch again. Go from idea to blog in minutes."
					/>
					<ProductItem
						title="Rogue"
						href="#"
						src="https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
					/>
				</div>
			</MenuItem>
			<MenuItem {active} item="Pricing">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#">Hobby</HoveredLink>
					<HoveredLink href="#">Individual</HoveredLink>
					<HoveredLink href="#">Team</HoveredLink>
					<HoveredLink href="#">Enterprise</HoveredLink>
				</div>
			</MenuItem>
		</NavbarMenu>
	</div>
</div>
