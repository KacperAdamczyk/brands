import { AxiosResponse } from 'axios';

import { axiosInstance, fail } from './api';
import { LoginRequest, LoginResponse } from 'interfaces/login.interface';
import { store } from 'config/store';
import { snackbarSlice } from 'slices/snackbar';

async function login(userCredentials: LoginRequest) {
  try {
    const [response] = await Promise.all([
      axiosInstance.post<LoginRequest, AxiosResponse<LoginResponse>>(
        '/login',
        userCredentials
      ),
      fail(0.5, 'Invalid credentials'),
    ]);

    return response;
  } catch (error) {
    store.dispatch(snackbarSlice.actions.openSnackbar(error.message));

    throw error;
  }
}

const userApi = {
  login,
};

export { userApi };
