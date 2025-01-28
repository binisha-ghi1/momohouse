import Footer from "../Footer/Footer";
import star from '../../assets/images/star.png'
import Video from '../../assets/images/Video.png'
import prio from "../../assets/images/prio.png";
import QR from "../../assets/images/QR.png";
import ing from "../../assets/images/ing.png";
import Chef from "../../assets/images/Chef.png";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
const Services = () => {
  return (
    <div>
       <div className='flex items-center pl-10'>
          <div className="w-[50%]">
         <p className="text-3xl text-green-800  font-bold ml-20"> <span className="italic">Our Services </span></p><br></br><br></br>
         <p className='text-2xl text-gray-500 ml-20'>Knowing Our Customers Needs</p><br></br>
         <h1 className='text-4xl font-bold ml-20'><span className='text-orange-600'>We are more than just momos. </span>
         We are a full-service dining experience. <br/>
         </h1>
         
       </div>
       <div className='flex items-center'>
          <div className="h-[20%] pt-32 flex items-center justify-end">
                 <img src={star}/>
                   </div>
         </div>
       </div>
       <div className='  mt-10'>
        <img src={Video}/>
       </div>
       <div>
       <div className='flex items-center pl-10 ml-20 mr-20 mt-10 gap-40'>
          <div className=' '>
            <img src={prio}/>
         <p className="text-3xl text-black-800 font-bold">Private Party </p><br/>
         <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br/> elit. Est, dolore pariatur quis<br/> voluptatum ab laboriosam nostrum quod<br/> officia obcaecati quae explicabo velit id.</p><br/>
         <h1 className='  text-2xl font-bold'><span className='text-green-600'>Scan the QR Code. </span><br/>
         <p className=' font-thin text-gray-500'>You can also check about the service. </p> 
         <img src={QR} className='pl-[68%] relative bottom-20'/>
         </h1>
         
       </div>
       <div className='flex items-center '>
          <div className="h-[20%]  flex items-center justify-end">
                 <img src={ing}/>
                   </div>
         </div>
       </div>
       </div>

       <div className='flex items-center pl-10  ml-20 mr-20 mt-10 gap-40'>
       <div className="h-[20%]  flex items-center justify-end">
       <img src={ing}/>
       </div>
       <div className=''>
            <img src={Chef}/>
         <p className="text-3xl text-black-800 font-bold">Catering</p><br/>
         <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br/> elit. Est, dolore pariatur quis<br/> voluptatum ab laboriosam nostrum quod<br/> officia obcaecati quae explicabo velit id.</p><br/>
         <h1 className='  text-2xl font-bold'><span className='text-green-600'>Scan the QR Code. </span><br/>
         <p className=' font-thin text-gray-500'>You can also check about the service. </p> 
         <img src={QR} className='pl-[68%] relative bottom-20'/>
         </h1>
       </div>
       </div>
       <div className='flex  flex-col items-center justify-center mt-20 ml-20 mr-20 h-64 rounded-3xl bg-slate-300'>
        <h1 className='pb-16 text-2xl font-semibold'>Got any Quiries ?</h1>
        <p className=''>If you have any quiries send us a message. Our friendly Team would love to hear from you.</p><br/>
        <NavLink to="/about">
              <Button title="Get In Touch " />
            </NavLink>
       </div>
     
       
       </div>
       
       
       
  )
}

export default Services
