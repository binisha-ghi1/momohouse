import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import bgOne from "../../assets/images/bgOne.jpg";
import Ellipse from "../../assets/images/Ellipse.png";
import momoplte from "../../assets/images/momoplte.png";
import { NavLink } from "react-router-dom";
import man2 from "../../assets/images/man2.jpg";
import im from "../../assets/images/im.jpg";
import Quality from "../../assets/images/Quality.png";
import prio from "../../assets/images/prio.png";
import Chef from "../../assets/images/Chef.png";
import { useEffect, useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import women from "../../assets/images/women.png";
import detail from "../../assets/images/detail.png";

function Home() {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
  };
  const filterItems = (country) => {
    const newItems = product.filter((item) => {
      return item.cuisine === country;
    });

    // console.log(newItems)
    setFilterProduct(newItems);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div>
        <div>
          <div className="flex justify-end   ">
            <div className="w-[40%] pt-32">
              <p className="text-2xl font-bold text-gray-500">RESTAURANT</p>
              <br></br>
              <h1 className="text-3xl font-bold flex items-center">
                The{" "}
                <span
                  style={{ backgroundImage: `url(${bgOne})` }}
                  className="h-16 w-36 bg-contain text-center text-3xl bg-no-repeat flex items-center justify-center text-white ml-2"
                >
                  #One
                </span>{" "}
              </h1>
              <h1 className="text-3xl font-bold ">
                Momo <span className="text-orange-600">Restaurant</span>
              </h1>
              <br></br>
              <p  className="font-bold text-2xl">
                More than{" "}
                <span className="text-orange-600 ">20+ Varities </span>
                of momo available for you{" "}
              </p>
              <div className="mt-6  ">
                <NavLink
                 to="/menu">
                  <Button  title="Explore Food Menu"  />
                </NavLink>
              </div>
            </div>
            <div className=" w-[40%] flex justify-end relative overflow-hidden  ">
              <img
                src={momoplte}
                alt="momo "
                className=" h-28   z-10  relative -right-24  top-28"
              />
              <img src={Ellipse} className=" h-[380px] relative -top-5 " />
            </div>
          </div>
          <div className="flex ml-20 mb-20 ">
            <img
              src={man2}
              className=" mt-20  h-[505px]   justify-center ml-20"
            />
            <div className=" flex flex-col pl-10">
              <div>
                <h1 className="text-3xl text-black-500  font-bold mb-4 mt-40 justify-center">
                  Why Customers<span className="text-orange-600"> Love Us</span>
                </h1>
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur. Sed diam dolor <br />
                  vivamus nibh fermentum vulputate tortor. Egestas facilisi
                  luctus <br /> turpis arcu dignissim. Amet neque enim etiam
                  purus id. Tortor <br /> sit orci blandit cursus turpis.
                </p>
              </div>
              <div className="mt-20">
                <NavLink to="/about">
                  <Button title="Explore Our Story " />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-y-9 items-center flex-col p-5 ">
          <div
            className="  w-[70%]  flex flex-col items-center 
        justify-center "
          >
            <h1 className=" text-3xl  mb-4 font-bold">
              Our <span className="text-orange-600">Most Popular</span> Recipes
            </h1>
            <p className="text-xl">
              Browse through a varieties of recipes with fresh ingredients
              selected only from the best places
            </p>
          </div>
          <div className=" flex  text-2xl font-semibold gap-x-10 justify-center w-[70%]">
            <button
              onClick={() => {
                filterItems("All");
              }}
              className=" bg-green-900  hover:bg-orange-600  text-white rounded-full px-3"
            >
              All
            </button>
            <button
              onClick={() => {
                filterItems("Italian");
              }}
              className=" bg-green-900  hover:bg-orange-600  text-white rounded-full px-3"
            >
              Italian
            </button>

            <button
              onClick={() => {
                filterItems("Pakistani");
              }}
              className=" bg-green-900  hover:bg-orange-600 text-white rounded-full px-3"
            >
              Pakistani
            </button>

            <button
              onClick={() => {
                filterItems("Russian");
              }}
              className=" bg-green-900  hover:bg-orange-600 text-white rounded-full px-3"
            >
              Russian
            </button>
          </div>

          <div className=" w-[70%]">
            {filterProduct.length > 0 ? (
              <div className="flex flex-wrap gap-10 justify-center items-center py-10 ">
                {filterProduct.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="h-44 w-52 shadow-xl rounded-lg flex flex-col items-center
                justify-center shadow-slate-200"
                    >
                      <img src={items.image} className="h-16" alt="" />
                      <p>{items.name}</p>
                      <p>Rs.{items.caloriesPerServing}</p>
                    </div>
                  );
                })}
              </div>
            ) : product.length > 0 ? (
              <div className="flex flex-wrap gap-10 justify-center items-center py-10 ">
                {product.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="h-44 w-52 rounded-lg shadow-xl flex flex-col items-center
                   justify-center shadow-slate-300"
                    >
                      <img src={items.image} className="h-24 rounded-md" alt="" />
                      <p className="mt-2 text-sm font-medium items-center ml-6">{items.name}</p>
                      <p className="font-bold mt-1">Rs.{items.caloriesPerServing}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Loading.....</p>
            )}
          </div>

          <div className="mt-5">
            <NavLink to="/menu">
              <Button title="Explore Our Menu " />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center ml-20 mt-16">
          <h1 className="text-3xl font-bold text-black">
            {" "}
            <span className="text-orange-600">We Offer People</span> The Service
            They Want{" "}
          </h1>
        </div>
        <img src={im} className="w-[1440px] object-cover mt-20" />
        <div className="flex justify-around items-start  max-w-4xl ml-40">
          <div>
            <img src={Quality} className="mt-20 ml-20 flex " />
            <h1 className="mt-2 ml-20 text-2xl text-black">Quality Food</h1>
            <p className="text-1xl ml-20 text-gray-600 mr-2">
              Only the best food with<br/> top quality <br /> products and
              ingridients
            </p>
          </div>
          <div>
            <img src={prio} className="mt-20 ml-20 flex " />
            <h1 className="mt-2 ml-20 text-2xl text-black">Private Party </h1>
            <p className="text-1xl ml-14 text-gray-600 mr-4">
              Get the best food for <br/>all your private
              <br /> parties and gatherings
              <br/> <br/> <br/>
              <NavLink className to="/service">
              <Button title="Explore Our Services " />
            </NavLink>
            </p>
          </div>
          <div>
            <img src={Chef} className="mt-20 ml-20 flex " />
            <h1 className="mt-2 ml-20 text-2xl text-black"> Catering </h1>
            <p className="text-1xl ml-16 text-gray-600 mr-4 mb-20">
              Get the best food <br/>for all your occasions
              <br /> and
              </p>
            
          
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10 shadow-2xl shadow-slate-400 pl-10">
        <div className="w-[50%] mt-8  ml-40">
          <h1 className="text-4xl  font-bold text-black-800 ">
            200+ <span className="text-orange-600">Happy Customers</span>
          </h1>
          <p className="text-4xl font-medium text-green-800 mt-3">
            What our customers say about us
          </p>
          <p className="text-2xl font-medium mt-8">
            “Only the best momo you can find in the market.
            <br /> Different Varieties of momo to choose from. Will
            <br /> be visiting again soon”{" "}
          </p>
        </div>
        <div className="flex items-center">
          <div className="h-[15%] pt-32 flex items-center justify-end rounded-md ">
            <img src={women} className="mr-30 mt-4 mb-4" />
          </div>
        </div>
      </div>
      <div className="flex   justify-center pl-10 mt-20">
        <div className="w-[50%] mt-10 ml-40">
          <h1 className="text-3xl font-bold text-black">
            Get <span className="text-orange-600">In Touch </span>{" "}
          </h1>
          <p className="text-2xl font-medium text-green-800">
            Our Friendly team would love to hear from you
          </p>
        </div>
      </div>
     
      <div className="flex flex-row justify-start pl-10 mt-20 bg-white  border-slate-300 shadow-2xl shadow-slate-300">
        <div className="w-[50%] ml-40  items-start">
        <img  className="h-[88%] pt-8" src={detail} />
            
        </div>

        
        <div className="flex flex-col  md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">
            Contact <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-gray-600 mb-4">
            If you have any queries, send us a message. Our friendly team would
            love to hear from you.
          </p>

          <form className="space-y-4 ">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full">
                <label htmlFor="fname" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="border-2 border-green-700 rounded-md p-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lname" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="border-2 border-green-700 rounded-md p-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="query" className="text-sm font-medium">
                What can we do for you?
              </label>
              <select
                id="query"
                name="query"
                className="border-2 border-green-700 rounded-md p-2 w-full"
              >
                <option value="">Choose</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-green-700 rounded-md p-2 w-full"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border-2 border-green-700 rounded-md p-2 w-full"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border-2 border-green-700 rounded-md p-2 w-full"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-600 text-white py-2 px-6 rounded-full hover:bg-orange-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        </div>
        <div className="w-full mt-20 ml-40  mb-2 md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10488.777485450102!2d85.34282895596081!3d27.670556269639885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737472831890!5m2!1sen!2snp"
            width="100% "
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
            className="rounded-l-lg"
          ></iframe>
        </div>
      
      </div>
     
          
    
  );
}

export default Home;
