<script lang="ts">
  import type { Snippet } from 'svelte';
  import Card from '../containers/Card.svelte';
  import { scrollreveal } from '$lib/animate/attachments.svelte';

  let {
    href,
    title,
    link,
    date,
    stack,
    children = undefined
  }: {
    href?: string;
    title: string;
    link?: string;
    date?: string;
    stack: string[];
    children?: Snippet;
  } = $props();
</script>

{#snippet card()}
  <Card class="bg-zinc-900">
    <h2 class="mb-2 text-2xl font-semibold">{title}</h2>
    <div class="mb-4">
      <a href="https://{link}" class="headline text-xl text-cyan-400">{link}</a>
    </div>
    <div class="mb-6 flex gap-2">
      {#each stack as icon}
        <img src="/tech-stack/{icon}.svg" class="h-6" alt="{icon} icon" />
      {/each}
    </div>
    {@render children?.()}
  </Card>
{/snippet}

<div class="max-w-2xl" {@attach scrollreveal()}>
  {#if href}
    <a {href}>
      {@render card()}
    </a>
  {:else}
    {@render card()}
  {/if}
</div>
