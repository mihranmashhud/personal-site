<script lang="ts">
  import type { Snippet } from 'svelte';
  import Card from '../containers/Card.svelte';
  import { scrollreveal } from '$lib/animate/attachments.svelte';
  import TechStack from './elements/TechStack.svelte';

  let {
    href,
    title,
    link,
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

<Card class="max-w-2xl bg-zinc-100 dark:bg-zinc-900" {href} linkLabel="{title} project" {@attach scrollreveal()}>
  <h2 class="mb-2 text-2xl font-semibold">{title}</h2>
  <p class="mb-4">
    <a href="https://{link}" class="headline relative z-2 text-xl text-cyan-500 dark:text-cyan-400">{link}</a>
  </p>
  <TechStack {stack} class="gap-2" />
  {@render children?.()}
</Card>
