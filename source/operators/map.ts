import { Context } from '../models';
import { map as _map } from 'lodash';

export const map = (context: Context) =>
                   (mapper: any) => {
  context.parent[context.key] = _map(context.entry, mapper);

  return context.chain;
};
