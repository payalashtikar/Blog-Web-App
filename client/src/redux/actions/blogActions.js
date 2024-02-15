import axios from 'axios';
import {
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    GET_ALL_BLOGS_FAIL,
    GET_ALL_BLOGS_REQUEST,
    GET_ALL_BLOGS_SUCCESS,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_REQUEST,
    FETCH_ALL_USERS_BLOGS_REQUEST,
    FETCH_ALL_USERS_BLOGS_SUCCESS,
    FETCH_ALL_USERS_BLOGS_FAIL
} from '../constants/blogConstants';

export const fetchData = () => async (dispatch) => {
    dispatch({ type: GET_ALL_BLOGS_REQUEST });
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await fetch('http://localhost:8088/myblogs', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        dispatch({ type: GET_ALL_BLOGS_SUCCESS, payload: data });
        console.log('get all blogs')
    } catch (error) {
        dispatch({ type: GET_ALL_BLOGS_FAIL, payload: error.message });
    }
};

export const fetchAllUsersBlogs = () => async (dispatch) => {
    dispatch({ type: FETCH_ALL_USERS_BLOGS_REQUEST });

    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        const { data } = await axios.get('http://localhost:8088/allblogs', config);

        dispatch({ type: FETCH_ALL_USERS_BLOGS_SUCCESS, payload: data });
        console.log('all users blogs', data)
    } catch (error) {
        dispatch({ type: FETCH_ALL_USERS_BLOGS_FAIL, payload: error.message });
    }
};

export const deleteBlog = (id) => async (dispatch, getState) => {
    dispatch({ type: DELETE_BLOG_REQUEST });
    try {
        await axios.delete(`http://localhost:8088/blogs/${id}`);
        const { data } = getState().getAllBlogs; // Assuming the slice name is 'homePage'
        const updatedData = data.filter(item => item._id !== id);
        dispatch({ type: DELETE_BLOG_SUCCESS, payload: updatedData });
        console.log('blog deleted')
    } catch (error) {
        dispatch({ type: DELETE_BLOG_FAIL, payload: error.message });
    }
};

export const updateBlog = (id, title, description) => async (dispatch) => {
    dispatch({ type: UPDATE_BLOG_REQUEST });
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const response = await fetch(`http://localhost:8088/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, description }),
        });
        const data = await response.json();
        dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data });
        console.log('blog updated')
    } catch (error) {
        dispatch({ type: UPDATE_BLOG_FAIL, payload: error.message });
    }
};

export const createBlog = (title, description) => async (dispatch) => {
    dispatch({ type: CREATE_BLOG_REQUEST });
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        const { data } = await axios.post('http://localhost:8088/myblogs', { title, description }, config);
        dispatch({ type: CREATE_BLOG_SUCCESS, payload: data });
        console.log('blog created')
    } catch (error) {
        dispatch({ type: CREATE_BLOG_FAIL, payload: error.message });
    }
};
