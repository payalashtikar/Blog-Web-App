import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersBlogs } from '../../redux/actions/blogActions';

const FetchAllBlogs = () => {
    let itemPerPage = 5;
    // const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [searchItem, setSearchItem] = useState('');
    const { data, loading, error } = useSelector(state => state.fetchAllUsersBlogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsersBlogs());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage
    const currentData = filteredData.slice(startIndex, endIndex)

    const handleSearchItem = (e) => {
        setCurrentPage(1)
        setSearchItem(e.target.value)
    }

    const formattedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const handlePageChange = (newpage) => {
        setCurrentPage(newpage)
    }

    return (
        <div className='w-full min-h-[100vh] flex justify-center items-center backimage'>


            <div className='p-4 mt-56 md:mt-20 flex flex-col '>
                <i className='md:m-8 font-mono text-blue-200'>list of all blogs...</i>


                <input className='m-4 border-b-2   bg-transparent text-white font-mono font-bold' type='text' placeholder='search' value={searchItem} onChange={handleSearchItem} />
                {currentData && currentData.map((item, id) => (
                    <div key={id} className='flex flex-col justify-between min-h-[30vh] w-[500px] md:w-[600px] border rounded-lg p-4 m-4 font-mono text-left transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'>

                        <div>
                            <p className='font-mono m-2 font-bold'><b className='font-mono font-bold'>Title :</b> {item.title}</p>
                            <p className='font-mono m-2 font-bold'><b className='font-mono font-bold'>Description :</b> {item.description}</p>
                            <p className='font-mono m-2 font-bold'><b className='font-mono font-bold'>Created At :</b> {formattedDate(item.createdAt)}</p>
                        </div>
                        <div>
                            <p className='font-mono m-2 text-1xl font-bold'><b className='font-mono font-bold'>Created by :</b> {item.user && item.user.username}</p>
                        </div>
                    </div>
                ))}
                <div className='flex justify-between mt-4'>
                    <button className='text-white font-bold' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        <FaArrowAltCircleLeft />
                    </button>
                    <span className='font-mono text-blue-200 font-bold'> {currentPage}</span>
                    <button className='text-white font-bold' onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= filteredData.length}>
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FetchAllBlogs;
