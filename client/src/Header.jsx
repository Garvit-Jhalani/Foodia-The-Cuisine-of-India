import { useState } from "react";
import Modal from "./Modal";
import Cart from "./Cart";
import { useDispatchCart, useCart } from "./ContextReducer"
import Foodia from "./assets/Foodia1.png";
// import Foodia from './Foodia,png'
import { Link } from "react-router-dom";
// import Batch from 'react-bootstrap/Badge';

export default function Header() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  return (
    <>
      <div>
        <header className="fixed inset-x-0 top-0 z-50 bg-slate-600">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="/auth/dashboard" className="-m-1.5 p-1.5">
                <span className="sr-only">Foodia</span>
                <img
                  className="2xl:h-12 2xl:h-8 xl:h-10 w-auto sm:h-4 md:h-4 lg:h-4 h-2 w-4"
                  src={Foodia}
                  // src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
                  alt="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
                />
              </Link>
            </div>
            <div className="hidden 2xl:flex 2xl:gap-x-12 xl:flex xl:gap-x-7 xl:pl-1 mr-8">
              <Link
                to="/auth/cloudeatery"
                className="text-sm font-semibold leading-6 text-white"
              >
                Cloud Eatery
              </Link>
              <Link
                to="/auth/pick-up"
                className="text-sm font-semibold leading-6 text-white"
              >
                Pick Up
              </Link>
              <Link
                to="/auth/about-us"
                className="text-sm font-semibold leading-6 text-white"
              >
                About Us
              </Link>
              <Link
                to="/auth/how-it-works"
                className="text-sm font-semibold leading-6 text-white"
              >
                How it Works
              </Link>
              <Link
                to="/auth/faqs"
                className="text-sm font-semibold leading-6 text-white"
              >
                FAQ
              </Link>
              <Link
                to="/auth/blogs"
                className="text-sm font-semibold leading-6 text-white"
              >
                Blogs
              </Link>
              <Link
                to="/auth/contact-us"
                className="text-sm font-semibold leading-6 text-white mr-3"
              >
                Contact Us
              </Link> 
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end pl-4">
              <Link to="#">
                <button
                onClick={()=>{setCartView(true)}}
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 mb-2"
                >
                  My Cart
                  <span class="rounded-full bg-zinc-300 inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 px-2 py-2 text-bold rounded-full">
                    {data.length}
                  </span>
                </button>
              </Link>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              <Link to="/auth/register">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign Up
                  </span>
                </button>
              </Link>
              <Link to="/auth/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-3 mb-2"
                >
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
