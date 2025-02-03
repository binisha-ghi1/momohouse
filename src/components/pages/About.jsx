import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import color from '../../assets/images/color.png'
import knife from '../../assets/images/knife.png'
import green from '../../assets/images/green.png'
import hand from '../../assets/images/hand.png'
import red from '../../assets/images/red.png'
import smile from '../../assets/images/smile.png'
import white from '../../assets/images/white.png'
import Team from '../../assets/images/Team.png'
import Team2 from '../../assets/images/Team2.png'
import Team3 from '../../assets/images/Team3.png'
import Quote from '../../assets/images/Quote.png'
import ok from '../../assets/images/ok.jpg'
function About  ()  {
  return (
    <div>
    <div className='flex items-center pl-10'>
       <div className="w-[50%]">
      <p className="text-3xl text-teal-800  font-bold ml-20"> <span className="italic">About Us </span></p><br></br><br></br>
      <p className='text-1xl text-gray-500 ml-20'>WE PRIDE OURSELF ON</p><br></br>
      <h1 className='text-4xl font-bold ml-20'><span className='text-orange-600'>Our authentic momo recipes </span><br>
      </br>
       passed down through <br>
       </br> generations</h1>
      
    </div>
    <div className='flex items-center'>
       <div className="h-[20%] pt-32 flex items-center justify-end">
              <img src={color}/>
                </div>
      </div>
    </div>


    <div className=' mt-20 '>
          <img src={ok} className="w-[100%]"/>
          </div>

          <div  className='flex  mt-20 ml-40 gap-40'>
           <div>
            <p className="text-2xl font-bold mb-10">Our momos are<span className="text-orange-600"> made<br/> with love</span></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing<br/> elit. Molestias error distinctio quasi dignissimos<br/> impedit itaque asperiores  cupiditate architecto<br/> minus quod laborum amet iure quas saepe.</p>
           </div>
           
           <div className="flex-item-center">
            <div className="h-[20%]   justify-end">
              <img src={knife}/>
              <img src={green} className="h-40 relative bottom-24  right-[26%] "/>
            </div>
            </div>
          </div>

         <div  className='flex   ml-40   mt-20 gap-40'>
         <div className="h-[20%] justify-center">
              <img src={hand}/>
              <img src={red} className="h-40 relative bottom-24  left-[75%]  "/>
            </div>
            <div className="flex-item-end ">
            <p className="text-2xl relative -top-3 font-bold ">Taste the difference with <br/><span className="text-orange-600"> our handcrafted momos</span></p>
            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing<br/> elit. Molestias error distinctio quasi dignissimos<br/> impedit itaque asperiores  cupiditate architecto<br/> minus quod laborum amet iure quas saepe.</p>
            </div>
         </div>
         <div  className='flex  ml-40  gap-40'>
           <div>
            <p className="text-2xl h-[40%]  font-bold ">Our momos are the<br/> perfect<span className="text-orange-600">  blend of tradition<br/> <span className="text-black">and</span> innovation</span></p>
            <p className="relative -top-28 ">Lorem ipsum dolor sit amet consectetur, adipisicing<br/> elit. Molestias error distinctio quasi dignissimos<br/> impedit itaque asperiores  cupiditate architecto<br/> minus quod laborum amet iure quas saepe.</p>
           </div>
           <div className="flex-item-center">
            <div className="h-[20%] justify-end">
              <img src={smile}/>
              <img src={white} className="h-40 relative bottom-24  right-[26%] "/>
            </div>
            </div>
          </div>
          <div className="flex mt-20">
            <img src={Quote}/>
          </div>

          <div className="flex flex-col items-center justify-center mb-10 mt-20 ">
            <h1 className="text-3xl font-bold">Meet The <span className="text-orange-600">Team</span></h1>
            <p className="text-teal-800 text-2xl font-semibold pb-4">Our talented members who  delivers only the best results</p>
            <div className="flex flex-row border gap-4">
              <img src={Team}/>
              <img src={Team2}/>
              <img src={Team3}/>

            </div>
          </div>
      </div>
      
      
      
    
     
    
    
  )
}

export default About
