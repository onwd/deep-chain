import { Command } from 'fast-check';
import { Model, Real } from '../models';

export class FindLastCommand implements Command<Model, Real> {
  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(_: Model, real: Real): void {
    real.state = real.state.findLast(() => Math.random() < 0.5);
  }
}
