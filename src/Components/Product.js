import React from 'react';
import Shoes from './../shoes.json';
import {Link} from 'react-router-dom';


function Product() {
  
  return (
    <div className="pro">
      <h1>Product</h1>
      <div className="productlist">
        {Object.keys(Shoes).map(keyName=>{
          const shoe = Shoes[keyName];
          return(
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
                <h2>{shoe.name}</h2>
                <img src={shoe.img} height={150}/>
                <h2>{shoe.price}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Product;
