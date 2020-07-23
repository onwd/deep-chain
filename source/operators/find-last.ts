import { Context } from '../models';
import { findLast as _findLast } from 'lodash';

export const findLast = (context: Context) =>
                        (predicate: any) => {
  context.entry = _findLast(context.entry, predicate);

  return context.chain;
};
