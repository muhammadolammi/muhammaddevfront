

import React, { useState } from 'react'
import { Bars3Icon} from "@heroicons/react/24/solid"
import ActionButton from './ActionButton';
import logo from '../images/logo.png'


type Props = {}

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-row  items-center justify-between gap-x-5 ml-5 mr-5 md:ml-20 md:mr-20  bg-transparent h-[111px] text-white  font-poppins'   >

      <img src={logo} alt="" className='w-10 h-10'/>
        
     <div className='flex flex-row gap-x-10 md:gap-x-0  justify-center items-center'>
     <ActionButton actionText='Contact Me' />
    <button className='block md:hidden '  onClick={()=>setIsMenuOpen(!isMenuOpen)}>
      <Bars3Icon className='h-6 w-6'/>
    </button>
   

    <ul className={` ${isMenuOpen ? 'block' : 'hidden'} md:flex flex md:flex-row sm:flex-column  gap-x-10   flex-wrap text-gray-800  text-x font-bold`}>
          
          <li>
            <div className='h-[30px]'></div>
          </li>
          <li  className='hover:text-[#E7B000]' ><a href="/"> Home</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#1"> About</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#2"> Projects</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/tutorials"> Tutorials</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/posts"> Blogs</a></li>
        </ul>
     
        </div>
     
     
     
       
        </div>        
        
  )
}

export default NavBar