<script>
  import { page } from '$app/state';
  import { fade } from 'svelte/transition';

  let { children } = $props();
</script>

{#key page.url.pathname}
  <div in:fade={{ duration: 250, delay: 260 }} out:fade={{ duration: 250 }}>
    {@render children()}
  </div>
{/key}
