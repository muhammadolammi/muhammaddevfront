import React from 'react';
import '../css/homepage.css'

import { fetchTutorials } from '../db/tutorial';
import { useState , useEffect} from 'react';
import { Post, Tutorial } from '../models';
import { Tutorials } from '../components/Tutorials';
import { fetchPosts } from '../db/posts';
import { Posts } from '../components/Posts';
// import{Tutorial} from './models';

const HomePage =() => {
   const [tutorials, setTutorials] = useState<Tutorial[]>([])
   const [posts, setPosts] = useState<Post[]>([])

   const [loading, setLoading] = useState<boolean>(true);

  

   useEffect(()=>{
    //get tutorials func
    const getTutorials = async () => {
      try {
        const tutorialList = await fetchTutorials();
        console.log(tutorialList); // Check what tutorialList contains
        setTutorials(tutorialList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    //get posts func
    const getPosts = async () => {
      try {
        const postList = await fetchPosts();
        console.log(postList); // Check what tutorialList contains
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    getTutorials();
    getPosts();
   },[])

  
  
   return (
    <div className="Homepage">
      <header className='header'>
        <h1>Hi This is MuhammadDev Frontend</h1>
      </header>
      <div className="Body">
      <div className="section-head">
            <h1>Tutorials</h1>
        </div>
       <Tutorials loading={loading} tutorials={tutorials}/>

       <div className="section-head">
            <h1>Posts</h1>
        </div>
        <Posts loading={loading} posts={posts}/>

      </div>
    </div>
  );
}

export { HomePage};



