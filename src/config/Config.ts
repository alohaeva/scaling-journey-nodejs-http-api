import { Path, PathValue } from '../types/index.ts';

import config from './vars.ts';

class AppConfig {
  get<T = typeof config, P extends Path<T> = any, R = PathValue<T, P>>(key: P): R | undefined {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return keys.reduce((acc, b) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return acc ? acc[b] : undefined;
    }, config);
  }
}

export const appConfig = new AppConfig();
