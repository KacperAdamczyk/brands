import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
} from '@reduxjs/toolkit';

export const snackbarSlice = createSlice<
  string | undefined,
  SliceCaseReducers<string | undefined>
>({
  name: 'snackbar',
  initialState: '',
  reducers: {
    openSnackbar: (state, action: PayloadAction<string>) => action.payload,
    closeSnackbar: () => '',
  },
});
