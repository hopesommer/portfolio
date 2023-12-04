<script>
	import { page } from '$app/stores';
	import gem from '$lib/images/gem.png'
	import {device} from '$lib/utils/responsive.js';
	import {onMount} from 'svelte'
	import DesktopMenu from '$lib/components/DesktopMenu.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';

	onMount(() => {
		console.log('DEVICE', $device)
	})
</script>

<header class="flex justify-between bg-pink">

	{#if $device === 'desktop'}
		<DesktopMenu/>
	{:else}
		<MobileMenu/>
	{/if}

</header>
