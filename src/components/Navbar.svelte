<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Input, Img } from 'flowbite-svelte';
	import Button from './Button.svelte';
	import logo from '../static/procurejs-logo.png';

	let navLiStyle = 'text-[#e5e5e5] font-montserrat text-[18px] hover:text-[#6557f1]';
</script>

<Navbar class="bg-transparent">
	<NavBrand href="/">
		<Img src={logo} alt="Procure J S Logo" class="me-3 h-[4.5rem] sm:h-100 rounded-lg" />
	</NavBrand>
	<div class="flex md:order-2">
		<Button text="Contact" />
		<NavHamburger class="text-[#fff]" />
		<!-- TODO: Hamburger icon problems in dropdown menu too -->
	</div>
	<NavUl class="order-1">
		<NavLi class={navLiStyle} href="/" active={true}>Home</NavLi>
		<NavLi class={navLiStyle} href="#services">Service</NavLi>
		<NavLi class={navLiStyle} href="#about">About</NavLi>
		<!-- TODO: Think if we have to add more like product and all -->
	</NavUl>
</Navbar>
