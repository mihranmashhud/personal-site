<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import MihranLogoPaths from "./MihranLogoPaths.svelte";
  import { onMount } from "svelte";

  let elem: SVGSVGElement | undefined = $state()

  let {
    ...rest
  }: HTMLAttributes<SVGSVGElement> = $props()

  onMount(() => {
    if (elem) {
      const bbox = elem.getBBox();
      elem.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  });
</script>

<svg id="logo-svg" class="logo-svg fill-stone-900" {...rest} bind:this={elem}>
  <MihranLogoPaths vtarget="v" htarget="h"/>
</svg>
