<script lang="ts">
  import { onMount } from 'svelte';

  let { ...rest } = $props();

  const choices = ['system', 'light', 'dark'] as const;

  type Choices = (typeof choices)[number];

  let theme: Choices = $state('system');

  onMount(() => {
    const saved_theme = localStorage.getItem('theme');
    if (saved_theme && choices.includes(saved_theme as Choices)) {
      theme = saved_theme as Choices;
    }
    setThemeClass()
  });

  function setThemeClass() {
    let use_dark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)')?.matches);
    document.documentElement.classList.toggle('dark', use_dark);
  }

  $effect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
    }
    setThemeClass()
  });
</script>

{#each choices as choice, i}
  {@const next_choice = choices[(i + 1) % choices.length]}
  <button
    onclick={() => (theme = next_choice)}
    title="{choice} theme chosen"
    aria-label="Switch to {next_choice} theme"
    {...rest}
    class={[
      'aspect-square w-6 rounded text-sm transition-colors hover:bg-zinc-50/25 noscript:hidden',
      theme !== choice && 'hidden',
      rest?.class
    ]}
  >
    {#if choice === 'system'}
      <i class="ri-smartphone-line md:hidden"></i>
      <i class="ri-computer-line hidden md:inline"></i>
    {:else if choice === 'light'}
      <i class="ri-sun-line"></i>
    {:else}
      <i class="ri-moon-line"></i>
    {/if}
  </button>
{/each}
