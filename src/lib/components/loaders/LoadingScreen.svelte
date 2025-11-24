<script lang="ts">
  import gsap from 'gsap';
  import { onMount, type Snippet } from 'svelte';
  import { fade } from 'svelte/transition';

  const sp = 25;
  const h0 = 70;
  const h1 = 10;
  const r0 = 15;
  const r1 = 20;
  const w = 20;
  const s = 0.15;
  const x = 20;
  const y = 20;
  const viewBox = {
    w: y * 2 + sp * 11 + w,
    h: x * 2 + h0
  };


  let {
    complete = $bindable(false),
    showSkip = $bindable(false),
    children,
  }: {
    complete?: boolean
    showSkip?: boolean
    children?: Snippet
  } = $props()

  const fade_duration = 300;

  onMount(() => {
    const lv0 = document.querySelectorAll('.lv0');
    const lv1 = document.querySelectorAll('.lv1');
    const lv2 = document.querySelectorAll('.lv2');
    const lv3 = document.querySelectorAll('.lv3');
    const lh0 = document.querySelectorAll('.lh0');
    const lh1 = document.querySelectorAll('.lh1');
    const tl = gsap.timeline({
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      defaults: {
        duration: 0.4,
      },
      onComplete() {
        complete = true;
      }
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
  });
</script>

{#if !complete}
<div class="h-screen w-screen bg-zinc-900 flex flex-col justify-center items-center" out:fade={{ duration: fade_duration }}>
  <svg
    version="1.1"
    id="loading-svg"
    viewBox="0 0 {viewBox.w} {viewBox.h}"
    class="max-w-5xl drop-shadow-2xl"
  >
    <mask id="loading-svg-mask" class="fill-white mask-type-alpha">
      <!-- M -->
      <path class="lv0" d="M {x + sp * 0},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={0} />
      <path class="lv1" d="M {x + sp * 0},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 0},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 0 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path class="lv0" d="M {x + sp * 1},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={1} />
      <path class="lv1" d="M {x + sp * 1},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 1},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 1 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path
        class="lv0"
        d="M {x + sp * 2},{y + h0} l 0,0 l {w},0 l 0,0 s 0,0,0,0 z"
        data-index={2}
      />
      <path class="lv1" d="M {x + sp * 2},{y} l 0,{h0} l {w},0 l 0,{-h0} s 0,0,0,0 z" />
      <path
        class="lv2"
        d="M {x + sp * 2},{y} l 0,{h0} l {w},0 l 0,{-h0 + r0} s 0,{-r0},{-r0},{-r0} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 2 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * (h0 - r0)},{-h0 +
          r0} s {s * r0},{-r0},{-r0 + s * r0},{-r0} z"
      />

      <!-- I -->
      <path class="lv0" d="M {x + sp * 3},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={3} />
      <path class="lv1" d="M {x + sp * 3},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 3},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 3 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <!-- H -->
      <path class="lv0" d="M {x + sp * 4},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={4} />
      <path class="lv1" d="M {x + sp * 4},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 4},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 4 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path class="lv0" d="M {x + sp * 5},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={5} />
      <path class="lv1" d="M {x + sp * 5},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 5},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 5 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path
        class="lh0"
        d="M {x + sp * 4 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l 0,0 l 0,{-h1} l 0,0 z"
      />
      <path
        class="lh1"
        d="M {x + sp * 4 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l {sp},0 l 0,{-h1} l {-sp},0 z"
      />

      <!-- R -->
      <path class="lv0" d="M {x + sp * 6},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={6} />
      <path class="lv1" d="M {x + sp * 6},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 6},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 6 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path
        class="lv0"
        d="M {x + sp * 7},{y + h0} l 0,0 l {w},0 l 0,0 s 0,0,0,0 z"
        data-index={7}
      />
      <path
        class="lv1"
        d="M {x + sp * 7},{y + (h0 - h1) / 2} l 0,{(h0 + h1) / 2} l {w},0 l 0,{-(h0 + h1) /
          2} s 0,0,0,0 z"
      />
      <path
        class="lv2"
        d="M {x + sp * 7},{y + (h0 - h1) / 2} l 0,{(h0 + h1) / 2} l {w},0 l 0,{-(h0 + h1) / 2 +
          r1} s 0,{-r1},{-r1},{-r1} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 7 + (s * h1) / 2},{y + (h0 - h1) / 2} l {(-s * (h0 + h1)) / 2},{(h0 + h1) /
          2} l {w},0 l {-s * (-(h0 + h1) / 2 + r1)},{-(h0 + h1) / 2 + r1} s {s * r1},{-r1},{-r1 +
          s * r1},{-r1} z"
      />

      <path
        class="lv0"
        d="M {x + sp * 7},{y + h0} l 0,0 l {w},0 s 0,0,0,0 l 0,0 s 0,0,0,0 z"
        data-index={7}
      />
      <path
        class="lv1"
        d="M {x + sp * 7},{y} l 0,{(h0 + h1) / 2} l {w},0 s 0,0,0,0 l 0,{-(h0 + h1) /
          2} s 0,0,0,0 z"
      />
      <path
        class="lv2"
        d="M {x + sp * 7},{y} l 0,{(h0 + h1) / 2} l {w - r1},0 s {r1},0,{r1},{-r1} l 0,{-(h0 + h1) /
          2 +
          r0 +
          r1} s 0,{-r0},{-r0},{-r0} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 7 + (s * h0) / 2},{y} l {(-s * (h0 + h1)) / 2},{(h0 + h1) / 2} l {w -
          r1},0 s {r1},0,{r1 + s * r1},{-r1} l {s * ((h0 + h1) / 2 - r0 - r1)},{-(h0 + h1) / 2 +
          r0 +
          r1} s {s * r0},{-r0},{-r0 + s * r0},{-r0} z"
      />

      <path
        class="lh0"
        d="M {x + sp * 6 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l 0,0 l 0,{-h1} l 0,0 z"
      />
      <path
        class="lh1"
        d="M {x + sp * 6 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l {sp},0 l 0,{-h1} l {-sp},0 z"
      />

      <!-- A -->
      <path
        class="lv0"
        d="M {x + sp * 8},{y + h0} s 0,0,0,0 l 0,0 l {w},0 l 0,0 z"
        data-index={8}
      />
      <path class="lv1" d="M {x + sp * 8},{y} s 0,0,0,0 l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv2"
        d="M {x + sp * 8 + r0},{y} s {-r0},0,{-r0},{r0} l 0,{h0 - r0} l {w},0 l 0,{-h0} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 8 + r0 + (s * h0) / 2},{y} s {-r0},0,{-r0 - s * r0},{r0} l {-s *
          (h0 - r0)},{h0 - r0} l {w},0 l {s * h0},{-h0} z"
      />

      <path
        class="lv0"
        d="M {x + sp * 9},{y + h0} l 0,0 l {w},0 l 0,0 s 0,0,0,0 z"
        data-index={9}
      />
      <path class="lv1" d="M {x + sp * 9},{y} l 0,{h0} l {w},0 l 0,{-h0} s 0,0,0,0 z" />
      <path
        class="lv2"
        d="M {x + sp * 9},{y} l 0,{h0} l {w},0 l 0,{-h0 + r0} s 0,{-r0},{-r0},{-r0} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 9 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * (h0 - r0)},{-h0 +
          r0} s {s * r0},{-r0},{-r0 + s * r0},{-r0} z"
      />

      <path
        class="lh0"
        d="M {x + sp * 8 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l 0,0 l 0,{-h1} l 0,0 z"
      />
      <path
        class="lh1"
        d="M {x + sp * 8 + w / 2},{20 + (h0 - h1) / 2} l 0,{h1} l {sp},0 l 0,{-h1} l {-sp},0 z"
      />

      <!-- N -->
      <path class="lv0" d="M {x + sp * 10},{y + h0} l 0,0 l {w},0 l 0,0 z" data-index={10} />
      <path class="lv1" d="M {x + sp * 10},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path class="lv2" d="M {x + sp * 10},{y} l 0,{h0} l {w},0 l 0,{-h0} z" />
      <path
        class="lv3"
        d="M {x + sp * 10 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * h0},{-h0} z"
      />

      <path
        class="lv0"
        d="M {x + sp * 11},{y + h0} l 0,0 l {w},0 l 0,0 s 0,0,0,0 z"
        data-index={11}
      />
      <path class="lv1" d="M {x + sp * 11},{y} l 0,{h0} l {w},0 l 0,{-h0} s 0,0,0,0 z" />
      <path
        class="lv2"
        d="M {x + sp * 11},{y} l 0,{h0} l {w},0 l 0,{-h0 + r0} s 0,{-r0},{-r0},{-r0} z"
      />
      <path
        class="lv3"
        d="M {x + sp * 11 + (s * h0) / 2},{y} l {-s * h0},{h0} l {w},0 l {s * (h0 - r0)},{-h0 +
          r0} s {s * r0},{-r0},{-r0 + s * r0},{-r0} z"
      />
    </mask>
    <image href="backgrounds/gradient.svg" width="100%" height="100%" mask="url(#loading-svg-mask)" />
  </svg>
  <button class="headline font-bold cursor-pointer p-5 {showSkip ? '':'opacity-0'} transition-opacity text-xl">Skip<i class="ri-skip-right-fill"></i></button>
</div>
{:else}
  <div in:fade={{ duration: fade_duration, delay: fade_duration, }}>
    {@render children?.()}
  </div>
{/if}

<style>
  .lv1,
  .lv2,
  .lv3 {
    fill: none;
    stroke: none;
  }
  .lh0 {
    opacity: 0;
  }
  .lh1 {
    fill: none;
    stroke: none;
  }
</style>
