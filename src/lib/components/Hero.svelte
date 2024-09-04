<script lang="ts">
	import Horn from '$lib/assets/horn.svg';
	import Tezos from '$lib/assets/tezos.svg';
	import Whapp from '$lib/assets/whapp.svg';
	import HornMobile from '$lib/assets/horn-mobile.svg';
</script>

<section
	class="box-border flex w-full items-center justify-between gap-5 font-montserrat-alternates sm:gap-0 tenk24:mt-12"
>
	<div class="flex flex-col space-y-10 pl-5 text-tez-blue tenk24:pl-10">
		<div class="space-y-10">
			<h2 class="hidden text-2xl tenk24:block">
				"Blockchain is the foundation for the next generation of the internet—it's the <br />
				technology <br />
				that will lead us into a decentralized future."
			</h2>
			<img src={Tezos} class="h-28 w-56 tenk24:hidden" alt="Tezos logo" />
			<h1 class="text-xl leading-[1.2] tenk24:text-5xl">
				Get ready to elevate your skills to <br class="hidden tenk24:block" /> the next level with
				Hack7Days, <br class="hidden tenk24:block" /> the ultimate hackathon for
				<br class="hidden tenk24:block" />
				<strong>blockchain and cryptocurrency <br /> enthusiasts!</strong>
			</h1>
		</div>
		<div class="flex w-full flex-wrap items-center gap-5">
			<a
				href="https://lu.ma/k52ernr2"
				target="_blank"
				class="interactive-button bg-btn-blue text-white"
			>
				Register now
			</a>
			<a
				href="https://chat.whatsapp.com/IMEuQ5IFCegFz5MZUsgF9w"
				target="_blank"
				class="interactive-button bg-btn-green leading-none text-white"
			>
				<img src={Whapp} alt="WhatsApp icon" />
				Join our community
			</a>
		</div>
	</div>
	<img src={HornMobile} alt="Decorative horn" class="h-60 w-[20rem] tenk24:hidden" />
	<img src={Horn} alt="Decorative horn" class="hidden h-[75vh] tenk24:block" />
</section>

<style>
	.interactive-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		padding: 0.75rem 1.25rem;
		border-radius: 0.5rem;
		font-size: 1.125rem;
		font-weight: bold;
		transition: all 0.2s ease;
	}

	.interactive-button:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.interactive-button:active {
		transform: scale(0.95);
	}

	@media (min-width: 1024px) {
		.interactive-button {
			padding: 1.25rem;
		}
	}
</style>
