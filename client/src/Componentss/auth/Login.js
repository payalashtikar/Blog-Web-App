
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleLoginUser = async (event) => {
        event.preventDefault();

        // Simple validation checks
        if (!email || !password) {
            // toast.error('Please fill in all fields');
            alert('Please fill in all fields');
            return;
        }

        const userData = { email, password };
        dispatch(loginUser(userData, navigate));
        setEmail('');
        setPassword('');
        console.log('user logged in')
    };

    return (
        <div className='w-full  h-screen flex justify-center items-center backimage'>
            <form onSubmit={handleLoginUser} className='mt-40 shadow-2xl border rounded-xl p-4 w-96 md:w-500 flex flex-col justify-start'>
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='email' placeholder='enter email here' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='password' placeholder='enter password here' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='p-2 font-bold m-1 text-white mt-4 rounded-lg border font-mono bg-green-500 hover:bg-green-600 transition-colors duration-300' type='submit'>
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default Login;
