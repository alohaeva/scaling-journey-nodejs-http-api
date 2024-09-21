import { Request, Response, Router } from 'express';
import { StatusCode } from 'status-code-enum';

import { validationMiddleware } from '../../../validators/validationMiddleware.ts';
import { validateCreateItemPayload } from '../../../validators/index.ts';
import { sendResponse } from '../../helpers/sendResponse.ts';
import { ItemsService } from '../../../services/ItemsService.ts';
import { ItemRepository } from '../../../repositories/ItemRepository.ts';
import MongoDBConnection from '../../../connectors/mongo/index.ts';

const itemsRepo = new ItemRepository({
  connection: MongoDBConnection,
});

const itemsService = new ItemsService(itemsRepo);

export const itemsRouter = Router();

itemsRouter.post('/', validationMiddleware(validateCreateItemPayload), async (_: Request, res: Response) => {
  const result = await itemsService.create(res.locals.payload);

  return sendResponse(res, {
    result,
    status: StatusCode.SuccessOK,
    success: true,
  });
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const result = await itemsService.get(req.params.id);

  return sendResponse(res, {
    result,
    status: StatusCode.SuccessOK,
    success: true,
  });
});

itemsRouter.get('/', async (_: Request, res: Response) => {
  const result = await itemsService.list();

  return sendResponse(res, {
    result,
    status: StatusCode.SuccessOK,
    success: true,
  });
});
