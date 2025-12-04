<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { Flip } from 'gsap/Flip';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

  import 'remixicon/fonts/remixicon.css';
  import ScrollTrigger from '$lib/components/wrappers/ScrollTrigger.svelte';
  import { onMount } from 'svelte';
  import PageTransition from '$lib/components/wrappers/PageTransition.svelte';
  import Nav from '$lib/components/Nav.svelte';

  let { children } = $props();

  onMount(() => {
    gsap.registerPlugin(Flip, TextPlugin, ScrambleTextPlugin);
  });
</script>

<Nav />

<ScrollTrigger>
  <PageTransition>
    <main class="overflow-x-hidden text-white">
      {@render children()}
    </main>
  </PageTransition>
</ScrollTrigger>
