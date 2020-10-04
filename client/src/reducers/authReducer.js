import { REGISTER_USER } from '../actions/types';

const INITIAL_STATE = {
  formData: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return { ...state, formData: payload };
    default:
      return state;
  }
};
