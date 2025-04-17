import React, { useEffect, useState } from 'react';
import { getAllWishlists, removeWishlist } from '../utils';
import { ImCross } from "react-icons/im";

const Wishlist = () => {

    const [wishlists, setWishlists] = useState([]);

    const handleRemoveWishlist = id => {
        removeWishlist(id)
        const carts = getAllWishlists()
        setWishlists(carts)
    }


    useEffect(() => {
        const carts = getAllWishlists()
        setWishlists(carts)
    }, [])
    return (
        <div>

                        {/* Cart Section */}
                        <div className='flex justify-between p-12'>
                <div>
                    <h1 className='text-2xl font-bold'>Wishlist</h1>
                </div>

                
            </div>


            {
                wishlists.map(card => (

                    <div className="hero bg-base-200 container mx-auto w-9/10 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={card.pic}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl font-bold">{card.name}</h1>
                                <p className="py-6">
                                    {card.description}
                                </p>
                                <p className='font-bold'>Price: {card.price} $</p>
                            </div>
                            <button onClick={() => handleRemoveWishlist(card.id)}><ImCross /></button>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};

export default Wishlist;