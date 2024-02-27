import React from 'react';
import { Link } from 'react-router-dom';

import Circle from './circles';

const Cards = ({ imageUrl, name, price,addToCart }) => {
  const circles = Array.from({ length: 4 }, (_, index) => <Circle key={index} index={index} />);

  return (
    <div style={{ background: '#ffffff', width: '40%', borderRadius: '1rem', margin: '1rem', padding: '1rem', display: 'grid', gap: '1rem' }}>
      {/* image for the card */}
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
      {/* name of the card */}
      <div style={{ fontWeight: '800', fontSize: '1.5rem', display: 'flex', justifyContent: 'center' }}>{name}</div>
      {/* 4 icons under the image */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {circles}
      </div>
      {/* price tag and select button*/}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
        {/* price tag text */}
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0', fontSize: '1rem' }}>get the device for&nbsp;<div style={{ margin: '0', fontSize: '2rem' }}>Rs. {price}</div></div>
        </div>
        {/* select button  */}
        <Link to = '/add-to-cart' ><button onClick={() => addToCart(price)} style={{ backgroundColor: '#c14e4e', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', width: '5rem', height: '2rem' ,cursor:'pointer', }}>SELECT</button></Link>
      </div>
    </div>
  );
};

export default Cards;
