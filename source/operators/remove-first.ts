import { Context } from '../models';
import { isArray } from 'lodash';

export const removeFirst = (context: Context) =>
                           () => {
  if (isArray(context.entry)) {
    context.entry.shift();
  }

  return context.chain;
};
