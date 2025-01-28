import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  CartItems: [],
};

const cartReducer = (state, action) => {
  console.log("cartReducer", action);

  switch (action.type) {
    case "AddtoCart": {
      const isExisting = state.CartItems.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExisting) {
        let updatedProduct = state.CartItems.map((item) => {
          if (item.id === action.payload.id) {
              return { ...item, qty: item.qty + 1 };
          }
          return item;
      });

      return {
          ...state,
          CartItems: updatedProduct,
               }

        return state;
      } else {
        const newCartItems = { ...action.payload, qty: 1 };
        const newCartItemsProducts = [...state.CartItems, newCartItems];
        alert(newCartItems.name + "is added to cart");

        return {
          ...state,
          CartItems: newCartItemsProducts,
        };
      }
    }

    case "Increment": {
      const updatedProduct = state.CartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedProduct,
      };
    }

    case "Decrement": {
      const updatedProduct = state.CartItems.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedProduct,
      };
    }

    case "Delete": {
      const filterProducts = state.CartItems.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      return {
        ...state,
        CartItems: filterProducts,
      };
    }

    case "EmptyCart": {
      return {...state, CartItems:[]}
    }

    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
