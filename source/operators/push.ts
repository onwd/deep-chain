import { Context } from '../models';
import { isArray, map as _map } from 'lodash';

export const push = (context: Context) =>
                    (...items: Array<any>) => {
  if (isArray(context.entry)) {
    context.entry.push(...items);
  }

  return context.chain;
};
