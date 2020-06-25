import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Context } from 'interfaces/context.interface';
import { contextA } from 'constants/contexts';

const context = createSlice<Context, SliceCaseReducers<Context>>({
  name: 'context',
  initialState: contextA,
  reducers: {
    changeContext: (state, action: PayloadAction<Context>) => action.payload,
  },
});

export { context };
