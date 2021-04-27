import { findLast as _findLast } from 'lodash';
import { Context } from '../models';

export const findLast = (context: Context) =>
                        (predicate: any) => {
  context.entry = _findLast(context.entry, predicate);

  return context.chain;
};
