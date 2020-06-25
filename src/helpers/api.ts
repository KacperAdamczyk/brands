import axios from 'axios';

const baseURL = 'https://5ef0d46a1faf160016b4cfc9.mockapi.io/api/';

export const axiosInstance = axios.create({
  baseURL,
});

export function fail(probability: number, errorMessage: string) {
  const isFailed = Math.random() < probability;

  if (isFailed) return Promise.reject(new Error(errorMessage));

  return Promise.resolve();
}
