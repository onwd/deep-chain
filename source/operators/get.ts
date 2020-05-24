import { clone } from 'lodash';
import { Context } from '../models';
import { Key } from '../types';

export const get = (context: Context) =>
                   (key: Key) => {
  context.parent = context.entry;
  context.key = key;

  if (context.entry === null || context.entry === undefined) {
    context.entry = undefined;
  } else {
    if (context.clone) {
      context.entry[key] = clone(context.entry[key]);
    }

    context.entry = context.entry[key];
  }

  return context.chain;
};
