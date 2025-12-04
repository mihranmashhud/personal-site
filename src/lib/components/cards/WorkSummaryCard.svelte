<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Card from '../containers/Card.svelte';
  import type { Snippet } from 'svelte';
  import { scrollreveal } from '$lib/animate/attachments.svelte'

  let {
    href,
    logo,
    title,
    start,
    end,
    stack,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & {
    href: string;
    logo: Snippet;
    title: string;
    start: string;
    end: string;
    stack: string[];
    children?: Snippet;
  } = $props();
</script>

<div {...rest} class={["max-w-2xl", rest?.class]} {@attach scrollreveal()}>
  <a {href}>
    <Card class="bg-stone-950">
      <div class="logo-container">
        {@render logo()}
      </div>
      <hr class="my-4 h-0.25 border-t-0 bg-zinc-800" />
      <h2 class="bg-linear-to-r from-cyan-400 to-orange-400 bg-clip-text text-2xl font-bold text-white/80">{title}</h2>
      <h3 class="mb-4 text-xl opacity-80">{start} → {end}</h3>
      <div class="mb-6 flex gap-2">
        {#each stack as icon}
          <img src="/tech-stack/{icon}.svg" class="h-6" alt="{icon} icon" />
        {/each}
      </div>
      {@render children?.()}
    </Card></a
  >
</div>
