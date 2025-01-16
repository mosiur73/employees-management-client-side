import React from 'react';
import img from '../assets/bannar/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center  items-center lg:mt-20'>
            <img className='w-96' src={img} alt="" />
            </div>
           <div className='text-2xl text-center'>
           <Link to='/'><button className='btn btn-accent'><h2 >Go Back Home</h2></button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;