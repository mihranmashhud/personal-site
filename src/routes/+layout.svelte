<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Flip } from 'gsap/dist/Flip';
  import { TextPlugin } from 'gsap/dist/TextPlugin';
  import "remixicon/fonts/remixicon.css";

  let { children } = $props();

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin);
  });
</script>

<svelte:head>
  <title>Mihran Mashhud</title>
</svelte:head>

<div class="text-white">
{@render children()}
</div>
