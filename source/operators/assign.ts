import { Context } from '../models';

export const assign = (context: Context) =>
                      (properties: object) => {
  if (context.entry) {
    Object.assign(context.entry, properties);
  }

  return context.chain;
};
