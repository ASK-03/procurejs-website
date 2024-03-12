<script>
	import Heading from '../components/Heading.svelte';
	import { Card, Button, Label, Input, Textarea } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Write your message here!'
	};
</script>

<section class="benefits h-[100vh] w-[100%] px-[162px] py-[48px] bg-[#e5e5e5]" id="contact">
	<Heading display="left" heading="Contact" subHeading="Get in Touch" />
	<div class="contact-form mt-[6rem] flex flex-row gap-10">
		<Card size="lg">
			<form class="flex flex-col space-y-6" action="/">
				<h2 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h2>
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
		<div class="flex flex-col items-center justify-between">
			<div class="space-y-4">
				<Card size="lg">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
						chronological order.
					</p>
				</Card>
				<Card size="lg">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Noteworthy technology acquisitions 2021
					</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
						Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
						chronological order.
					</p>
				</Card>
			</div>
		</div>
	</div>
</section>
