<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type withLink = {
    href: string;
    linkLabel: string;
    children: Snippet;
  };
  type withoutLink = {
    children: Snippet;
  };
  type CardProps = HTMLAttributes<HTMLElement> & (withLink | withoutLink);
  let { children, ...rest }: CardProps = $props();
</script>

<article
  {...rest}
  class={[
    'transition-outline relative p-4 shadow-lg shadow-zinc-300 dark:shadow-zinc-800 outline-1 outline-stone-200 dark:outline-stone-800 transition-shadow hover:shadow-xl hover:outline-stone-300 hover:dark:outline-stone-700',
    rest?.class
  ]}
>
  {#if 'href' in rest}
    <a class="card-action" href={rest.href} data-sveltekit-noscroll>
      <span class="sr-only">{rest.linkLabel}</span>
    </a>
  {/if}
  {@render children?.()}
</article>

<style>
  .card-action {
    &:focus {
      outline: none;
      &::after {
        outline-color: currentColor;
      }
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      cursor: pointer;
      outline-width: 2px;
      outline-style: solid;
      outline-color: transparent;
      transition: outline-color 200ms;
    }
  }
</style>
