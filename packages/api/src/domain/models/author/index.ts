import { AuthorId, AuthorName } from '../value-objects';

import { AuthorValidator } from './author-validator';

export interface AuthorParams {
  id: AuthorId;
  name: AuthorName;
}

export class Author {
  #validator: AuthorValidator;

  #id!: AuthorId;
  #name!: AuthorName;

  constructor(validator: AuthorValidator, params: AuthorParams) {
    this.#validator = validator;

    this.#id = params.id;
    this.#name = params.name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  async validate() {
    return this.#validator.validate(this);
  }
}
