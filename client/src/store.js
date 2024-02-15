import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { loginReducer, registerReducer } from './redux/reducers/authReducers'
import { createBlogReducer, fetchAllUsersBlogsReducer, getAllBlogsReducer, updateBlogReducer } from './redux/reducers/blogReducers'


const reducer = combineReducers({
    userRegister: registerReducer,
    userLogin: loginReducer,
    getAllBlogs: getAllBlogsReducer,
    updateBlogs: updateBlogReducer,
    createBlog: createBlogReducer,
    fetchAllUsersBlogs: fetchAllUsersBlogsReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;