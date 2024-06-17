<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu } from 'flowbite-svelte';
	import logo from '@/static/procurejs-logo.png';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import products from '@/data/products.js';
</script>

<Navbar color="none" let:hidden let:toggle>
	<NavBrand href="/">
		<img src={logo} class="h-[4rem]" alt="ProcureJs Logo" />
	</NavBrand>
	<NavHamburger menuClass="text-light-textColor/80 hover:text-primary-800" on:click={toggle} />
	<NavUl {hidden}>
		<NavLi nonActiveClass="text-light-textColor/80 text-lg lg:text-xl" class="cursor-pointer">
			Products<ChevronDownOutline
				class="w-6 h-6 ms-2 text-light-textColor/80 dark:text-[#E5E5E5] inline"
			/>
		</NavLi>
		<MegaMenu
			color="none"
			nonActiveClass="text-[#808080] md:text-[#E5E5E5] lg:text-xl"
			class="z-10 md:mt-[1rem] w-[100%] mx-auto md:-translate-x-[4%] lg:-translate-x-[15%] lg:w-[80%] rounded-xl h-fit border-none bg-white/85 backdrop-blur-xl shadow-2xl shadow-slate-500/10 "
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
		<NavLi nonActiveClass="text-light-textColor/80 text-lg lg:text-xl" href="/#services"
			>Services
		</NavLi>
		<NavLi nonActiveClass="text-light-textColor/80 text-lg lg:text-xl" href="/#contact"
			>Contact</NavLi
		>
	</NavUl>
</Navbar>
