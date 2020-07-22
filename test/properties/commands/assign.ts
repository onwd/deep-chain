import { Command } from 'fast-check';
import { Model, Real } from '../models';

export class AssignCommand implements Command<Model, Real> {
  constructor(private readonly properties: object) {}

  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(_: Model, real: Real): void {
    real.state = real.state.assign(this.properties);
  }
}
