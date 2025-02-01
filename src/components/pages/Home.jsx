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
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import women from "../../assets/images/women.png";


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
            <div className=" w-[44%] flex justify-end relative overflow-hidden  ">
              <img
                src={momoplte}
                alt="momo "
                className=" h-[46%]   z-10  relative -right-28  top-28"
              />
              <img src={Ellipse} className=" h-[400px] relative -top-5" />
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
              className=" bg-slate-200  hover:bg-slate-600 hover:text-white border-2 border-black text-black rounded-full px-3"
            >
              All
            </button>
            <button
              onClick={() => {
                filterItems("Italian");
              }}
              className=" bg-slate-200  hover:bg-slate-600 hover:text-white border-2 border-black text-black rounded-full px-3"
            >
              Italian
            </button>

            <button
              onClick={() => {
                filterItems("Pakistani");
              }}
              className=" bg-slate-200  hover:bg-slate-600 hover:text-white border-2 border-black text-black rounded-full px-3"
            >
              Pakistani
            </button>

            <button
              onClick={() => {
                filterItems("Russian");
              }}
              className=" bg-slate-200  hover:bg-slate-600 hover:text-white border-2 border-black text-black rounded-full px-3"
            >
              Russian
            </button>
          </div>

          <div className=" w-full  ">
            {filterProduct.length > 0 ? (
              <div className="flex flex-wrap gap-10 justify-center items-center py-10 ">
                {filterProduct.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="h-64 w-60 mt-10 shadow-xl rounded-lg flex flex-col items-center
                justify-center  shadow-slate-300"
                    >
                      <img src={items.image} className="h-48 pt-8  rounded-xl" alt="" />
                      <p className="mt-2 text-sm font-medium items-center ml-6">{items.name}</p>
                      <p className="font-bold  text-red-600 mt-1 mb-8">Rs.{items.caloriesPerServing}</p>
                    </div>
                  );
                })}
              </div>
            ) : product.length > 0 ? (
              <div className="flex flex-wrap gap-10  justify-center items-center py-10 ">
                {product.map((items) => {
                  return (
                    <div
                      key={items.id}
                      className="h-64 pt-20 pb-20  w-52 rounded-xl shadow-xl flex flex-col items-center
                   justify-center shadow-slate-400"
                    >
                      <img src={items.image} className="h-48 pt-8  rounded-xl" alt="" />
                      <p className="mt-2 text-sm font-medium items-center ml-6">{items.name}</p>
                      <p className="font-bold  text-red-600 mt-1 mb-8">Rs.{items.caloriesPerServing}</p>
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

      <div className="flex items-center mt-10 shadow bg-gray-200 shadow-slate-400 pl-10">
        <div className="w-[50%] mt-10  ml-40">
          <h1 className="text-4xl  font-bold text-black-800 ">
            200+ <span className="text-orange-600">Happy Customers</span>
          </h1>
          <p className="text-xl font-medium  text-teal-800 mt-4">
            What our customers say about us
          </p>
          <p className="text-xl text-black italic">
            “Only the best momo you can find in the market.
            <br /> Different Varieties of momo to choose from. Will
            <br /> be visiting again soon”{" "}
          </p>
          <h1 className="text-2xl font-bold mt-8 mb-6">Livia Dias</h1>
            <div className="flex gap-3">
              <CiCircleChevLeft size={30} />
              <CiCircleChevRight size={30} />
              </div>
        </div>
        <div className="flex items-center">
          <div className="h-[15%] pt-32 flex items-center justify-end rounded-md ">
            <img src={women} className="w-80 h-96 mb-10" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 mb-4 items-center justify-center">
          <h1 className="text-2xl font-bold"><span className="text-orange-600">Get</span> In Touch</h1>
          <p className="text-teal-800  text-xl font-bold mt-2 mb-4">Our Friendly team would love to hear from you</p>

        </div>

        <div className=" flex h-[550px] px-40" >

          <div className=" bg-teal-800 text-white p-6 rounded-xl w-72 h-[560px] text-left max-w-md mx-auto space-y-6">
           
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaMapMarkerAlt /> Our Address
              </h3>
              <p className="italic text-sm mt-4">New Baneshwor, Kathmandu, Bagmati,<br /> Nepal</p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaPhone /> Our Contacts
              </h3>
              <div className="text-sm flex mt-4">
                <p><strong>Mobile:</strong> <br /> 980 5689789 <br /> 9841 275897</p>
                <p><strong className="ml-10"> Landline:</strong> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;01-4783972</p>
                </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <FaClock /> Our Service Time
              </h3>
              <div className="text-sm flex mt-4">
                <p><strong>MON - FRI:</strong>  <br />10 am - 8 pm</p>
                <p><strong className="ml-10">SAT - SUN:</strong><p className="ml-10"> Closed</p> </p>
              </div>
            </div>

            <div className="text-left ">
              <p className="italic items-center justify-center text-sm mt-16">Get in touch in social networks</p>
              <div className="flex gap-4 mt-4 text-xl">
                <FaFacebook className="cursor-pointer hover:text-gray-300" />
                <FaInstagram className="cursor-pointer hover:text-gray-300" />
                <FaTiktok className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
          <div className="">
            <form className="ml-5 mt-5 text-left">
              <div className="flex gap-10 ">
                <div>
                  <label className="block  mb-1 " htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className=" p-2 border-2 border-teal-800 rounded w-35"
                    required
                  />
                </div>
                <div>
                  <label className="block  mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className=" p-2 border-2 border-teal-800 rounded w-35"
                    required
                    />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="purpose">
                      What Can We Do For You?
                    </label>
                    <input
                      type="text"
                      id="purpose"
                      name="purpose"
                      placeholder="Enter your purpose"
                      className=" w-full p-2 border-2 border-teal-800 rounded"
                    />
                  </div>

                  <div>
                    <label className="block mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border-2 border-teal-800 rounded"
                      required
                      />
                      </div>

                      <div>
                        <label className="block mb-1" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="w-full p-2 border-2 border-teal-800 rounded"
                        />
                      </div>
        
                      <div>
                        <label className="block  mb-1" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Enter your message"
                          className="w-full h-24 p-2 border-2 border-teal-800 rounded"
                          rows="4"
                          required
                        ></textarea>
                        </div>


              <button className="bg-orange-500 mt-5 hover:bg-orange-600 p-4
             flex items-center gap-x-2   text-white rounded-full"> Send Message</button>

            </form>
          </div>
          </div>

        
    


        
        <div className="w-full mt-40 ml-40  mb-2 md:w-1/2">
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
