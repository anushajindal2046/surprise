---
name: Pastel Romance
colors:
  surface: '#fff8f8'
  surface-dim: '#e5d7d9'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f3'
  surface-container: '#f9eaed'
  surface-container-high: '#f3e5e8'
  surface-container-highest: '#eddfe2'
  on-surface: '#211a1c'
  on-surface-variant: '#5a4042'
  inverse-surface: '#372e31'
  inverse-on-surface: '#fcedf0'
  outline: '#8e6f71'
  outline-variant: '#e2bec0'
  surface-tint: '#ba1340'
  primary: '#b60e3d'
  on-primary: '#ffffff'
  primary-container: '#da3054'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2b8'
  secondary: '#a93054'
  on-secondary: '#ffffff'
  secondary-container: '#ff7295'
  on-secondary-container: '#73002e'
  tertiary: '#5c5398'
  on-tertiary: '#ffffff'
  tertiary-container: '#756bb3'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002d'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c0'
  on-secondary-fixed: '#3f0016'
  on-secondary-fixed-variant: '#89153d'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c8bfff'
  on-tertiary-fixed: '#1b0c53'
  on-tertiary-fixed-variant: '#473d81'
  background: '#fff8f8'
  on-background: '#211a1c'
  surface-variant: '#eddfe2'
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: 0em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  body-romantic-lg:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-romantic-md:
    fontFamily: Playfair Display
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system crafts an intimate, heartwarming, and deeply sentimental digital keepsake tailored for mobile web celebration flows. Designed to feel like unwrapping a handwritten pastel love note or stepping into an interactive storybook, the design evokes affection, whimsy, and delight.

The aesthetic fuses **Modern Soft Skeuomorphism** with **Pastel Dreamscape Glassmorphism**:
- Generous, marshmallow-soft elevations tinted with warm rose light.
- Translucent frosted porcelain surfaces layered over radiant blush gradients.
- Playful tactile elements (floating balloons, bouncy pill buttons, heart seal badges).
- Micro-interactions that emphasize anticipation, tenderness, and tactile reward.

## Colors

The palette revolves around warm strawberry-cream confectionery tones paired with ethereal dreamlike accents.

- **Primary (`#FF4D6D`)**: Vibrant cherry blossom rose. Used for primary calls-to-action, key highlight headers, active interactive markers, and primary love heart emblems.
- **Secondary (`#FB6F92`)**: Soft rose pink. Used for secondary pill actions, floating heart particles, and interactive progress states.
- **Tertiary (`#BDB2FF`)**: Whimsical pastel lilac (paired with ambient pastel mint `#CAFFBF` and candy sky `#A0C4FF`). Used for balloon surprises, interactive icons, and playful badges.
- **Neutral (`#FFF0F3`)**: Dreamy blush tint. Serves as the canvas backdrop base, softly transitioning into warm creamy white (`#FFFDFB`) and frosted glass cards (`rgba(255, 255, 255, 0.88)`).
- **Text & Contrast**: Deep velvet maroon (`#591C2B` / `#701A2C`) for body and headings, maintaining high accessibility while eliminating cold stark grays.

## Typography

The type system blends romantic, editorial sentiment with frictionless mobile readability.

- **Headline Font**: `Playfair Display` provides high-contrast, graceful serif cadence reminiscent of classic love letters and keepsake invitations. It is used in italic and upright variants for emotional page titles and sentimental quotes.
- **Body & Label Font**: `Plus Jakarta Sans` provides soft, humanistic, and approachable geometric clarity for instructions, narrative copy, interaction pills, and button labels.
- **Styling Directives**: For intimate notes and handwritten letter elements, italicized `Playfair Display` with generous line-height (`1.7`) creates an authentic epistolary aesthetic. Headings may pair an accompanying emoji or icon placed with symmetric padding.

## Layout & Spacing

The layout model is mobile-first and viewport-centered, treating every screen as an intimate stage:

- **Single-Column Focus**: Handheld screens prioritize a centered, distraction-free container (max width `440px` on mobile, expanding to `680px` centered modal canvas on tablet and desktop).
- **Vertical Breathing Space**: Generous top and bottom margins prevent touch clutter and allow ambient floating confetti, balloon strings, and soft glow halos to animate without clipping.
- **Interactive Safe Zones**: Action buttons are anchored within comfortable thumb reach (bottom 30% of the viewport) with minimum hit targets of 48px.

## Elevation & Depth

Visual hierarchy uses plush, romantic ambient glow shadows rather than heavy drop shadows:

- **Level 1 (Subtle Pill / Control Buttons)**:
  `0 8px 24px -4px rgba(251, 111, 146, 0.16), 0 2px 6px rgba(0, 0, 0, 0.03)`
- **Level 2 (Keepsake Letter & Story Cards)**:
  `0 16px 40px -8px rgba(201, 24, 74, 0.12), 0 4px 12px rgba(255, 240, 243, 0.6)`
- **Level 3 (Modal Popups & Floating Badges)**:
  `0 24px 60px -12px rgba(201, 24, 74, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.8) inset`
- **Surface Material**:
  Card surfaces use high-translucency white (`rgba(255, 255, 255, 0.92)`) with a `backdrop-filter: blur(12px)` and a gentle 1px border colored `rgba(255, 255, 255, 0.85)` to simulate pristine satin paper or frosted candy acrylic.

## Shapes

The shape signature is hyper-rounded, plush, and friendly:

- **Pill Silhouette**: All primary interaction triggers, floating status counters, and navigation pills use maximum curvature (`rounded-full` / `9999px`).
- **Marshmallow Cards**: Content containers, letter frames, and photo mounts utilize deep 28px–36px corner rounding, eliminating harsh geometric corners.
- **Floating Badges**: Emblems such as top-corner heart seals and floating icons use circular profiles (`w-10 h-10` or `w-12 h-12` rounded-full).

## Components

### Buttons
- **Primary "Yes" / Affirmative Pill**: Solid `#FF4D6D` background with white text, `height: 52px`, `padding: 0 32px`, `border-radius: 9999px`. Subtle heart-beat or bounce scale on hover/press (`transform: scale(1.05)`).
- **Secondary / Playful Avoidance Button**: Pure white background with `#C9184A` text, cushioned glow shadow. Supports dynamic evasive animations (playful run-away effects on mobile touch/hover).
- **Circular Icon Nav Buttons**: Top navigation and audio controls are housed in translucent white circles (`44px × 44px`) with soft rose border outlines.

### Keepsake & Letter Cards
- Crisp white or cream background (`#FFFDFB`), layered with romantic text, polaroid-style image frames, and optional illustrated stickers.
- Positioned with a signature top-right floating heart stamp (`#FF4D6D` pill or circle overlapping the border edge).

### Interactive Chips & Balloon Surprise Triggers
- **Surprise Balloons**: Glossy 3D-styled pastel SVG balloons (Pink `#FB6F92`, Lilac `#BDB2FF`, Mint `#CAFFBF`, Sky `#A0C4FF`) with floating wobble animation, popping into celebratory particle confetti upon tap.
- **Reason-to-Love Icon Chips**: Segmented pill bars with circular translucent tabs housing whimsical icons (stars, smiley faces, sparkles, hearts). Active states trigger a soft rose spotlight halo.

### Modals & Reveal Overlays
- Centered soft frosted glass backdrop (`rgba(255, 240, 243, 0.75)` with `backdrop-filter: blur(8px)`).
- Content emerges with an elastic pop transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

### Atmospheric Elements
- Subtle CSS floating hearts drifting vertically with staggered delays.
- Golden and pastel pink micro-confetti particles drifting lazily across background margins.