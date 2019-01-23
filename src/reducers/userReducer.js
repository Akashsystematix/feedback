import { USER_LOGIN } from '../actions/Type';
export default (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state,user_login: action.payload };
        default:
            return state;
    }
}