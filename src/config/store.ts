import { configureStore } from '@reduxjs/toolkit';

import { reducer } from 'slices/reducer';

export const store = configureStore({
  reducer,
});
