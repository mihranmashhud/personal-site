<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { Flip } from 'gsap/Flip';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

  import 'remixicon/fonts/remixicon.css';

  let { children } = $props();

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin, MorphSVGPlugin);
  });
</script>

<svelte:head>
  <title>Mihran Mashhud</title>
</svelte:head>

<main class="text-white">
  {@render children()}
</main>
