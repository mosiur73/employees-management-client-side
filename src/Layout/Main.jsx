import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='px-6'>
            <Navbar></Navbar>
            <main className='mb-2 mt-10'>
            <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;