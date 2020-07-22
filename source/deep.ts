import * as deepOperators from './operators';
import { clone, mapValues } from 'lodash';
import { Context } from './models';
import { Key } from './types';
import { Options } from './interfaces';

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
    get: (_: any, key: Key) => operators[key] ?? operators.get(key)
  });
}
