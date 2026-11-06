# MCASS website

Static website for The Manchester Chartered Accountants Students' Society (registered charity 217014), built with [Astro](https://astro.build) and edited through [Pages CMS](https://pagescms.org).

## For the committee: editing the site

1. Go to app.pagescms.org and sign in with the MCASS GitHub account.
2. Open this repository. You can edit **Events**, **Committee**, **Sponsors**, **Pages**, **Site settings** and **Sponsorship packages**.
3. Click **Save**. The site rebuilds and updates in about a minute.

Grey dashed boxes on the site are **photo placeholders**. Each says which photo belongs there. Upload a photo in the matching field and the box is replaced.

## Before launch checklist

- [ ] Replace placeholder stats (Site settings → Headline figures) with figures from MCASS's own records, e.g. Ball ticket data.
- [ ] Committee approves sponsorship prices, then tick **Prices approved**.
- [ ] Treasurer confirms VAT status. Set it to `registered` only if MCASS is VAT-registered; "+ VAT" then appears next to prices automatically.
- [ ] Fill in the Join page (how membership works) and the Privacy notice (name the ticketing provider).
- [ ] Add real committee names and headshots, event dates and photos.
- [ ] Add LinkedIn and Instagram links.
- [ ] List every page on the old Wix site and add redirects in `public/_redirects`.
- [ ] Turn off **Draft mode** in Site settings. This removes the yellow banner and lets Google index the site.

## Hosting (Cloudflare Pages)

1. Create a Cloudflare account using a role-based MCASS email (not a personal one) so it can be handed over each year.
2. Workers & Pages → Create → Pages → connect this GitHub repository.
3. Build command `npm run build`, output directory `dist`.
4. Add the custom domain `mcass.uk`.
5. **Before moving DNS away from Wix:** copy every email record (MX, SPF/TXT, DKIM) so `hello@mcass.uk` keeps working.
6. Optional: turn on Cloudflare Web Analytics and paste its token into Site settings.

The site also works unchanged on Netlify (build `npm run build`, publish `dist`).

Events move from "Upcoming" to "Past" when the site rebuilds, so the list is correct after any edit. If nothing has been edited for a while, trigger a rebuild from the Cloudflare dashboard (or set a scheduled deploy hook).

## For developers

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

- Content: `src/content/` (events, committee, sponsors, pages) and `src/data/` (site settings, sponsorship packages)
- CMS fields: `.pages.yml`. Keep it in step with `src/content/config.ts`.
- Uploaded images: `public/images/uploads/`
