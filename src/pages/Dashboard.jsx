import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [btnActive, setBtnActive] = useState('');
  
    return (
        <div>
            {/* Hero Section */}
            <div className="hero bg-[#9538E2]">
                <div className="hero-content text-center">
                    <div className="text-white">
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="py-4">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <NavLink
                            to={'/dashboard/cart'}
                            onClick={() => setBtnActive('cart')}
                            className={`btn btn-wide  border-white  rounded-4xl mr-5 ${btnActive === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Cart</NavLink>
                        <NavLink
                            to={'/dashboard/wishlist'}
                            onClick={() => setBtnActive('wishlist')}
                            className={`btn btn-wide border-white  rounded-4xl mr-5 ${btnActive === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Wishlist</NavLink>
                    </div>
                </div>
            </div>



            {/* card of cart */}

            <Outlet />

        </div>
    );
};

export default Dashboard;