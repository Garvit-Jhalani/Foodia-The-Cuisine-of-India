import React from "react";
// import Delete from '@material-ui/icons/Delete'
import { useDispatchCart, useCart } from "./ContextReducer";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function Cart() {
  let data = useCart();
  // const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  let dispatch = useDispatchCart();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center text-bold fs-3 h-200 text-black text-bold">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  const handleCheckOut = (food) => {
    setDoesModalOpen(true);
    try {
      {
        data.map((food) => {
          console.log(food.Name);
          const orderData = {
            name: food.Name,
            image: food.Image,
            quantity: food.Quantity,
            price: food.Price,
            description: food.Description,
          };
          const res = axios.post("http://localhost:3000/app/order", orderData);
          console.log("Successfully placed order:", res.data);
          // dispatch({ type: "DROP" });
        });
      }
      // Handle any logic after successfully placing the order
    } catch (err) {
      console.error("Error occurred while placing order:", err);
      // Handle errors if any
    }
  };
  const [selectedState, setSelectedState] = useState("State");

  let totalPrice = data.reduce(
    (total, food) => total + parseFloat(food.Price),
    0
  );
  // let itemDiscount = parseInt(totalPrice *(18/100));
  let itemDiscount = (totalPrice) => {
    if (totalPrice >= 159) {
      return parseInt(totalPrice * (28 / 100));
    } else {
      return parseInt(totalPrice * (15 / 100));
    }
  };

  // const [toPay, setToPay] = useState(0);

  let gst = parseInt(totalPrice * (12 / 100));

  let toPay = totalPrice + 50 - itemDiscount(totalPrice) - 28 + gst;

  const [address, setAddress] = useState("B-109, Janta Colony, Jaipur");
  const [newAddress, setNewAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doesModalOpen, setDoesModalOpen] = useState(false);

  const handleSaveAddress = () => {
    setAddress(newAddress);
    setNewAddress("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setNewAddress("");
    setIsModalOpen(false);
  };
  const savePayment = () => {
    navigate("/auth/paymentComplete", { replace: true });
    setDoesModalOpen(false);
  };

  const CancelPayment = () => {
    setDoesModalOpen(false);
  };

  return (
    <div className="bg-slate-300 w-full h-full">
      <div className="2xl:pb-48 xl:pb-96 xl:mb-96 mt-8">
        <div className="flex">
          <div className="flex-1 h-screen pl-8 xl:gap-x-8">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 relative bottom-3.5 inline-block text-center mr-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="inline-block bg-white p-6 pl-8 md:mx-auto mt-12 ml-20 pr-56">
                <h1 className="font-black py-2 underline underline-offset-8">
                  {" "}
                  Logged in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 inline-block ml-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </h1>
                <h2 className="text-bold pt-2">Garvit Jhalani | 6375606887</h2>
              </div>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 relative bottom-9 inline-block text-center mr-8"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>

              {/* <div className="inline-block bg-white p-6 pl-8 md:mx-auto mt-12 pr-56">
                <h1 className="font-black py-2 underline underline-offset-8">
                  {" "}
                  Delivery Address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 inline-block ml-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <button className="font-thin hover:underline hover:underline-offset-1 text-emerald-500 mr-0 absolute pl-36 inline-block">
                    Change
                  </button>
                </h1>
                <h2 className="font-bold pt-6">Home</h2>
                <h2 className="font-thin">B-109, Janta Colony, Jaipur </h2>
              </div> */}

              <div className="inline-block bg-white p-6 pl-8 md:mx-auto mt-12 pr-56 w-9/10 overflow-auto">
                <h1 className="font-black py-2 underline underline-offset-8">
                  Delivery Address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 inline-block ml-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <button
                    className="font-thin hover:underline hover:underline-offset-1 text-emerald-500 mr-0 absolute pl-36 inline-block"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Change
                  </button>
                </h1>
                <h2 className="font-bold pt-6">Home</h2>
                <h2 className="font-thin">{address}</h2>

                {isModalOpen && (
                  <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                      <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                      </div>
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <h3
                                className="text-lg leading-6 font-medium text-gray-900"
                                id="modal-title"
                              >
                                Enter New Address
                              </h3>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  value={newAddress}
                                  onChange={(e) =>
                                    setNewAddress(e.target.value)
                                  }
                                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300"
                                  placeholder="Enter your new address..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            onClick={handleSaveAddress}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={handleCancel}
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-8 h-8 relative bottom-6 inline-block text-center mr-8"
              >
                <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
              </svg>

              <div className="inline-block bg-white p-6 pl-6 md:mx-auto mt-12 pr-56">
                <h1 className="font-black py-2 underline underline-offset-8 pb-8">
                  {" "}
                  Choose Payment Method
                </h1>
                <button
                  type="button"
                  onClick={handleCheckOut}
                  // onClick={() => setIsModalOpen(true)}
                  class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-12 py-3 text-center me-2 mb-2 text-center"
                >
                  Proceed To Pay
                </button>
                {doesModalOpen && (
                  <form onSubmit={handleSubmit(handleSaveAddress)}>
                    <div className=" w-full fixed z-10 inset-0">
                      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="" aria-hidden="true">
                          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                          className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true"
                        >
                          &#8203;
                        </span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                  className="text-lg leading-6 font-medium text-gray-900"
                                  id="modal-title"
                                >
                                  Payment Options
                                </h3>
                                <p class="text-gray-400">
                                  Complete your order by providing your payment
                                  details.
                                </p>
                                <h1 className="font-bold text-rose-500 underline">To Pay : {toPay}</h1>
                                <label
                                  for="email"
                                  class="mt-4 mb-2 block text-sm font-medium"
                                >
                                  Email
                                </label>
                                <div class="relative">
                                  <input
                                    {...register("email", {
                                      required: "Email is required",
                                      validate: {
                                        maxLength: (v) =>
                                          v.length <= 50 ||
                                          "The email should have at most 50 characters",
                                        matchPattern: (v) =>
                                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                            v
                                          ) ||
                                          "Email address must be a valid address",
                                      },
                                    })}
                                    type="text"
                                    id="email"
                                    name="email"
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="your.email@gmail.com"
                                  />
                                  {errors?.email && (
                                    <p className="text-red-600">
                                      {errors.email.message}
                                    </p>
                                  )}
                                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-4 w-4 text-gray-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <label
                                  for="card-holder"
                                  class="mt-4 mb-2 block text-sm font-medium"
                                >
                                  Card Holder
                                </label>
                                <div class="relative">
                                  <input
                                    type="text"
                                    id="card-holder"
                                    name="card-holder"
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Your full name here"
                                  />
                                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      class="h-4 w-4 text-gray-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <label
                                  for="card-no"
                                  class="mt-4 mb-2 block text-sm font-medium"
                                >
                                  Card Details
                                </label>
                                <div class="flex">
                                  <div class="relative w-7/12 flex-shrink-0">
                                    <input
                                      type="text"
                                      id="card-no"
                                      name="card-no"
                                      class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                      placeholder="xxxx-xxxx-xxxx-xxxx"
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                      <svg
                                        class="h-4 w-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                      </svg>
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    name="credit-expiry"
                                    class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="MM/YY"
                                  />
                                  <input
                                    type="text"
                                    name="credit-cvc"
                                    class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="CVC"
                                  />
                                </div>
                                <label
                                  for="billing-address"
                                  class="mt-4 mb-2 block text-sm font-medium"
                                >
                                  Billing Address
                                </label>
                                <div class="flex flex-col sm:flex-row">
                                  <div class="relative flex-shrink-0 sm:w-7/12">
                                    <input
                                      type="text"
                                      id="billing-address"
                                      name="billing-address"
                                      class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                      placeholder="Street Address"
                                    />
                                    <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                      {/* <img
                                      class="h-4 w-4 object-contain"
                                      src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                                      alt=""
                                    /> */}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="24"
                                        zoomAndPan="magnify"
                                        viewBox="0 0 30 30.000001"
                                        height="24"
                                        preserveAspectRatio="xMidYMid meet"
                                        version="1.0"
                                      >
                                        <defs>
                                          <clipPath id="id1">
                                            <path
                                              d="M 2.371094 18 L 27.773438 18 L 27.773438 23.921875 L 2.371094 23.921875 Z M 2.371094 18 "
                                              clip-rule="nonzero"
                                            />
                                          </clipPath>
                                          <clipPath id="id2">
                                            <path
                                              d="M 2.371094 10 L 27.773438 10 L 27.773438 19 L 2.371094 19 Z M 2.371094 10 "
                                              clip-rule="nonzero"
                                            />
                                          </clipPath>
                                          <clipPath id="id3">
                                            <path
                                              d="M 2.371094 5.050781 L 27.773438 5.050781 L 27.773438 11 L 2.371094 11 Z M 2.371094 5.050781 "
                                              clip-rule="nonzero"
                                            />
                                          </clipPath>
                                        </defs>
                                        <g clip-path="url(#id1)">
                                          <path
                                            fill="rgb(7.449341%, 53.329468%, 3.138733%)"
                                            d="M 2.375 21.019531 C 2.375 22.625 3.640625 23.921875 5.199219 23.921875 L 24.945312 23.921875 C 26.503906 23.921875 27.769531 22.625 27.769531 21.019531 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 21.019531 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                          />
                                        </g>
                                        <g clip-path="url(#id2)">
                                          <path
                                            fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                                            d="M 2.375 10.859375 L 27.769531 10.859375 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 10.859375 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                          />
                                        </g>
                                        <g clip-path="url(#id3)">
                                          <path
                                            fill="rgb(100%, 59.999084%, 19.999695%)"
                                            d="M 27.769531 10.859375 L 27.769531 7.957031 C 27.769531 6.351562 26.503906 5.050781 24.945312 5.050781 L 5.199219 5.050781 C 3.640625 5.050781 2.375 6.351562 2.375 7.957031 L 2.375 10.859375 Z M 27.769531 10.859375 "
                                            fill-opacity="1"
                                            fill-rule="nonzero"
                                          />
                                        </g>
                                        <path
                                          fill="rgb(0%, 0%, 50.19989%)"
                                          d="M 17.894531 14.488281 C 17.894531 14.871094 17.820312 15.242188 17.679688 15.597656 C 17.535156 15.953125 17.332031 16.269531 17.066406 16.539062 C 16.804688 16.8125 16.496094 17.023438 16.152344 17.167969 C 15.804688 17.316406 15.445312 17.390625 15.074219 17.390625 C 14.699219 17.390625 14.339844 17.316406 13.992188 17.167969 C 13.648438 17.023438 13.34375 16.8125 13.078125 16.539062 C 12.8125 16.269531 12.609375 15.953125 12.464844 15.597656 C 12.324219 15.242188 12.25 14.871094 12.25 14.488281 C 12.25 14.101562 12.324219 13.730469 12.464844 13.375 C 12.609375 13.019531 12.8125 12.707031 13.078125 12.433594 C 13.34375 12.164062 13.648438 11.953125 13.992188 11.804688 C 14.339844 11.65625 14.699219 11.585938 15.074219 11.585938 C 15.445312 11.585938 15.804688 11.65625 16.152344 11.804688 C 16.496094 11.953125 16.804688 12.164062 17.066406 12.433594 C 17.332031 12.707031 17.535156 13.019531 17.679688 13.375 C 17.820312 13.730469 17.894531 14.101562 17.894531 14.488281 Z M 17.894531 14.488281 "
                                          fill-opacity="1"
                                          fill-rule="nonzero"
                                        />
                                        <path
                                          fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                                          d="M 17.1875 14.488281 C 17.1875 14.777344 17.136719 15.054688 17.027344 15.320312 C 16.921875 15.585938 16.765625 15.824219 16.570312 16.027344 C 16.371094 16.230469 16.140625 16.390625 15.882812 16.5 C 15.621094 16.609375 15.351562 16.664062 15.074219 16.664062 C 14.792969 16.664062 14.523438 16.609375 14.261719 16.5 C 14.003906 16.390625 13.773438 16.230469 13.578125 16.027344 C 13.378906 15.824219 13.226562 15.585938 13.117188 15.320312 C 13.011719 15.054688 12.957031 14.777344 12.957031 14.488281 C 12.957031 14.199219 13.011719 13.921875 13.117188 13.65625 C 13.226562 13.386719 13.378906 13.152344 13.578125 12.949219 C 13.773438 12.742188 14.003906 12.585938 14.261719 12.476562 C 14.523438 12.367188 14.792969 12.308594 15.074219 12.308594 C 15.351562 12.308594 15.621094 12.367188 15.882812 12.476562 C 16.140625 12.585938 16.371094 12.742188 16.570312 12.949219 C 16.765625 13.152344 16.921875 13.386719 17.027344 13.65625 C 17.136719 13.921875 17.1875 14.199219 17.1875 14.488281 Z M 17.1875 14.488281 "
                                          fill-opacity="1"
                                          fill-rule="nonzero"
                                        />
                                        <path
                                          fill="rgb(39.99939%, 39.99939%, 70.199585%)"
                                          d="M 15.074219 12.308594 L 15.175781 13.953125 L 15.882812 12.476562 L 15.367188 14.035156 L 16.570312 12.949219 L 15.511719 14.183594 L 17.027344 13.65625 L 15.589844 14.382812 L 17.1875 14.488281 L 15.589844 14.59375 L 17.027344 15.320312 L 15.511719 14.789062 L 16.570312 16.027344 L 15.367188 14.941406 L 15.882812 16.5 L 15.175781 15.023438 L 15.074219 16.664062 L 14.96875 15.023438 L 14.261719 16.5 L 14.777344 14.941406 L 13.574219 16.027344 L 14.632812 14.789062 L 13.117188 15.320312 L 14.554688 14.59375 L 12.957031 14.488281 L 14.554688 14.382812 L 13.117188 13.65625 L 14.632812 14.183594 L 13.574219 12.949219 L 14.777344 14.035156 L 14.261719 12.476562 L 14.96875 13.953125 Z M 15.074219 12.308594 "
                                          fill-opacity="1"
                                          fill-rule="nonzero"
                                        />
                                        <path
                                          fill="rgb(0%, 0%, 50.19989%)"
                                          d="M 15.777344 14.488281 C 15.777344 14.6875 15.707031 14.859375 15.570312 15 C 15.433594 15.140625 15.265625 15.214844 15.074219 15.214844 C 14.878906 15.214844 14.710938 15.140625 14.574219 15 C 14.4375 14.859375 14.367188 14.6875 14.367188 14.488281 C 14.367188 14.289062 14.4375 14.117188 14.574219 13.972656 C 14.710938 13.832031 14.878906 13.761719 15.074219 13.761719 C 15.265625 13.761719 15.433594 13.832031 15.570312 13.972656 C 15.707031 14.117188 15.777344 14.289062 15.777344 14.488281 Z M 15.777344 14.488281 "
                                          fill-opacity="1"
                                          fill-rule="nonzero"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <select
                                    type="text"
                                    name="billing-state"
                                    value={selectedState}
                                    onChange={(e) =>
                                      setSelectedState(e.target.value)
                                    }
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                  >
                                    {states.map((state, index) => (
                                      <option key={index} value={state}>
                                        {state}
                                      </option>
                                    ))}
                                    {/* <option value="State">State</option> */}
                                  </select>
                                  <input
                                    type="text"
                                    name="billing-zip"
                                    class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="ZIP"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <LoadingBar
                              color="#f11946"
                              progress={progress}
                              onLoaderFinished={() => setProgress(0)}
                            />
                            <button
                              type="button"
                              onClick={savePayment}
                              // onClick={() => setProgress(progress + 10)}
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Pay
                            </button>
                            <button
                              type="button"
                              onClick={CancelPayment}
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </p>
          </div>
          <div className="flex-1 bg-white mr-4 mb-32">
            <div className="h-80 overflow-auto">
              {data.map((food, index) => (
                <div className="">
                  <div class="justify-between mb-1 rounded-lg bg-white p-6 sm:flex sm:justify-start">
                    <h1 className="pt-6">{index + 1}.</h1>
                    <img
                      src={food.Image}
                      alt={food.Name}
                      class=" float-right rounded-lg w-20 h-20 ml-8"
                    />

                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900 pl-2 pt-4">
                          {food.Name}
                        </h2>
                        {/* <p class="mt-1 pr-4 pl-2 text-xs text-gray-700">
                          {food.Description}
                        </p> */}
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <h2 className="inline-block text-cyan-400">
                          {food.Quantity} items
                        </h2>
                        <h2 className="inline-block text-rose-300">
                          ₹{food.Price}
                        </h2>
                        <button type="button" className="btn pr-12">
                          <button
                            className=""
                            onClick={() => {
                              dispatch({ type: "REMOVE", index: index });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pb-1">
                    <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 ml-8">
              <h1 className="font-semibold">Bill Details</h1>
              <h2 className="pt-4 font-extralight inline-block">Item Total</h2>
              {/* <h2 className="font-extralight inline-block ml-96 pl-24">abc</h2> */}
              <p class="font-extralight inline-block ml-96 pl-28 mr-0">
                ₹{totalPrice}
              </p>
              <h2 className="font-extralight inline-block">Delivery Fee</h2>
              <h2 className="font-thin inline-block ml-96 pl-24 mr-0">₹50</h2>
              <div className="py-1">
                <hr className="border-1 justify-center mx-auto max-w-5xl justify-center mr-8  md:flex md:space-x-6 xl:px-0" />
              </div>
              <h2 className="font-extralight inline-block text-teal-500">
                Item discount
              </h2>
              <h2 className="font-extralight inline-block ml-96 pl-20 text-teal-300 mr-0">
                - ₹{itemDiscount(totalPrice)}
              </h2>
              <h2 className="font-extralight inline-block">
                Instant discount for You
              </h2>
              <h2 className="font-extralight inline-block ml-96 pl-2 mr-0">
                - ₹25
              </h2>
              <div className="py-1">
                <hr className="border-1 justify-center mx-auto max-w-5xl justify-center mr-8  md:flex md:space-x-6 xl:px-0" />
              </div>
              <h2 className="font-extralight inline-block">Platform Fee</h2>
              <h2 className="font-thin inline-block ml-96 pl-20">
                <strike className="font-thin inline-block pr-1 mr-0">
                  ₹5.00
                </strike>
                <h2 className="inline-block font-medium">3</h2>
              </h2>
              <h2 className="font-extralight inline-block">
                GST and Restraunt Charges
              </h2>
              <h2 className="font-extralight inline-block ml-96 mr-0">
                ₹{gst}
              </h2>
              <div className="py-2">
                <hr className="border-1 border-current justify-center mx-auto max-w-5xl justify-center mr-8  md:flex md:space-x-6 xl:px-0" />
              </div>
              <h2 className="font-extralight inline-block">Amount To Pay</h2>
              <h2 className="font-extralight inline-block ml-96 pl-20 mr-4">
                ₹{toPay}
              </h2>
            </div>
          </div>
        </div>

        {/* <div>
          <h1 className="fs-2 text-center pt-6">Total Price : {totalPrice}</h1>
        </div>
        <div className="pt-36 text-center">
          <button onClick={handleCheckOut} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Check Out
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
