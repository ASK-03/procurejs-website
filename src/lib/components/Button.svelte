<script>
	export let text;
	export let link;
	// import { Button } from 'flowbite-svelte';
	// import MovingBorder from '@/components/ui/MovingBorder/MovingBorder.svelte';
	import Button from '@/components/ui/MovingBorder/Button.svelte';
</script>

<a href={link}>
	<Button borderRadius="1.75rem" className="">
		{text}
	</Button>
</a>
