<script lang="ts">
	import { Motion } from 'svelte-motion';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let words: string;
	export let className: string | undefined = undefined;

	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * 0.2,
				duration: 0.8
			}
		}),
		hidden: { opacity: 0 }
	};

	let isInView: boolean;
	const options: Options = {
		rootMargin: '50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div class="${className}">
			<Motion let:motion custom={0} {variants} initial="hidden" animate={'visible'}>
				<div use:motion>
					{#each words.split(' ') as word, idx (`${word}${idx}`)}
						<Motion let:motion {variants} custom={idx + 1} initial="hidden" animate={'visible'}>
							<span use:motion>
								{word}
							</span>
						</Motion>
					{/each}
				</div>
			</Motion>
		</div>
	{/if}
</div>
