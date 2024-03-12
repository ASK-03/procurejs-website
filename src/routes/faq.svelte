<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import Heading from '../components/Heading.svelte';
</script>

<section class="benefits h-[100vh] w-[100%] px-[162px] py-[48px]">
	<Heading display="middle" heading="FAQ" subHeading="Frequently Asked Questions" />
	<div class="contact-form mt-[6rem]">
		<Accordion>
			<AccordionItem>
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
			<AccordionItem>
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
			<AccordionItem>
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
			<AccordionItem>
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
</section>
