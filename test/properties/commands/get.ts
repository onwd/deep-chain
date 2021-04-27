import { Command } from 'fast-check';
import { keys, sample } from 'lodash';
import { Model, Real } from '../models';
import { Key } from '../types';

export class GetCommand implements Command<Model, Real> {
  constructor(private readonly key: Key) {}

  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(_: Model, real: Real): void {
    const entry = real.state.retrieve();
    const entryKeys = keys(entry);

    const key = (entryKeys.length > 0 && Math.random() < 0.5)
      ? sample(entryKeys)
      : this.key;

    real.state = real.state.get(key);
  }
}
