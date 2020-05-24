import { Key } from '../types';

export class DeepContext {
  public root: any;
  public entry: any;
  public key: Key;
  public parent: any;
  public chain: any;
  public clone: boolean;

  constructor(context?: Partial<DeepContext>) {
    Object.assign(this, context);
  }
}
