import React from 'react';
export default function ShopItem(props) {

    const {item} = props;
    return (
            <div key={item.img} className="list_item">
                <img className="list_img" src={item.img} alt="Image"/>
                <span className="list_name">{item.name}</span>
                <span className="list_color">{item.color}</span>
                <span className="card_price">${item.price}</span>
                <span className="card_btn">Add to cart</span>
            </div>
    );

}