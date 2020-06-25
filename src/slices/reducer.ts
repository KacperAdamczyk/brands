import { combineReducers } from '@reduxjs/toolkit';

import { context } from './context';
import { userSlice } from './user';
import { snackbarSlice } from './snackbar';

export const reducer = combineReducers({
  context: context.reducer,
  user: userSlice.reducer,
  snackbar: snackbarSlice.reducer,
});
