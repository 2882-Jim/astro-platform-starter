import { getCollection } from 'astro:content';

export function formatEventDate(date: Date, confirmed: boolean): string {
    if (!confirmed) {
        const month = date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'Europe/London' });
        return date < new Date() ? month : `Date TBC (${month})`;
    }
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' });
}

/** Published events split into upcoming (soonest first) and past (latest first), as of build time. */
export async function getEvents() {
    const all = await getCollection('events', (e) => e.data.published);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const upcoming = all.filter((e) => e.data.date >= today).sort((a, b) => +a.data.date - +b.data.date);
    const past = all.filter((e) => e.data.date < today).sort((a, b) => +b.data.date - +a.data.date);
    return { upcoming, past };
}

export async function getActiveSponsors() {
    const order = ['Headline Partner', 'Event Partner', 'Supporter', 'Event sponsor'];
    const all = await getCollection('sponsors', (s) => s.data.active);
    return all.sort((a, b) => order.indexOf(a.data.tier) - order.indexOf(b.data.tier) || a.data.order - b.data.order);
}

import site from '../data/site.json';
/** Mailing list sign-up link: the form URL if set in Site settings, otherwise an email. */
export const mailingListHref = site.mailingListUrl || `mailto:${site.email}?subject=${encodeURIComponent('Add me to the MCASS mailing list')}`;
