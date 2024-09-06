<script lang="ts">
  import '../app.css';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Flip } from 'gsap/dist/Flip';
  import { TextPlugin } from 'gsap/dist/TextPlugin';

  let { children } = $props();

  $effect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip, TextPlugin);
  });
</script>

<div class="text-white">
{@render children()}
</div>
