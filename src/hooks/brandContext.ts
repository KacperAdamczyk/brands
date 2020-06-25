import { useSelector } from 'react-redux';

import { Context } from 'interfaces/context.interface';
import { State } from 'interfaces/state.interface';

export function useBrandContext(): Context {
  return useSelector<State, Context>(({ context }) => context);
}
