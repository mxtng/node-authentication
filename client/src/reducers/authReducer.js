import { REGISTER_USER } from '../actions/types';

const INITIAL_STATE = {
  isAuthenticated: null,
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return { ...state, isAuthenticated: true, token: payload };
    default:
      return state;
  }
};
