import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className='item-prices'>
             <div className="item-price-new">
             £{props.new_price}
             </div>
             <div className="item-price-old">
             £{props.old_price}
             </div>
        </div>
        <a href={props.link} className="shop-now">SHOP NOW</a>
        <hr/>
      </div>
      <div className="product-image">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Item;
