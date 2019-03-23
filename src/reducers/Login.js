import { USER_LOGIN_PROCESS, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actions/Types';
const INITIAL_STATE = { testing: 'inital testinga', email: '', password: '', processing: false };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_LOGIN_PROCESS:
            return { ...state, processing: true }
        case USER_LOGIN_SUCCESS:
            return { ...state, email: action.payload.email, password: action.payload.password, processing: false }
        default:
            return { ...state };
    }
}