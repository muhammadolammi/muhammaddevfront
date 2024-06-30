
import React from 'react'
import { Skill } from '../models'

type Props = {
    skills : Skill[]
    fieldName: string
   
    

}

const FieldContainer = (props: Props) => {
  return <div className='p-4 bg-[#131313] rounded-xl md:w-[300px]' >  
  <div className='w-[200px] container'>
  <p className='text-center text-xl font-bold mb-[10px] text-[#78ADFE] font-poppins text-wrap '>{props.fieldName}</p>

  </div>
 <div className='flex flex-col gap-y-[10px]'>
   {
    props.skills.map((skill)=>(
     <div className='flex justify-between items-center'>
      <div className='flex justify-center items-center gap-x-[7px]'>
        <img src={skill.logo} alt=""  className='h-5 w-5 rounded'/>
        <p className='text-[#B0B0B0] font-semibold font-poppins text-[16px]'>{skill.skill}</p>
      </div>
      
      <div className='justif-end'>
        <p className='text-[#7D7D7D] font-poppins text-[10px]'>Advance</p>
      </div>
     </div>

    ))
}
</div>
    
    </div>
  
}

export{FieldContainer}