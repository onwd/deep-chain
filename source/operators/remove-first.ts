import { isArray } from 'lodash';
import { Context } from '../models';

export const removeFirst = (context: Context) =>
                           () => {
  if (isArray(context.entry)) {
    context.entry.shift();
  }

  return context.chain;
};
