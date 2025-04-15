import React from 'react';
import bannerImg from '../assets/img/banner.jpg'

const Banner = () => {
    return (
        <div>

            {/* Hero Section */}
            <div className="hero bg-[#9538E2] min-h-screen">
                <div className="hero-content text-center">
                    <div className="text-white">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white text-black border-none rounded-4xl">Shop Now</button>
                    </div>
                </div>
            </div>

            {/* img section */}
            <div className='relative w-3/5 mx-auto flex justify-center items-center -mt-40'>

                {/* Glass Background */}
                <div
                    className="absolute inset-0 rounded-3xl shadow-md"
                    style={{
                        transform: 'scale(1.05)',    // Makes it slightly bigger than the image
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        zIndex: 1,
                        border: '3px solid white'
                    }}
                ></div>

                {/* Image */}
                <div className="relative z-10 flex justify-center">
                    <img className='rounded-3xl' src={bannerImg} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Banner;