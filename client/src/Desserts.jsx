import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Product.js
import React from 'react';

const Desserts = ({ id, name, description, price, addToCart, removeFromCart, quantity }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">${price}</p>

      <div className="flex mt-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 mr-2"
          onClick={() => addToCart({ id, name, price })}
        >
          Add to Cart
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1"
          onClick={() => removeFromCart(id)}
        >
          Remove from Cart
        </button>
        <span className="ml-auto">Qty: {quantity}</span>
      </div>
    </div>
  );
};

export default Desserts;


// const Desserts = () => {
//     return (
//       <>
//       {/* <-------------------------------Header-------------------------------> */}
//       <Header />

//       {/* <-------------------------------Middle Section-------------------------------> */}
//       <div>

//       </div>
//       </>
//     );
// };

// export default Desserts;