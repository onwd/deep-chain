import * as fc from 'fast-check';
import {
  AccessPropertyCommand,
  FilterCommand,
  FindCommand,
  GetCommand,
  RetrieveCommand
} from './commands';
import { cloneDeep, isEqual } from 'lodash';
import { deep } from '../../build';
import { Model, Real } from './models';

test('immutability', () => {
  const immutabilityCommands = [
    fc.oneof(fc.string(), fc.integer()).map((key) => new AccessPropertyCommand(key)),
    fc.oneof(fc.string(), fc.integer()).map((key) => new GetCommand(key)),
    fc.constant(new FilterCommand(() => true)),
    fc.constant(new FindCommand()),
    fc.constant(new RetrieveCommand())
  ];

  fc.assert(
    fc.property(
      fc.object(),
      fc.commands(immutabilityCommands, 100),
      (object, commands) => {
        const clonedObject = cloneDeep(object);

        const stateBuilder = () => ({
          model: new Model({
            wasRetrieveCalled: false
          }),
          real: new Real({
            state: deep(object, { clone: true })
          })
        });

        fc.modelRun(stateBuilder, commands);

        return isEqual(object, clonedObject);
      }
    )
  );
});

test('fail-safety', () => {

});

test('reflexivity', () => {

});
