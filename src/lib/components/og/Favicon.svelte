<script>
  import { slant, spacing, vbar_height, x } from '$lib/components/svgs/logo_consts';
  import MihranLogoPaths from '$lib/components/svgs/MihranLogoPaths.svelte';

  let {
    fill = "white",
  } = $props()
</script>

<svg width="32" viewBox="0 0 {spacing * 3 + slant * vbar_height} {vbar_height}" {fill}>
  <MihranLogoPaths only_first_letter x={slant * vbar_height} />
</svg>
