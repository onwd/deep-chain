export class Real {
  public state: any;

  constructor(real: Partial<Real>) {
    Object.assign(this, real);
  }
}
