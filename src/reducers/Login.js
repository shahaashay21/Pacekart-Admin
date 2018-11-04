import { USER_LOGIN } from '../actions/Types';
const INITIAL_STATE = { testing: 'inital testinga', loginData: '' };

export default(state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_LOGIN:
            return { ...state, loginData: action.payload }
        default:
            return state;
    }
}