<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let words: string;
	export let className: string | undefined = undefined;

	const variants = {
		visible: (i: number) => ({
			opacity: 1,
			transition: {
				delay: i * 0.2,
				duration: 2
			}
		}),
		hidden: { opacity: 0 }
	};
</script>

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
