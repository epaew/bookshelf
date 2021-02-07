import type { ApplicationError } from '../errors';

declare global {
  type Result<T> = { value: T; error?: undefined } | { value?: undefined; error: ApplicationError };
}
