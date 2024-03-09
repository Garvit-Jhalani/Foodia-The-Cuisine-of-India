import React from "react";
// import Delete from '@material-ui/icons/Delete'
import { useDispatchCart, useCart } from "./ContextReducer";
import axios from "axios";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center text-bold fs-3 h-200 text-black text-bold">
          The Cart is Empty!
        </div>
      </div>
    );
  }

  
  // const handleCheckOut = async (food,data) => {
  //   // const [item,item2] = data;
  //   // console.log(item);
  //   data={
  //     name:food.Name,
  //     image:food.Image,
  //     quantity:food.Quantity,
  //     price:food.Price,
  //     description:food.Description,
  //   }
  //   try {
  //     console.log("Hello",food,data);
  //     const res = await axios
  //       .post("http://localhost:3000/app/order", data)
  //       .then((res) => {
  //         //navigate("/auth/login", {replace: true});
  //         console.log("Successfull");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  //   // if (res.status === 200) {
  //   //   dispatch({ type: "DROP" })
  //   // }
  // };

  const handleCheckOut =  (food) => { 
    // console.log(food);
    try {
      {data.map((food) =>{
        console.log(food.Name);
        const orderData = {
          name: food.Name, 
          image: food.Image,
          quantity: food.Quantity,
          price: food.Price,
          description: food.Description,
        };
      const res =  axios.post("http://localhost:3000/app/order", orderData);
      console.log("Successfully placed order:", res.data);
      dispatch({ type: "DROP" })
    })}
      // Handle any logic after successfully placing the order
    } catch (err) {
      console.error("Error occurred while placing order:", err);
      // Handle errors if any
    }
  };
  

  let totalPrice = data.reduce(
    (total, food) => total + parseFloat(food.Price),
    0
  );
  return (
    <div className="bg-slate-300 w-full h-full">
      <div className="2xl:pb-48 xl:pb-96 xl:mb-96 mt-12">
        <table className="w-full table table-hover">
          <thead className="text-success fs-4 mt-2">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="pt-4" style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-block" }}>
                    <img
                      src={food.Image}
                      alt={food.Name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                </td>
                <td className="text-center">{food.Name}</td>
                <td className="text-center">{food.Quantity}</td>
                <td className="text-center">{food.Price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <button
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
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2 text-center pt-6">Total Price : {totalPrice}</h1>
        </div>
        <div className="pt-36 text-center">
          <button onClick={handleCheckOut} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Check Out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
