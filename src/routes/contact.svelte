<script>
	import Heading from '@/components/Heading.svelte';
	import { Button, Label, Input, Textarea, Alert } from 'flowbite-svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import contactUsImage from '@/static/contact.svg';

	import { inview } from 'svelte-inview';

	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Write your message here!'
	};

	let status = '';
	const handleSubmit = async (data) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Success';
		}
	};

	let isInView;
	const options = {
		rootMargin: '100px',
		unobserveOnEnter: true
	};
	const handleChange = ({ detail }) => (isInView = detail.inView);
</script>

<section
	class="contact h-fit lg:h-screen md:w-[100%] sm:w-[calc(100dvh)] px-[20px] md:px-[80px] lg:px-[100px] xl:px-[162px] pt-[48px] lg:pb-[32px]"
	id="contact"
>
	<div use:inview={options} on:inview_change={handleChange}>
		{#if isInView}
			<Heading display="left" heading="Contact" subHeading="Get in Touch" />

			{#if status}
				<div class="absolute md:inset-x-[162px]">
					<Alert color="green" class="mt-10" dismissable>
						<InfoCircleSolid slot="icon" class="w-4 h-4" />
						<span class="font-medium">We Will Reach Out To You, Shortly!</span>
					</Alert>
				</div>
			{/if}

			<div
				class="contact-form mt-[6rem] flex flex-col lg:flex-row justify-between align-bottom items-center gap-20 px-12 py-10 bg-white/15 backdrop-blur-xl rounded-lg shadow-2xl shadow-blue-500/20"
			>
				<div class="w-full lg:w-[50%]">
					<form class="flex flex-col space-y-6" on:submit|preventDefault={handleSubmit}>
						<input type="hidden" name="access_key" value="4ac3e312-c678-411c-b1d3-494b707d5f96" />
						<div>
							<Label for="name" class="block mb-2 text-xl font-medium text-white/90">Name</Label>
							<Input id="name" type="text" name="name" placeholder="Name" required />
						</div>
						<Label class="space-y-2 text-xl font-medium text-white/90">
							<span>Email</span>
							<Input type="email" name="email" placeholder="name@company.com" required />
						</Label>
						<div class="mb-6">
							<Label for="subject" class="block mb-2 text-xl font-medium text-white/90"
								>Subject</Label
							>
							<Input id="subject" name="_subject" placeholder="Subject" required />
						</div>
						<div>
							<Label for="message" class="block mb-2 text-xl font-medium text-white/90"
								>Message</Label
							>
							<Textarea {...textareaprops} />
						</div>
						<Button type="submit" class="w-full">Send</Button>
					</form>
				</div>

				<div class="contact-us-image h-0 w-0 hidden lg:block md:h-fit md:w-fit">
					<img src={contactUsImage} alt="contact us illustration" />
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	/* .contact {
		background-image: linear-gradient(to bottom, #26416f, #27416c, #28416a, #294067, #2a4064);
	} */
	/* background-image: linear-gradient(to bottom, #203d6d, #233e6b, #253f69, #283f66, #2a4064); */
	/* background-image: linear-gradient(to bottom, #002b71, #0a316f, #16366c, #203b68, #2a4064); */
	/* background-image: linear-gradient(to left, #ffffff, #fcfcfc, #f9f9f9, #f7f7f7, #f4f4f4); */
	/* background-image: linear-gradient(to left, #ffffff, #fdfdfd, #fafafa, #f8f8f8, #f6f6f6); */
	/* background-image: linear-gradient(to left, #909090, #a4a3a7, #b8b7be, #cccbd6, #e1e0ee); */
	/* background-image: radial-gradient(circle, #e8edf4, #e5eaf3, #e3e7f1, #e2e3f0, #e1e0ee); */
	/* background-image: radial-gradient(circle, #dae1eb, #dfe5ed, #e3e8ef, #e8ecf2, #edf0f4); */
	/* background-image: radial-gradient(circle, #dae1eb, #dae7ec, #dfecec, #e8f1eb, #f2f4ed); */
</style>
