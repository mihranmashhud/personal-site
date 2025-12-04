<script>
  let { children, ...rest } = $props();
</script>

<div
  {...rest}
  class={[
    'p-4 shadow-lg shadow-zinc-800 outline-1 outline-stone-800',
    rest?.class
  ]}
>
  {@render children?.()}
</div>
