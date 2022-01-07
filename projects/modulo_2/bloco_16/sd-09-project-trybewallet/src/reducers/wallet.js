// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currenciesList: {},
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return {
      ...state,
      currenciesList: action.currenciesList,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.newExpense],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: action.expenseToBeRemoved, // Substitui o array existente por um novo array sem o elemento que foi excluido
    };
  default:
    return state;
  }
};

export default wallet;
