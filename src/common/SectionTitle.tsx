

import React from 'react'

type Props = {
    title : string
}

const SectionTitle = (props: Props) => {
  return (
    <div className='SectionTitle'>{props.title}</div>
  )
}

export default SectionTitle