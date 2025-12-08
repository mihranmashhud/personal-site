<script lang="ts">
  import { crossfade, type CrossfadeTransitionFunction } from '$lib/animate/transitions.svelte';
  import TechStack from '$lib/components/cards/elements/TechStack.svelte';
  import type { Snippet } from 'svelte';

  let {
    id,
    company,
    title,
    stack,
    logo,
    children
  }: {
    id: string;
    company: string;
    title: string;
    stack: string[];
    logo: Snippet<[string, CrossfadeTransitionFunction, CrossfadeTransitionFunction]>;
    children?: Snippet;
  } = $props();

  const [send, receive] = crossfade;
</script>

<section {id} class="space-y-4">
  <div class="flex items-start justify-between">
    <div class="space-y-2">
      <hgroup class="space-y-1 font-bold">
        <h2 class="headline-gradient w-fit text-2xl">{company}</h2>
        <p
          class="headline text-xl"
        >
          {title}
        </p>
      </hgroup>
      <TechStack {stack} class="gap-2" />
    </div>
    {@render logo(id, send, receive)}
  </div>
  {@render children?.()}
</section>
