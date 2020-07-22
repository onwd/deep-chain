import { Command } from 'fast-check';
import { Model, Real } from '../models';

export class ModifyCommand implements Command<Model, Real> {
  constructor(private readonly operation: Function) {}

  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(_: Model, real: Real): void {
    real.state = real.state.modify(this.operation);
  }
}
