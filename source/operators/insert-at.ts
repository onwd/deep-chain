import { isArray } from 'lodash';
import { Context } from '../models';

export const insertAt = (context: Context) =>
                        (index: number, ...items: Array<any>) => {
  if (index >= 0 && isArray(context.entry)) {
    context.entry.splice(index, 0, ...items);
  }

  return context.chain;
};
