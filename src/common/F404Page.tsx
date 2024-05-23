

import React from 'react'
import NavBar from './NavBar'

type Props = {
  err?: string
}

const F404Page = (props: Props) => {
  return (
    <>
     <NavBar/>
    <div className='F404-Page'>
    {`${props.err ??  "404"}`}
    </div>
    </>
  )
}

export  {F404Page}