// import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from './';

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/authConstants";

const initialState = {
    isLoading: false,
    error: null,
    token: localStorage.getItem('token') || null,
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { ...state, isLoading: true, error: null };
        case USER_REGISTER_SUCCESS:
            return { ...state, isLoading: false };
        case USER_REGISTER_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state, loading: true };
        case USER_LOGIN_SUCCESS:
            return { ...state, isLoading: false, token: action.payload, error: null };
        case USER_LOGIN_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case USER_LOGOUT_SUCCESS:
            // return { ...state, isLoading: true, error: null };
            return { ...state, token: null }
        default:
            return state;
    }
};
