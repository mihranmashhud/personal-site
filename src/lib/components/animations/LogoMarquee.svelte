
<script lang="ts">
  import MihranLogo from '$lib/components/svgs/MihranLogo.svelte';
  import { gsap } from 'gsap';
  import { range } from '$lib/utils/arrays';
  import { onMount } from 'svelte';

  const rows = 4;
  const elems = 12;

  function animate() {
    const tl = gsap.timeline({
      defaults: {
        repeat: -1,
        ease: 'none'
      }
    });
    for (let i = 0; i < rows; i++) {
      const target = `.logo-row-${i}`;
      tl.to(
        target,
        {
          x: '25%',
          duration: 20 + (i + 1)
        },
        'start'
      );
    }
  }

  onMount(() => {
    let mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', animate);
  });
</script>
  <div id="logo-marquee-container" class="-z-10">
    <div id="logo-rows">
      {#each range(0, rows) as i}
        <div class="flex logo-row-{i} w-[900vw] gap-1 py-1 md:w-[300vw]">
          {#each Array(elems) as _}
            <div class="flex-1">
              <MihranLogo aria-hidden="true" class="fill-zinc-900" />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

<style>
  #logo-marquee-container {
    position: absolute;
    rotate: -9deg;
  }
</style>
