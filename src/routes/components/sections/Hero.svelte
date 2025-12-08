<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import LogoMarquee from '$lib/components/animations/LogoMarquee.svelte';
  import ScrollDownArrow from '$lib/components/animations/ScrollDownArrow.svelte';

  let section: HTMLElement | null = $state(null);
  let title: HTMLElement | null = $state(null);
  let subtitle: HTMLElement | null = $state(null);
  let subtitles = [
    'Web Dev Monster',
    'Com Sci Nerd',
    'Overt Linux Enthusiast',
    'I used Arch BTW',
    "Now it's NixOS"
  ];

  function animate() {
    const tl = gsap.timeline();

    const title_tl = gsap.timeline();
    title_tl.from(title, {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: '2rem'
    });

    subtitles.push(subtitle?.textContent as string);
    const subtitle_tl = gsap.timeline({
      repeat: -1
    });
    for (const elem of subtitles) {
      subtitle_tl.to(subtitle, {
        scrambleText: {
          text: elem,
          chars: 'upperAndLowerCase'
        },
        delay: 2.5,
        duration: 1
      });
    }

    tl.add(title_tl);
    tl.add(
      gsap.from(subtitle, {
        duration: 1,
        opacity: 0,
        y: '2rem'
      })
    );
    tl.add(subtitle_tl);
  }

  onMount(() => {
    let mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', animate);
  });
</script>

<section
  id="greeting"
  class="relative -z-50 flex h-screen w-screen max-w-screen items-center justify-center overflow-hidden bg-zinc-950"
  bind:this={section}
>
  <LogoMarquee />
  <div class="bg-linear-to-r from-cyan-400 to-orange-400 bg-clip-text text-white/50">
    <h1
      bind:this={title}
      class="text-shadow-2xl p-2 text-6xl font-bold tracking-tight drop-shadow-xl drop-shadow-zinc-950 md:text-8xl"
    >
      Hey! I'm<br />
      Mihran<br />
      Mashhud
    </h1>
    <h2
      bind:this={subtitle}
      class="headline-gradient p-2 text-xl font-bold tracking-tight md:text-3xl"
      aria-label="Full Stack Developer"
    >
      Full Stack Developer
    </h2>
  </div>
  <ScrollDownArrow class="absolute bottom-0 mb-20 w-4 md:w-6" delay="5s" />
</section>
