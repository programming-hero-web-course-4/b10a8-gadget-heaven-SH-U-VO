import React, { useEffect, useState } from 'react';
import { getAllCarts, removeAllCart, removeCart, sortCartsByPrice } from '../utils';
import { ImCross } from "react-icons/im";
import { GiSettingsKnobs } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const [active, setActive] = useState('');
    const [cards, setCards] = useState([])

    const handleOpenPurchaseModal = () => {
        document.getElementById('my_modal_1').showModal()
    }


    const handleRemoveCart = id => {
        removeCart(id)
        const carts = getAllCarts()
        setCards(carts)
    }

    useEffect(() => {
        const carts = getAllCarts()
        setCards(carts)
    }, [])
    return (
        <div>

            {/* Cart Section */}
            <div className='flex justify-between p-12'>
                <div>
                    <h1 className='text-2xl font-bold'>Cart</h1>
                </div>

                <div className='flex gap-5 items-center'>
                    <p className='font-bold'>Total cost: ${cards.reduce((total, card) => total + card.price, 0).toFixed(2)}</p>

                    <button
                        onClick={() => {
                            setActive('sort');
                            sortCartsByPrice();
                        }}
                        className={`btn border-[#9538E2] rounded-4xl mr-5 ${active === 'sort' ? 'bg-[#9538E2] text-white' : 'bg-white text-[#9538E2]'}`}
                    >
                        Sort by price
                    </button>

                    <button
                        onClick={() => {
                            setActive('purchase');
                            handleOpenPurchaseModal();
                            removeAllCart();
                        }}
                        className={`btn border-[#9538E2] rounded-4xl mr-5 ${active === 'purchase' ? 'bg-[#9538E2] text-white' : 'bg-white text-[#9538E2]'}`}
                    >
                        Purchase <GiSettingsKnobs />
                    </button>
                </div>
            </div>





            {/* card of cart */}

            {
                cards.map(card => (

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
                            <button onClick={() => handleRemoveCart(card.id)}><ImCross /></button>
                        </div>

                        {/* Purchase Modal */}

                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <NavLink to={'/'} className="btn">Close</NavLink>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                ))
            }
        </div>
    );
};

export default Cart;