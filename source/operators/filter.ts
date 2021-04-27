import { filter as _filter, isArray } from 'lodash';
import { Context } from '../models';

export const filter = (context: Context) =>
                      (predicate: any) => {
  if (isArray(context.entry)) {
    context.parent[context.key] = _filter(context.entry, predicate);
    context.entry = context.parent[context.key];
  }

  return context.chain;
};
