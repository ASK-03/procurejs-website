<script>
	import logo from '../static/procurejs-logo.png';
	import Button from './Button.svelte';
</script>

<nav class="navbar mx-[162px] mb-[32px] h-[78px] flex align-center justify-between">
	<div class="logo h-[189px] w-[113px]">
		<img src={logo} alt="Logo" />
	</div>
	<div class="menu flex align-middle justify-center items-center">
		<ul
			class="flex flex-row align-center justify-center gap-[42px] text-[#e5e5e5] font-light tracking-tighter"
		>
			<li><a href="/">Home</a></li>
			<li><a href="/service">Service</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</div>
	<div class="contact-btn flex flex-col align-middle justify-center items-center">
		<Button text="Contact" />
	</div>
</nav>
