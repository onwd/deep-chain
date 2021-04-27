import { clone, mapValues } from 'lodash';
import { Options } from './interfaces';
import { Context } from './models';
import * as deepOperators from './operators';
import { Key } from './types';

export function deep(root: any, options?: Options): any {
  root = (options?.clone) ? clone(root) : root;

  const rootWrapper = { root };

  const context = new Context({
    rootWrapper,
    entry: root,
    parent: rootWrapper,
    key: 'root',
    clone: options?.clone ?? false
  });

  const operators = mapValues(options?.operators ?? deepOperators, (operator) => operator(context));

  return context.chain = new Proxy(operators.find, {
    get: (_: any, key: Key) => operators[key as string] ?? operators.get(key)
  });
}
