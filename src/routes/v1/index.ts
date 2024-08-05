import { HelloService } from '../../services/HelloService.ts';
import { validateHelloPayload } from '../../validators/index.ts';

const helloService = new HelloService();

export const helloRoute = {
  path: '/hello',
  payloadValidator: validateHelloPayload,
  handler: helloService.handler,
};
