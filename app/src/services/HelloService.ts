import { PostHelloMessage } from '../dtos/hello.ts';

const startTime = new Date();

export class HelloService {
  constructor() {}

  handler(message: PostHelloMessage) {
    return `Hello World! from ${message.name}, ${startTime.toISOString()}`;
  }
}
