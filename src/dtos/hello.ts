import * as z from 'zod';

export const postHelloMessageSchema = z.object({
  name: z.string(),
});

export type PostHelloMessage = z.infer<typeof postHelloMessageSchema>;
