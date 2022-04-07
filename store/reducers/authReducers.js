import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/types/authTypes';


const initialState = {
    loading: false,
    authenticated: false,
    error: null
}

export default (state = initialState, actions) => {
    // console.log('AUTH REDUCERS : ', actions)
    switch (actions.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                loading: actions.payload.loading,
                authenticated: actions.payload.authenticated,
                error: actions.payload.error
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: null
            };
        default:
            return state;
    }
}