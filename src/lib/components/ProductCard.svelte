<script>
	import products from '@/data/products.js';
</script>

<div class="products-card">
	<div class="mt-[6rem]">
		<div class="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-10">
			{#each products as product, index (`products-${index}`)}
				<a href={product.link}>
					<div
						class="card flex flex-col align-middle w-full items-center justify-between gap-1 bg-white/15 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/20 overflow-hidden max-h-[330px]"
					>
						<img
							class="card-image z-0 rounded-tl-xl rounded-tr-xl w-full max-h-[160px] xs:max-h-[150px] md:max-h-[200px] object-cover"
							src={product.thumbnail}
							alt={product.help}
						/>
						<div
							class="text flex flex-col items-center align-middle justify-center text-white/90 text-[16px] sm:text-[20px] p-[2rem] sm:px-[2rem]"
						>
							<h1 class="font-semibold text-[20px] mb-2">{product.name}</h1>
							<p class="font-light text-center text-[16px]">{product.help}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.card:hover {
		transform: scale(1.01);
	}
	.card:hover .card-image {
		transform: scale(1.04);
	}

	/* .card:hover .text {
		display: none;
	} */

	.card,
	.card-image,
	.text {
		transition: transform 0.3s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
