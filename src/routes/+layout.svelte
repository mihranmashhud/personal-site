<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { Flip } from 'gsap/Flip';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

  import 'remixicon/fonts/remixicon.css';
  import ScrollTrigger from '$lib/components/wrappers/ScrollTrigger.svelte';
  import PageTransition from '$lib/components/wrappers/PageTransition.svelte';
  import { onMount } from 'svelte';
  import Nav from '$lib/components/Nav.svelte';
  import { global } from '$lib/state/globals.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();

  onMount(() => {
    global.seenLoadingScreen = false;
    gsap.registerPlugin(Flip, TextPlugin, ScrambleTextPlugin);
  });

</script>

<PageTransition />

<header>
  <a
    href="#main-content"
    class="absolute left-0 m-3 -translate-y-16 p-3 transition focus:translate-y-0 dark:bg-black dark:text-white"
    >Skip to Content</a
  >
  <Nav />
</header>

<ScrollTrigger>
  <main class="scroll-mt-10 overflow-x-hidden dark:text-white" id="main-content">
    {@render children()}
  </main>
  <Footer />
</ScrollTrigger>
