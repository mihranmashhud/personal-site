<script lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

  let height = $state(0);

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  $effect(() => {
    height;
    ScrollTrigger.refresh();
  });

  let { children } = $props();
</script>

<div id="scroll-content" bind:clientHeight={height}>
  {@render children()}
</div>
