import { z } from 'zod';

export const TrackRequestSchema = z
  .object({
    id: z.number(),
    count: z.number().nullable().optional(),
    content: z.string().optional(),
    whatever: z.string().nullable(),
  })
  .strict();

export type TrackRequestDto = z.infer<typeof TrackRequestSchema>;
