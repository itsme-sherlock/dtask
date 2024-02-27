import React, { useState } from "react";

const AddToCart = ({ price }) => {
    console.log("price" + price);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* Price */}
      <div>{price * quantity}</div>
      {/* Button div */}
      <div>
        <button onClick={handleDecrement}>-</button>
        <button>{quantity}</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default AddToCart;
