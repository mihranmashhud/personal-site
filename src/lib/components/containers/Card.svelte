<script>
let {
  children,
  ...rest
} = $props()
</script>

<div class="p-4 rounded-xl transition-all duration-300 shadow-xl shadow-zinc-800 ring-1 ring-slate-700 bg-zinc-950" {...rest}>
  {@render children?.()}
</div>
