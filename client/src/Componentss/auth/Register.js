
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
// import { Toast, ToastContainer } from 'react-toastify/dist/components';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add state for loading animation
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const handleRegisterUser = async (event) => {
        event.preventDefault();

        // Simple validation checks
        if (!username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return;
        }
        // Password length validation
        if (password.length < 3) {
            alert('Password must be at least 6 characters long');
            return;
        }

        const userData = { username, email, password };
        dispatch(registerUser(userData, navigate));
        setUsername('');
        setEmail('');
        setPassword('');
        // console.log('user register in')
    };

    return (
        <div className='w-full h-screen flex justify-center items-center backimage'>
            <form onSubmit={handleRegisterUser} className='mt-40 shadow-2xl border rounded-xl p-4 w-96 md:w-500 flex flex-col justify-start'>
                <input className='p-2  font-bold m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter username here' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='email' placeholder='enter email here' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='p-2 font-bold m-1 mt-2 rounded-lg border font-mono' type='password' placeholder='enter password here' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={`p-2 font-bold m-1 text-white mt-4 rounded-lg border font-mono bg-green-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`} type='submit'>
                    {isLoading ? 'Loading...' : 'REGISTER'}
                </button>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;
