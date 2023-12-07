<script>
	import Marquee from "svelte-marquee";
	import {device} from '$lib/utils/responsive.js';
</script>


<svelte:head>
	<title>Projects</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column flex flex-col justify-center mt-9">
	<div class="pl-4 text-5xl text-antique-white font-brightMelody mb-9">Projects</div>
	<Marquee content="Discover Pokemon" />;
	<div class="flex justify-center flex-col">
		<a href="https://pokedex-snr.vercel.app/" class="{$device === 'desktop' ? 'w-96' : 'w-70'} flex self-center">
			<div class="card shadow-xl flex flex-col bg-dark-green rounded-lg w-96">
				<div class="flex flex-col card-body relative">
					<img class="absolute flower_1" alt="flower_accent" src="/images/creature.png"/>
					<img class="absolute flower_2" alt="flower_accent" src="/images/creature_2.png"/>
					<h2 class="text-xl font-mondeur text-pink mb-3">Searchable Pokedex</h2>
					<div class="card-actions justify-end">
						<div class="px-3 rounded-full bg-citron text-sm font-mondeur">graphQL</div> 
						<div class="px-3 rounded-full bg-citron text-sm font-mondeur">TypeScript</div>
						<div class="px-3 rounded-full bg-citron text-sm font-mondeur">React</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	.cta {
		border: 2px solid #CAD8DE;
	}
	.flower_1 {
		height: 50px;
		top: 10px;
		right: 10px;
		transform: rotate(6deg);
	}
	.flower_2 {
		height: 50px;
		bottom: 10px;
		left: 10px;
	}
</style>