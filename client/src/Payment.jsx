import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Payment= ()=>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    try {
      console.log("SuccessFull");
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <>
      <form onSubmit={onSubmit}>
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
                                <h1 className="font-bold text-rose-500 underline">To Pay : 125</h1>
                                <label
                                  for="email"
                                  class="mt-4 mb-2 block text-sm font-medium"
                                >
                                  Email
                                </label>
                                <div class="relative">
                                <div>
                <label
                  className="block text-lg font-medium leading-6 text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                {/* <input name="firstName" onChange={handleChange} /> */}
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        "The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                  //onChange={}
                  // id="email"
                  name="email"
                  autoComplete="email"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="email"
                  placeholder="name@company.com"
                />
                {errors?.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
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
                                    // value={selectedState}
                                    onChange={(e) =>
                                      setSelectedState(e.target.value)
                                    }
                                    class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                  >
                                    {/* {states.map((state, index) => (
                                      <option key={index} value={state}>
                                        {state}
                                      </option>
                                    ))} */}
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
                            {/* <LoadingBar
                              color="#f11946"
                              progress={progress}
                              onLoaderFinished={() => setProgress(0)}
                            /> */}
                            <button
                              type="button"
                              // onClick={savePayment}
                              // onClick={() => setProgress(progress + 10)}
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              // onClick={CancelPayment}
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
            </form>
    </>
  )
}

export default Payment;