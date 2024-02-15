
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import '../Componentss/style.css'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog, fetchData } from '../redux/actions/blogActions';

const HomePage = () => {

    const { data, isLoading, error } = useSelector(state => state.getAllBlogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
    };

   
    return (
        <div id='' className='min-w-full min-h-screen flex justify-center items-center backimage '>

            <div className='flex flex-col items-center mt-40 md:mt-20'>
                {
                    (data.length > 0) ? (
                        <div className="  flex flex-col items-center flex-wrap  justify-center">
                            <i className='text-left font-mono md:m-4  text-blue-200'>list of all blogs you created...</i>
                            {data.map((item, id) => (
                                <div key={id} className="flex flex-col justify-between min-h-[25vh] min-w-[500px] md:min-w-[600px] text-left border rounded-lg p-4 m-4 font-mono transition-transform duration-300 transform hover:scale-105">
                                    <div className='flex flex-col justify-start items-start'>
                                        <p className='font-mono m-2'><b className='font-mono'>Title :</b> {item.title}</p>
                                        <p className='font-mono m-2'><b className='font-mono'>Description :</b> {item.description}</p>
                                    </div>
                                    <div>
                                        <div>
                                            <button className='font-mono m-1 text-1xl text-red-800' onClick={() => handleDelete(item._id)}><RiDeleteBin4Fill /> </button>
                                            <Link className='font-mono m-1 text-1xl font-bold text-green-800' to={'/update-blog/' + item._id}>
                                                <button className='font-mono'><FaEdit /> </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='flex flex-col  md:mt-16 justify-center items-center'>
                            <h1 id='text' className='text-white mt-16 text-2xl md:text-4xl p-2 font-mono' >
                                W-E-L-C-O-M-E
                            </h1>
                            <i className='font-mono'>add blogs  here by clicking on the button above!</i>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;
