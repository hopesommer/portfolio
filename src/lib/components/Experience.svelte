<script>
    import resume from '$lib/utils/data.js';
    import {onMount} from 'svelte';
    import flowers from '$lib/images/flowers.png'
	import {device} from '$lib/utils/responsive.js';
    import { Parallax, ParallaxLayer } from 'svelte-parallax'
    import bloom from '$lib/images/bloom.png' 
	
    import { Details } from "drab";
    let parallax;
	let disabled = false;
	let skills = 'skills'.split('');
    onMount(() => {
        console.log('RESUME', resume)
    })
</script>

<Parallax sections={4} bind:this={parallax} disabled={disabled}>
    {#each skills as char, index (index)}
        <ParallaxLayer
                rate={(index + 1) / (skills.length - 1)}
        offset={1}
            style="
                margin-left: {38 + (index * 5)}%; 
                    display: flex; 
                    justify-content: flex-start; 
                    align-items: center;
            "
            >
                <p class="fancy text-5xl font-mondeur text-raspberry">
                    {char}
                </p>
        </ParallaxLayer>
    {/each}
    <ParallaxLayer offset={1} rate={-2.5}  style=" display: flex; justify-content: flex-end;">
        <div style="background-color: #CDC85D !important; opacity: 0.5;  width: 50%; height: 100%;"/>
    </ParallaxLayer>
    
    <ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
        <div style="background-color: #E0447D; opacity: 0.5; width: 50%; height: 100%;"/>
    </ParallaxLayer>
    <ParallaxLayer 
        rate=1 
        style="
            background-color: #124543; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            height: 7rem !important;
            flex-direction: column;
        "
    >
       <div>
        <div class="text-center mt-6 main-title font-semibold mb-7 text-5xl text-antique-white font-brightMelody">Resume</div>
        <div class="flex gap-4">
            <button class="cta rounded-full px-3 bottom-btn bg-raspberry text-citron font-mondeur">
                Experience
            </button>
            <button 
                class="cta rounded-full px-3 bottom-btn bg-raspberry text-citron font-mondeur" 
                on:click={() => parallax.scrollTo(3, {selector: '.top-btn', duration: 4000})}
            >
                Skills
             </button>
        </div>
       </div>
    
            <div class="px-6">
                {#each resume.experience as job}
                <div class="{$device === 'desktop' ? 'w-96' : 'w-70'} text-antique-white my-5 card">
                    <div class="card-body p-5">
                        <h2 class="card-title block mb-1 font-mondeur font-bold text-antique-white">
                            {job.company}
                        </h2>
                        <div class="px-3 inline rounded-full bg-citron text-sm font-medium font-inter text-dark-green">{job.timeperiod}</div>
                        <div class="my-3 font-inter">{job.description}</div>
                        <Details class="border-b">
                            <svelte:fragment slot="summary" let:open>
                                <div class="link flex items-center justify-between gap-8 p-4">
                                    <div class="text-citron">Read More</div>
                                    <div class="transition" class:rotate-180={!open}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#cdc85d" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                                    </div>
                                </div>
                            </svelte:fragment>
                            <svelte:fragment slot="content">
                                <div class="{$device === 'desktop' ? 'px-8 py-4' : 'px-4 py-2'} px-8 pb-4">
                                    <ul class="list-disc">
                                        {#each job.responsibilities as responsibility}
                                            <li>{responsibility}</li>
                                        {/each}
                                    </ul>
                                </div>
                            </svelte:fragment>
                        </Details>
                    </div>
                </div>
            {/each}
            </div>
    </ParallaxLayer>
    <ParallaxLayer 
        offset=2 
            rate=2 
            style="
            background-color: #124543; 
                display: flex; 
                justify-content: flex-start; 
                align-items: center;
                flex-direction: column;
                position: relative;
            "
        >
        <div class="px-8 py-8 font-mondeur text-pink text-5xl self-start justify-self-start">Skills</div>
        <div class="card-actions px-4 justify-end mb-12">
            {#each resume.skills as skill}
                 <div class="px-3 inline rounded-full bg-citron text-sm font-medium font-mondeur text-dark-green">{skill.name}</div>
            {/each}
        </div>
        <button 
            class="cta -mt-5 rounded-full px-3 top-btn bg-raspberry text-citron font-mondeur" 
                on:click={() => parallax.scrollTo(1, {selector: '.main-title', duration: 1000})}
            >
                Scroll to top
        </button>
        <img alt="bloom" class="absolute scrollImg" src={flowers}/>
    </ParallaxLayer>
        
</Parallax>

<style>
.cta {
    border: 2px solid #CDC85D;
}
.testDisplay {
    background: url('../images/hasegawa_1.png') no-repeat fixed center !important;
}
.flowers {
    background: url('../images/pear.png') no-repeat fixed center !important;
}
.scrollImg {
    bottom: -30%;
}
</style>

