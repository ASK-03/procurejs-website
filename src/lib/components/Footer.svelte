<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, Img } from 'flowbite-svelte';
	import logo from '@/static/procurejs-logo.png';
	import InstagramLogo from '@/static/instagram.svg';
	import LinkedinLogo from '@/static/linkedin.svg';
	import MailLogo from '@/static/mail.svg';

	const LogoStyle = 'h-[2em]';
</script>

<!-- bg-[#2A4064] -->
<div class="footer flex items-center justify-center align-middle pt-[48px] pb-[32px]">
	<div
		class="flex w-full flex-row items-center align-middle justify-center rounded-xl bg-light-cardBgColor/15 hover:bg-light-cardBgColor/30 backdrop-blur-md shadow-2xl shadow-light-accent/10 hover:shadow-light-accent/20 hover:shadow-3xl transition duration-500 ease-in-out px-12 py-10 md:py-12"
	>
		<div class="md:mx-[112px] md:flex md:justify-around md:align-middle md:items-center">
			<div class="grid xl:grid-cols-3 gap-10 sm:gap-12 w-[100%]">
				<div class="flex flex-col items-center align-middle justify-center">
					<a href="/">
						<Img src={logo} alt="ProcureJs Logo" class="me-3 h-[8rem] sm:h-100 rounded-lg" />
					</a>
				</div>
				<div class="flex flex-row xl:flex-col gap-4 items-center align-middle justify-around">
					<div class="flex flex-row items-center">
						<a href="https://www.linkedin.com/company/procurejs/?viewAsMember=true" target="_blank">
							<Img class={LogoStyle} src={LinkedinLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-Linkedin</span> -->
					</div>
					<div class="flex flex-row items-center">
						<a href="https://www.instagram.com/procurejs_official/" target="_blank">
							<Img class={LogoStyle} src={InstagramLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-twitter</span> -->
					</div>
					<div class="flex flex-row items-center">
						<a href="mailto:jaishree@procurejs.in">
							<Img class={LogoStyle} src={MailLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-mail</span> -->
					</div>
				</div>
				<div class="flex flex-col items-start align-middle">
					<h1 class="text-light-textColor text-[24px] tracking-tighter">Mailing Address :</h1>
					<p class="text-light-textColor/80 my-[8px] md:my-[16px] font-light">
						<a
							href="https://maps.app.goo.gl/RSnjAeAcw3gz8Hz97"
							target="_blank"
							class="text-[18px] hover:text-light-textColor hover:underline"
							>U-001, BPTP Park Floor - 1, Sector - 77, Faridabad, Haryana</a
						>
					</p>
					<div class="mt-[32px] md:my-[32px]">
						<FooterCopyright spanClass="text-light-textColor" href="/" by="ProcureJs" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
