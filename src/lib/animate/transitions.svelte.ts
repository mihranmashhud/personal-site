import { fade, crossfade as svelteCrossfade, type CrossfadeParams, type TransitionConfig } from "svelte/transition";

export const crossfade = svelteCrossfade({
  delay: 300,
  fallback: fade,
} as CrossfadeParams)

export type CrossfadeTransitionFunction = 	(
		node: any,
		params: CrossfadeParams & {
			key: any;
		}
	) => () => TransitionConfig
