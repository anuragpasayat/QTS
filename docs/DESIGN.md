---
name: Quality Tax Service Design System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#44474e'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#485f83'
  primary: '#00142f'
  on-primary: '#ffffff'
  primary-container: '#0f294a'
  on-primary-container: '#7a91b7'
  inverse-primary: '#b0c8f1'
  secondary: '#3755c3'
  on-secondary: '#ffffff'
  secondary-container: '#708cfd'
  on-secondary-container: '#00217a'
  tertiary: '#240f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#422000'
  on-tertiary-container: '#d97705'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b0c8f1'
  on-primary-fixed: '#001b3b'
  on-primary-fixed-variant: '#30476a'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c4ff'
  on-secondary-fixed: '#001453'
  on-secondary-fixed-variant: '#173bab'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 52px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.025em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  stat-metric:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  data-tabular:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative, reliable, and meticulously structured visual foundation tailored for chartered accountancy, corporate auditing, GST filings, and comprehensive tax advisory across regional financial hubs (Chennai, Madurai, Coimbatore, Ambur).

The identity embodies **Corporate / Modern Trust with Classical Precision**:
- **Personality**: Institutional, precise, uncompromisingly ethical, accessible, and grounded in regional business understanding.
- **Target Audience**: Business proprietors, MSMEs, corporate finance directors, high-net-worth individuals, and startup founders seeking credible compliance and strategic tax optimization.
- **Emotional Response**: Complete peace of mind, operational confidence, institutional legitimacy, and swift direct communication.
- **Aesthetic Direction**: High-order clarity built with deep navy structure, slate-tinted functional surfaces, warm amber certification markers, crisp micro-borders, and high-legibility tabular financial typography.

## Colors

The color palette reinforces audit-level accuracy, institutional presence, and unambiguous compliance hierarchy.

### Functional Palette Rules
- **Primary Navy (`#0F294A`, deep base `#1A365D`)**: Used for institutional framing, executive navigation bars, mastheads, primary action buttons, and dominant brand headers.
- **Trust Blue (`#1E40AF`, accent `#2563EB`)**: Denotes interactive affordances, progress states, active branch selectors, link highlights, and secondary interactive buttons.
- **Warm Gold & Amber (`#D97706`, highlight `#F59E0B`)**: Strictly reserved for accreditation badges (ICAI, MSME, ISO), trust markers, statutory filing deadlines, alerts, and star reviews. Must not be overused as generic background fills.
- **Surface & Canvas (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`)**: Canvas defaults to crisp white (`#FFFFFF`) for tax tables, forms, and service cards. Alternating content modules use clean cool slate (`#F8FAFC`).
- **Dividers & Borders (`#E2E8F0`, `#CBD5E1`)**: Subtle neutral boundaries providing structural stability without overwhelming content.
- **Text & Data (`#0F172A`, supporting `#334155`, muted `#64748B`)**: Charcoal typography ensures contrast standards exceeding WCAG AAA for numeric figures and dense tax guidelines.
- **Communication Accent (`#16A34A` / `#22C55E`)**: Dedicated solely to WhatsApp consultation touchpoints and statutory approval confirmations.

## Typography

The type system utilizes **Plus Jakarta Sans** across all roles to achieve a balance between authoritative legal structure and modern crispness.

### Application Rules
- **Tabular Figures**: Every numeric component, fee schedule, tax slab calculator, and metric counter must enable `font-feature-settings: "tnum" on, "cv05" on, "cv08" on` to ensure perfect column alignment and distinction between zero and upper-case 'O'.
- **Headings**: Headings emphasize authority with tight tracking (`-0.02em` to `-0.01em`) and assertive weights (`700` and `800`).
- **Legal & Footnotes**: Compliance notes, disclaimer texts, and filing references utilize `body-sm` (`13px`) with `#64748B` to keep documents unambiguous yet visually secondary.
- **Badges & Status Tags**: Use `label-caps` in uppercase format with wide tracking (`0.08em`) to convey institutional credentialing.

## Layout & Spacing

The layout is built on a responsive 12-column grid with a maximum container width of `1240px`, enforcing consistent horizontal rhythm across dense financial tooling and content-heavy compliance directories.

### Responsive Breakpoints & Grids
- **Desktop (1024px and up)**: 12-column grid, `1.5rem` (`24px`) gutters, `2rem` (`32px`) margins. Supports comprehensive multi-column mega-menus, side-by-side branch comparison panels, and dense tax matrices.
- **Tablet (768px – 1023px)**: 8-column grid, `1.25rem` (`20px`) gutters, `1.5rem` (`24px`) margins. Two-column service layouts with collapsible branch detail views.
- **Mobile (320px – 767px)**: 4-column fluid grid, `1rem` (`16px`) gutters, `1rem` (`16px`) safe canvas margins. Single-column linear stacking with pinned bottom communication actions.

### Spacing Principles
- Spacing between distinct section modules scales via `space-xl` (`2.5rem` / `40px`) to `4rem` (`64px`) to present an unhurried, executive posture.
- Form inputs, tax calculation inputs, and consultation schedulers strictly employ `space-md` (`1rem`) vertical rhythm for cognitive clarity under legal scrutiny.

## Elevation & Depth

Visual hierarchy leverages crisp surface differentiation and restrained, low-spread ambient shadows rather than theatrical blurs.

### Elevation Levels
1. **Level 0 (Flat / Canvas)**:
   - `#FFFFFF` or `#F8FAFC` base background.
   - Bounded by a crisp 1px border (`#E2E8F0`). Used for table containers, basic form groups, and statutory text blocks.
2. **Level 1 (Resting Card / Service Tile)**:
   - Surface: `#FFFFFF`.
   - Border: `1px solid #E2E8F0`.
   - Shadow: `0 1px 3px 0 rgba(15, 41, 74, 0.04), 0 1px 2px -1px rgba(15, 41, 74, 0.03)`.
   - Conveys quiet reliability and stable tactile surface.
3. **Level 2 (Hover State / Interactive Card / Sticky Header)**:
   - Border: `1px solid #CBD5E1`.
   - Shadow: `0 10px 15px -3px rgba(15, 41, 74, 0.08), 0 4px 6px -4px rgba(15, 41, 74, 0.03)`.
   - Lift of `-2px` on service discovery cards to acknowledge affordance.
4. **Level 3 (Mega-Menu / Branch Dropdown / Modal)**:
   - Surface: `#FFFFFF`.
   - Border: `1px solid #CBD5E1`.
   - Shadow: `0 20px 25px -5px rgba(15, 41, 74, 0.12), 0 8px 10px -6px rgba(15, 41, 74, 0.04)`.
5. **Level 4 (Floating Action / WhatsApp Contact Bar)**:
   - Shadow: `0 12px 24px -4px rgba(22, 163, 74, 0.25), 0 4px 8px -2px rgba(15, 41, 74, 0.06)`.

## Shapes

The design system incorporates geometric precision through roundedness tier `2`:
- **Core Interactive Elements (Inputs, Standard Buttons, Data Cells)**: `0.5rem` (`8px`). Conveys contemporary professionalism while maintaining rigid tabular structure.
- **Card Containers, Mega-Menu Flyouts, Modal Panes (`rounded-lg`)**: `1rem` (`16px`). Softens large areas of information without feeling whimsical or informal.
- **Promotional Banners, Branch Office Modules (`rounded-xl`)**: `1.5rem` (`24px`). Encloses multi-location contact cards and regional service profiles.
- **Status Badges, City Chips, Filter Pills**: Full pill radius (`9999px`). Distinguishes state tags and geographical office locations from actionable rectangular forms.

## Components

### Buttons
- **Primary Button**: Deep navy background (`#0F294A`), pure white text, semi-bold (`600`), `0.5rem` border radius, padding `0.75rem 1.5rem`. Hover transitions to `#1A365D` with subtle shadow elevation.
- **Secondary Button**: Crisp white background, `1.5px` border in `#1E40AF`, text `#1E40AF`. Hover shifts to `#F8FAFC` surface.
- **Consultation / Accent Action**: Trust blue (`#1E40AF`) or warm gold accent (`#D97706`), strictly paired with white text for critical actions like "File ITR Now" or "Book Audit Consultation".

### Input Fields & Calculators
- **Structure**: White background (`#FFFFFF`), `1px solid #CBD5E1`, text `#0F172A`, `0.5rem` border radius, padding `0.75rem 1rem`.
- **Focus State**: `1px solid #1E40AF` with a `0 0 0 3px rgba(30, 64, 175, 0.15)` focus ring.
- **Numeric Fields (GSTIN, PAN, Turnover)**: Monospaced/tabular numerals with pre-fixed Indian Rupee symbol (`₹`) or formatted capital letter splits.

### Cards & Service Containers
- Built with `rounded-lg` (`1rem`) geometry, a clean `1px solid #E2E8F0` border, and `space-lg` (`1.5rem`) internal padding.
- Card headers incorporate an icon container (navy or gold pastel tint) followed by `headline-sm` titles and clear bullet lists featuring custom navy checkmarks.

### Compliance Badges & Accreditation Tags
- **Accreditation Badges (ICAI, MSME, ISO, Startup India)**: Border `1px solid rgba(217, 119, 6, 0.25)`, background `rgba(245, 158, 11, 0.08)`, gold text (`#92400E`), accompanied by a sharp metallic emblem icon.
- **City & Branch Badges (Chennai, Madurai, Ambur, Coimbatore)**: Rounded pill shape (`9999px`), light slate background (`#F1F5F9`), charcoal text (`#1E293B`), paired with a pulsing green operational dot or regional pin.

### Mega-Menu Navigation
- Multi-tier structured dropdown organized by practice areas: Direct Tax, GST & Indirect Tax, Company Incorporation, Statutory Audit, and Payroll Services.
- Features a designated quick-access branch panel displaying phone numbers and operating hours for Chennai, Madurai, Ambur, and Coimbatore branches directly within the menu.

### Floating WhatsApp Action Bar
- Pinned at bottom right on desktop and mobile (`bottom: 1.5rem; right: 1.5rem; z-index: 100`).
- Composed of a vibrant green circle (`#16A34A`, `52px` diameter) with an off-canvas pill expanding on desktop: *"Quick Tax Advisory on WhatsApp"*, accompanied by micro-branch routing.