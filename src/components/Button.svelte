<script>
	export let text;
	export let link;
	import { Button } from 'flowbite-svelte';
</script>

<a href={link}>
	<Button class="py-2 px-6 bg-[#6557F1] hover:bg-[#4a3eca]" size="lg">{text}</Button>
</a>
