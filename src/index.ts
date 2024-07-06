import { Server } from './server/index.ts';
import { appConfig } from './config/Config.ts';
import { logger } from './logger/index.ts';

const port = appConfig.get('server.port');

const server = new Server();

server.start(port!).then(() => {
  logger.info(`Server is running at http://localhost:${port}`);
});
