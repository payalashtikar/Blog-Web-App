
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBlog } from '../../redux/actions/blogActions';

const UpdateBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const handleUpdateBlog = async (e) => {
        e.preventDefault();
        dispatch(updateBlog(params.id, title, description));
        navigate('/homepage');
    };
  
    const handleReset = () => {
        setTitle('');
        setDescription('');
    };

    const handleCancel = () => {
        navigate('/homepage');
    };

    return (
        <div className='w-full min-h-[80vh] flex justify-center items-center backimage'>
            <form onSubmit={handleUpdateBlog} className='mt-52 md:mt-16 border rounded-xl p-4 w-[300px] md:w-[500px] flex flex-col justify-start'>
                <input className='font-bold p-2 m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className='font-bold p-2 m-1 mt-2 rounded-lg border font-mono' type='text' placeholder='enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className='flex justify-between'>
                    <button className='text-white font-bold p-2 pl-4 pr-4 m-1  mt-4 rounded-lg border font-mono hover:bg-green-500 hover:text-white transition-colors duration-300' type='submit'>UPDATE</button>
                    <button className='text-white font-bold p-2 pl-4 pr-4 m-1  mt-4 rounded-lg border font-mono hover:bg-red-500 hover:text-white transition-colors duration-300' type='button' onClick={() => handleReset}>RESET</button>
                    <button className='text-white font-bold p-2 pl-4 pr-4 m-1  mt-4 rounded-lg border font-mono hover:bg-red-500 hover:text-white transition-colors duration-300' type='button' onClick={() => handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBlog;
