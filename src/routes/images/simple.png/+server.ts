import type { RequestHandler } from '@sveltejs/kit';
import JustLogo from '$lib/components/og/JustLogo.svelte';
import { ImageResponse } from '@ethercorps/sveltekit-og';
import { GoogleFont, resolveFonts } from '@ethercorps/sveltekit-og/fonts';

export const prerender = true;

const jetbrainsMono = {
  regular: new GoogleFont('JetBrains Mono', {
    weight: 400,
    name: 'JetBrains Mono'
  }),
  bold: new GoogleFont('JetBrains Mono', {
    weight: 700,
    name: 'JetBrains Mono'
  })
};

export const GET: RequestHandler = async () => {
  const fonts = await resolveFonts(Object.values(jetbrainsMono));
  return new ImageResponse(JustLogo, {
    width: 1200,
    height: 630,
    fonts,
    headers: {
      'Cache-Control': 'public, immutable, max-age=31536000'
    }
  });
};
