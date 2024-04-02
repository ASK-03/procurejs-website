<script>
	import Heading from '@/components/Heading.svelte';
	import { Card, Button, Label, Input, Textarea } from 'flowbite-svelte';
	import contactUsImage from '@/static/contact.svg';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Write your message here!'
	};
</script>

<section class="contact h-[100vh] w-[100%] px-[162px] py-[48px]" id="contact">
	<Heading display="left" heading="Contact" subHeading="Get in Touch" />
	<div
		class="contact-form mt-[6rem] flex flex-row justify-between align-bottom items-center gap-20"
	>
		<Card size="lg" color="none" border={false} shadow={false}>
			<form class="flex flex-col space-y-6" action="/">
				<!-- <h1 class="text-[2rem] font-medium text-gray-900 dark:text-white">Talk to Us!</h1> -->
				<div>
					<Label for="name" class="block mb-2">Name</Label>
					<Input id="name" placeholder="Name" required />
				</div>
				<Label class="space-y-2">
					<span>Email</span>
					<Input type="email" name="email" placeholder="name@company.com" required />
				</Label>
				<div class="mb-6">
					<Label for="subject" class="block mb-2">Subject</Label>
					<Input id="subject" placeholder="Subject" required />
				</div>
				<div>
					<Label for="message" class="block mb-2">Message</Label>
					<Textarea {...textareaprops} />
				</div>
				<Button type="submit" class="w-full">Send</Button>
			</form>
		</Card>
		<div class="contact-us-image">
			<img src={contactUsImage} alt="contact us illustration" />
		</div>
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
