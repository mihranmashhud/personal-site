<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { PUBLIC_SITE_URL } from '$env/static/public';

  let {
    title,
    description = 'Just another one of them nerdy web developers.',
    titleTemplate = '%s • Mihran Mashhud',
    ogImage = '/images/simple.png'
  } = $props();
</script>

<MetaTags
  {title}
  {titleTemplate}
  {description}
  canonical={PUBLIC_SITE_URL}
  openGraph={{
    images: [
      {
        url: `${PUBLIC_SITE_URL}/${ogImage}`
      }
    ]
  }}
  twitter={{
    cardType: 'summary_large_image'
  }}
/>
