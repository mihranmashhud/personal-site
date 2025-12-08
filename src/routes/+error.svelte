<script lang="ts">
  import { page } from '$app/state';
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <div class="flex flex-col gap-2">
    <h1 class="headline-gradient text-4xl font-bold">{page.status}</h1>
    {#if page.status === 404}
      <p class="headline">Nothing to see here.</p>
    {/if}
    <button
      class="w-fit cursor-pointer rounded-md bg-zinc-100 px-4 py-2 font-mono outline outline-zinc-300 hover:outline-zinc-400 dark:bg-zinc-900 dark:outline-zinc-700 hover:dark:outline-zinc-600"
      onclick={() => history.back()}>Go Back</button
    >
  </div>
</div>
