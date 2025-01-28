import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import logo from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <footer>
      <div>
        <div className="flex justify-around bg-gray-200 items-start w-full ">
          <div className="rounded-3xl w-96 p-5  flex flex-col items-center pb-16">
            <div className="  flex items-center px-5 gap-x-2">
              <img src={logo} alt="logo" className="h-5 " />
              <NavLink
                to="/"
                className="text-green-600 text-2xl font-sans font-bold "
              >
                momo
              </NavLink>
            </div>
            <p className="text-black-600 ml-10 font-medium mt-4">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing <br />
              elit. Incidunt voluptatum nesciunt voluptate illum <br />
              aliquid quaerat enim explicabo beatae pariatur?
              <br /> Earum tenetur dolores labore rerum accusantium <br />
              recusandae eius impedit voluptates sunt!
            </p>
          </div>

          <div className="rounded-3xl w-96 p-5  flex flex-col items-center">
            <h2 className="text-2xl font-semibold  text-green-600">momos</h2>
            <NavLink to='/about'>
            <p className="text-black-600 font-medium hover:underline mt-4"> About Us</p>
            </NavLink>

            <NavLink to='/menu'>
            <p className="text-black-600 font-medium hover:underline mt-2">Our Menu </p>
            </NavLink>

            <NavLink to='/services'>
            <p className="text-black-600 font-medium hover:underline mt-2">Our Services </p>
            </NavLink>

            <NavLink to='/ontact '>
            <p className="text-black-600  font-medium hover:underline mt-2">Contact Us </p>
            </NavLink>
          </div>

          <div className=" rounded-3xl w-96 p-5  flex flex-col items-center pb-16">
            <h2 className="text-2xl font-semibold text-green-600">Legals</h2>
            <p className="text-black-600 hover:underline font-medium mt-4"> Terms & Conditions </p>
            <p className="text-black-600  hover:underline font-medium mt-3">Privacy Policy</p>
            <p className="text-black-600 hover:underline font-medium mt-3 ">Support</p>
          </div>

          <div className=" rounded-3xl w-96 p-5  flex flex-col items-center pb-16">
            <h2 className="text-2xl font-semibold text-green-600">
              Follow Us{" "}
            </h2>
            <div className="flex flex-row items-center gap-x-2 pt-4 text-2xl">
              <NavLink to="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </NavLink>

              <NavLink to="https://www.tiktok.com/" target="_blank">
                <FaTiktok />
              </NavLink>

              <NavLink to="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </NavLink>
            </div>

            <div className="flex flex-row items-center gap-x-2 pt-4 text-2xl mt-2">

              <NavLink to="https://www.linkedin.com/" target="_blank">
              <FaLinkedin/>
              </NavLink>

              <NavLink to="https://x.com/" target="_blank">
              <FaTwitterSquare/>
              </NavLink>

              <NavLink to="https://www.youtube.com/" target="_blank">
              <FaSquareYoutube />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
