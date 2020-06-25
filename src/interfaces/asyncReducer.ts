export interface AsyncReducer<T> {
  isPending: boolean;
  data?: T;
}
