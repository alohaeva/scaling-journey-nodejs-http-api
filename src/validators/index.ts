import { postHelloMessageSchema } from '../dtos/hello.ts';
import { createItemEntitySchema } from '../entities/ItemEntity.ts';

export const validateHelloPayload = (data: Record<string, string>) => {
  return postHelloMessageSchema.safeParse(data);
};

export const validateCreateItemPayload = (data: Record<string, string>) => {
  return createItemEntitySchema.safeParse(data);
};
