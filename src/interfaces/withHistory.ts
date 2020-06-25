import { History } from 'history';

import { Context } from 'interfaces/context.interface';

export type WithHistory<T> = T & { history: History; context: Context };
