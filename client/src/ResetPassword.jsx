//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // try {
    //   axios
    //     .post("http://localhost:3000/app/resetPassword", data)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } catch (err) {
    //   console.log(err);
    // }
  };


  return (
    <>
      <div className="h-screen bg-gradient-to-br from-pink-100 to-orange-100 hover:bg-gradient-to-bl xl:space-x-12 lg:space-x-4 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:space-y-0">
        <div>
          <img
            className="2xl:h-full 2xl:w-full 2xl:h-screen xl:h-full xl:w-68 xl:h-screen"
            src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWF0aW5nfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="2xl:pr-36 2xl:pl-30 xl:pr-24 xl:pl-24">
          <img
            className="2xl:ml-40 2xl:mt-12 2xl:mb-6 xl:ml-40 xl:mt-6 xl:mb-6 2xl:h-36 2xl:w-36 xl:h-28 xl:w-28"
            src="https://marketplace.canva.com/EAFEcdxWgeo/1/0/1600w/canva-elegant-circle-signature-photography-logo--kbTNqEWceg.jpg"
            alt="logo_img"
          />
          <h1 className="text-center mb-4 text-blue-800 text-xl">
            <b>
              <i>
                <u>Reset Password</u>
              </i>
            </b>
          </h1>
          <div className="flex flex-col justify-center border-4 hover:border-neutral-300 2xl:px-11 2xl:py-11 xl:px-8 xl:py-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-lg"
                >
                  Your Email
                </label>
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
                  id="email"
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
              {/* PASSWORD */}
              <div>
                <label
                  className="block text-lg font-medium leading-6 text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  // onChange={OnChange}
                  {...register("password", {
                    required: "Password is Mandatory",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 12 ||
                        "The email should have at most 12 characters",
                      minLength: (v) =>
                        v.length >= 8 ||
                        "The email should have at most 8 characters",
                    },
                  })}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="password"
                  placeholder="********"
                />
                {errors?.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* RE-PASSWORD */}

              <div>
                <label
                  className="block text-lg font-medium leading-6 text-gray-900"
                  htmlFor="password"
                >
                  Re-Password
                </label>
                <input
                  // onChange={OnChange}
                  {...register("password", {
                    required: "Password is Mandatory",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 12 ||
                        "The email should have at most 12 characters",
                      minLength: (v) =>
                        v.length >= 8 ||
                        "The email should have at most 8 characters",
                    },
                  })}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="border-2 border-black rounded-md mb-6 w-full justify-center xl:py-1"
                  type="password"
                  placeholder="********"
                />
                {errors?.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <button
                // onClick={() => (console.log(state))}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl px-7 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                Reset
              </button>
            </form>
          </div>
          <p className="mt-10 text-right text-lg text-indigo-500">
            ~
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
