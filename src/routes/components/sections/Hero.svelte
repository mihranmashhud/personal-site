<script lang="ts">
  import MihranLogo from '$lib/components/svgs/MihranLogo.svelte';
  import { gsap } from 'gsap';
  import { range } from '$lib/utils/arrays';

  const rows = 4;
  const elems = 12;
  let title: HTMLElement;
  let subtitle: HTMLElement;
  let subtitles = [
    "Web Development Monster",
    "Computer Science Nerd",
    "Overt Linux Enthusiast",
    "I used Arch BTW",
    "Now it's NixOS",
  ]

  $effect(() => {
    const tl = gsap.timeline()
    for (let i = 0; i < rows; i++) {
      const target = `.logo-row-${i}`;
      gsap.to(target, {
        x: '25%',
        duration: 8 + (i + 1),
        repeat: -1,
        ease: 'none'
      });
    }

    const title_tl = gsap.timeline()
    title_tl.from(title, {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: "2rem",
    })

    subtitles.push(subtitle.textContent as string)
    const subtitle_tl = gsap.timeline({
      repeat: -1,
    });
    for (const elem of subtitles) {
      subtitle_tl.to(subtitle, {
        text: elem,
        delay: 2.5,
        duration: 1,
      })
    }

    tl.add(title_tl)
    tl.add(gsap.from(subtitle, {
      duration: 1,
      opacity: 0,
      y: "2rem",
    }))
    tl.add(subtitle_tl)
  });
</script>

<section
  class="relative w-screen h-screen bg-zinc-950 flex justify-center items-center overflow-hidden -z-50"
>
  <div class="logo-marquee-container -z-10">
    {#each range(0, rows) as i}
      <div class="flex logo-row-{i} gap-1 py-1 w-[600vw] md:w-[300vw]">
        {#each Array(elems) as j}
          <div class="flex-1">
            <MihranLogo --stroke="#27272a" />
          </div>
        {/each}
      </div>
    {/each}
  </div>
  <div>
    <h1 bind:this={title} class="p-2 font-bold tracking-tight text-6xl md:text-8xl">
      Hey! I'm<br />
      Mihran<br />
      Mashhud
    </h1>
    <h2 bind:this={subtitle} class="p-2 font-bold tracking-tighter text-3xl">Full Stack Developer</h2>
  </div>
</section>

<style>
  h1 {
    text-shadow: 0 2px 10px lab(20 0 -10)
  }

  .logo-marquee-container {
    position: absolute;
    rotate: -10deg;
    transform: translateY(-50%);
  }
</style>
