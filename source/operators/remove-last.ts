import { Context } from '../models';
import { isArray } from 'lodash';

export const removeLast = (context: Context) =>
                          () => {
  if (isArray(context.entry)) {
    context.entry.pop();
  }

  return context.chain;
};
