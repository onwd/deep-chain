import { Context } from '../models';

export const retrieve = (context: Context) =>
                        () => context.entry;
