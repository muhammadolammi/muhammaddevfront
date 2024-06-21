import code from '../images/code1.png'; // Import the placeholder image


import React from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer';


function HomePage() {
  return (
    <div className='bg-black'>
      <NavBar/>
      <div className=' container  mt-[50px] text-[#F0F2F5]  font-bold  w-[1032px] h-[236px] place-content-center text-center ' >
       <text className='text-7xl font-semibold   '> Empower Your Coding 
      <br />
      Journey
      </text> 
      </div>

      <div className='container w-[819px] h-[132px] text-center text-[#B0B0B0] text-x  font-poppins text'>
        <p >
        This platform is designed to empower you, a junior programmer, on your 
        <br />
        journey to mastering the art of coding. Whether you're a complete 
        <br />
        beginner or have some basic experience, we offer a comprehensive
        <br />
         and engaging learning experience to propel you forward.
        </p>
      </div>

      <div className=" mt-[30px] flex justify-center">
  <button className="bg-[#FDF7F2]  text-[#161513]  font-regular text-[17px] font-poppins py-2 px-4 rounded-lg">
   Contact Me
  </button>
</div>
{/* <div className='container mt-[100px] w-[1172px] h-[655.61px] relative'>
  <div className='absolute w-full h-full backdrop-filter blur-md'></div>
  <img className='container  mt-[100px] max-w-[973.18px] max-h-[655.61px] backdrop-blur-xl rounded-lg	' src={code} alt="" />
</div> */}

<figure className=" container  mt-[100px]  max-w-xl h-[300px] flex justify-center items-center filter grayscale hover:filter-none">
<div className='relative'>
  
<img className="  rounded-lg w-[973.18px] h-[400px] mt-[100px]  "  src={code} alt=''/>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]"></div>

</div>
  
</figure>

   <div className='container  mt-[200px] w-[522px] h-[66px]'>
    <p className='text-[#F0F2F5] text-center  text-4xl font-semibold'>Clear Learning Paths</p>
   </div>
   <div className='container  mt-[20px] w-[700px] h-[66px]'>
    <p className='text-[#B0B0B0] text-center  font-poppins '>We offer well-structured learning paths for various popular programming languages, building your skills progressively from the fundamentals to more advanced concepts.</p>
   </div>
   

   <div  className='container bg-red-800 w-[186px] h-[72px]'>
    <p>Golang</p>
   </div>
<Footer />
    </div>
  )
}

export  {HomePage}