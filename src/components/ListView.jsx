import React from 'react';
import ShopItem from './ShopItem';

export default function ListView(props) {

    const {cards} = props;

    return (
        <div className="list_wrapper">
            {cards.map(o => <ShopItem item={o} key={o.img}/>)}
        </div>
    );

}