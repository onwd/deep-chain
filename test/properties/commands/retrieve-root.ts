import { Command } from 'fast-check';
import { Model, Real } from '../models';

export class RetrieveRootCommand implements Command<Model, Real> {
  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(model: Model, real: Real): void {
    real.state = real.state.retrieveRoot();
    model.wasRetrieveCalled = true;
  }
}
