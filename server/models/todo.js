const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginSchema = Schema({
  email: String,
  password: String,
});

const registerSchema = Schema({
  email: String,
  password: String,
});

const orderSchema = Schema({
  name: String,
  image: String,
  quantity: Number,
  price: Number,
  description: String,
});

const tokengeneratorSchema = Schema({});

const resetPasswordRouter = Schema({});

const Login = mongoose.model("Login", loginSchema);
const Register = mongoose.model("Register", registerSchema);
const TokenGenerator = mongoose.model("TokenGenerator", tokengeneratorSchema);
const ResetPassword = mongoose.model("ResetPassword", resetPasswordRouter);
const OrderName = mongoose.model("OrderName", orderSchema);

module.exports = {
  Login,
  Register,
  TokenGenerator,
  ResetPassword,
  OrderName,
};

// import React from "react";
// const CartContext = React.createContext({
//   items: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (id) => {},
//   clearall: () => {},
// });

// export default CartContext;
