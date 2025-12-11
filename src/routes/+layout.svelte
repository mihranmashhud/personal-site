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
  import { global } from '$lib/state/globals.svelte';

  let { children } = $props();

  onMount(() => {
    global.seenLoadingScreen = false;
    gsap.registerPlugin(Flip, TextPlugin, ScrambleTextPlugin);
  });
</script>


<header>
  <a
    href="#main-content"
    class="absolute left-0 m-3 -translate-y-16 dark:bg-black p-3 dark:text-white transition focus:translate-y-0"
    >Skip to Content</a
  >
  <Nav />
</header>

<ScrollTrigger>
  <PageTransition>
    <main class="overflow-x-hidden dark:text-white" id="main-content">
      {@render children()}
    </main>
  </PageTransition>
</ScrollTrigger>
