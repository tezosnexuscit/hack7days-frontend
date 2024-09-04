<script lang="ts">
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	interface TimeRemaining {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	const targetDate = new Date('2024-09-06T14:00:00');

	if (!(targetDate instanceof Date)) {
		throw new Error('targetDate must be a Date object');
	}

	function calculateTimeRemaining(): TimeRemaining {
		const now = new Date();
		const timeDifference = targetDate.getTime() - now.getTime();

		if (timeDifference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		const seconds = Math.floor(timeDifference / 1000) % 60;
		const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
		const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
		const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

		return { days, hours, minutes, seconds };
	}

	const timeRemaining: Writable<TimeRemaining> = writable(calculateTimeRemaining());

	const interval = setInterval(() => {
		timeRemaining.set(calculateTimeRemaining());
	}, 1000);

	onDestroy(() => clearInterval(interval));
</script>

<section class="mt-20 flex h-fit w-full flex-col items-center bg-btn-blue py-20">
	<h2 class="text-center text-4xl font-black text-white tenk24:text-5xl">Get ready to Hack !</h2>

	<div class="mt-16 font-montserrat text-white">
		<span class="text-6xl tenk24:text-9xl">
			{#if $timeRemaining.days < 10}0{/if}{$timeRemaining.days}
		</span>
		<span class="text-6xl tenk24:text-9xl">:</span>
		<span class="text-6xl tenk24:text-9xl">
			{#if $timeRemaining.hours < 10}0{/if}{$timeRemaining.hours}
		</span>
		<span class="text-6xl tenk24:text-9xl">:</span>
		<span class="text-6xl tenk24:text-9xl">
			{#if $timeRemaining.minutes < 10}0{/if}{$timeRemaining.minutes}
		</span>
		<span class="text-6xl tenk24:text-9xl">:</span>
		<span class="text-6xl tenk24:text-9xl">
			{#if $timeRemaining.seconds < 10}0{/if}{$timeRemaining.seconds}
		</span>
	</div>
</section>
