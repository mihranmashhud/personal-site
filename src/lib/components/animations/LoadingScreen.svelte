<script lang="ts">
  import gsap from 'gsap';
  import { onMount, type Snippet } from 'svelte';
  import { fade } from 'svelte/transition';
  import MihranLogoPaths from '../svgs/MihranLogoPaths.svelte';
  import { getCookie, setCookie } from 'typescript-cookie';
  import { env } from '$env/dynamic/public';
  import { global } from '$lib/state/globals.svelte';
  import chroma from 'chroma-js';
  import MorphSVGPlugin from 'gsap/MorphSVGPlugin';
  import { spacing, vbar_height, vbar_width } from '../svgs/logo_consts';

  const sp = spacing;
  const h = vbar_height;
  const w = vbar_width;
  const x = 20;
  const y = 20;
  const viewBox = {
    w: x * 2 + sp * 11 + w,
    h: y * 2 + h
  };

  let {
    onComplete: userOnComplete,
    children
  }: {
    onComplete?: () => void;
    children?: Snippet;
  } = $props();

  let hidden = $state(true);
  onMount(() => {
    hidden = false;
  });

  let complete = $state(!!(env.PUBLIC_SKIP_LOADING_SCREEN ?? false));
  let showSkip = $state(false);
  let gradient_colors: { color: string; offset: string }[] = $state([]);

  const fade_duration = 300;
  let tl: gsap.core.Timeline;

  function onComplete() {
    setCookie('showSkip', true);
    global.seenLoadingScreen = true;
    complete = true;
    userOnComplete?.();
  }

  function handleSkip() {
    tl?.kill();
    onComplete();
  }

  function animate() {
    gsap.registerPlugin(MorphSVGPlugin);

    const lv0 = document.querySelectorAll('.lv0');
    const lv1 = document.querySelectorAll('.lv1');
    const lv2 = document.querySelectorAll('.lv2');
    const lv3 = document.querySelectorAll('.lv3');
    const lh0 = document.querySelectorAll('.lh0');
    const lh1 = document.querySelectorAll('.lh1');

    tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      defaults: {
        duration: 0.35
      },
      onComplete
    });
    tl.addLabel('growToTop');
    for (let i = 0; i < lv0.length; i++) {
      const di = parseInt(lv0[i].getAttribute('data-index') || '0');
      tl.to(
        lv0[i],
        {
          morphSVG: lv1[i] as SVGPathElement,
          delay: 0.08 * di
        },
        'growToTop'
      );
    }
    tl.addLabel('roundCorners');
    for (let i = 0; i < lv0.length; i++) {
      tl.to(
        lv0[i],
        {
          morphSVG: lv2[i] as SVGPathElement
        },
        'roundCorners'
      );
    }
    tl.addLabel('addBars');
    for (let i = 0; i < lh0.length; i++) {
      tl.set(
        lh0[i],
        {
          opacity: 1
        },
        'addBars'
      );
      tl.to(
        lh0[i],
        {
          morphSVG: lh1[i] as SVGPathElement,
          delay: 0.1 * i
        },
        'addBars'
      );
    }
    tl.addLabel('slant');
    for (let i = 0; i < lv0.length; i++) {
      tl.to(
        lv0[i],
        {
          morphSVG: lv3[i] as SVGPathElement
        },
        'slant'
      );
    }
  }

  function* generateGradientColors(
    from: string,
    to: string,
    steps = 5
  ): Iterable<{ color: string; offset: string }> {
    for (let i = 0; i <= steps; i++) {
      const w = i / steps;
      // @ts-ignore
      const color: string = chroma.mix(from, to, w, 'lch').hex();
      yield {
        color,
        offset: `${(100 * w).toFixed(2)}%`
      };
    }
  }

  function attach() {
    const styles = getComputedStyle(document.documentElement);
    const from = styles.getPropertyValue('--color-cyan-400');
    const to = styles.getPropertyValue('--color-orange-400');
    gradient_colors = [...generateGradientColors(from, to)];

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', onComplete);
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        showSkip = !!(getCookie('showSkip') ?? false);

        if (showSkip) {
          gsap.to('#skip-button', {
            opacity: 1,
            delay: 0.5
          });
        }

        animate();
      });
    });
    return () => ctx.revert();
  }
</script>

{#if !global.seenLoadingScreen && !complete}
  <div
    class="fixed z-100 flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
    out:fade={{ duration: fade_duration }}
    aria-label="Loading splash screen"
    {@attach attach}
  >
    <svg viewBox="0 0 {viewBox.w} {viewBox.h}" class="max-w-4xl drop-shadow-2xl drop-shadow-black">
      <defs>
        <mask id="mask" class="fill-white">
          <MihranLogoPaths
            vtarget="lv0"
            {x}
            y={y + h}
            vbar_height={0}
            radius0={0}
            radius1={0}
            slant={0}
            hbar_height={0}
            hbar_width={0}
          />
          <MihranLogoPaths
            vtarget="lv1 fill-none"
            htarget="lh0 opacity-0"
            {x}
            {y}
            vbar_height={h}
            radius0={0}
            radius1={0}
            slant={0}
            hbar_width={0}
          />
          <MihranLogoPaths {x} {y} vtarget="lv2 fill-none" htarget="lh1 fill-none" slant={0} />
          <MihranLogoPaths {x} {y} vtarget="lv3 fill-none" htarget="fill-none" />
        </mask>
      </defs>
      <linearGradient id="gradient" width="100%" height="100%">
        {#each gradient_colors as { color, offset }}
          <stop stop-color={color} {offset} />
        {/each}
      </linearGradient>
      <rect class="mask-[url(#mask)]" width="100%" height="100%" fill="url('#gradient')" />
      <rect class="mask-[url(#mask)] fill-white opacity-50" width="100%" height="100%" />
    </svg>
    <button
      id="skip-button"
      onclick={handleSkip}
      class="headline cursor-pointer rounded px-5 py-2 text-xl font-bold text-zinc-600 opacity-0 outline-2"
      >Skip<i class="ri-skip-right-fill"></i></button
    >
  </div>
{:else}
  <div
    class:opacity-0={hidden}
    class="noscript:opacity-100"
    in:fade={{
      duration: fade_duration,
      delay: fade_duration
    }}
  >
    {@render children?.()}
  </div>
{/if}
