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
