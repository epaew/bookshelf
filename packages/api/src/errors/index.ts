type ErrorCode =
  | 'BAD_USER_INPUT'
  | 'FORBIDDEN'
  | 'RECORD_INVALID'
  | 'RECORD_NOT_FOUND'
  | 'RECORD_NOT_SAVED'
  | 'UNAUTHENTICATED'
  | 'UNEXPECTED_ERROR';
export type FieldValidationErrorCode =
  | 'not_unique'
  | 'required'
  | `too_large:maximum:${number}`
  | `too_long:maximum:${number}`
  | `too_small:minimum:${number}`
  | `too_short:minimum:${number}`;

export interface ErrorRecordInfo {
  entityName: string;
  invalidFields: {
    [field: string]: FieldValidationErrorCode[];
  };
}

export class ApplicationError extends Error {
  readonly name = 'ApplicationError';
  readonly code;
  readonly additionalProperties;

  constructor(code: 'BAD_USER_INPUT' | 'RECORD_INVALID', additionalProperties: ErrorRecordInfo);
  constructor(
    code: Exclude<ErrorCode, 'BAD_USER_INPUT' | 'RECORD_INVALID'>,
    additionalProperties?: Record<string, any>,
  );
  constructor(code: ErrorCode, additionalProperties?: Record<string, any>) {
    super();

    this.code = code;
    this.additionalProperties = additionalProperties;
  }
}
