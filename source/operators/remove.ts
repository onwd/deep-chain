import { isArray } from 'lodash';
import { Context } from '../models';

export const remove = (context: Context) =>
                      () => {
  if (isArray(context.parent)) {
    const index = Number(context.key);

    if (index >= 0) {
      context.parent.splice(index, 1);
    }
  } else if (context.parent) {
    delete context.parent[context.key];
  }

  return context.chain;
};
