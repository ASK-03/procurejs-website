<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, Img } from 'flowbite-svelte';
	import logo from '@/static/procurejs-logo.png';
	import InstagramLogo from '@/static/instagram.svg';
	import LinkedinLogo from '@/static/linkedin.svg';
	import MailLogo from '@/static/mail.svg';

	const LogoStyle = 'h-[2em]';
</script>

<!-- bg-[#2A4064] -->
<div
	class="footer md:flex md:items-center md:justify-center md:align-middle px-[20px] md:px-[162px] py-[48px] md:pt-10"
>
	<div
		class="flex flex-row items-center align-middle justify-center bg-white/15 backdrop-blur-xl rounded-lg shadow-2xl shadow-blue-500/20 px-12 py-10 md:py-12"
	>
		<div class="md:mx-[112px] md:flex md:justify-around md:align-middle md:items-center">
			<div class="grid md:grid-cols-3 gap-10 sm:gap-12 sm:grid-cols-3 w-[100%]">
				<div class="flex flex-col items-center align-middle justify-center">
					<a href="/">
						<Img src={logo} alt="Procure J S Logo" class="me-3 h-[8rem] sm:h-100 rounded-lg" />
					</a>
				</div>
				<div class="flex flex-row md:flex-col gap-4 items-center align-middle justify-around">
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
					<h1 class="text-[#FFFFFF] text-[24px] tracking-tighter">Mailing Address :</h1>
					<p class="text-[#efefef] my-[8px] md:my-[16px] font-light">
						<a
							href="https://maps.app.goo.gl/RSnjAeAcw3gz8Hz97"
							target="_blank"
							class="text-[18px] hover:text-[#FFFFFF] hover:underline"
							>U-001, BPTP Park Floor - 1, Sector - 77, Faridabad, Haryana</a
						>
					</p>
					<div class="mt-[32px] md:my-[32px]">
						<FooterCopyright spanClass="text-[#e5e5e5]" href="/" by="ProcureJs" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
