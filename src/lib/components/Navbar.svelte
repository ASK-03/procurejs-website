<script lang="ts">
	// @ts-ignore
	import { NavbarMenu, HoveredLink, MenuItem } from '@/components/ui/NavbarMenu';

	let active: string | null = null;
</script>

<div class="relative flex w-full items-center justify-center">
	<div class={'fixed inset-x-0 top-11 z-50 mx-auto max-w-2xl'}>
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
</div>
