<script lang="ts">
  import TechStack from '$lib/components/cards/elements/TechStack.svelte';
  import dayjs from 'dayjs';
  import type { Snippet } from 'svelte';

  let {
    id,
    company,
    title,
    stack,
    start,
    end,
    logo,
    children
  }: {
    id: string;
    company: string;
    title: string;
    stack: string[];
    start?: string;
    end?: string;
    logo: Snippet;
    children?: Snippet;
  } = $props();

  const format_str = 'MMM. YYYY';
  const start_date = start ? dayjs(start).format(format_str) : 'Present';
  const end_date = end ? dayjs(end).format(format_str) : 'Present';
</script>

<section {id} class="mb-20 md:mb-24 space-y-4">
  <div class="mb-8 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
    <div class="mx-auto md:hidden">{@render logo()}</div>
    <div class="space-y-4">
      <hgroup class="space-y-3 font-bold">
        <h2 class="headline-gradient w-fit text-2xl">{company}</h2>
        <p class="headline text-xl">
          {title}
        </p>
        <p class="headline mb-4 text-xl font-light">
          <time datetime={dayjs(start).format('YYYY-MM-DD')}>{start_date}</time>
          <span aria-label="to">→</span>
          <time datetime={dayjs(end).format('YYYY-MM-DD')}>{end_date}</time>
        </p>
        <TechStack {stack} class="gap-2" />
      </hgroup>
    </div>
    <div class="hidden md:block">
      {@render logo()}
    </div>
  </div>
  {@render children?.()}
</section>
