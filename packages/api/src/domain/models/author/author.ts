import { AuthorId, AuthorName } from '../../value-objects';

interface Params {
  id: AuthorId;
  name: AuthorName;
}

export class Author {
  #id!: AuthorId;
  #name!: AuthorName;

  constructor(params?: Params) {
    if (params) {
      this.#id = params.id;
      this.#name = params.name;
    }
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
}
