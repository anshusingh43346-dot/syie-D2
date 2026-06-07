---
name: SYIE by Sdivynex
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#cabeff'
  on-secondary: '#31009a'
  secondary-container: '#4816cb'
  on-secondary-container: '#b9aaff'
  tertiary: '#d4cebe'
  on-tertiary: '#333025'
  tertiary-container: '#b8b3a3'
  on-tertiary-container: '#484539'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e6deff'
  secondary-fixed-dim: '#cabeff'
  on-secondary-fixed: '#1c0062'
  on-secondary-fixed-variant: '#4816cb'
  tertiary-fixed: '#e9e2d2'
  tertiary-fixed-dim: '#ccc6b6'
  on-tertiary-fixed: '#1e1c12'
  on-tertiary-fixed-variant: '#4a473b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-sm:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is anchored in a philosophy of **Modern Opulence**. It balances the weight and authority of a traditional luxury brand with the technical precision of a high-end investment platform. The target audience includes sophisticated investors and high-net-worth individuals who value clarity, exclusivity, and technological superiority.

The visual style is a refined execution of **Glassmorphism**, moving away from "frosted" clichés toward a "smoked obsidian" aesthetic. Surfaces are deep, translucent, and layered to create a sense of physical depth. The emotional response should be one of quiet confidence—less "loud startup" and more "private digital vault."

## Colors

The palette is built on a foundation of **Charcoal (#111111)** to ensure maximum contrast for the accent colors. 

- **Primary Gold (#D4AF37):** Reserved for high-value actions, achievement states, and brand signatures. Use sparingly to maintain its "precious" feel.
- **Interactive Purple (#7C5CFF):** Used for functional interactive elements, secondary calls to action, and focus rings. It provides a contemporary tech-forward counterpoint to the traditional gold.
- **Ivory (#FFF8E7):** Replaces pure white for all primary text to reduce eye strain and add a layer of warmth and premium feel.
- **Slate (#64748B):** Utilized for metadata, helper text, and structural borders.

## Typography

This design system utilizes a high-contrast typographic pairing to signal both heritage and utility.

- **Playfair Display:** Used for all "Display" and "Headline" roles. It should be typeset with tighter letter-spacing in larger sizes to emphasize its elegant serifs.
- **Inter:** Used for all "Body," "Label," and "Input" roles. It provides the necessary legibility for complex financial data and interface controls. 
- **Scale:** Large display titles are essential for a premium feel, but must scale down significantly on mobile to maintain readability without excessive wrapping.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1280px max-width container for desktop viewing to maintain a curated, editorial feel. 

A strict 8px grid governs all internal spacing. For luxury positioning, utilize generous white space (or "dark space") between major sections. 
- **Desktop:** 12-column grid, 24px gutters, 64px page margins.
- **Tablet:** 8-column grid, 20px gutters, 40px page margins.
- **Mobile:** 4-column grid, 16px gutters, 20px page margins.

## Elevation & Depth

Depth is achieved through a combination of **Backdrop Blurs** and **Tonal Layering**.

- **Surface Layer:** `rgba(255, 255, 255, 0.03)` with a `blur(12px)`. This creates the signature glass effect.
- **Borders:** Every elevated surface must have a 1px solid border. Use `white/10%` for standard containers and `gold/20%` for featured or active cards.
- **Atmospheric Glow:** Use subtle radial gradients in the background (15% opacity Gold or Purple) to suggest light sources behind the glass panes. These should be large, soft, and never centered.
- **Shadows:** Use large, ultra-soft shadows with 0% spread to simulate ambient occlusion rather than direct light.

## Shapes

The design system employs a **Rounded (16px)** corner radius for all primary containers and cards. This softens the charcoal base and makes the interface feel more approachable and modern.

- **Base Radius:** 16px (rounded-2xl) for cards and modals.
- **Component Radius:** 8px (rounded-lg) for buttons and input fields to maintain a slightly sharper, more technical feel.
- **Pill Radius:** Full rounding (999px) is reserved exclusively for status badges and chips.

## Components

### Buttons
- **Primary Gold:** #D4AF37 background, #111111 text. High-gloss finish.
- **Primary Purple:** #7C5CFF background, #FFF8E7 text. Use for secondary system actions.
- **Secondary:** Transparent background, 1px Gold border, Gold text.
- **Ghost:** Transparent background, Slate text. Transitions to Ivory text on hover with a subtle 5% white background tint.

### Inputs
Fields should use a dark glass aesthetic (`rgba(255, 255, 255, 0.05)`) with Inter Medium typography. On focus, the border transitions from Slate to Gold with a soft 4px Gold outer glow.

### Cards
Cards are the primary vehicle for the glassmorphism style. They must include the 12px backdrop blur and the 1px white/10% border. For investor-ready data visualization, keep the card background slightly darker than the base charcoal to increase focus.

### Badges
Pill-shaped with a 10% opacity background of the label color (e.g., Gold text on a 10% Gold background). Include a 2px outer "bloom" or glow in the same color to make them appear self-illuminated.