export class Model {
  public wasRetrieveCalled: boolean;

  constructor(model: Partial<Model>) {
    Object.assign(this, model);
  }
}
