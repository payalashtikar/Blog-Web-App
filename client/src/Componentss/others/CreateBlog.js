
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlog } from '../../redux/actions/blogActions';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error, createdBlog } = useSelector(state => state.createBlog);

    const handleCreateBlog = async (e) => {
        e.preventDefault();

        try {
            await dispatch(createBlog(title, description));
            setTitle('');
            setDescription('');
            navigate('/homepage');
        } catch (error) {
            console.log('creation error', error);
        }

    };
    const goBackToHomepage = () => {
        navigate('/homepage')
    }
    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center backimage'>
            <form onSubmit={handleCreateBlog} className='mt-52 md:mt-16 border rounded-xl p-4 w-[300px] md:w-[500px] flex flex-col justify-start'>
                <input className='font-bold p-2 m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className='font-bold p-2 m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className='flex justify-between'>
                    <button className='font-bold text-white p-2 pl-4 pr-4 m-1 text-green-500 mt-4 rounded-lg border font-mono hover:bg-green-500 hover:text-white transition-colors duration-300' type='submit'>CREATE</button>
                    <button className='font-bold text-white p-2 pl-4 pr-4 m-1 text-red-500 mt-4 rounded-lg border font-mono hover:bg-red-500 hover:text-white transition-colors duration-300' type='button' onClick={() => { setTitle(''); setDescription(''); }}>RESET</button>
                    <button className='font-bold text-white p-2 pl-4 pr-4 m-1 text-red-500 mt-4 rounded-lg border font-mono hover:bg-red-500 hover:text-white transition-colors duration-300' type='button' onClick={goBackToHomepage}>CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
