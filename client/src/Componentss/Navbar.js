import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/actions/authActions'
const Navbar = () => {
    const isUserLoggedIn = !!localStorage.getItem('token')
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);


    const handleLogout = () => {

        dispatch(logoutUser(navigate))
    }
    return (
        <nav className='absolute shadow-xl z-10  flex min-w-[100%] justify-between items-center    p-4'>
            <div className='font-bold font-mono md:text-4xl text-2xl cursor-pointer ' id='text'>
                <Link className='font-mono' to='/homepage'>
                    Blog-Website
                </Link>
            </div>
            <div className='flex-wrap text-right '>
                {
                    isUserLoggedIn
                        ?
                        (
                            <>
                                <Link to='/homepage' className='p-2 font-mono  text-black'>
                                    <button className=' font-bold hover:bg-blue-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Home
                                    </button>
                                </Link>
                                <Link to='/add-blog' className='p-2 font-mono  text-black'>
                                    <button className=' font-bold hover:bg-blue-600 hover:text-white font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Create
                                    </button>
                                </Link>
                                <Link to='/all-blogs' className='p-2 font-mono  text-black'>
                                    <button className=' font-bold hover:bg-blue-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Blogs
                                    </button>
                                </Link>
                                <button onClick={handleLogout} className=' font-bold m-2 hover:bg-red-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                    Logout
                                </button>
                            </>
                        )
                        :
                        (
                            <div>
                                <Link to='/register'
                                    className='p-2 font-mono  text-black'
                                >
                                    <button className='font-bold hover:bg-blue-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Register
                                    </button>
                                </Link>
                                <Link to='/login'
                                    className='p-2 font-mono  text-black'
                                >
                                    <button className='font-bold hover:bg-green-600 hover:text-white  font-mono py-2 px-4 rounded-lg shadow-lg animated-button btn btn1'>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        )
                }
            </div>
        </nav>
    )
}

export default Navbar

