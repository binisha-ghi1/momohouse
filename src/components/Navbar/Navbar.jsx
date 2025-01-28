
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import logo  from  "../../assets/images/logo.jpg";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { CgProfile } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";





function Navbar() {



  const { user, isAuthenticated, logout } = useAuth0();



  const {state} = useContext(CartContext)
  const totalItems = state.CartItems.reduce((acc, item)=>{
    return acc+item.qty
  }, 0)


  return (
    <div className=" flex justify-around flex-wrap shadow-xl  shadow-slate-100  gap-x-16 font-bold items-center   ">
      <div className="  flex items-center px-5 gap-x-5">
        <img src={logo} alt="logo" className="h-5" />
        <NavLink to="/" className="text-green-600  font-sans font-bold ">
          Momo
        </NavLink>
      </div>

      <div className=" flex text-slate-500 hover:underline  px-5 gap-x-5" >
      <NavLink to="/">Home</NavLink >
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu"> Menu</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/allergy">Allergy </NavLink>

        {isAuthenticated ? (
          <NavLink
            onClick={() => {
              logout();
            }}
          >
            Logout
          </NavLink>
        ) : (
          <div>
            <NavLink  to="/login">Login</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        )}
      </div>
     

      <div className=" flex  px-5 gap-x-5   items-center">
      <NavLink to="/cart">
      <span>
      <FiShoppingCart className=" text-black relative   text-2xl  mt-6 w-8 h-6" />
      </span>
      <span className="text-red-600 absolute top-1 right-88 text-lg "> {totalItems}</span>
      </NavLink>


        <NavLink to="https://www.facebook.com/" target="_blank">
        <FaFacebook />
        </NavLink>

        

        
        <NavLink to="https://www.tiktok.com/" target="_blank">
        <FaTiktok  />
        </NavLink>

        <NavLink to="https://www.instagram.com/" target="_blank">
          <FaInstagram />
          </NavLink>
        <NavLink
          to="/contact"
          className="bg-green-700 hover:bg-orange-600 rounded-3xl text-white px-4 py-2"
        >
          Contact
        </NavLink>

  
        {isAuthenticated ? (
        <NavLink to="/profile" className="rounded-full">
          <img
            className="rounded-full h-10"
            src={user.picture}
            alt="Profile"
          />
        </NavLink>
      ) : (
        <CgProfile size={25} />
      )}
      </div>
    </div>
  );
}

export default Navbar;
