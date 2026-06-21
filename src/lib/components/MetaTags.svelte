<script lang="ts">
  import { dev } from '$app/environment';
  import { page } from '$app/state';
  import { MetaTags } from 'svelte-meta-tags';

  let {
    title,
    description = "Just another one of them nerdy web developers.",
    titleTemplate = "%s • Mihran Mashhud",
    ogImage = "/images/simple.png",
  } = $props()
</script>

<MetaTags
  {title}
  {titleTemplate}
  {description}
  canonical="https://mihran.dev"
  openGraph={{
    images: [{
      url: `http${dev ? '' : 's'}://${page.url.host}${ogImage}`
    }],
  }}
  twitter={{
    cardType: 'summary_large_image',
  }}
/>
