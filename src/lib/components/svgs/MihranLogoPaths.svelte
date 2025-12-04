<script>
  const {
    spacing = 25,
    vbar_height = 70,
    hbar_height = 10,
    radius0 = 15,
    radius1 = 20,
    vbar_width = 20,
    hbar_width = spacing,
    slant = 0.15,
    x = 20,
    y = 20,
    vtarget = '',
    htarget = ''
  } = $props();
</script>

<!-- M -->
<path
  class={vtarget}
  d="M {x + spacing * 0 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={0}
/>

<path
  class={vtarget}
  d="M {x + spacing * 1 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={1}
/>

<path
  class={vtarget}
  d="M {x + spacing * 2 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * (vbar_height - radius0)},{-vbar_height +
    radius0} s {slant * radius0},{-radius0},{-radius0 + slant * radius0},{-radius0} z"
  data-index={2}
/>

<!-- I -->
<path
  class={vtarget}
  d="M {x + spacing * 3 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={3}
/>

<!-- H -->
<path
  class={vtarget}
  d="M {x + spacing * 4 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={4}
/>

<path
  class={vtarget}
  d="M {x + spacing * 5 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={5}
/>

{#if htarget}
  <path
    class={htarget}
    d="M {x + spacing * 4 + vbar_width / 2},{y +
      (vbar_height - hbar_height) /
        2} l 0,{hbar_height} l {hbar_width},0 l 0,{-hbar_height} l {-hbar_width},0 z"
  />
{/if}

<!-- R -->
<path
  class={vtarget}
  d="M {x + spacing * 6 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={6}
/>

<path
  class={vtarget}
  d="M {x + spacing * 7 + (slant * hbar_height) / 2},{y +
    (vbar_height - hbar_height) / 2} l {(-slant * (vbar_height + hbar_height)) / 2},{(vbar_height +
    hbar_height) /
    2} l {vbar_width},0 l {-slant * (-(vbar_height + hbar_height) / 2 + radius1)},{-(
    vbar_height + hbar_height
  ) /
    2 +
    radius1} s {slant * radius1},{-radius1},{-radius1 + slant * radius1},{-radius1} z"
  data-index={7}
/>

<path
  class={vtarget}
  d="M {x + spacing * 7 + (slant * vbar_height) / 2},{y} l {(-slant * (vbar_height + hbar_height)) /
    2},{(vbar_height + hbar_height) / 2} l {vbar_width - radius1},0 s {radius1},0,{radius1 +
    slant * radius1},{-radius1} l {slant *
    ((vbar_height + hbar_height) / 2 - radius0 - radius1)},{-(vbar_height + hbar_height) / 2 +
    radius0 +
    radius1} s {slant * radius0},{-radius0},{-radius0 + slant * radius0},{-radius0} z"
  data-index={7}
/>

{#if htarget}
  <path
    class={htarget}
    d="M {x + spacing * 6 + vbar_width / 2},{y +
      (vbar_height - hbar_height) /
        2} l 0,{hbar_height} l {hbar_width},0 l 0,{-hbar_height} l {-hbar_width},0 z"
  />
{/if}

<!-- A -->
<path
  class={vtarget}
  d="M {x + spacing * 8 + radius0 + (slant * vbar_height) / 2},{y} s {-radius0},0,{-radius0 -
    slant * radius0},{radius0} l {-slant * (vbar_height - radius0)},{vbar_height -
    radius0} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={8}
/>

<path
  class={vtarget}
  d="M {x + spacing * 9 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * (vbar_height - radius0)},{-vbar_height +
    radius0} s {slant * radius0},{-radius0},{-radius0 + slant * radius0},{-radius0} z"
  data-index={9}
/>

{#if htarget}
  <path
    class={htarget}
    d="M {x + spacing * 8 + vbar_width / 2},{y +
      (vbar_height - hbar_height) /
        2} l 0,{hbar_height} l {hbar_width},0 l 0,{-hbar_height} l {-hbar_width},0 z"
  />
{/if}

<!-- N -->
<path
  class={vtarget}
  d="M {x + spacing * 10 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * vbar_height},{-vbar_height} z"
  data-index={10}
/>

<path
  class={vtarget}
  d="M {x + spacing * 11 + (slant * vbar_height) / 2},{y} l {-slant *
    vbar_height},{vbar_height} l {vbar_width},0 l {slant * (vbar_height - radius0)},{-vbar_height +
    radius0} s {slant * radius0},{-radius0},{-radius0 + slant * radius0},{-radius0} z"
  data-index={11}
/>
