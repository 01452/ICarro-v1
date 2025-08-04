import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

export class ConnectionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class ConflictError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends Error{
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends Error{
  constructor(message: string) {
    super(message);
  }
}

export function handleErrors(error: HttpErrorResponse) {
  if (!error.status) {
    return throwError(new ConnectionError(`Server isn't available, try again`));
  }
  switch (error.status) {
    case 400: return throwError(new BadRequestError('Wrong request params'));
    case 401: return throwError(new AuthorizationError('Wrong email or password'));
    case 403: return throwError(new AuthenticationError('You are not allowed to do this action'));
    case 404: return throwError(new NotFoundError('Not found'));
    case 409: return throwError(new ConflictError('Conflict'));
    default: return throwError(new Error(error.message));
  }
}
