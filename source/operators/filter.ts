import { Context } from '../models';
import { filter as _filter, isArray, isObject } from 'lodash';

export const filter = (context: Context) =>
                      (predicate: any) => {
  if (isObject(context.parent) && context.parent.hasOwnProperty(context.key) && isArray(context.entry)) {
    context.parent[context.key] = _filter(context.entry, predicate);
  }

  return context.chain;
};
