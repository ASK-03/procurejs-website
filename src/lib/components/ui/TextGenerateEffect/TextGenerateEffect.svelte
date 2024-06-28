<script lang="ts">
	export let words: string;
	export let className: string | undefined = undefined;
</script>

<div class="${className}">
	{#each words.split(' ') as word, idx (`${word}${idx}`)}
		<span>
			{word}
		</span>
	{/each}
</div>
