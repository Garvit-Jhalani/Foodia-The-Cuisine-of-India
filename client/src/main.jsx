import React from "react";
import ReactDOM from "react-dom/client";
import AddItems from "./AddItems.jsx";
import App from "./App.jsx";
import Register from "./Register.jsx";
import Auth from "./Auth.jsx";
import ResetPassword from "./ResetPassword.jsx";
import Password from "./Password.jsx";
import Verify from "./Verify.jsx";
import Dashboard from "./Dashboard.jsx";
import Cloudeatery from "./Cloudeatery.jsx";
import Faqs from "./Faqs.jsx";
import Contactus from "./Contactus.jsx";
import Aboutus from "./Aboutus.jsx";
import Blogs from "./Blogs.jsx";
import Pickup from "./Pickup.jsx";
import Nearby from "./nearby.jsx";
import Highrating from "./Highrating.jsx";
import Cuisines from "./Cuisines.jsx";
import Mostpopular from "./Mostpopular.jsx";
import TandC from "./TandC.jsx";
import CartItem from "./CartItem.jsx";
import OrderDelivered from "./OrderDelivered.jsx";
import CashierPanel from "./CashierPanel.jsx";
import ManagerPanel from "./ManagerPanel.jsx";
import CustomerPanel from "./CustomerPanel.jsx";
import Privacypolicy from "./Privacypolicy.jsx";
import Desserts from "./Desserts.jsx";
import HaldiramCart from "./HaldiramCart.jsx";
import A2bCart from "./A2bCart.jsx";
import BmbCart from "./BmbCart.jsx";
import DominosCart from "./DominosCart.jsx";
import FpfCart from "./FpfCart.jsx";
import UdupiCart from "./UdupiCart.jsx";
import RameshwaramCart from "./RameshwaramCart.jsx";
import LassiWalaCart from "./LassiWalaCart.jsx";
import LocalsCart from "./LocalsCart.jsx";
import JwMarriotCart from "./JwMarriotCart.jsx";
import KanhaCart from "./KanhaCart.jsx";
import McDonaldsCart from "./McDonaldsCart.jsx";
import RambaghCart from "./RambaghCart.jsx";
import YellowCart from "./YellowCart.jsx";
import RoyalCart from "./RoyalCart.jsx";
import NightjarCart from "./NightjarCart.jsx";
import MonarchCart from "./MonarchCart.jsx";
import RamanCart from "./RamanCart.jsx";
import ThaliCart from "./ThaliCart.jsx";
import RamadaCart from "./RamadaCart.jsx";
import Cart from "./Cart.jsx";
import PaymentComplete from "./PaymentComplete.jsx";
import Payment from "./Payment.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Protected from "./Protected.jsx";
import MainCourse from "./MainCourse.jsx";
import { AuthProvider } from "./auth.context.jsx";
import { CartProvider } from "./ContextReducer.jsx";
import Howitworks from "./Howitworks.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <App />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "resetPassword",
          element: <ResetPassword />,
        },
        {
          path: "password",
          element: <Password />,
        },
        {
          path: "OrderDelivered",
          element: <OrderDelivered />,
        },
        {
          path: "AddItems",
          element: <AddItems />,
        },
        {
          path: "verify",
          element: <Verify />,
        },
        {
          path: "Haldiram",
          element: <HaldiramCart />,
        },
        {
          path: "A2B",
          element: <A2bCart />,
        },
        {
          path: "BmB",
          element: <BmbCart />,
        },
        {
          path: "Domino's",
          element: <DominosCart />,
        },
        {
          path: "FpF",
          element: <FpfCart />,
        },
        {
          path: "Udupi Sagar",
          element: <UdupiCart />,
        },
        {
          path: "Rameshwaram",
          element: <RameshwaramCart />,
        },
        {
          path: "Lassi Wala",
          element: <LassiWalaCart />,
        },
        {
          path: "Locals",
          element: <LocalsCart />,
        },
        {
          path: "Jw Marriot",
          element: <JwMarriotCart />,
        },
        {
          path: "Kanha",
          element: <KanhaCart />,
        },
        {
          path: "Mc Donald's",
          element: <McDonaldsCart />,
        },
        {
          path: "Rambagh Palace",
          element: <RambaghCart />,
        },
        {
          path: "Yellow House",
          element: <YellowCart />,
        },
        {
          path: "The Royal Pizza",
          element: <RoyalCart />,
        },
        {
          path: "Night Jar",
          element: <NightjarCart />,
        },
        {
          path: "Monarch",
          element: <MonarchCart />,
        },
        {
          path: "Raman Dosa",
          element: <RamanCart />,
        },
        {
          path: "Thali Palace",
          element: <ThaliCart />,
        },
        {
          path: "Ramada",
          element: <RamadaCart />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "paymentComplete",
          element: <PaymentComplete />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "desserts",
          element: <Desserts />,
        },
        {
          path: "maincourse",
          element: <MainCourse />,
        },
        {
          path: "cartItem",
          element: <CartItem />,
        },
        {
          path: "dashboard",
          element: (
            <Protected>
              <Dashboard />
            </Protected>
          ),
        },
        {
          path: "cloudEatery",
          element: (
            // <Protected>
              <Cloudeatery />
            // </Protected>
          ),
        },
        {
          path: "faqs",
          element: <Faqs />,
        },
        {
          path: "contact-us",
          element: <Contactus />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "about-us",
          element: <Aboutus />,
        },
        {
          path: "terms-and-condition",
          element: <TandC />,
        },
        {
          path: "pick-up",
          element: <Pickup />,
        },
        {
          path: "customerPanel",
          element: <CustomerPanel />,
        },
        {
          path: "managerPanel",
          element: <ManagerPanel />,
        },
        {
          path: "cashierPanel",
          element: <CashierPanel />,
        },
        {
          path: "nearBy",
          element: <Nearby />,
        },
        {
          path: "cuisines",
          element: <Cuisines />,
        },
        {
          path: "highrating",
          element: <Highrating />,
        },
        {
          path: "mostpopular",
          element: <Mostpopular />,
        },
        {
          path: "privacy-and-policy",
          element: <Privacypolicy />,
        },
        {
          path: "how-it-works",
          element: <Howitworks />,
        },
      ],
    },
  ],
  { replace: true }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

// replace:true
// if(!loggedIn()) return <Redirect to
