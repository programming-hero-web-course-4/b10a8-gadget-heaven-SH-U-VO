import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";
import { CiStar } from "react-icons/ci";
import { addCart, addWishlist, getAllCarts } from '../utils';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [isCart, setIsCart] = useState(false)

    useEffect(() => {
        const singleData = data.find((card) => card.id == id);
        setCard(singleData);

        const charts = getAllCarts()
        const isExist = charts.find(item => item.id == singleData.id)
        if (isExist) {
            setIsCart(true)
        }
    }, [data, id]);

    if (!card) {
        return <div>Loading...</div>;
    }

    const { name, price, available, description, specification, rating, pic } = card;

    // Handle Add to chart btn click
    const handleCart = card => {
        addCart(card)
        setIsCart(true)
    }

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#9538E2] h-80">
                <div className="text-center ">
                    <div className="text-white p-5">
                        <h1 className="text-5xl font-bold">Product Details</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>

            {/* card section */}
            <div className='relative w-3/5 mx-auto flex justify-center items-center -mt-40'>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={pic} className="max-w-sm rounded-lg shadow-2xl" alt={name} />
                        <div>
                            <h1 className="text-3xl font-bold p-3">{name}</h1>
                            <h3 className='font-bold p-3'>Price: ${price}</h3>
                            <div className={`btn btn-primary rounded-4xl p-3 border-2 bg-[#e4fddb] ${available ? 'border-green-600 text-green-700' : 'border-red-600 text-red-700'}`}>
                                {available ? 'In Stock' : 'Out of Stock'}
                            </div>
                            <p className="py-6">{description}</p>
                            {specification && (
                                <p>
                                    <span className='font-bold'>Specification: </span> <br />
                                    1. Color: {specification.color} <br />
                                    2. Weight: {specification.weight} <br />
                                    3. Warranty: {specification.warranty} <br />
                                    4. Brand: {specification.brand}
                                </p>
                            )}

                            <div className="mt-4">
                                <div className='flex items-center gap-2 font-bold'>
                                    Rating <CiStar />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <input
                                                key={star}
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                aria-label={`${star} star`}
                                                defaultChecked={star === Math.round(rating)}
                                            />
                                        ))}
                                    </div>
                                    <h2 className='font-bold'>{rating}</h2>
                                </div>
                            </div>
                            <div className='flex gap-4 items-center mt-4'>
                                <button
                                    disabled={isCart}
                                    onClick={() => handleCart(card)}
                                    className="btn btn-wide bg-[#9538E2] text-white rounded-4xl">
                                    Add To Cart
                                    <MdOutlineShoppingCart className='text-xl' />
                                </button>
                                <FcLikePlaceholder
                                    className='text-3xl'
                                    onClick={() => addWishlist(card)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
