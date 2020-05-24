import { DeepContext } from '../models';
import { find as _find } from 'lodash';

export const find = (context: DeepContext) =>
                    (predicate: any) => {
  context.entry = _find(context.entry, predicate);

  return context.chain;
};
