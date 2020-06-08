import React from 'react';
import ShopCard from './ShopCard';

export default function CardsView(props) {

    const {cards} = props;

    return (
        <div className="list_wrapper">
            {cards.map(o => <ShopCard item={o} key={o.img}/>)}
        </div>
    );

}