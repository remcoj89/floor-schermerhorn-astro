import { defineCollection, z } from 'astro:content';

const floorExpress = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
  }),
});

export const collections = { 'floor-express': floorExpress };
