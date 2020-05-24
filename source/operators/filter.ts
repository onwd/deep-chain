import { DeepContext } from '../models';
import { filter as _filter } from 'lodash';

export const filter = (context: DeepContext) =>
                      (predicate: any) => {
  context.entry = _filter(context.entry, predicate);

  return context.chain;
};
