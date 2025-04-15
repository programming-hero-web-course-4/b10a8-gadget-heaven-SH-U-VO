import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';

const Home = () => {

    const categories = useLoaderData();
    return (
        <div>
            {/*Banner  */}
            <Banner />

            <div className='flex items-center flex-col  mt-20'>
                <div className='text-3xl font-semibold'>Gadget Heaven</div>
            </div>


            <div className='flex mt-10 gap-10'>
                {/* Categories */}
                <div className='w-1/4 p-5'>
                    <Categories categories={categories} />
                </div>
                {/* Card Section */}
                <div className='w-3/4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;