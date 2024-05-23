

import React from 'react'

type Props = {
    height?: number
    width?: number
}

const SizedBox = (props: Props) => {
  return (
    <div
    style={{
        height: `${props.height ?? 10}px`,
        width:`${props.width?? 10}px`
    }}
    >

    </div>
  )
}

export default SizedBox