import axios from 'axios';
import { REGISTER_USER } from './types';

export const userRegister = (formData, callback) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'http://localhost:3000/register',
      formData
    );

    dispatch({
      type: REGISTER_USER,
      payload: data.token,
    });

    localStorage.setItem('token', data.token);
    callback();
  } catch (err) {
    console.error(err);
  }
};
