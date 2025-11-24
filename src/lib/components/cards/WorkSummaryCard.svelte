<script lang="ts">
  import { fade } from 'svelte/transition';
  import Card from '../containers/Card.svelte';
  import { onClickOutside } from 'runed';
  import { pushState } from '$app/navigation';
  import { page } from '$app/state';
  import type { Snippet } from 'svelte';

  let {
    key,
    logo,
    title,
    start,
    end,
    stack,
    description,
    children,
    dialogOverride = false
  }: {
    key: string,
    logo: Snippet,
    title: string,
    start: string,
    end: string,
    stack: string[],
    description?: Snippet,
    children?: Snippet,
    dialogOverride?: boolean,
  } = $props();

  let dialog: Element | undefined = $state();
  let showDialog = $derived(page.state[key as keyof App.PageState])

  function close() {
    history.back();
  }

  onClickOutside(() => dialog, close);
</script>

<div class="max-w-2xl">
  <Card
    onclick={() => {
      if (description) {
        pushState('', {
          [key]: true
        });
      }
    }}
  >
    <div class="logo-container">
      {@render logo()}
    </div>
    <hr class="my-4 h-0.25 border-t-0 bg-zinc-800" />
    <h2 class="text-2xl">{title}</h2>
    <h3 class="text-xl mb-4">{start} → {end}</h3>
    <div class="flex gap-2 mb-6">
      {#each stack as icon}
        <img src="/tech-stack/{icon}.svg" class="h-6" alt="{icon} icon" />
      {/each}
    </div>
    {@render children?.()}
    {#if description}
      <p class="mt-6 text-cyan-400">Read more</p>
    {/if}
  </Card>
</div>

{#if description && (showDialog || dialogOverride)}
  <div
    class="overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full max-h-full bg-gradient-to-b from-cyan-800/50 to-violet-800/50 p-4"
    transition:fade
  >
    <div class="relative w-full max-w-2xl max-h-full" bind:this={dialog}>
      <Card>
        <div class="fixed top-0 right-0">
<i class="ri-close-line"></i>
        </div>
        <div class="overflow-y-auto">
          <div class="font-bold mb-1 headline">Company:</div>
          <div class="logo-container">
            {@render logo()}
          </div>
          <div class="font-bold mt-4 mb-1 headline">Title:</div>
          <h2 class="text-2xl">{title}</h2>
          <div class="font-bold mt-4 mb-1 headline">Timeline:</div>
          <h3 class="text-xl mb-4">{start} → {end}</h3>
          <div class="font-bold mt-4 mb-1 headline">Stack:</div>
          <div class="flex gap-2 mb-6">
            {#each stack as icon}
              <img src="/tech-stack/{icon}.svg" class="{stack}-icon h-8" alt="{icon} icon" />
            {/each}
          </div>
          <div class="font-bold mt-4 mb-1 headline">Story:</div>
          {@render description?.()}
        </div>
      </Card>
    </div>
  </div>
{/if}
