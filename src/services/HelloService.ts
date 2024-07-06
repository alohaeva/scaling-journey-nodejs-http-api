const startTime = new Date();

export class HelloService {
  constructor() {}

  handler(message: string) {
    return `Hello World! from ${message}, ${startTime.toISOString()}`;
  }
}
