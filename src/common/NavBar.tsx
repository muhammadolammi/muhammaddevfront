

import React from 'react'

import "../css/navbar.css"

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='NavBar'>
      <div className="Container">
      <h1>Logo</h1>
        <ul>
          <li><a href="#"> Home</a></li>
          <li><a href="#1"> About</a></li>
          <li><a href="#2"> Projects</a></li>
          <li><a href="#3"> Tutorials</a></li>
          <li><a href="#4"> Blogs</a></li>
        </ul>
        </div>        
        
    </div>
  )
}

export default NavBar