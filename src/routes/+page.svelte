<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@300;400;700&display=swap" rel="stylesheet">

</svelte:head>

<section class="flex flex-col justify-center mt-12">
	<img class="decorative self-center" alt="decorative" src="/images/composition_4.png"/>
	<h1 class="block font-brightMelody text-center text-7xl text-antique-white">Hope Sommer</h1>
	<h3 class="mt-2 flex justify-center font-mondeur text-pink text-3xl">Software Engineer</h3>
	<button class="mt-9 bg-citron self-center rounded-lg p-4 text-dark-green font-mondeur">Download CV</button>
</section>

<style>
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
