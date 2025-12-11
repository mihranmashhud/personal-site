<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    delay = '2s',
    duration = '4s',
    ...rest
  }: HTMLAttributes<HTMLDivElement> & {
    delay?: string;
    duration?: string;
  } = $props();
</script>

<div
  class={[rest?.class]}
  style="
--start-delay: {delay}; 
--duration: {duration};"
>
  <svg viewBox="0 0 50 50">
    <polyline points="0,25 25,50 50,25" class="stroke-black dark:stroke-white" />
    <polyline points="0,25 25,50 50,25" class="stroke-black dark:stroke-white"/>
    <polyline points="0,25 25,50 50,25" class="stroke-black dark:stroke-white"/>
  </svg>
</div>

<style>
  svg {
    overflow: visible;
  }
  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes translate-y {
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(50%);
    }
  }
  polyline:nth-child(1) {
    --delay: calc(var(--start-delay) + 1 * var(--stagger-delay));
  }
  polyline:nth-child(2) {
    --delay: calc(var(--start-delay) + 2 * var(--stagger-delay));
  }
  polyline:nth-child(3) {
    --delay: calc(var(--start-delay) + 3 * var(--stagger-delay));
  }
  polyline {
    fill: none;
    stroke-width: 4;
  }
  @media (prefers-reduced-motion: no-preference) {
    polyline {
      --stagger-delay: calc(var(--duration) / 3);
      opacity: 0;
      animation:
        var(--duration) linear var(--delay) infinite translate-y,
        var(--duration) ease-in-out var(--delay) infinite fade-in-out;
    }
  }
</style>
