import httpStatus, { BAD_REQUEST } from 'http-status';
import { errors } from 'server/src/utils/constants/errors';
import { BaseError } from './BaseError';

class BadRequest extends BaseError {
  constructor(message) {
    super(errors.validation, BAD_REQUEST, message || httpStatus['400_MESSAGE']);
  }
}

export { BadRequest };
