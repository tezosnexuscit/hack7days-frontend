<script lang="ts">
	export let topic = '';
	export let speaker = '';
	export let day = '';
</script>

<section
	class="mx-8 my-7 box-border h-96 w-96 whitespace-normal break-words rounded-[4rem] bg-day-grey p-12 font-montserrat"
>
	<div class="flex flex-col space-y-2">
		<h3 class="text-4xl font-black">Day</h3>
		<h4 class="text-5xl font-black">{day}</h4>
	</div>
	{#if speaker !== '' && topic !== ''}
		<div class="mt-5 space-y-4">
			<p><strong>Topic:</strong> {topic}</p>
			<p><strong>Speaker:</strong> {speaker}</p>
		</div>
	{/if}
</section>
