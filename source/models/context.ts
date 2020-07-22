import { Key } from '../types';

export class Context {
  public rootWrapper: { root: any };
  public entry: any;
  public key: Key;
  public parent: any;
  public chain: any;
  public clone: boolean;

  constructor(context?: Partial<Context>) {
    Object.assign(this, context);
  }
}
