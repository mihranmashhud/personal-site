import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';
import Favicon from '$lib/components/og/Favicon.svelte';

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
  return new ImageResponse(
    Favicon,
    {
      width: 32,
      height: 32
    },
    {
      fill: params?.variant === 'light' ? 'black' : 'white'
    }
  );
};
