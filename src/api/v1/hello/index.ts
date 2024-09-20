import { Request, Response, Router } from 'express';
import { StatusCode } from 'status-code-enum';

import { validationMiddleware } from '../../../validators/validationMiddleware.ts';
import { validateHelloPayload } from '../../../validators/index.ts';
import { sendResponse } from '../../helpers/sendResponse.ts';
import { HelloService } from '../../../services/HelloService.ts';

const helloService = new HelloService();

export const helloRouter = Router();

helloRouter.post('/', validationMiddleware(validateHelloPayload), (_: Request, res: Response) => {
  const result = helloService.handler(res.locals.payload);

  return sendResponse(res, {
    result,
    status: StatusCode.SuccessOK,
    success: true,
  });
});
