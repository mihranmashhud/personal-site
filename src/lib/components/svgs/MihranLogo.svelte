<script lang="ts">
  import type { SVGAttributes } from 'svelte/elements';
  import MihranLogoPaths from './MihranLogoPaths.svelte';
  import { spacing, x, y, vbar_height, path_count, vbar_width } from './logo_consts';


  let { ...rest }: SVGAttributes<any> = $props();
</script>

<svg
  id="logo-svg"
  viewBox="0 0 {x + spacing * path_count + vbar_width} {y * 2 + vbar_height}"
  {...rest}
  class={['logo-svg overflow-visible', rest?.class]}
>
  <MihranLogoPaths vtarget="v" htarget="h" />
</svg>
