export abstract class UsecaseError extends Error {}

export class EntityNotFoundError extends UsecaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'EntityNotFoundError';
  }
}

export class EntityNotSavedError extends UsecaseError {
  constructor(message?: string) {
    super(message);
    this.name = 'EntityNotSavedError';
  }
}
