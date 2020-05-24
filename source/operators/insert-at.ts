import { Context } from '../models';
import { isArray } from 'lodash';

export const insertAt = (context: Context) =>
                        (index: number, ...items: Array<any>) => {
  if (index >= 0 && isArray(context.entry)) {
    context.entry.splice(index, 0, ...items);
  }

  return context.chain;
};
