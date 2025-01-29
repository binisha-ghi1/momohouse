import QR from "../../assets/images/QR.png";
import { FaMobileScreenButton } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

function Menu() {
  const [product, setProduct] = useState([]);
  const data = useContext(CartContext);
  console.log(data)

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response);
    setProduct(response.recipes);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
    <div>
      <div className=" flex items-center justify-center  text-center text-4xl font-semibold text-green-700 mt-40">
        <h1> <span className="italic">Our Menu </span></h1>
      </div>
      <div  className="flex items-center justify-center text-2xl font-medium mt-5 text-orange-600 ">
        <p>Our menu is more than just momos,</p>
      </div>
      <div className="flex items-center justify-center text-2xl font-medium">
        <p>with a variety of dishes to all tastes and preferences.</p>
      </div>
      <div className=" flex flex-box w-[50%] ml-[28%]  mt-10 mb-20 justify-center items-center bg-slate-200 shadow-3xl rounded-3xl shadow-slate-500">
      <div  className="items-center justify-center flex  flex-col mt-10 ">
        <p className="text-2xl font-medium text-green-600">Scan the QR Code</p>
        <p className="font-medium">You can also check the allergy advice using your phone as well</p>
        <img src={QR} className='pl-30 pt-6 pb-4'/>
        
        <div className="flex flex-row items-center justify-center mb-6">
        <p>Scan Me!</p>
        <p ><FaMobileScreenButton /></p>
        </div>
      </div>
      </div>
    
    <div className=" w-[70%] ">
      {product.length > 0 ? (
        <div className=" flex flex-wrap gap-10 w-[90%]  ml-60 pl-20  mt-40 justify-center items-center ">
          {product.map((items) => {
            return (
              <div
                key={items.id}
                className=" h-62 w-72 shadow-md flex  items-center
                   justify-center shadow-slate-500 rounded-3xl"
              >
                <NavLink to={`/productDescription/${items.id}`}  >
                <img className=" w-42 h-52 rounded-md justify-center items-center mt-16 ml-6" src={items.image}
                alt="Product_Image"
                />
                <h1 className="mt-4 items-center font-medium text-center">{items.name}</h1>
                <p className="mt-4 ml-20  mb-16 font-medium items-center">Rs.{items.caloriesPerServing}</p>
                </NavLink>

                
              </div>
            );
          })}
        </div>
      ) : (
        // <h1>Loading....</h1>
        <div className="border border-blue-300 shadow  rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
      )}
       
       

    </div>
    </div>
    </div>
  );
}

export default Menu;
