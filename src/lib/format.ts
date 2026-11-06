import { getCollection } from 'astro:content';

export function formatEventDate(date: Date, confirmed: boolean): string {
    if (!confirmed) {
        return `Date TBC (${date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'Europe/London' })})`;
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
    const order = ['Headline Partner', 'Pillar Partner', 'Supporter', 'Event Sponsor'];
    const all = await getCollection('sponsors', (s) => s.data.active);
    return all.sort((a, b) => order.indexOf(a.data.tier) - order.indexOf(b.data.tier) || a.data.order - b.data.order);
}
