
import code from '../images/code1.png';

import React from 'react'

type Props = {}

const PageImageFigure = (props: Props) => {
  return (
    <div className='container  mt-[10px] md:mt-[100px] md:w-[1172px]   h-[300px]  w-[360px] flex justify-center items-center'>
<div className='relative'>
  
<img className=" container rounded-lg  mt-[100px] md:w-[700px] md:h-[400px] w-full"  src={code} alt=''/>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]"></div>

</div>
  
    </div>
   
  )
}

export{PageImageFigure}