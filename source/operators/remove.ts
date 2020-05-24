import { Context } from '../models';
import { isArray } from 'lodash';

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
