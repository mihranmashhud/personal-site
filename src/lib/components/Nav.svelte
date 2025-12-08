<script lang="ts">
  import { fade } from 'svelte/transition';
  import MihranLogo from './svgs/MihranLogo.svelte';
  import { page } from '$app/state';
  import ThemeToggle from './inputs/ThemeToggle.svelte';

  let scrollY = $state(0);

  let showNav = $derived(!(page.url.pathname === '/') || scrollY >= 20);

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

<nav
  class={[
    'fixed top-0 right-0 left-0 z-100 flex justify-between bg-linear-to-b from-white p-4 transition-opacity duration-500 dark:from-zinc-950 dark:text-white noscript:opacity-100',
    showNav || 'opacity-0'
  ]}
>
  <a class="" href="/">
    <span class="sr-only">Home</span>
    <MihranLogo class="h-5 fill-stone-950 dark:fill-stone-200" />
  </a>
  <div class="hidden gap-5 font-bold md:flex">
    {#each links as { href, text }}
      <a {href} class="headline transition-all hover:font-extrabold" data-sveltekit-noscroll>
        {text}
      </a>
    {/each}
    <ThemeToggle />
  </div>
  <input
    class="appearance-none md:hidden"
    type="checkbox"
    id="mobile-nav-toggle"
    name="mobile-nav-toggle"
  />
  <label
    class="relative z-101 flex cursor-pointer items-baseline justify-end p-2 select-none md:hidden"
    for="mobile-nav-toggle"
  >
    <span
      class="navicon bg-zinc-950 before:bg-zinc-950 after:bg-zinc-950 dark:bg-white dark:before:bg-zinc-100 dark:after:bg-zinc-100"
      aria-label="Hamburger menu 'icon'"
    ></span>
  </label>
  <div
    class="fixed inset-0 overflow-hidden bg-zinc-100 motion-safe:transition-transform md:hidden dark:bg-zinc-950"
    id="mobile-nav"
  >
    <div class="absolute right-0 bottom-0 left-0 mb-10 flex flex-col gap-5 p-5 text-2xl font-bold">
      <ThemeToggle class="absolute right-0 bottom-0 mx-5 w-10 text-xl" />
      {#each links as { href, text }}
        <a {href} class="headline" data-sveltekit-noscroll>
          {text}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .navicon {
    display: block;
    position: relative;
    width: 18px;
    height: 2px;
    transition: background-color 0.2s ease-out;
    &::before {
      top: 6px;
    }
    &::after {
      top: -6px;
    }
    &::before,
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      transition: all 0.2s ease-out;
    }
  }

  #mobile-nav-toggle {
    ~ #mobile-nav {
      transform: translateY(200%);
    }
    &:checked ~ #mobile-nav {
      transform: translateY(0%);
    }
    &:checked {
      ~ label .navicon {
        background-color: transparent;
      }
      ~ label .navicon::before {
        top: 0;
        transform: rotate(-45deg);
      }
      ~ label .navicon::after {
        top: 0;
        transform: rotate(45deg);
      }
    }
  }
</style>
