import { isArray, map as _map } from 'lodash';
import { Context } from '../models';

export const map = (context: Context) =>
                   (mapper: any) => {
  if (isArray(context.entry)) {
    context.parent[context.key] = _map(context.entry, mapper);
    context.entry = context.parent[context.key];
  }

  return context.chain;
};
