import { isArray } from 'lodash';
import { Context } from '../models';

export const push = (context: Context) =>
                    (...items: Array<any>) => {
  if (isArray(context.entry)) {
    context.entry.push(...items);
  }

  return context.chain;
};
