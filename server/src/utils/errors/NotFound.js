import httpStatus, { NOT_FOUND } from 'http-status';
import { errors } from 'server/src/utils/constants/errors';
import { BaseError } from './BaseError';

class NotFound extends BaseError {
  constructor(message) {
    super(errors.not_found, NOT_FOUND, message || httpStatus['404_MESSAGE']);
  }
}

export { NotFound };
