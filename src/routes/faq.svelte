<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import Heading from '@/components/Heading.svelte';

	// import downArrow from '@/static/downArrow.svg';
	import InfiniteMovingCards from '@/components/ui/InfiniteMovingCards/InfiniteMovingCards.svelte';

	const testimonials = [
		{
			quote:
				'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
			name: 'Charles Dickens',
			title: 'A Tale of Two Cities'
		},
		{
			quote:
				"To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
			name: 'William Shakespeare',
			title: 'Hamlet'
		},
		{
			quote: 'All that we see or seem is but a dream within a dream.',
			name: 'Edgar Allan Poe',
			title: 'A Dream Within a Dream'
		},
		{
			quote:
				'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
			name: 'Jane Austen',
			title: 'Pride and Prejudice'
		},
		{
			quote:
				'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
			name: 'Herman Melville',
			title: 'Moby-Dick'
		}
	];
</script>

<section class="faq h-fit w-[100%] px-[162px] py-[48px] relative flex flex-col">
	<Heading display="middle" heading="FAQ" subHeading="Frequently Asked Questions" />
	<div class="contact-form mt-[6rem]">
		<Accordion>
			<AccordionItem class="bg-[#e5e5e5]">
				<span slot="header">My Header 1</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
				<p class="text-gray-500 dark:text-gray-400">
					Check out this guide to learn how to <a
						href="/"
						target="_blank"
						rel="noreferrer"
						class="text-blue-600 dark:text-blue-500 hover:underline"
					>
						get started
					</a>
					and start developing websites even faster with components on top of Tailwind CSS.
				</p>
			</AccordionItem>
			<AccordionItem class="bg-[#e5e5e5]">
				<span slot="header">My Header 2</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
				<ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
					<li>
						<a
							href="/"
							target="_blank"
							rel="noreferrer"
							class="text-blue-600 dark:text-blue-500 hover:underline"
						>
							Lorem ipsum
						</a>
					</li>
					<li>
						<a
							href="https://tailwindui.com/"
							rel="noreferrer"
							target="_blank"
							class="text-blue-600 dark:text-blue-500 hover:underline"
						>
							Tailwind UI
						</a>
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="bg-[#e5e5e5]">
				<span slot="header">My Header 1</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
				<p class="text-gray-500 dark:text-gray-400">
					Check out this guide to learn how to <a
						href="/"
						target="_blank"
						rel="noreferrer"
						class="text-blue-600 dark:text-blue-500 hover:underline"
					>
						get started
					</a>
					and start developing websites even faster with components on top of Tailwind CSS.
				</p>
			</AccordionItem>
			<AccordionItem class="bg-[#e5e5e5]">
				<span slot="header">My Header 1</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
					explicabo ...
				</p>
				<p class="text-gray-500 dark:text-gray-400">
					Check out this guide to learn how to <a
						href="/"
						target="_blank"
						rel="noreferrer"
						class="text-blue-600 dark:text-blue-500 hover:underline"
					>
						get started
					</a>
					and start developing websites even faster with components on top of Tailwind CSS.
				</p>
			</AccordionItem>
		</Accordion>
	</div>

	<Heading
		display="middle"
		heading="Testimonials"
		subHeading="What Our Customers Say"
		className="mt-[10rem]"
	/>

	<div
		class="relative flex h-[30rem] w-[100vw] flex-col items-center justify-center rounded-md bg-transparent antialiased dark:bg-black dark:bg-grid-white/[0.05]"
	>
		<InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
	</div>

	<div
		class="absolute bottom-[5rem] left-[50%] translate-x-[-50%] flex flex-col align-middle items-center justify-between"
	>
		<!-- <p class="font-bold text-[#E5E5E5] text-[32px]">Feel Free to Contact Us</p> -->
	</div>
</section>

<style>
	/* .faq {
		background-image: linear-gradient(to bottom, #658f9d, #4d7c93, #3a6988, #2c557d, #26416f);
	} */
	/* background-image: linear-gradient(to bottom, #658f9d, #3c7895, #0e5f8d, #004682, #002b71); */
</style>
