import { isArray } from 'lodash';
import { Context } from '../models';

export const removeLast = (context: Context) =>
                          () => {
  if (isArray(context.entry)) {
    context.entry.pop();
  }

  return context.chain;
};
