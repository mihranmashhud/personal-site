<svelte:options css="injected" />

<script>
  import MihranLogo from '../svgs/MihranLogo.svelte';
</script>

<div class="relative flex h-full w-full items-center justify-center bg-zinc-900 text-white">
  <div class="flex flex-col justify-center align-center headline-gradient">
    <h1 class="text-5xl">Mihran Mashhud</h1>
    <p>Full Stack Developer</p>
  </div>
  <div class="flex absolute right-0 bottom-0 p-4">
    <MihranLogo class="w-20 h-5"/>
  </div>
</div>

<style>
  :global(path) {
    fill: white;
  }
</style>
