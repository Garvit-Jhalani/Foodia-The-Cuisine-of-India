const express = require("express");
const orderRouter = express.Router();
const { OrderName } = require("../models/todo");

const app = express();

orderRouter.route("/order").post(async function (req, res) {
  const { name, image, quantity, price, description } = req.body;


    const newUser = new OrderName({ name, image, quantity, price, description });
      newUser.save()
    
    .then(() => {
      res.status(200).json({
        message: "Registration Successful. Please Login To Continue.",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Occurred " + err.message });
    });
});

module.exports = orderRouter;
