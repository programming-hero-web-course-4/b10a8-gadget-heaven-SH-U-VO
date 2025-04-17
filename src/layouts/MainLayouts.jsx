import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    return (
        <div>
            <ToastContainer />
            {/* Navbar */}
            <div className='h-16'>
                <Navbar />
            </div>

            <div className=' container mx-auto mb-12'>
                {/* Dynamic Section */}
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;