import React, { createContext, useReducer, useContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          Image: action.Image,
          Name: action.Name,
          Price: action.Price,
          Quantity: action.Quantity,
          Description: action.Description,
        },
      ];
      case "REMOVE":
        let newArr = [...state]
        newArr.splice(action.index, 1)
        return newArr;
    case "DROP":
        let empArray = []
        return empArray
    case "UPDATE":
        let arr = [...state]
        arr.find((food, index) => {
            if (food.name === action.name) {
                console.log(food.Quantity, parseInt(action.Quantity), action.Price + food.Price)
                // arr[index] = { ...food, Quantity: parseInt(action.Quantity) + food.Quantity, Price: action.Price + food.Price }
                arr[index] = { ...food, Quantity: parseInt(action.Quantity), Price: action.Price }
            }
            return arr
        })
        return arr
    default:
      console.log("Error in Reducer");
  }
};



export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
