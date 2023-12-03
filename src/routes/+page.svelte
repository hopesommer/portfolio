<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center mt-12">
	<!-- <div class="relative mb-7">
		<div class="z-50 absolute flex label font-medium rounded-lg w-[200px] mt-3 p-4 bg-sage block font-mondeur justify-center">Software Engineer</div>
		<div class="flex justify-center mr-12">
			<img class="profile" alt="me" src="/images/profile.png"/>
		</div>
	</div> -->
	<img class="decorative self-center" alt="decorative" src="/images/composition_4.png"/>
	<h1 class="block font-brightMelody text-center text-9xl text-antique-white">Hope Sommer</h1>
	<h3 class="mt-2 flex justify-center font-mondeur text-pink text-3xl">Software Engineer</h3>
	<div class="mt-9 bg-citron self-center rounded-lg p-4 text-dark-green font-mondeur">Download CV</div>
</section>

<style>
ge
	h1 {
		width: 100%;
	}
	.label {
		border-radius: 50%;
		border: 5px solid #FDB4C5;
		left: 20%;
		top: 30%;
	}
	.decorative {
		/* transform: rotate(90deg); */
		height: 200px;
		width: 500px;
	}
	.profile {
		border-radius: 50%;
		height: 225px;
		width: 225px;
		object-fit: cover; 
		object-position: 100% 0;
		border: 10px solid rgba(144, 189, 168, 0.25);
	}
</style>
