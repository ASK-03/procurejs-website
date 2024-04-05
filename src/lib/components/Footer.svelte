<script>
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, Img } from 'flowbite-svelte';
	import logo from '../static/procurejs-logo.png';
	import TwitterLogo from '../static/twitter.svg';
	import LinkedinLogo from '../static/linkedin.svg';
	import MailLogo from '../static/mail.svg';

	const LogoStyle = 'h-[2em]';
</script>

<!-- bg-[#2A4064] -->
<div class="footer flex items-center justify-center align-middle px-20 py-10">
	<Footer
		class="h-[30vh] w-[82vw] flex flex-row items-center align-middle justify-center bg-white/10 backdrop-blur-xl rounded-lg shadow-2xl shadow-blue-500/20"
		footerType="socialmedia"
	>
		<div class="md:mx-[112px] md:flex md:justify-around md:align-middle md:items-center">
			<div class="grid grid-cols-3 gap-10 sm:gap-12 sm:grid-cols-3 w-[100%]">
				<div class="flex flex-col items-center align-middle justify-center">
					<a href="/">
						<Img src={logo} alt="Procure J S Logo" class="me-3 h-[8rem] sm:h-100 rounded-lg" />
					</a>
				</div>
				<div class="flex flex-col items-center align-middle justify-around">
					<div class="flex flex-row items-center">
						<a href="/">
							<Img class={LogoStyle} src={TwitterLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-twitter</span> -->
					</div>
					<div class="flex flex-row items-center">
						<a href="/">
							<Img class={LogoStyle} src={LinkedinLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-Linkedin</span> -->
					</div>
					<div class="flex flex-row items-center">
						<a href="mailto:jaishree@procurejs.in">
							<Img class={LogoStyle} src={MailLogo}></Img>
						</a>
						<!-- <span class="md:mx-[16px] text-[#e5e5e5]">@procurejs-mail</span> -->
					</div>
				</div>
				<div class="flex flex-col items-start align-middle">
					<h1 class="text-[#FFFFFF] md:text-[24px] tracking-tighter">Mailing Address :</h1>
					<p class="text-[#efefef] md:my-[16px] font-light">
						<a
							href="https://maps.app.goo.gl/RSnjAeAcw3gz8Hz97"
							target="_blank"
							class="text-[18px] hover:text-[#FFFFFF] hover:underline"
							>U-001, BPTP Park Floor - 1, Sector - 77, Faridabad, Haryana</a
						>
					</p>
					<div class="md:my-[32px]">
						<FooterCopyright spanClass="text-[#e5e5e5]" href="/" by="ProcureJs" />
					</div>
				</div>
			</div>
		</div>
	</Footer>
</div>
