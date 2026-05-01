# Shramana Project Site Design Notes

## Launch Spine

- Target user: iPad puzzle players who like routing, timing, sacrifice mechanics, and contemplative story framing.
- Job to be done: quickly understand the game premise, see real screenshots/art, and find support/privacy/press information for release.
- Top proof points: 20-level campaign, iPad-only landscape build, SpriteKit plus SwiftUI runtime, PixelLab production art, Codable authored levels.
- Trust promise: local-first app architecture with no accounts, analytics, advertising SDKs, cloud sync, or networking in the current codebase.
- What the app does not do: no public App Store listing yet, no cloud sync, no modding, no level editor, no account system.

## Visual Direction

- Mood: ritual arcade poster with a sharper campaign-stage feel.
- Palette: black lacquer, temple gold, moss/jade, restrained ember accents.
- Typography: huge serif poster headlines with compact, readable sans-serif UI chrome.
- Hero object: real level-20 gameplay capture with PixelLab monk sprites, the active gate object, and a koan ticket layered in front.
- Motion: floating gate, monk action marquee, scroll reveals, and an interactive ability altar, all disabled or softened by `prefers-reduced-motion`.
- Differentiator: the page sells a puzzle pilgrimage using the same generated runtime art instead of generic app-store gloss.

## QA Ledger

- Static audit passed for hosted root: required pages, CSS, robots, sitemap, local links/assets, canonical/OG URLs, and forbidden automatic-action copy.
- Static audit passed for exported `/tmp/shramana-site` bundle.
- Desktop screenshot checked at `1440x1200`: hero hierarchy, nav, CTA labels, real game capture, layered monk art, marquee, chapter cards, and next-section entry look coherent.
- Mobile screenshot checked at `390x920`: headline, body copy, CTA stack, nav wrap, proof strip, and cinematic hero art fit without visible clipping after breakpoint adjustments.
- Export script excludes `qa-*.png`, so local QA screenshots are retained in the private package but not copied to the public Pages bundle.

## Rizz Pass Additions

- Rebuilt the home page around a stronger campaign idea: `One gate. Twenty koans. A hundred tiny disasters.`
- Added a monk action marquee using real PixelLab monk frames.
- Added a CSS-driven hero gameplay loop using real monk, gate, and background assets with reduced-motion support.
- Replaced the flatter chapter list with four image-led chapter cards.
- Reworked the screenshot proof section into a cinematic lead capture plus stacked supporting captures.
- Added an interactive ability altar that swaps monk frames and copy without inventing new gameplay claims.
