<script>
  import Card from '../containers/Card.svelte';

  let { href, logo, title, start, end, stack, children } = $props();

  let openDialog = $state(false)
</script>

<Card onclick={() => openDialog = true}>
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
  <p class="mt-6 text-cyan-400">Read more</p>
</Card>

<div 
  class:hidden={!openDialog}
  class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
>
  <Card>
    test
  </Card>
</div>
