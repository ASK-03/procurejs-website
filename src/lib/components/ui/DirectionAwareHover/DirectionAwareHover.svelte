<script lang="ts">
	import { AnimatePresence, Motion } from 'svelte-motion';

	export let imageUrl: string;
	export let childrenClassName: string | undefined = undefined;
	export let imageClassName: string | undefined = undefined;
	export let className: string | undefined = undefined;

	let ref: HTMLDivElement;

	let direction: 'top' | 'bottom' | 'left' | 'right' | string = 'left';

	const handleMouseEnter = (event: MouseEvent) => {
		if (!ref) return;

		const fetchedDirection = getDirection(event, ref);
		switch (fetchedDirection) {
			case 0:
				direction = 'top';
				break;
			case 1:
				direction = 'right';
				break;
			case 2:
				direction = 'bottom';
				break;
			case 3:
				direction = 'left';
				break;
			default:
				direction = 'left';
				break;
		}
	};

	const getDirection = (ev: MouseEvent, obj: HTMLElement) => {
		const { width: w, height: h, left, top } = obj.getBoundingClientRect();
		const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
		const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
		const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
		return d;
	};

	const variants = {
		initial: {
			x: 0
		},

		exit: {
			x: 0,
			y: 0
		},
		top: {
			y: 20
		},
		bottom: {
			y: -20
		},
		left: {
			x: 20
		},
		right: {
			x: -20
		}
	};

	const textVariants = {
		initial: {
			y: 0,
			x: 0,
			opacity: 0
		},
		exit: {
			y: 0,
			x: 0,
			opacity: 0
		},
		top: {
			y: -20,
			opacity: 1
		},
		bottom: {
			y: 2,
			opacity: 1
		},
		left: {
			x: -2,
			opacity: 1
		},
		right: {
			x: 20,
			opacity: 1
		}
	};
</script>

<Motion let:motion>
	<div
		use:motion
		on:mouseenter={handleMouseEnter}
		bind:this={ref}
		class={`group/card relative h-120 w-120 overflow-hidden rounded-lg bg-transparent md:h-150 md:w-150 ${className} `}
	>
		<AnimatePresence show={true}>
			<Motion let:motion initial="initial" whileHover={direction} exit="exit">
				<div use:motion class="h-full w-full">
					<Motion let:motion>
						<div
							use:motion
							class="absolute inset-0 z-10 hidden h-full w-full bg-black/40 transition duration-500 group-hover/card:block"
						/>
					</Motion>
					<Motion
						let:motion
						transition={{
							duration: 0.2,
							ease: 'easeOut'
						}}
						{variants}
					>
						<div use:motion class="relative h-full w-full bg-gray-50 dark:bg-black">
							<img
								src={imageUrl}
								alt="image"
								class={`h-full w-full scale-150 object-cover ${imageClassName}`}
							/>
						</div>
					</Motion>
					<Motion
						let:motion
						variants={textVariants}
						transition={{
							duration: 0.5,
							ease: 'easeOut'
						}}
					>
						<div use:motion class={`absolute bottom-4 left-4 z-40 text-white ${childrenClassName}`}>
							<slot />
						</div>
					</Motion>
				</div>
			</Motion>
		</AnimatePresence>
	</div>
</Motion>
