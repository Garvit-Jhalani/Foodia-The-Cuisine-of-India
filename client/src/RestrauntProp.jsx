import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function RestrauntProp(props) {
  let dispatch = useDispatchCart();
  let data2 = useCart();
  const priceRef = useRef();
  const Image = props.img;
  const Name = props.title;
  const Content = props.content;
  const Price = props.price;

  const [count, setCount] = useState(1);
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(Price);

  // const handleIncrement = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   setPrice((prevPrice) => prevPrice );
  // };

  // const handleDecrement = () => {
  //   if (count > 1) {
  //     setCount((prevCount) => prevCount - 1);
  //     setPrice((prevPrice) => prevPrice);
  //   }
  // };
  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setPrice(newCount * Price);
      return newCount;
    });
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        setPrice(newCount * Price);
        return newCount;
      });
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
      setPrice(value * Price);
    }
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data2) {
      if (item.Name === Name) {
        food = item;

        break;
      }
    }
    if (food.length !== 0) {
      if (food.Name === Name) {
        await dispatch({
          type: "UPDATE",
          Image: Image,
          Price: price,
          Quantity: count,
        });
        return;
      } else if (food.Name !== Name) {
        await dispatch({
          type: "ADD",
          Image: Image,
          Name: Name,
          Price: price,
          Quantity: count,
          Description: Content,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      Image: Image,
      Name: Name,
      Price: price,
      Quantity: count,
      Description: Content,
    });

    console.log(data2);
  };

  return (
    <>
      <div class="justify-between mb-6 rounded-lg bg-white p-6 sm:flex sm:justify-start">
        <img
          src={Image}
          alt="product-image"
          class=" float-right rounded-lg w-32 h-32"
        />

        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <p className="text-green-500 text-xs">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="8"
                  width="8"
                  viewBox="0 0 576 512"
                  className="text-green-300"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </span>{" "}
              Best Seller
            </p>
            <h2 class="text-lg font-bold text-gray-900">{Name}</h2>
            <p class="mt-1 text-xs text-gray-700">{Content}</p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={handleDecrement}
              >
                {" "}
                -{" "}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value={count}
                min="1"
                onChange={handleChange}
              />
              <span
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                onClick={handleIncrement}
              >
                {" "}
                +{" "}
              </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm" ref={priceRef}>
                ₹{price}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <button
              onClick={handleAddToCart}
              class="absolute inline-block items-center justify-left py-4 mr-2 p-0.5 mb-1 me-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span class="text-xs relative px-2 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
      </div>
    </>
  );
}
