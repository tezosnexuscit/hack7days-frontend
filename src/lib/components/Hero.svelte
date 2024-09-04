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
			<img src={Tezos} class="h-28 w-56 tenk24:hidden" alt="" />
			<h1 class="text-xl leading-[1.2] tenk24:text-5xl">
				Get ready to elevate your skills to <br class="hidden tenk24:block" /> the next level with
				Hack7Days, <br class="hidden tenk24:block" /> the ultimate hackathon for
				<br class="hidden tenk24:block" />
				<strong>blockchain and cryptocurrency <br /> enthusiasts!</strong>
			</h1>
		</div>
		<div class="flex w-full flex-wrap items-center gap-5">
			<button class="flex rounded-lg bg-btn-blue p-3 text-lg font-bold text-white tenk24:p-4"
				>Register now</button
			>
			<button
				class="flex items-center justify-center gap-3 rounded-lg bg-btn-green p-3 text-lg font-bold text-white tenk24:p-4"
			>
				<img src={Whapp} alt="" />
				<a href="https://chat.whatsapp.com/IMEuQ5IFCegFz5MZUsgF9w" target="_blank" class="leading-none">Join our community</a></button
			>
		</div>
	</div>
	<img src={HornMobile} alt="A fuckin Horn" class="h-60 w-[20rem] tenk24:hidden" />

	<img src={Horn} alt="A fuckin Horn" class="hidden h-[75vh] tenk24:block" />
</section>
