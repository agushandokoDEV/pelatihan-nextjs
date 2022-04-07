import { setCookie, destroyCookie } from 'nookies'
import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/types/authTypes';
import Api from "@/helpers/Api";
import jwt from 'jsonwebtoken'
import Router from 'next/router';

const AUTH_LOGIN_ACTIONS = (params) => {

    return async (dispatch) => {
        dispatch({
            type: AUTH_LOGIN,
            payload: {
                loading: true,
                authenticated: false
            }
        });

        Api.post('authority/auth/login/password', params)
            .then(({ data }) => {
                if (data.status) {
                    let token = data.data.access_token;
                    let user = jwt.decode(token)
                    console.log('data jwt ', data)
                    console.log('token jwt ', token)
                    console.log('decode jwt ', user)
                    dispatch({
                        type: AUTH_LOGIN,
                        payload: {
                            loading: false,
                            authenticated: true,
                            error: null,
                        }
                    });
                    // Set
                    setCookie(null, 'token', token, {
                        maxAge: 30 * 24 * 60 * 60,
                        path: '/',
                    })
                    Router.push('/')
                } else {
                    dispatch({
                        type: AUTH_LOGIN,
                        payload: {
                            loading: false,
                            authenticated: false,
                            error: data.message,
                        }
                    });
                }

                // localStorage.setItem("token", token);
                // localStorage.setItem("token_type", res.data.token_type);

                // nookies.set(null, 'token', token, {
                //     maxAge: 30 * 24 * 60 * 60,
                //     path: '/',
                // });



                // router.replace('/')
                // data.isLogin = true;


            }).catch((err) => {
                // data.error = err.message
                dispatch({
                    type: AUTH_LOGIN,
                    payload: {
                        loading: false,
                        authenticated: false,
                        error: err.message,
                    }
                });
            });
    }
}

const AUTH_LOGOUT_ACTIONS = () => {
    console.log('LOGOUT')
    return async (dispatch) => {
        // destroyCookie(null, 'token')
        dispatch({
            type: AUTH_LOGOUT,
            payload: {
                loading: false,
                authenticated: false,
                error: null,
            }
        });

    }
}

export { AUTH_LOGIN_ACTIONS, AUTH_LOGOUT_ACTIONS }