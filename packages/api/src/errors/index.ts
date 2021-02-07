export abstract class ApplicationError extends Error {}

export class ForbiddenOperationError extends ApplicationError {}
export class RecordInvalidError extends ApplicationError {}
export class RecordNotFoundError extends ApplicationError {}
export class RecordNotSavedError extends ApplicationError {}
export class UnexpectedError extends ApplicationError {}
