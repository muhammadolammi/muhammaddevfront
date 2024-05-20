import React from 'react';
// import './css/index.css';
import { fetchTutorials } from './db/tutorial';
import { useState , useEffect} from 'react';
import { Post, Tutorial } from './models';
import { Tutorials } from './components/tutorials';
import { fetchPosts } from './db/posts';
import { Posts } from './components/posts';
import { Outlet } from 'react-router';
// import{Tutorial} from './models';

function App() {
   return <>
   <Outlet />
   </>
}

export default App;



