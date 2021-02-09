import type { ApplicationError } from '../errors';

declare global {
  interface Ok<T> {
    value: T;
    error?: undefined;
  }
  interface Err<T extends Error = ApplicationError> {
    value?: undefined;
    error: T;
  }

  type Result<T, E extends Error = ApplicationError> = Ok<T> | Err<E>;
}
