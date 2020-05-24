import { Context } from '../models';

export const set = (context: Context) =>
                   (value: any) => {
  if (context.parent) {
    context.parent[context.key] = value;
  }

  return context.chain;
};
