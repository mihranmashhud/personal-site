<script lang="ts">
	import MihranLogo from '$lib/components/svgs/MihranLogo.svelte';
	import { gsap } from 'gsap';
  import { range } from "$lib/utils/arrays";

	const rows = 4;
	const elems = 12;

  $effect(() => {
    const tl = gsap.timeline()
    for (let i = 0; i < rows; i++) {
      const target = `.logo-row-${i}`
      gsap.to(target, {
        x: "25%",
        duration: 8 + (i+1),
        repeat: -1,
        ease: "none",
      })
    }
  })
</script>

<div class="relative w-screen h-screen bg-zinc-950 flex justify-center items-center overflow-hidden -z-50">
	<div class="logo-marquee-container -z-10">
		{#each range(0, rows) as i}
			<div class="flex logo-row-{i} gap-1 py-1 w-[600vw] md:w-[300vw]">
				{#each Array(elems) as j}
          <div class="flex-1">
            <MihranLogo --stroke="#52525b"/>
          </div>
				{/each}
			</div>
		{/each}
	</div>
  <div>
    <h1 class="p-2 font-bold tracking-tight text-6xl md:text-8xl text-white">
      Hey! I'm<br/>
      Mihran<br/>
      Mashhud
    </h1>
    <h2 class="p-2 font-bold tracking-tighter text-3xl text-white">
      Web Developer
    </h2>
  </div>
</div>

<style>
	.logo-marquee-container {
    position: absolute;
    rotate: -10deg;
    transform: translateY(-50%);
	}
</style>
