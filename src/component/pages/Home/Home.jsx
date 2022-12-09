import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Link className='px-4 py-2.5 rounded hover:scale-110 duration-700 bg-green-600 text-white hover:bg-rose-700 hover:text-white' to='/login'>Go to Dashboard</Link>
        </div>
    );
};

export default Home;