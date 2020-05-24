import { Context } from '../models';
import { map as _map } from 'lodash';

export const map = (context: Context) =>
                   (mapper: any) => {
  context.entry = _map(context.entry, mapper);

  return context.chain;
};
