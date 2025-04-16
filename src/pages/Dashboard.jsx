import React from 'react';

const Dashboard = () => {
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
        </div>
    );
};

export default Dashboard;