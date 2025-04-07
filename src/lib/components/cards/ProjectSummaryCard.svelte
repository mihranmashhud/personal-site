<script lang="ts">
  import { pushState } from '$app/navigation';
  import type { Snippet } from 'svelte';
  import Card from '../containers/Card.svelte';
  import { page } from '$app/state';
  import { onClickOutside } from 'runed';
  import { fade } from 'svelte/transition';

  let {
    key,
    title,
    link,
    date,
    stack,
    story = undefined,
    children = undefined,
    dialogOverride = false
  }: {
    key: string;
    title: string;
    link?: string;
    date?: string;
    stack: string[];
    story?: Snippet;
    children?: Snippet;
    dialogOverride?: boolean;
  } = $props();

  let dialog: Element | undefined = $state();
  let showDialog = $derived(page.state[key as keyof App.PageState]);

  function close() {
    history.back();
  }

  onClickOutside(() => dialog, close);
</script>

<div class="max-w-2xl">
  <Card
    onclick={() => {
      if (story) {
        pushState('', {
          [key]: true
        });
      }
    }}
  >
    <h2 class="text-2xl mb-2 font-semibold">{title}</h2>
    <div class="mb-4"><a href="https://{link}" class="text-xl headline text-cyan-400">{link}</a></div>
    <div class="flex gap-2 mb-6">
      {#each stack as icon}
        <img src="/tech-stack/{icon}.svg" class="h-6" alt="{icon} icon" />
      {/each}
    </div>
    {@render children?.()}
    {#if story}
      <p class="mt-6 text-cyan-400">Read more</p>
    {/if}
  </Card>
</div>

{#if story && (showDialog || dialogOverride)}
  <div
    class="overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full max-h-full bg-gradient-to-b from-cyan-800/50 to-violet-800/50"
    transition:fade
  >
    <div class="relative p-4 w-full max-w-2xl max-h-full" bind:this={dialog}>
      <Card>
        <div class="overflow-y-auto">
          <div class="font-bold mt-4 mb-1 headline">Name:</div>
          <h2 class="text-2xl">{title}</h2>
          {#if link}
            <div class="font-bold mt-4 mb-1 headline">Link:</div>
            <div class="mb-4"><a href={link} class="text-xl headline text-cyan-400">{link}</a></div>
          {/if}
          {#if date}
            <div class="font-bold mt-4 mb-1 headline">Date:</div>
            <h3 class="text-xl mb-4">{date}</h3>
          {/if}
          <div class="font-bold mt-4 mb-1 headline">Stack:</div>
          <div class="flex gap-2 mb-6">
            {#each stack as icon}
              <img src="/tech-stack/{icon}.svg" class="{stack}-icon h-8" alt="{icon} icon" />
            {/each}
          </div>
          <div class="font-bold mt-4 mb-1 headline">Story:</div>
          {@render story?.()}
        </div>
      </Card>
    </div>
  </div>
{/if}
