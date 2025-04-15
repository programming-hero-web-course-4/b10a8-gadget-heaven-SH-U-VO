import React from 'react';

const Card = ({ card }) => {

    const {pic, name, price} = card;
    return (
        <div>

            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-50 h-35 object-fit'
                        src={pic}
                         />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price} $</p>
                    <div className="card-actions justify-start">
                        <button className="btn rounded-4xl text-[#9538E2] border border-[#9538E2]">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;