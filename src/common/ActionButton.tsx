

import React from 'react'

type Props = {
    actionText: string
    actionCallback?: CallableFunction
    
}

const ActionButton = (props: Props) => {
  return (
    <button
    className={`bg-[#FDF7F2] text-[#161513] font-regular text-[17px] font-poppins py-2 px-4 rounded-lg`}
    onClick={()=>props.actionCallback}>
   {props.actionText}
   </button>
  )
}

export default ActionButton