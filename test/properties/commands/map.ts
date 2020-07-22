import { Command } from 'fast-check';
import { Model, Real } from '../models';

export class MapCommand implements Command<Model, Real> {
  constructor(private readonly mapper: Function) {}

  public check(model: Readonly<Model>): boolean {
    return !model.wasRetrieveCalled;
  }

  public run(_: Model, real: Real): void {
    real.state = real.state.map(this.mapper);
  }
}
