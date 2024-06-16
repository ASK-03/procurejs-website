<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import logo from '@/static/procurejs-logo.png';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import products from '@/data/products.js';

	// // image appear when hover over li in products section
	// import { onMount } from 'svelte';
	// let imageVisible = false;
	// let imageX = 0;
	// let imageY = 0;
	// let card;

	// const showImage = (event) => {
	// 	imageVisible = true;
	// 	updateImagePosition(event);
	// };

	// const hideImage = () => {
	// 	imageVisible = false;
	// };

	// const updateImagePosition = (event) => {
	// 	imageX = event.clientX + 10; // Adjust the offset as needed
	// 	imageY = event.clientY + 10; // Adjust the offset as needed
	// };

	// onMount(() => {
	// 	card.addEventListener('mousemove', updateImagePosition);
	// });
	//
</script>

<Navbar color="none" let:hidden let:toggle>
	<NavBrand href="/">
		<img src={logo} class="h-[4rem]" alt="ProcureJs Logo" />
	</NavBrand>
	<NavHamburger
		menuClass="text-[#E5E5E5] hover:text-primary-800 dark:text-[#E5E5E5]"
		on:click={toggle}
	/>
	<NavUl {hidden}>
		<NavLi
			nonActiveClass="text-[#808080] md:text-[#E5E5E5] text-lg lg:text-xl"
			class="cursor-pointer"
		>
			Products<ChevronDownOutline
				class="w-6 h-6 ms-2 text-[#808080] md:text-[#E5E5E5] dark:text-[#E5E5E5] inline"
			/>
		</NavLi>
		<MegaMenu
			color="none"
			nonActiveClass="text-[#808080] md:text-[#E5E5E5] lg:text-xl"
			class="z-10 md:mt-[1rem] w-[100%] mx-auto md:-translate-x-[4%] lg:-translate-x-[15%] lg:w-[80%] rounded-xl h-fit border-none bg-white/85 backdrop-blur-xl shadow-2xl shadow-slate-500/10"
			items={products}
			let:item
		>
			<a
				href={item.link}
				class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 h-full"
			>
				<div class="font-semibold dark:text-[#E5E5E5]">{item.name}</div>
				<span class="text-sm font-light text-gray-500 dark:text-gray-400">{item.help}</span>
			</a>
		</MegaMenu>
		<NavLi nonActiveClass="text-[#808080] md:text-[#E5E5E5] text-lg lg:text-xl" href="/#services"
			>Services
		</NavLi>
		<NavLi nonActiveClass="text-[#808080] md:text-[#E5E5E5] text-lg lg:text-xl" href="/#contact">
			Contact
		</NavLi>
	</NavUl>
</Navbar>

<!-- <script lang="ts">
	// @ts-ignore
	import { NavbarMenu, HoveredLink, MenuItem } from '@/components/ui/NavbarMenu';

	let active: string | null = null;
</script>

<div class="flex w-full items-center justify-center">
	<div class={'fixed xl:inset-x-0 z-50 xl:mx-auto max-w-xl md:max-w-2xl'}>
		<NavbarMenu>
			<MenuItem {active} item="Services">
				<div class="flex flex-col space-y-4 text-sm">
					<HoveredLink href="#services">Hard Goods Services</HoveredLink>
					<HoveredLink href="#software-services">Software Services</HoveredLink>
				</div>
			</MenuItem>
			<MenuItem {active} item="Products">
				<div class="  grid grid-cols-2 gap-10 p-4 text-sm">
					<HoveredLink href="#products">Hard Goods</HoveredLink>
					<HoveredLink href="#products">Softwares</HoveredLink>
				</div>
			</MenuItem>
			<a href="#about">
				<MenuItem {active} item="About"></MenuItem>
			</a>
		</NavbarMenu>
	</div>
</div> -->
