import { defineCollection, z } from 'astro:content';

const events = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        dateConfirmed: z.boolean().default(false),
        time: z.string().optional().nullable(),
        venue: z.string().optional().nullable(),
        category: z.enum(['Social', 'Sports', 'Revision', 'Professional', 'Ball']).default('Social'),
        summary: z.string(),
        image: z.string().optional().nullable(),
        ticketUrl: z.string().optional().nullable(),
        sponsor: z.string().optional().nullable(),
        published: z.boolean().default(true)
    })
});

const committee = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        firm: z.string().optional().nullable(),
        photo: z.string().optional().nullable(),
        linkedinUrl: z.string().optional().nullable(),
        email: z.string().optional().nullable(),
        bio: z.string().optional().nullable(),
        quote: z.string().optional().nullable(),
        stage: z.string().optional().nullable(),
        joined: z.string().optional().nullable(),
        favouriteEvent: z.string().optional().nullable(),
        funFact: z.string().optional().nullable(),
        interests: z.array(z.string()).default([]),
        order: z.number().default(99)
    })
});

const sponsors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        tier: z.enum(['Headline Partner', 'Event Partner', 'Supporter']),
        logo: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        blurb: z.string().optional().nullable(),
        active: z.boolean().default(true),
        order: z.number().default(99)
    })
});

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional().nullable()
    })
});

export const collections = { events, committee, sponsors, pages };
