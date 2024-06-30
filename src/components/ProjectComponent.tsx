
import placeholder from '../images/placeholder.png'; // Import the placeholder image

import React from 'react'

type Link = {
  LinkName: string;
  LinkUrl: string;
};

type Props = {
  Name: string
  Description: string
  Logo: string
  Links? : Link[]

}

const ProjectComponent = (props: Props) => {
  return <div className='p-4 bg-[#131313] rounded-xl' >  
  <div className='w-[200px] '>
  <p className='text-left text-xl font-bold mb-[10px] text-[#78ADFE] font-poppins text-wrap '>{props.Name}</p>
    
  </div>
 
  <p className='text-left text-[#606060] font-poppins ml-[15px] '> {props.Description} </p>
  <div className='mt-[10px] flex'>

  {

          props.Links?.map((link)=>(
              <a href={link.LinkUrl} className='underline  text-blue-200 font-poppins ml-[15px]'>{link.LinkName}</a>

          )
            
          )
        }
    </div>


      <div className=' mt-[10px] mb-[15px] '>
       
      <img src={props.Logo} alt="" className='w-full' />
      </div>
    </div>
}

export  {ProjectComponent}