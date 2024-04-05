<script>
	import Heading from '@/components/Heading.svelte';
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

	<Heading
		display="middle"
		heading="Testimonials"
		subHeading="What People Say"
		className="mt-[10rem]"
	/>

	<div
		class="relative flex h-[30rem] w-[100vw] flex-col items-center justify-center rounded-md bg-transparent antialiased dark:bg-black dark:bg-grid-white/[0.05]"
	>
		<InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
	</div>

	<div
		class="absolute bottom-[5rem] left-[50%] translate-x-[-50%] flex flex-col align-middle items-center justify-between"
	></div>
</section>
