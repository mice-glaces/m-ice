import type { CSSProperties } from 'react'

// Some scoop photos are overexposed (white highlights clipped, texture washed out).
// They get one of the tone curves defined in app/layout.tsx, which deepen the mid
// and light tones of the ice cream while keeping the background white.
// The photos themselves are left untouched.
// Overexposed photos shot on a pure white background
// (vanilla is not listed: its cutout was repaired directly in vanille-scoop.png)
const PALE_ON_WHITE = new Set([
    '/images/thyme_scoop.png',
    '/images/banana_scoop.png',
    '/images/lychee_scoop.png',
    '/images/stracciatella_scoop.png',
    '/images/lemon_scoop.png',
])

// Overexposed photos whose background is light grey (230–242): their curve also
// lifts that grey to white so no grey disc shows around the scoop
const PALE_ON_GREY = new Set([
    '/images/white_coffee_scoop.png',
    '/images/lavender_scoop.png',
    '/images/fleur_de_lait_scoop.png',
    '/images/genepi_scoop.png',
    '/images/yogurt_scoop.png',
    '/images/pineapple_scoop.png',
    '/images/mint_choc_scoop.png',
    '/images/coconut_scoop.png',
])

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
