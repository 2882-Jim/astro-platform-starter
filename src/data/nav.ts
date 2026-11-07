// Site navigation.
//  - tabs: plain links in the main menu (no dropdowns)
//  - quickLinks: the "Quick links" dropdown, grouped, with useful links
//    and other websites (ICAEW, LinkedIn, charity register)
// Nothing in quickLinks repeats a tab.
import site from './site.json';

export interface NavLink {
    href: string;
    label: string;
    external?: boolean;
}

const mailingList = site.mailingListUrl || `mailto:${site.email}?subject=${encodeURIComponent('Add me to the MCASS mailing list')}`;

export const tabs: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/committee/', label: 'Committee' },
    { href: '/events/', label: 'Events' },
    { href: '/join/', label: 'Membership' },
    { href: '/sponsors/', label: 'Sponsorship' },
    { href: '/contact/', label: 'Contact' }
];

export const instagram = site.instagramUrl;
export const instagramHandle = site.instagramUrl.replace(/\/$/, '').split('/').pop() ?? 'Instagram';

export const quickLinks: { heading: string; links: NavLink[] }[] = [
    {
        heading: 'Book and sign up',
        links: [
            { href: site.ticketsUrl || '/events/#upcoming', label: 'Buy tickets', external: Boolean(site.ticketsUrl) },
            { href: '/events/#upcoming', label: 'Upcoming events' },
            { href: mailingList, label: 'Join our mailing list', external: true },
            { href: `mailto:${site.email}`, label: `Email ${site.email}` }
        ]
    },
    {
        heading: 'On this site',
        links: [
            { href: '/events/#past', label: 'Past events' },
            { href: '/about/#gallery', label: 'Photos' },
            { href: '/committee/#council', label: 'ICAEW Student Council reps' },
            { href: '/join/#getting-involved', label: 'Stand for the committee' },
            { href: '/sponsors/#packages', label: 'Sponsorship packages' },
            { href: '/privacy/', label: 'Privacy notice' }
        ]
    },
    {
        heading: 'Elsewhere',
        links: [
            { href: site.icaewPageUrl, label: 'Our ICAEW website', external: true },
            { href: site.linkedinUrl, label: 'LinkedIn', external: true },
            { href: site.charityRegisterUrl, label: 'Charity register', external: true }
        ].filter((l) => l.href)
    }
];
