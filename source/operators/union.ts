import { Context } from '../models';
import { isArray, union as _union } from 'lodash';

export const union = (context: Context) =>
                     (...arrays: Array<any>) => {
  if (isArray(context.entry)) {
    context.parent[context.key] = _union(context.entry, ...arrays);
  }

  return context.chain;
};
