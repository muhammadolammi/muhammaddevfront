
import React from 'react'
import { Skill } from '../models'
import SizedBox from '../common/SizedBox'

type Props = {
    skills : Skill[]
    fieldName: string
    height?: number
    

}

const FieldContainer = (props: Props) => {
  return <div className='Field-Container' style={{height:`${props.height??700}px`}}>  
  <div className="FieldName">{props.fieldName}</div>
  <div className="Skills">
   {
    props.skills.map((skill)=>(
      <div className="Skill">
      <div className='SkillName'> 
      <div className="" id="SkillLogo"><img src={skill.logo} alt={skill.skill} /></div>
      <div id='SkillName'>
      {skill.skill}
      </div>
     
     </div>
      <SizedBox width={30}/>
      <div className="SkillDescr"> {skill.description}</div>
      </div>
    ))
}</div> 
    
    </div>
  
}

export{FieldContainer}