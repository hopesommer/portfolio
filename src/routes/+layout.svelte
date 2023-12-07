<script context="module">
	export async function load({session}) {
		return {
			props : {
				overrideMobile: session.mobile
			}
		}
	}
</script>
<script>
	import {width, mobile} from '$lib/utils/responsive';
	export let overrideMobile = true;
	$mobile=overrideMobile
	import Header from './Header.svelte';
	import './styles.css';
	import "../styles/app.css"
  import Page from './+page.svelte';
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</svelte:head>
<svelte:window bind:innerWidth={$width}/>
<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
