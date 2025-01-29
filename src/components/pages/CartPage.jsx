import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { AiTwotoneDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function CartPage  ()  {
  const { state, dispatch } = useContext(CartContext);
  const CartItems = state.CartItems;
  
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  // console.log(state)
  return (
    <div className="flex justify-center mt-10">
      <div className="w-[60%] ">
        {CartItems.length > 0 ? (
          <div>
            <div className="p-2">
              {CartItems.map((item) => {
                return (
                  <div
                    className="shadow-md my-5 rounded-md  p-3 shadow-stone-300 flex justify-between"
                    key={item.id}
                  >
                    <div className="flex">
                      <img className="h-16" src={item.image} alt="" />
                      <h1 className="ml-7">{item.name}</h1>
                    </div>

                    <div>
                      <p>{item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Delete",
                            payload: { id: item.id },
                          });
                        }}
                      >
                        <AiTwotoneDelete className="text-black text-3xl " />
                      </button>
                    </div>
                    <div className=" w-24  space-x-2 mt-3 ">
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Decrement",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-white rounded w-7"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "Increment",
                            payload: { id: item.id },
                          });
                        }}
                        className="bg-white rounded w-7"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-3xl ml-20 font-bold ">
            <img
              className="ml-40 w-[60%]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NYdr_WVdr7yys6_r9JaDqna-srtbqS6L1A&s"
              alt=""
            />
            <p className="ml-40">
              Please order something to eat.
              <br /> <br />
              <NavLink className="text-orange-600 ml-36  underline" to="/menu">
                Order Now
              </NavLink>
            </p>
            <br />
          </div>
        )}
      </div>
      {CartItems.length > 0 && (
        <div className="border-2 shadow flex  flex-wrap flex-col items-center justify-center shadow-slate-500 h-80 ml-8 mb-8 rounded-lg w-[25%]  ">
          <p className="text-2xl  font-medium">Order Summary :</p>
          <p className=" pl-8 pt-4 font-serif items-center">
            Thank you for choosing us. If you have
            <br /> any questions, feel free to contact us.
          </p>
          <p className="text-2xl font-medium mt-4">
            Total Price: &nbsp;
            <button
              className="font-medium text-orange-600 mb-6"
              onClick={() => {
                dispatch({ type: "EmptyCart" });
              }}
            >
              Rs.({totalItems})
            </button>{" "}
          </p>
          <NavLink
            to="/payment"
            state={[...CartItems]}
            className="bg-green-700 text-white rounded p-2 w-52 "
          >
            {" "}
            Proceed to Checkout ({totalItems}){" "}
          </NavLink>
          <button
            onClick={() => {
              dispatch({ type: "ClearCart" });
            }}
            className="bg-orange-600 text-white rounded p-2 w-52 mt-4 "
          >
            {" "}
            Clear Cart ({totalItems}){" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default CartPage;
