import { ErrorRecordInfo, FieldValidationErrorCode } from '../../errors';

export abstract class BaseValidator {
  private static ErrorRecordInfoBuilder = class ErrorRecordInfoBuilder {
    #entityName: string;
    #invalidFields: ErrorRecordInfo['invalidFields'];

    constructor(entityName: string) {
      this.#entityName = entityName;
      this.#invalidFields = {};
    }

    build(): ErrorRecordInfo | null {
      /*
       * NOTE:
       *   > Object.keys({ a: undefined })    //=> ['a']
       *   > JSON.stringify({ a: undefined }) //=> '{}'
       */
      if (JSON.stringify(this.#invalidFields) === '{}') return null;

      return {
        entityName: this.#entityName,
        invalidFields: this.#invalidFields,
      };
    }

    clear(): void {
      this.#invalidFields = {};
    }

    push(field: string, code: FieldValidationErrorCode): void {
      this.#invalidFields[field] ? this.#invalidFields[field].push(code) : (this.#invalidFields[field] = [code]);
    }
  };

  protected readonly errorRecordInfoBuilder;

  constructor(entityName: string) {
    this.errorRecordInfoBuilder = new BaseValidator.ErrorRecordInfoBuilder(entityName);
  }

  abstract validate(target: any): Promise<Result<true>>;
}
