type Result<T, E extends Error = Error> = { value: T; error: undefined } | { value: undefined; error: E };
