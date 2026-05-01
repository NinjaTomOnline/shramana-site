# Shramana Project Site Design Notes

## Launch Spine

- Target user: iPad puzzle players who like routing, timing, sacrifice mechanics, and contemplative story framing.
- Job to be done: quickly understand the game premise, see real screenshots/art, and find support/privacy/press information for release.
- Top proof points: 20-level campaign, iPad-only landscape build, SpriteKit plus SwiftUI runtime, PixelLab production art, Codable authored levels.
- Trust promise: local-first app architecture with no accounts, analytics, advertising SDKs, cloud sync, or networking in the current codebase.
- What the app does not do: no public App Store listing yet, no cloud sync, no modding, no level editor, no account system.

## Visual Direction

- Mood: ritual arcade poster, quiet but sharp.
- Palette: black lacquer, temple gold, moss/jade, restrained ember accents.
- Typography: large serif editorial headlines with compact, readable sans-serif UI chrome.
- Hero object: real level-20 gameplay capture with PixelLab monk sprites and the active gate object layered in front.
- Motion: subtle floating monk only, disabled by `prefers-reduced-motion`.
- Differentiator: the page sells a puzzle pilgrimage using the same generated runtime art instead of generic app-store gloss.

## QA Ledger

- Static audit passed for hosted root: required pages, CSS, robots, sitemap, local links/assets, canonical/OG URLs, and forbidden automatic-action copy.
- Static audit passed for exported `/tmp/shramana-site` bundle.
- Desktop screenshot checked at `1440x1100`: hero hierarchy, nav, CTA labels, real game capture, layered monk art, and next-section entry look coherent.
- Mobile screenshot checked at `390x900`: headline, body copy, CTA stack, nav wrap, and proof strip fit without visible clipping after breakpoint adjustments.
- Export script excludes `qa-*.png`, so local QA screenshots are retained in the private package but not copied to the public Pages bundle.
