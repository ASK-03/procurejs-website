<script>
	import products from '@/data/products.js';
</script>

<div class="products-card">
	<div class="mt-[6rem]">
		<div class="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-10">
			{#each products as product, index (`products-${index}`)}
				<a href={product.link}>
					<div
						class="card flex flex-col align-middle w-full items-center justify-between gap-1 rounded-xl bg-light-cardBgColor/15 hover:bg-light-cardBgColor/30 backdrop-blur-md shadow-2xl shadow-light-accent/10 hover:shadow-light-accent/20 hover:shadow-3xl overflow-hidden max-h-[330px]"
					>
						<img
							class="card-image z-0 rounded-tl-xl rounded-tr-xl w-full max-h-[160px] xs:max-h-[150px] md:max-h-[200px] object-cover"
							src={product.thumbnail}
							alt={product.help}
						/>
						<div
							class="text flex flex-col items-center align-middle justify-center text-[16px] sm:text-[20px] p-[2rem] sm:px-[2rem]"
						>
							<h1 class="font-semibold text-light-textColor text-[20px] mb-2">{product.name}</h1>
							<p class="font-light text-center text-light-textColor/80 text-[16px]">
								{product.help}
							</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.card:hover .card-image {
		transform: scale(1.02);
	}

	/* .card:hover .text {
		display: none;
	} */

	.card,
	.card-image,
	.text {
		transition:
			background 0.3s ease-in-out,
			transform 0.3s ease-in-out,
			box-shadow 0.4s ease-in-out;
	}
</style>
