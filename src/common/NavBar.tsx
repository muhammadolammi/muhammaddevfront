

import React from 'react'

import "../css/navbar.css"
import { fetchPosts } from '../db/posts'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='NavBar'>
      <div className="Container">

      <h1>Logo</h1>
     
        <ul>
          <li><a href="/"> Home</a></li>
          <li><a href="#1"> About</a></li>
          <li><a href="#2"> Projects</a></li>
          <li><a href="/tutorials"> Tutorials</a></li>
          <li><a href="/posts"> Blogs</a></li>
        </ul>
        </div>        
        
    </div>
  )
}

export default NavBar