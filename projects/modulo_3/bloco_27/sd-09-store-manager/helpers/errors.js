const PRODUCT_EXISTS = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  }
};

const NAME_SIZE = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  }
};

const QUANTITY_VALUE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  }
};

const QUANTITY_TYPE = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  }
};

const WRONG_PRODUCTID_FORMAT = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  }
};

const SALE_NOT_FOUND = {
  err: {
    code: 'not_found',
    message: 'Sale not found',
  }
};

const WRONG_SALEID_FORMAT = {
  err: {
    code: 'invalid_data',
    message: 'Wrong sale ID format',
  }
};

const INVALID_ID_OR_QUANTITY = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  }
};

const INVALID_STOCK_AMOUNT = {
  err: {
    code: 'stock_problem',
    message: 'Such amount is not permitted to sell',
  }
};


module.exports = {
  PRODUCT_EXISTS,
  NAME_SIZE,
  QUANTITY_VALUE,
  QUANTITY_TYPE,
  WRONG_PRODUCTID_FORMAT,
  SALE_NOT_FOUND,
  WRONG_SALEID_FORMAT,
  INVALID_ID_OR_QUANTITY,
  INVALID_STOCK_AMOUNT
};
