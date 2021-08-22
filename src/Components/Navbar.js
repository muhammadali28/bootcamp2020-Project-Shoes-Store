import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
      <img src="https://boltshoes.pk/wp-content/uploads/2021/04/cropped-retina-white-logo-e1619431349847.jpeg"
      className="imge"
       alt='logo'/>
      </Link>
      <Link to="/" className="link1">Home</Link>
      <Link to="/about" className="link1">About</Link>
      <Link to="/product" className="link1">Product</Link>
    </div>
  );
}

export default Navbar;
