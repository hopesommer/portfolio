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
		padding: 1rem;
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
