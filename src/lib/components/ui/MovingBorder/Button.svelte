<script lang="ts">
	import MovingBorder from './MovingBorder.svelte';

	export let borderRadius: string | undefined = '1.75rem';
	export let containerClassName: string | undefined = undefined;
	export let borderClassName: string | undefined = undefined;
	export let duration: number | undefined = 2000;
	export let className: string | undefined = undefined;
</script>

<button
	class="relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl ${containerClassName}"
	style={`border-radius: ${borderRadius};`}
	{...$$props}
>
	<div class="absolute inset-0" style={`border-radius: calc(${borderRadius} * 1.04);`}>
		<MovingBorder {duration} rx="40%" ry="40%">
			<div
				class="h-20 w-20 bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)] opacity-[0.7] drop-shadow-md shadow-xl ${borderClassName}"
			/>
		</MovingBorder>
	</div>

	<div
		class="relative flex h-full w-full items-center justify-center bg-light-purple/[0.8] text-light-background antialiased backdrop-blur-xl ${className}"
		style={`border-radius: calc(${borderRadius} * 0.96);`}
	>
		<slot />
	</div>
</button>
