import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";

import { useContext } from "react";

function ProductDescription() {
  const {state , dispatch} = useContext(CartContext);
  console.log(state)

  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);


  const { product_id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  // console.log(product_id)

  const getSingleProduct = async () => {
    let productData = await fetch(
      `https://dummyjson.com/recipes/${product_id}`
    );
    productData = await productData.json();

    setSingleProduct(productData);
    console.log(productData)

  };

  useEffect(() => {
    getSingleProduct();
  }, [product_id]);

  return (
    
    <div>
      
      <div>
        {singleProduct ? (
          <div className="flex rounded-3xl shadow-2xl shadow-slate-300 gap-40 ml-40 mr-20 mt-20 ">
            <div>
              <img
                className="h-[88%] w-56 pb-8  ml-8 mt-8 "
                src={singleProduct.image}
                alt=""
              />
            </div>
            <div>
              <p className="text-2xl font-medium  text-red-600 mt-10 ">
                Rs. <span className="text-black"> {singleProduct.caloriesPerServing} </span>
              </p>
              <p className="text-2xl font-medium text-orange-600  mt-4">
                Ratings:    <span className="text-blue-600">{singleProduct.rating} </span>
              </p>
              <div className="flex flex-row text-3xl font-medium gap-2 mt-4">
              </div>

              <button
               onClick={()=>
                dispatch({type:"BuyNow",payload:singleProduct})}
               className=" bg-orange-600 text-white  text-2xl  pl-8  pr-8  pb-4 pt-4 mt-6  mr-4  mb-4">
                Buy Now

              </button>

              <button
              
               onClick={()=>
                dispatch({type:"ADD_TO_CART",payload:singleProduct})}
              
               
               className=" bg-blue-800 text-white  text-2xl  pl-8 pr-8  pb-4 pt-4 mt-8 mb-8">
                Add to cart
              </button>
            </div>
          </div>
        ) : (
          <div> Loading..... </div>
        )}
      </div>
      <div className=" flex rounded-3xl  shadow-2xl shadow-slate-300 mt-4 mb-16 pb-16 ml-40 mr-20">
      <div className="ml-40 mt-10  ">
        <h1 className="text-2xl font-bold mb-4">Product Description : 
        </h1>
        <p className="text-xl font-medium"> Name: {singleProduct.name}
       
        </p>
        <p className="text-xl font-medium">
          {" "}
          Prepration Time : {singleProduct.prepTimeMinutes} minutes
        </p>
        <p className="text-xl font-medium">
          {" "}
          Meal-Type : {singleProduct.mealType}
        </p>
        <p className="text-xl font-medium"> Tags : {singleProduct.tags}</p>
        
      </div>
      

            <div className="ml-40 mt-10">
              <h1 className="text-3xl font-bold">Ingredients:</h1>
              <ul className="list-disc pl-5 mt-4">
                {(singleProduct.ingredients || []).map((ingredient, index) => (
                  <li key={index} className="font-semibold">
                    <span className="italic">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </div>
  );
}

export default ProductDescription;
