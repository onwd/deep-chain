import * as deepOperators from './operators';
import { clone, mapValues } from 'lodash';
import { DeepContext } from './models';
import { DeepOptions } from './interfaces';
import { Key } from './types';

export function deep(root: any, options?: DeepOptions): any {
  root = (options?.clone) ? clone(root) : root;

  const context = new DeepContext({
    root,
    entry: root,
    clone: options?.clone ?? false
  });

  const operators = mapValues(options?.operators ?? deepOperators, (operator) => operator(context));

  return context.chain = new Proxy(operators.find, {
    get: (_: any, key: Key) => operators[key] ?? operators.get(key)
  });
}
