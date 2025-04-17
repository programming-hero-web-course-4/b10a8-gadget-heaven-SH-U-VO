import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <ToastContainer />
      {/* Navbar */}
      <div className={isHomePage ? 'h-0 text-white' : 'h-16 bg-base-100 shadow-sm'}>
        <Navbar isHomePage={isHomePage} />
      </div>

      <div className='container mx-auto mb-12'>
        {/* Dynamic Section */}
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;