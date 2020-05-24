import { Context } from '../models';
import { filter as _filter } from 'lodash';

export const modify = (context: Context) =>
                      (operation: Function) => {
  operation(context);

  return context.chain;
};
