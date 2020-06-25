import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { LoginRequest, LoginResponse } from 'interfaces/login.interface';
import { AsyncReducer } from 'interfaces/asyncReducer';
import { userApi } from 'helpers/userApi';
import { WithHistory } from 'interfaces/withHistory';

export const login = createAsyncThunk<LoginResponse, WithHistory<LoginRequest>>(
  'users/login',
  async ({ history, context, ...credentials }) => {
    const response = await userApi.login(credentials);
    history.push(`/${context.shortName}`);

    return response?.data;
  }
);

export const userSlice = createSlice<
  AsyncReducer<LoginResponse>,
  SliceCaseReducers<AsyncReducer<LoginResponse>>
>({
  name: 'users',
  initialState: { data: undefined, isPending: false },
  reducers: {
    login: (state) => {
      state.isPending = true;
      state.data = undefined;
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (state, action: PayloadAction<LoginResponse>) => {
      state.isPending = false;
      state.data = action.payload;
    },
    [login.rejected.type]: (state) => {
      state.isPending = false;
      state.data = undefined;
    },
  },
});
