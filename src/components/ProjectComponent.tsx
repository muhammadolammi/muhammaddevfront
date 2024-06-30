
import placeholder from '../images/placeholder.png'; // Import the placeholder image

import React from 'react'

type Props = {}

const ProjectComponent = (props: Props) => {
  return (
    <div className='container text-white '>
      <p className='font-poppins text-[15px] font-bold'>ProjectComponent</p>
      <p> Lorem ipsum dolor sit amet consectetur. At phasellus et dictumst mi phasellus odio. Arcu </p>
      <img src={placeholder} alt="" className='' />
    </div>
  ) 
}

export  {ProjectComponent}