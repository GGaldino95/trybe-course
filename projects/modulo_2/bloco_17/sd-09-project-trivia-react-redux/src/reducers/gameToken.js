import { NEW_GAME } from '../actions';

const INITIAL_STATE = {
  token: localStorage.getItem('token') || '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_GAME:
    return action.gameToken.token;
  default:
    return state;
  }
};

export default token;
