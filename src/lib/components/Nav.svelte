<script lang="ts">
  import { fade } from 'svelte/transition';
  import MihranLogo from './svgs/MihranLogo.svelte';

  let scrollY = $state(0);

  let showNav = $derived(20 <= scrollY);

  const links = [
    {
      href: '/work',
      text: 'Work'
    },
    {
      href: '/#projects',
      text: 'Projects'
    },
    {
      href: '/#contact',
      text: 'Contact'
    },
    {
      href: '/blog',
      text: 'Blog'
    }
  ];
</script>

<svelte:window bind:scrollY />

<nav>
  <div
    class="fixed top-0 right-0 left-0 z-100 flex justify-between bg-linear-to-b from-zinc-950 p-4 transition-opacity duration-500"
    class:opacity-0={!showNav}
  >
    <div class="">
      <MihranLogo class="h-5 fill-stone-200" />
    </div>
    <ul class="hidden gap-5 font-bold text-white md:flex">
      {#each links as { href, text }}
        <li>
          <a {href} class="headline" data-sveltekit-noscroll>
            {text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
