import { find as _find } from 'lodash';
import { Context } from '../models';

export const find = (context: Context) =>
                    (predicate: any) => {
  context.entry = _find(context.entry, predicate);

  return context.chain;
};
