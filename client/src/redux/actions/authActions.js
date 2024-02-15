
import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/authConstants';

export const registerUser = (userData, navigate) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
        const response = await axios.post('http://localhost:8088/register', userData);
        console.log('Response from server:', response); // Debugging: Log response data
        dispatch({ type: USER_REGISTER_SUCCESS });
        alert('Registration Success'); // Display alert
        navigate('/login');
    } catch (error) {
        // console.error('Error registering user:', error); // Debugging: Log error
        alert('Error registering user - User already exists.'); // Display alert
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
};
export const loginUser = (userData, navigate) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const response = await axios.post('http://localhost:8088/login', userData);
        const token = response.data.token;
        console.log(token);
        alert('Login Successful!');
        dispatch({ type: USER_LOGIN_SUCCESS, payload: token });
        navigate('/homepage');
        window.location.reload();
        localStorage.setItem('token', token);
    } catch (error) {
        console.log('Unable to login');
        dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
};
export const logoutUser = (navigate) => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        dispatch({ type: USER_LOGOUT_SUCCESS });
        console.log('user logged-out')
        navigate('/');
    } catch (error) {
        console.error('Unable to logout', error);
    }
};