<script lang="ts">
	import { spring } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	export let topic = '';
	export let speaker = '';
	export let day = '';

	let hovered = false;
	const scale = spring(1, {
		stiffness: 0.2,
		damping: 0.4
	});

	$: $scale = hovered ? 1.05 : 1;

	function handleMouseenter() {
		hovered = true;
	}

	function handleMouseleave() {
		hovered = false;
	}
</script>

<section
	role="group"
	class="mx-8 my-7 box-border h-96 w-96 whitespace-normal break-words rounded-[4rem] bg-day-grey p-12 font-montserrat transition-shadow duration-300 ease-in-out"
	style="transform: scale({$scale}); box-shadow: 0 {hovered ? '8px' : '4px'} {hovered
		? '8px'
		: '4px'} rgba(0,0,0,0.3);"
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
	in:fade
>
	<div class="flex flex-col space-y-2">
		<h3 class="text-4xl font-black">Day</h3>
		<h4 class="text-5xl font-black">
			{#if day === '04'}
				{day + '-' + '06'}
			{:else}{day}{/if}
		</h4>
	</div>
	{#if speaker !== '' && topic !== ''}
		<div class="mt-5 space-y-4">
			<p><strong>Topic:</strong> {topic}</p>
			<p><strong>Speaker:</strong> {speaker}</p>
		</div>
	{:else if day === '07'}
		<p class="mt-12 text-5xl font-semibold">Finals!</p>
	{:else if day === '04'}
		<p class="mt-12 text-4xl font-semibold">Online Hackathon Build</p>
	{/if}
</section>
