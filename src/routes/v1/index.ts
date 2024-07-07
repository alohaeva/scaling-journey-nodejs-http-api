import { HelloService } from '../../services/HelloService.ts';

export const helloRoute = {
  path: '/hello',
  payloadValidator: () => {},
  handler: (message: string) => {
    const helloService = new HelloService();

    return helloService.handler(message);
  },
};
