import { Router } from 'express';

import { itemsRouter } from './items/index.ts';
import { helloRouter } from './hello/index.ts';

const apiV1Router = Router();

apiV1Router.use('/items', itemsRouter);
apiV1Router.use('/hello', helloRouter);

export default apiV1Router;
