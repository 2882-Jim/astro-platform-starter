// Site navigation, kept in two separate lists so nothing appears twice:
//  - nav: the site's own pages and sections (main menu, mobile menu, footer)
//  - quickLinks: actions and other websites (the "Quick links" dropdown in the red top bar)
// Instagram sits on the red top bar on its own.
import site from './site.json';

export interface NavLink {
    href: string;
    label: string;
    external?: boolean;
}
export interface NavGroup extends NavLink {
    children: NavLink[];
}

const mailingList = site.mailingListUrl || `mailto:${site.email}?subject=${encodeURIComponent('Add me to the MCASS mailing list')}`;

export const nav: NavGroup[] = [
    {
        href: '/about/',
        label: 'About',
        children: [
            { href: '/about/', label: 'About MCASS' },
            { href: '/about/#gallery', label: 'Photos' },
            { href: '/privacy/', label: 'Privacy notice' }
        ]
    },
    {
        href: '/committee/',
        label: 'Committee',
        children: [
            { href: '/committee/', label: 'Meet the 2026/27 committee' },
            { href: '/committee/#council', label: 'ICAEW Student Council reps' }
        ]
    },
    {
        href: '/events/',
        label: 'Events',
        children: [
            { href: '/events/#upcoming', label: 'Upcoming events' },
            { href: '/events/#past', label: 'Past events' }
        ]
    },
    {
        href: '/join/',
        label: 'Membership',
        children: [
            { href: '/join/', label: 'How to join' },
            { href: '/join/#getting-involved', label: 'Getting involved' }
        ]
    },
    {
        href: '/sponsors/',
        label: 'Sponsorship',
        children: [
            { href: '/sponsors/#packages', label: 'Packages' },
            { href: '/sponsors/#at-our-events', label: 'Sponsors at our events' },
            { href: '/sponsors/#current-sponsors', label: 'Current sponsors' },
            { href: '/sponsors/#enquire', label: 'Enquire' }
        ]
    },
    { href: '/contact/', label: 'Contact', children: [] }
];

export const quickLinks: NavLink[] = [
    { href: site.ticketsUrl || '/events/', label: 'Buy tickets', external: Boolean(site.ticketsUrl) },
    { href: mailingList, label: 'Join our mailing list', external: true },
    { href: `mailto:${site.email}`, label: `Email ${site.email}` },
    { href: site.linkedinUrl, label: 'LinkedIn', external: true },
    { href: site.icaewPageUrl, label: 'Our ICAEW page', external: true },
    { href: site.charityRegisterUrl, label: 'Charity register', external: true }
].filter((l) => l.href);

export const instagram = site.instagramUrl;
export const instagramHandle = site.instagramUrl.replace(/\/$/, '').split('/').pop() ?? 'Instagram';
