import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';


const Cards = () => {
    const data = useLoaderData();
    const { category } = useParams()
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (category === 'All Product') {
            setCards(data);
        } else if (category) {
            const filteredByCategory = data.filter(card => card.category === category);
            setCards(filteredByCategory);
        } else {
            setCards(data); // show all data when no category is selected.
        }
    }, [category, data]);
    return (
        <div>
            <div className=' grid grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cards.map(card => (
                        <Card key={card.id} card={card} />
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;