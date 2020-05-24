import { DeepContext } from '../models';

export const retrieve = (context: DeepContext) =>
                        () => context.entry;
