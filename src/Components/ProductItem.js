import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
  const{ id } = useParams();
  const shoe = Shoes[id];
  if(!shoe)
  return <h2>Product not found!</h2>

  return (
    <div classname="pro" >
      <h1>Bolt Shoes</h1>
      <div className="link"> 
        <h1>{shoe.name}</h1>
        <img src={shoe.img} height="400"/>
        <h2>{shoe.price}</h2>
      </div>
    </div>
  );
}

export default ProductItem;
