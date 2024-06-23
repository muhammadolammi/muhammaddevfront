



import React from 'react'
import logo from '../images/logo.png';


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex flex-row  items-center justify-between mt-[100px]  ml-20 mr-20  bg-transparent h-[111px] text-white   flex-wrap font-poppins'   >

<img src={logo} alt="" className='h-10 w-10 '/>

     
        <ul className='flex flex-row gap-x-10  flex-wrap text-gray-800  text-sm font-semibold'>
          <li  className='hover:text-[#E7B000]' ><a href="/"> Home</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#1"> About</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#2"> Projects</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/tutorials"> Tutorials</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/posts"> Blogs</a></li>
        </ul>
        </div>        
        
  )
}

export default Footer