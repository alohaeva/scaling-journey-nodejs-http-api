import z from 'zod';
import mongoose from 'mongoose';

export const itemEntitySchema = z.object({
  id: z.string().refine(val => mongoose.Types.ObjectId.isValid(val), 'id value is not valid ObjectId'),
  info: z.string({
    message: 'info is required',
  }),
});

export const createItemEntitySchema = z.object({
  id: z
    .string()
    .refine(val => mongoose.Types.ObjectId.isValid(val), 'id value is not valid ObjectId')
    .optional(),
  info: z.string({
    message: 'info is required',
  }),
});

export type ItemEntity = z.infer<typeof itemEntitySchema>;
export type CreateItemEntity = z.infer<typeof createItemEntitySchema>;
