// // // App.js
// // import React, { useState } from 'react';
// // import Desserts from './Desserts';
// // import Cart from './Cart';

// // const AddItems = () => {
// //   const [cartItems, setCartItems] = useState([]);

// //   const addToCart = (item) => {
// //     const existingItem = cartItems.find((i) => i.id === item.id);

// //     if (existingItem) {
// //       setCartItems(
// //         cartItems.map((i) =>
// //           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
// //         )
// //       );
// //     } else {
// //       setCartItems([...cartItems, { ...item, quantity: 1 }]);
// //     }
// //   };

// //   const removeFromCart = (itemId) => {
// //     setCartItems(cartItems.filter((item) => item.id !== itemId));
// //   };

// //   return (
// //     <div className="container mx-auto p-4 bg-white">
// //       <h1 className="text-3xl text-center mt-40 font-semibold mb-4">React Shopping Cart</h1>

// //       <div className="text-center grid grid-cols-1 gap-4">
// //         <Desserts
// //           id={1}
// //           name="Product 1"
// //           description="Lorem ipsum dolor sit amet."
// //           price={10.99}
// //           addToCart={addToCart}
// //           removeFromCart={removeFromCart}
// //           quantity={(cartItems.find((item) => item.id === 1) || {}).quantity || 0}
// //         />
// //         {/* Add more products as needed */}
// //       </div>
// //       <div className="text-center grid grid-cols-1 gap-4">
// //         <Desserts
// //           id={1}
// //           name="Product 2"
// //           description="Lorem ipsum dolor sit amet."
// //           price={20.35}
// //           addToCart={addToCart}
// //           removeFromCart={removeFromCart}
// //           quantity={(cartItems.find((item) => item.id === 1) || {}).quantity || 0}
// //         />
// //         {/* Add more products as needed */}
// //       </div>
// //       <div className="text-center grid grid-cols-1 gap-4">
// //         <Desserts
// //           id={1}
// //           name="Product 3"
// //           description="Lorem ipsum dolor sit amet."
// //           price={15.16}
// //           addToCart={addToCart}
// //           removeFromCart={removeFromCart}
// //           quantity={(cartItems.find((item) => item.id === 1) || {}).quantity || 0}
// //         />
// //         {/* Add more products as needed */}
// //       </div>
// //       <div className="text-center grid grid-cols-1 gap-4">
// //         <Desserts
// //           id={1}
// //           name="Product 1"
// //           description="Lorem ipsum dolor sit amet."
// //           price={20.45}
// //           addToCart={addToCart}
// //           removeFromCart={removeFromCart}
// //           quantity={(cartItems.find((item) => item.id === 1) || {}).quantity || 0}
// //         />
// //         {/* Add more products as needed */}
// //       </div>

// //       <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
// //     </div>
// //   );
// // };

// // export default AddItems;


// // MenuPage.js
// import React, { useState } from 'react';

// const itemsData = [
//   { id: 1, name: 'Product 1', price: 20, imageUrl: 'https://via.placeholder.com/150', description: 'Description of Product 1' },
//   { id: 2, name: 'Product 2', price: 30, imageUrl: 'https://via.placeholder.com/150', description: 'Description of Product 2' },
//   { id: 3, name: 'Product 3', price: 25, imageUrl: 'https://via.placeholder.com/150', description: 'Description of Product 3' },
// ];

// const AddItems = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="bg-gray-100 p-4">
//       <header className="bg-white shadow-lg p-4">
//         <h1 className="text-2xl font-semibold">Shop Page</h1>
//       </header>
//       <div className="container mx-auto mt-4">
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {itemsData.map((item) => (
//             <div key={item.id} className="bg-white p-4 shadow-md mb-4">
//               <img src={item.imageUrl} alt={item.name} className="mb-4 rounded-md" />
//               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//               <p className="text-gray-600 mb-2">{item.description}</p>
//               <p className="text-gray-800 font-semibold">${item.price}</p>
//               <button onClick={() => addToCart(item)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </section>

//         <h2 className="text-2xl font-semibold mt-8">Shopping Cart</h2>
//         <ul>
//           {cart.map((cartItem) => (
//             <li key={cartItem.id} className="mb-2">
//               {cartItem.name} - ${cartItem.price}
//               <button onClick={() => removeFromCart(cartItem.id)} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AddItems;


import { useContext, useState } from "react";
// import Modal from "../UI/Modal";
// import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import CartContext from "../../store/cart-context";
// import OrderDelivered from "./OrderDelivered";

const AddItems = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  
  const orderHanlder = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={orderHanlder}>
                Order
              </button>
            )}
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Modal>
  );
};

export default AddItems;

