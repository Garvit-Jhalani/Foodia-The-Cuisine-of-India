import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

const highrating = [
  {
    img: "https://images.news18.com/ibnlive/uploads/2021/10/untitled-design-2021-10-19t125503.638.jpg",
    title: "Rambagh Palace",
    location: "Agra Road , 12.7km",
    time: "Open 24hrs",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/27/03/71/88/interior.jpg",
    title: "Yellow House",
    location: "WTP Mall , 11km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: "The Royal Root",
    location: "Malviya Nagar , 14.3km",
    time: "Open till 11pm",
  },
  {
    img: "https://images.unsplash.com/photo-1552566626-ee081a9ffeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
    title: "Night Jar",
    location: "Tonk Road , 16.4km",
    time: "Open till 10:30pm",
  },
];

const highrating1 = [
  {
    img: "https://resizer.otstatic.com/v2/photos/wide-huge/1/25870110.jpg",
    title: "Haldiram",
    location: "Vaishali Nagar , 10.7km",
    time: "Open till 11pm",
  },
  {
    img: "https://resizer.otstatic.com/v2/photos/wide-large/1/31888463.jpg",
    title: "JwMarriot",
    location: "Tonk Road , 11.3km",
    time: "Open 24hrs",
  },
  {
    img: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
    title: "Kanha",
    location: "Raja Park , 2.9km",
    time: "Open till 10pm",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/22/33/a4/94/caption.jpg",
    title: "McDonald's",
    location: "Vaishali Nagar , 9.8km",
    time: "Open till 10:30pm",
  },
];

const highrating2 = [
  {
    img: "https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg",
    title: "BmB",
    location: "Ajmeri Gate , 2.2km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.chinahighlights.com/allpicture/2021/12/71879439c9ef4d0da835efb6_cut_750x400_39.jpg",
    title: "A2B",
    location: "KishanPole Bazaar , 6.7km",
    time: "Open till 10:30pm",
  },
  {
    img: "https://img.traveltriangle.com/blog/wp-content/uploads/2022/10/Famous-Foods-of-Italy.jpg",
    title: "Domino's",
    location: "Jawahar Nagar , 0.8km",
    time: "Open till 10:30pm",
  },
  {
    img: "https://img.theculturetrip.com/wp-content/uploads/2017/12/aditya-joshi-uwi48cpw7vo-unsplash.jpg",
    title: "Monarch",
    location: "Vaishali Nagar , 9.5km",
    time: "Open till 11:30pm",
  },
];

const Highrating = () => {
  return (
    <>
// Header
      <Header />

      <div className="bg-white w-full">
        <div className="pb-72">
          <div className="2xl:pb-48 xl:pb-96">
            <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-orange-100">
              <div>
                <h1 className="font-bold pl-36 pt-36 text-4xl font-mono">
                  <b>High Rating</b>
                </h1>
                <p className="font-bold pl-48 font-mono text-orange-600 pb-4">
                  Home Like Taste
                </p>
              </div>
              <div className="">
                <img
                  className="relative right-0 pt-24 pb-8 pr-40 mr-30 h-64 float-right rounded-full"
                  src="https://t4.ftcdn.net/jpg/03/50/16/95/360_F_350169504_t13447u3rwR5iBEWD3QrzwJbElxu4Gho.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-14 pt-96 mt-96 bg-rose-50">
          <div className="relative left-16 right-24 mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="Location"
              id="location"
              className="2xl:ml-20 xl:ml-8 block pb-2 pt-2 rounded-lg border-0 pl-8 pr-24 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Your Location or Pincode "
            />
          </div>
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100 pb-2">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {highrating.map((user) => (
                  <Card img={user.img} title={user.title} location={user.location} time={user.time} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100 pb-2">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {highrating1.map((user) => (
                  <Card img={user.img} title={user.title} location={user.location} time={user.time} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {highrating2.map((user) => (
                  <Card img={user.img} title={user.title} location={user.location} time={user.time} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute inset-x-0 bg-black dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="space-y-36 lg:grid lg:grid-cols-3 lg:gap-x-72 lg:space-y-0">
                {/* SECTION-1 */}
                <div className="mb-6 md:mb-0">
                  <a
                    href="/auth/dashboard"
                    className="flex items-center"
                  >
                    <div className=" float-right pl-14 self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
                      <img
                        src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000"
                        className="h-12 w-16"
                        alt="Jiak Logo"
                      />
                      <h1 className="pl-2 pt-2 pb-3">Jiak</h1>
                    </div>
                  </a>
                  <p className="text-white text-xs text-center left-0">
                    <Link to="/auth/terms-and-condition">Terms & Condition </Link>
                    |
                    <Link to="/auth/privacy-and-policy"> Privacy & Policy</Link>
                  </p>
                </div>
                {/* SECTION-2 */}
                <div>
                  <h2 className="mb-6 text-sm font-bold text-white uppercase">
                    Useful Links
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                    <li>
                      <Link
                        to="/auth/cloudeatery"
                        className="text-sm font-light leading-6 text-white"
                      >
                        Cloud Eatery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/pick-up"
                        className="text-sm font-light leading-6 text-white"
                      >
                        Pick Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/about-us"
                        className="text-sm font-light leading-6 text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/how-it-works"
                        className="text-sm font-light leading-6 text-white"
                      >
                        How it Works
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        to="/auth/faqs"
                        className="text-sm font-light leading-6 text-white"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/blogs"
                        className="text-sm font-light leading-6 text-white"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/auth/contact-us"
                        className="text-sm font-light leading-6 text-white"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* SECTION-3 */}
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                    Social Media
                  </h2>
                  <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a
                      href="#"
                      class="text-gray-500 hover:text-white dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Instagram page</span>
                    </a>
                    <a
                      href="#"
                      class="text-gray-500 hover:text-white dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span className="sr-only">Twitter page</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          cliRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">GitHub account</span>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white dark:hover:text-white"
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          filRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Dribbble account</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-10 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="pl-48 ml-96 text-center text-gray-500 dark:text-gray-400">
                Jiak{" "}
                <a href="#" className="hover:underline">
                  © 2023
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highrating;