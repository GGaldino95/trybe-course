import fetchAllCurrencyData from '../services/fetchCurrencyAPI';

export const LOGIN = 'LOGIN';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

// Coloque aqui suas actions
export const userLogin = (email) => ({
  type: LOGIN,
  email,
});

const receiveCurrencies = (currenciesList) => ({
  type: FETCH_CURRENCIES,
  currenciesList,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    const currenciesList = await fetchAllCurrencyData();
    return dispatch(receiveCurrencies(currenciesList));
  };
}

export const addNewExpense = (newExpense) => ({
  type: ADD_EXPENSE,
  newExpense,
});

export const removeExpense = (expenseToBeRemoved) => ({
  type: REMOVE_EXPENSE,
  expenseToBeRemoved,
});
