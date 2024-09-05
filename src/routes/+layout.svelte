<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Flip } from 'gsap/dist/Flip';

  let { children } = $props();

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);
  });
</script>

{@render children()}
