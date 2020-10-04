import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = {
  authenticated: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { ...state, authenticated: payload };
    case LOGOUT_USER:
      return { ...state, authenticated: null };
    default:
      return state;
  }
};
