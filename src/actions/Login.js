import axios from 'axios';
import { URL } from '../Config';
import { USER_LOGIN_PROCESS, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from './Types';

axios.defaults.withCredentials = true

export const userLogin = (email, password) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_PROCESS });
        
        axios.post(`${URL}/login`, {
            email,
            password
        }).then(response => {
            console.log(response.data);
        });
    }
}