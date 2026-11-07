// One list of everything on the site, grouped. The top menu, the mobile menu
// and the footer site map are all built from this, so they always match.
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
            { href: site.icaewPageUrl, label: 'Our ICAEW page', external: true },
            { href: site.charityRegisterUrl, label: 'Charity register', external: true },
            { href: '/privacy/', label: 'Privacy notice' }
        ]
    },
    {
        href: '/committee/',
        label: 'Committee',
        children: [
            { href: '/committee/', label: 'Meet the 2026/27 committee' },
            { href: '/committee/#council', label: 'ICAEW Student Council reps' },
            { href: '/join/#getting-involved', label: 'Stand for the committee' }
        ]
    },
    {
        href: '/events/',
        label: 'Events',
        children: [
            { href: '/events/#upcoming', label: 'Upcoming events' },
            { href: '/events/#past', label: 'Past events' },
            { href: site.ticketsUrl || '/events/', label: 'Buy tickets', external: Boolean(site.ticketsUrl) }
        ]
    },
    {
        href: '/join/',
        label: 'Membership',
        children: [
            { href: '/join/', label: 'How to join' },
            { href: mailingList, label: 'Join our mailing list', external: true },
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
    {
        href: '/contact/',
        label: 'Contact',
        children: [
            { href: `mailto:${site.email}`, label: `Email ${site.email}` },
            { href: site.instagramUrl, label: 'Instagram', external: true },
            { href: site.linkedinUrl, label: 'LinkedIn', external: true }
        ]
    }
];
