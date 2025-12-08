<script lang="ts">
  import Card from '../containers/Card.svelte';
  import type { Snippet } from 'svelte';
  import { scrollreveal } from '$lib/animate/attachments.svelte';
  import dayjs from 'dayjs';
  import TechStack from './elements/TechStack.svelte';
  import { crossfade, type CrossfadeTransitionFunction } from '$lib/animate/transitions.svelte';

  let {
    id,
    href,
    company,
    logo,
    title,
    start,
    end,
    stack,
    children
  }: {
    id: string;
    href: string;
    company: string;
    logo: Snippet<[string, CrossfadeTransitionFunction, CrossfadeTransitionFunction]>;
    title: string;
    start?: string;
    end?: string;
    stack: string[];
    children?: Snippet;
  } = $props();

  const format_str = 'MMM. YYYY';
  const start_date = start ? dayjs(start).format(format_str) : 'Present';
  const end_date = end ? dayjs(end).format(format_str) : 'Present';

  const [send, receive] = crossfade;
</script>

<Card
  class="max-w-2xl bg-stone-100 dark:bg-stone-950"
  {id}
  {href}
  linkLabel="{company} work experience"
  {@attach scrollreveal()}
>
  {@render logo(id, send, receive)}
  <hr class="my-4 h-0.25 border-t-0 bg-zinc-200 dark:bg-zinc-800" />
  <hgroup>
    <h2 class="headline-gradient text-2xl font-bold">
      {title} <span class="sr-only">@ {company}</span>
    </h2>
    <p class="headline mb-4 text-xl opacity-80">
      <time datetime={dayjs(start).format('YYYY-MM-DD')}>{start_date}</time>
      <span aria-label="to">→</span>
      <time datetime={dayjs(end).format('YYYY-MM-DD')}>{end_date}</time>
    </p>
  </hgroup>
  <TechStack {stack} class="mb-6 gap-2" />
  {@render children?.()}
</Card>
