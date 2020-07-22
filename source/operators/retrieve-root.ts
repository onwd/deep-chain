import { Context } from '../models';

export const retrieveRoot = (context: Context) =>
                            () => context.rootWrapper.root;
