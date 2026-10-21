# shifo
https://www.instagram.com/osoishgohi_shifo/

## Project structure

- `index.html` — page markup and content.
- `assets/css/main.css` — site styles.
- `assets/js/main.js` — page behavior: language switcher, menus, forms, maps, calendar, media.
- `assets/js/bitrix-loader.js` — Bitrix24 widget loader.
- `workers/bitrix-leads.js` — Cloudflare Worker for Bitrix lead integration.
- `img/`, `docs/`, `assets/patterns/`, `assets/backgrounds/` — static media and documents.

Keep service configuration such as email routing, DNS, and secrets outside this repository.

## Umami tracking code

Umami analytics is used to track website stats. The tracking script is injected into the home page `<head>...</head>` by Cloudflare Pages middleware in `functions/_middleware.js`.

## Isolated design preview

Source branch: `preview/mriya-step-01`, based on production commit `0426572`.
The production `main` branch and custom domain are not changed.
Public preview: https://halimhamidov.github.io/shifo-preview/
Only static website files are mirrored into the public preview repository.
Server functions, Workers, configuration, and private repository history are excluded.
The preview disables CRM submissions and Bitrix chat and requests no indexing.
Run locally: `python -m http.server 8766 --bind 127.0.0.1`.
Each design step is a separate commit. Revert the relevant commit to undo it.

### Step 1: territory and facts

The second screen combines the existing territory plan and four facts in one
full-width composition inspired by the supplied Mriya Life reference. The old
introductory cards, long about block, separate facts cards, and infrastructure
cards are replaced. All subsequent sections and the original hero are preserved.
The header stays fixed and becomes white below the hero. On mobile the map and
facts stack in a readable layout; the full map opens in a separate tab.

Verified at 1440x900 and 390x844: no horizontal overflow, white header below the
hero, four language switches, and no observed browser console errors. Static
checks confirm the original hero and subsequent sections are unchanged, local
asset/anchor targets resolve, and preview submissions do not call the CRM.

### Step 2: responsive hero slides

Three supplied images follow the unchanged original first slide: accommodation,
wellness equipment, and rest by the sea. Original landscape PNGs are preserved
byte-for-byte and fitted under the header without distortion or clipped text.
Any remaining space uses a softly blurred continuation of the same artwork.
Portrait viewports use separate AI-adapted images with readable HTML captions;
they fill the available space between the header and mobile action bar.

Automatic image rotation uses 18 seconds; the existing first-slide headline
rotation remains unchanged. Arrow controls pause rotation for manual browsing;
the play control resumes it. Reduced-motion preferences pause it initially.
All slides share the original hero's fixed visual space. Files and generation
prompts are documented in `docs/BANNER_ASSETS.md`.

### Step 3: lighter second screen

The territory screen uses a lighter full-height blue-grey text panel and locally
hosted open fonts (Manrope and Cormorant Garamond, with OFL licenses) to match the
reference's light typography and large thin numerals. The second fact is now
**29 cottage houses** and **167 guest places**, as corrected by the owner.
Map buttons and place markers are temporarily removed. The first hero and its
slides are unaffected. Desktop and mobile layouts are verified before publishing.

### Step 4: transparent map panel

The right-hand panel now uses a transparent tint without blur, so the territory
map remains visible below the text. The full-map button opens the original image
in a separate tab. Mobile text also overlays the map; place markers remain hidden.

### Step 5: default illustrated map

The supplied `Карта мест силы санатория «ШИФО».png` is now the default territory
image (`img/maps/shifo-territory-guide.png`) on desktop and mobile. The full-map
button opens this same image with its embedded labels. The original unlabelled
map remains available in the repository for rollback.

The territory panel's headline and introduction describe Shifo as a place to
recharge, with wellbeing, relaxation and harmony with nature. Russian copy and
meaning-based Tajik, English and Uzbek translations use the existing switcher.

The full annotated map is displayed without cropping in its own column. The
introduction and facts sit separately on the left and never overlap map labels.
The fourth fact is now 14 hectares of grounds, as supplied by the owner.
