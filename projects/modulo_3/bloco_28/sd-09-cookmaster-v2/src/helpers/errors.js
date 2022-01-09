const {
  BAD_REQUEST,
  UNAUTHORIZED,
  CONFLICT,
  NOT_FOUND,
} = require('./httpStatus');

const ALREADY_EXISTS = {
  error: { message: 'Email already registered' },
  status: CONFLICT,
};

const INVALID_ENTRIES = { 
  error: { message: 'Invalid entries. Try again.' },
  status: BAD_REQUEST,
};

const EMPTY_FIELD = {
  error: { message: 'All fields must be filled' },
  status: UNAUTHORIZED,
};

const INCORRECT_CREDENTIALS = {
  error: { message: 'Incorrect username or password' },
  status: UNAUTHORIZED,
};

const JWT_ERROR = {
  error: { message: 'jwt malformed' },
  status: UNAUTHORIZED,
};

const TOKEN_NOT_FOUND = {
  error: { message: 'missing auth token' },
  status: UNAUTHORIZED,
};

const RECIPE_NOT_FOUND = {
  error: { message: 'recipe not found' },
  status: NOT_FOUND,
};

module.exports = {
  ALREADY_EXISTS,
  INVALID_ENTRIES,
  EMPTY_FIELD,
  INCORRECT_CREDENTIALS,
  JWT_ERROR,
  TOKEN_NOT_FOUND,
  RECIPE_NOT_FOUND,
};
