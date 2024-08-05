import { postHelloMessageSchema } from '../dtos/hello.ts';

export const validateHelloPayload = (data: Record<string, string>) => {
  return postHelloMessageSchema.safeParse(data);
};
