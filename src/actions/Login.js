import axios from 'axios';
import { USER_LOGIN } from './Types';

export const userLogin = (email, password) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN,
            payload: {
                email,
                password
            }
        })
    }
}