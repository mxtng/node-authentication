import axios from 'axios';
import { REGISTER_USER } from './types';

export const userRegister = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:3000/register', formData);

    dispatch({
      type: REGISTER_USER,
      payload: data.token,
    });
  } catch (err) {
    console.error(err);
  }
};
