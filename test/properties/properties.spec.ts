import * as fc from 'fast-check';
import {
  AccessPropertyCommand,
  AssignCommand,
  FilterCommand,
  FindCommand,
  FindLastCommand,
  GetCommand,
  MapCommand,
  ModifyCommand,
  RetrieveCommand,
  RetrieveRootCommand
} from './commands';
import { cloneDeep, isEqual } from 'lodash';
import { deep } from '../../build';
import { Model, Real } from './models';

const MAX_COMMANDS = 100;

test('immutability', () => {
  const immutabilityCommands = [
    fc.oneof(fc.string(), fc.integer()).map((key) => new AccessPropertyCommand(key)),
    fc.oneof(fc.string(), fc.integer()).map((key) => new GetCommand(key)),
    fc.constant(new AssignCommand({})),
    fc.constant(new FilterCommand(() => true)),
    fc.constant(new FindCommand()),
    fc.constant(new FindLastCommand()),
    fc.constant(new MapCommand((value: any) => value)),
    fc.constant(new ModifyCommand(() => {})),
    fc.constant(new RetrieveCommand()),
    fc.constant(new RetrieveRootCommand())
  ];

  fc.assert(
    fc.property(
      fc.object(),
      fc.commands(immutabilityCommands, MAX_COMMANDS),
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
