<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		Img
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import logo from '../static/procurejs-logo.png';
</script>

<Footer class="bg-[#2A4064]" footerType="socialmedia">
	<div class="md:mx-[112px] md:flex md:justify-around md:align-middle md:items-center">
		<div class="grid grid-cols-2 gap-10 sm:gap-12 sm:grid-cols-3 w-[100%]">
			<div class="m-6 md:mb-0">
				<a href="/">
					<Img src={logo} alt="Procure J S Logo" class="me-3 h-[6rem] sm:h-100 rounded-lg" />
				</a>
			</div>
			<div class="flex flex-row gap-16 align-middle justify-between mt-5">
				<div>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">X</FooterLink>
						<FooterLink liClass="mb-4" href="/">LinkedIn</FooterLink>
						<FooterLink liClass="mb-4" href="/">Mail</FooterLink>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-[#e5e5e5]">Legal</h2>
					<FooterLinkGroup>
						<FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
						<FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
					</FooterLinkGroup>
				</div>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="ProcureJs™" />
		<div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
			<FooterIcon href="/">
				<FacebookSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<DiscordSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<TwitterSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<GithubSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
