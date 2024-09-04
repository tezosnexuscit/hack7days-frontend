<script lang="ts">
	import TezosCloud from '$lib/assets/tezoscloud.svg';
	import Twitter from '$lib/assets/twitter.svg';
	import Instagram from '$lib/assets/instagram.svg';
	import Linkedin from '$lib/assets/linkedin.svg';
</script>

<section
	class="mx-auto my-24 h-fit w-[80%] rounded-3xl bg-tez-yellow p-8 font-montserrat tenk24:p-10"
>
	<h2 class="text-6xl font-black">STAY TUNED</h2>
	<div class="flex justify-center sm:items-start md:items-center">
		<div class="mt-6">
			<article class="font-s mt-6 text-xl font-normal">
				For more updates, follow us on our social media platforms. Stay connected with Hack7Days!
				Get real-time event updates, learn about exciting blockchain and cryptocurrency challenges,
				discover amazing prizes, and connect with fellow participants and mentors. Access valuable
				resources and tips, be the first to know about registration deadlines, and engage in
				community discussions and polls. Don’t miss out – follow us today and be part of the
				Hack7Days community!
			</article>
			<div
				class="mt-10 flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"
			>
				<a href="https://www.instagram.com/tezosnexus.cit/" target="_blank">
					<img src={Instagram} alt="" class="w-44 sm:w-60" />
				</a>
				<a href="https://x.com/tezosnexuscit" target="_blank">
					<img src={Twitter} alt="" class="w-44 sm:w-60" />
				</a>
				<a href="https://www.linkedin.com/company/tezos-club-nexus-cit/" target="_blank">
					<img src={Linkedin} alt="" class="w-50 sm:w-72" />
				</a>
				<img src={TezosCloud} alt="tezos cloud sorta" class="sm:hidden" />
			</div>
		</div>
		<img src={TezosCloud} alt="tezos cloud sorta" class="hidden sm:block" />
	</div>
</section>
