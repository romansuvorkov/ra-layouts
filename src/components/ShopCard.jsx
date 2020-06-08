import React from 'react';
export default function ShopCard(props) {

    const {item} = props;
    const background = {
        backgroundImage: `url(${item.img})`
    }
    console.log(background);
    return (
            <div key={item.img} className="card_item" style={background}>
                <span className="card_name">{item.name}</span>
                <span className="card_color">{item.color}</span>
                <div className="price_wrapper">
                    <span className="card_price">${item.price}</span>
                    <span className="card_btn">Add to cart</span>
                </div>
            </div>
    );

}