import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import Allergy from "./components/pages/Allergy";
import About from "./components/pages/About";
import Login from "./Authenication/Login";
import Signup from "./Authenication/Signup";
import Protected from "./Authenication/Protected";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProductDescription from "./components/pages/ProductDescription";
import CartPage from "./components/pages/CartPage";
import Payment from "./components/pages/Payment";
import Success from "./components/pages/Success";
import Failure from "./components/pages/Failure";
import Profile from "./Authenication/Profile";


const App = () => {
  return (
    <>   
     <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/productdescription/:product_id"
          element={<ProductDescription />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allergy" element={<Allergy />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        
        <Route path="/failure" element={<Failure />} />
        <Route path ="/profile" element= {<Profile/>} />
        
      </Routes>

    </div>
    <div className="mt-10">
      <Footer/>
    </div>
    </>

  );
};

export default App;
