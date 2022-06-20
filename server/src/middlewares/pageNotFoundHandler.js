import { NOT_FOUND } from 'http-status';
import { errors } from 'server/src/utils/constants/errors';
import { createErrorResponse } from 'server/src/utils/functions';

const pageNotFoundHandler = (req, res) =>
  res.status(NOT_FOUND).json(createErrorResponse(NOT_FOUND, errors.not_found, undefined, '404 - Page not found'));

export { pageNotFoundHandler };
