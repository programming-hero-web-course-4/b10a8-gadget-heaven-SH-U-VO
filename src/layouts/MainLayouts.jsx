import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>

            {/* Navbar */}
            <div className='h-16'>
                <Navbar />
            </div>

            <div className='py-12 container mx-auto px-12'>
        {/* Dynamic Section */}
        <Outlet />
      </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;