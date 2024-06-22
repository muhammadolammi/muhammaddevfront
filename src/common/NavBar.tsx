

import React, { useState } from 'react'
import { Bars3Icon} from "@heroicons/react/24/solid"
import ActionButton from './ActionButton';


type Props = {}

const NavBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='flex flex-row  items-center justify-between gap-x-5 ml-5 mr-5 md:ml-20 md:mr-20  bg-transparent h-[111px] text-white  font-poppins'   >

      <h1 className='bg-black'>Logo</h1>
        
     <div className='flex flex-row gap-x-10'>
     <ActionButton actionText='Contact Me' />
        <button className='block md:hidden '  onClick={()=>setIsMenuOpen(!isMenuOpen)}>
      <Bars3Icon className='h-6 w-6'/>
      </button>

     
        </div>
     
     
     
        <ul className={` ${isMenuOpen ? 'block' : 'hidden'} flex flex-row sm:flex-column gap-x-10  flex-wrap text-gray-800  text-sm font-bold`}>
          <li  className='hover:text-[#E7B000]' ><a href="/"> Home</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#1"> About</a></li>
          <li className='hover:text-[#E7B000]' ><a href="#2"> Projects</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/tutorials"> Tutorials</a></li>
          <li className='hover:text-[#E7B000]' ><a href="/posts"> Blogs</a></li>
        </ul>
        </div>        
        
  )
}

export default NavBar