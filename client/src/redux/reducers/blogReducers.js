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
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    FETCH_ALL_USERS_BLOGS_REQUEST,
    FETCH_ALL_USERS_BLOGS_SUCCESS,
    FETCH_ALL_USERS_BLOGS_FAIL
} from '../constants/blogConstants';

const initialState = {
    isLoading: false,
    error: null,
    data: [],
    createdBlog: null,
};

export const getAllBlogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOGS_REQUEST:
        case DELETE_BLOG_REQUEST:
            return { ...state, isLoading: true, error: null };
        case GET_ALL_BLOGS_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case DELETE_BLOG_SUCCESS:
            return { ...state, isLoading: false, data: action.payload };
        case GET_ALL_BLOGS_FAIL:
        case DELETE_BLOG_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
export const fetchAllUsersBlogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS_BLOGS_REQUEST:
            return { ...state, loading: true };
        case FETCH_ALL_USERS_BLOGS_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_ALL_USERS_BLOGS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
export const updateBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BLOG_REQUEST:
            return { ...state, isLoading: true, error: null };
        case UPDATE_BLOG_SUCCESS:
            return { ...state, isLoading: false };
        case UPDATE_BLOG_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};
export const createBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BLOG_REQUEST:
            return { ...state, loading: true };
        case CREATE_BLOG_SUCCESS:
            return { ...state, loading: false, createdBlog: action.payload };
        case CREATE_BLOG_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};