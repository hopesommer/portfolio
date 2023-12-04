<script>
    import gem from '$lib/images/gem.png' 
    import {onMount} from 'svelte';
    import {Sheet} from 'drab';
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
    let display = false;  
    
   </script>
   
   <div>
       <div class="corner">
        <button
            type="button"
            class="button button-primary"
            on:click={() => (display = !display)}
        >
            <a href="/">
                <img src={gem} alt="SvelteKit"/>
            </a>
        </button>
       </div>
       
    
       <Sheet
            bind:display
            id='sheet'
            class="!top-11 z-40 backdrop-blur bg-pink sheet"
            classSheet="!max-h-none card rounded-none border-none !h-screen flex flex-col justify-center items-center"
            position="t"
            transition={false}
       >
            <a 
                on:click={() => (display = false)} 
                href='/' transition:fly={{ y: -15, delay: 50 * 0 }} 
                class="{display ? '' : 'none'} text-dark-green font-mondeur text-5xl mb-4"
            >
                Home
            </a>
            <a 
                on:click={() => (display = false)} 
                href='/resume' transition:fly={{ y: -15, delay: 50 * 1 }} 
                class="text-dark-green font-mondeur text-5xl mb-4"
            >
                Resume
            </a>
            <a 
                on:click={() => (display = false)} href='/projects' transition:fly={{ y: -15, delay: 50 * 2 }} 
                class="{display ? '' : 'none'} text-dark-green font-mondeur text-5xl"
            >
                Projects
            </a>
       </Sheet>

   </div>
   
   <style>
        .card {
            height: 100vh !important;
        }
        .backdrop {
            display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: hidden;
        }
        .corner {
           width: 3em;
           height: 3em;
       }
   
       .corner a {
           display: flex;
           align-items: center;
           justify-content: center;
           width: 100%;
           height: 100%;
       }
   
       .corner img {
           width: 2em;
           height: 3em;
           object-fit: contain;
       }
   
       nav {
           display: flex;
           justify-content: center;
           --background: rgba(255, 255, 255, 0.7);
       }
   
       svg {
           width: 2em;
           height: 3em;
           display: block;
       }
   
       path {
           fill: #FDB4C5;
       }
   
       ul {
           position: relative;
           padding: 0;
           margin: 0;
           height: 3em;
           display: flex;
           justify-content: center;
           align-items: center;
           list-style: none;
           background: #FDB4C5;
           background-size: contain;
       }
   
       li {
           position: relative;
           height: 100%;
       }
   
       li[aria-current='page']::before {
           --size: 6px;
           content: '';
           width: 0;
           height: 0;
           position: absolute;
           top: 0;
           left: calc(50% - var(--size));
           border: var(--size) solid transparent;
           border-top: var(--size) solid var(--color-theme-1);
       }
   
       nav a {
           display: flex;
           height: 100%;
           align-items: center;
           padding: 0 0.5rem;
           /* color: var(--color-text); */
           font-weight: 700;
           /* font-size: 0.8rem; */
           /* text-transform: uppercase; */
           letter-spacing: 0.1em;
           text-decoration: none;
           transition: color 0.2s linear;
       }
   
       a:hover {
           /* color: var(--color-theme-1); */
       }
    .bar {
        border-style: solid;
        border-color: #E0447D;
        border-width: 1px;
        height: 0;
    }
   </style>
   
   