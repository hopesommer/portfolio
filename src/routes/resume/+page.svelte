<script>
	import {onMount} from 'svelte'
	import {device} from '$lib/utils/responsive.js';
	import Experience from '$lib/components/Experience.svelte';
	import DesktopResume from '$lib/components/DesktopResume.svelte'
	import MobileResume from '$lib/components/MobileResume.svelte'
	$: isMobile = $device === 'mobile'

	onMount(() => {
		console.log('IS MOBILE', isMobile)
	})
</script>
<svelte:head>
	<title>Resume</title>
	<meta name="description" content="About this app" />
</svelte:head>


<div>
	{#if isMobile}
		<Experience/>	
	{:else}
		<div class="font-semibold mb-7 text-5xl text-antique-white font-brightMelody">Under Construction</div>
	{/if}
</div>