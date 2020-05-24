import { Context } from '../models';

export const modify = (context: Context) =>
                      (operation: Function) => {
  operation(context);

  return context.chain;
};
