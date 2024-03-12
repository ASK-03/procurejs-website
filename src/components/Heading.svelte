<script>
	export let display = 'left';
	export let heading = 'Hello World';
	export let subHeading = 'sub';
	export let headingColor = 'black';
	export let subHeadingColor = 'black';
</script>

<!-- TODO: Add responsiveness to the heading for small screens -->
{#if display === 'left'}
	<div class="flex flex-row">
		<div class="w-[16px] h-[75px] bg-[#346474]"></div>
		<div class="flex flex-col mx-4 justify-between items-start">
			<h1 class="text-[48px] text-[{headingColor}] leading-[48px] font-semibold font-montserrat">
				{heading}
			</h1>
			<p class="text-[18px] text-[{subHeadingColor}] leading-[18px]">
				&nbsp;{subHeading}
			</p>
		</div>
	</div>
{:else if display === 'middle'}
	<div class="flex flex-col mx-4 justify-between items-center align-middle">
		<h1 class="text-[48px] text-[{headingColor}] leading-[48px] font-semibold font-montserrat">
			{heading}
		</h1>
		<p class="text-[18px] text-[{subHeadingColor}] leading-[18px] mt-2">
			{subHeading}
		</p>
	</div>
{:else}
	<div class="flex flex-row-reverse">
		<div class="w-[16px] h-[75px] bg-[#346474]"></div>
		<div class="flex flex-col mx-4 justify-between items-end">
			<h1 class="text-[48px] text-[{headingColor}] leading-[48px] font-semibold font-montserrat">
				{heading}
			</h1>
			<p class="text-[18px] text-[{subHeadingColor}] leading-[18px]">
				{subHeading}&nbsp;
			</p>
		</div>
	</div>
{/if}
