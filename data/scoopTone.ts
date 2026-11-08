import type { CSSProperties } from 'react'

// Some scoop photos are overexposed (white highlights clipped, texture washed out).
// They get one of the tone curves defined in app/layout.tsx, which deepen the mid
// and light tones of the ice cream while keeping the background white.
// The photos themselves are left untouched.

// Overexposed photos shot on a pure white background
const PALE_ON_WHITE = new Set([
    '/images/banana_scoop.png',
])

// Overexposed photos whose background is light grey (230–242): their curve also
// lifts that grey to white so no grey disc shows around the scoop
const PALE_ON_GREY = new Set([
    '/images/lavender_scoop.png',
    '/images/mint_choc_scoop.png',
    '/images/coconut_scoop.png',
])

// The scoops in /images/boules/ were rebuilt as clean cutouts (pure white
// background, highlights softened, damaged parts filled) and need no curve.

// Piecewise-linear tone curves (21 points, input 0 → 1 in steps of 0.05)
export const SCOOP_TONE_TABLE = '0 .045 .09 .135 .18 .225 .27 .315 .36 .405 .45 .495 .54 .59 .64 .69 .75 .81 .92 1 1'
export const SCOOP_TONE_GREY_TABLE = '0 .045 .09 .135 .18 .225 .27 .315 .36 .405 .45 .495 .54 .59 .64 .69 .75 .84 1 1 1'

export function scoopStyle(image: string, scale?: number): CSSProperties | undefined {
    const tone = PALE_ON_GREY.has(image) ? 'url(#scoop-tone-grey)' : PALE_ON_WHITE.has(image) ? 'url(#scoop-tone)' : undefined
    if (!scale && !tone) return undefined
    return {
        ...(scale ? { scale } : {}),
        ...(tone ? { filter: tone } : {}),
    }
}
