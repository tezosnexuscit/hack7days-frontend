<script lang="ts">
	import Day from '$lib/components/Day.svelte';
	import Mouth from '$lib/assets/mouth.svg';

	const data = [
		{
			topic: 'Intro to Blockchain and Tezos Blockchain , Intro to Smartpy',
			speaker: 'Simarpreet Singh, Developer Relations at Tezos India'
		},
		{
			topic: 'Intro to Smartpy, Smart Contract for Lottery app, Minting your own NFTs',
			speaker: 'Yash, Blockchain Developer at Tezos India'
		},
		{
			topic:
				'Intro to and building with taquito.js, Frontend and taquito integration of Lottery app, Frontend and taquito integration of Minting your own NFTs',
			speaker: 'Tarun, SDE at Tezos India'
		},
		{
			topic: '',
			speaker: ''
		},
		{
			topic: '',
			speaker: ''
		},
		{
			topic: '',
			speaker: ''
		},
		{
			topic: '',
			speaker: ''
		}
	];
</script>

<main class="mt-24 flex w-full flex-wrap items-center">
	<div class="mb-8 flex items-center">
		<img src={Mouth} class="h-52 w-52 md:h-[22rem] md:w-[22rem]" alt="" />
		<h2 class="mx-5 break-words text-4xl font-black md:hidden">Get ready to Hack!</h2>
	</div>
	{#each data as eventData, i}
		<Day day={`0${i + 1}`} speaker={eventData.speaker} topic={eventData.topic} />
	{/each}
</main>
